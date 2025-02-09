from flask import Flask, jsonify, request
# import faiss_search
from functools import wraps
from jose import jwt
import requests

app = Flask(__name__)

AUTH0_DOMAIN = 'your-auth0-domain'
API_AUDIENCE = 'your-api-audience'
ALGORITHMS = ['RS256']

def get_token_auth_header():
    auth = request.headers.get('Authorization', None)
    if not auth:
        return jsonify({'error': 'Authorization header is missing'}), 401
    parts = auth.split()
    if parts[0].lower() != 'bearer':
        return jsonify({'error': 'Authorization header must start with Bearer'}), 401
    elif len(parts) == 1:
        return jsonify({'error': 'Token not found'}), 401
    elif len(parts) > 2:
        return jsonify({'error': 'Authorization header must be Bearer token'}), 401
    token = parts[1]
    return token

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = get_token_auth_header()
        try:
            json_url = f'https://{AUTH0_DOMAIN}/.well-known/jwks.json'
            jwks = requests.get(json_url).json()
            unverified_header = jwt.get_unverified_header(token)
            rsa_key = {}
            for key in jwks['keys']:
                if key['kid'] == unverified_header['kid']:
                    rsa_key = {
                        'kty': key['kty'],
                        'kid': key['kid'],
                        'use': key['use'],
                        'n': key['n'],
                        'e': key['e']
                    }
            if rsa_key:
                payload = jwt.decode(
                    token, rsa_key, algorithms=ALGORITHMS, audience=API_AUDIENCE, issuer=f'https://{AUTH0_DOMAIN}/'
                )
                return f(*args, **kwargs)
            return jsonify({'error': 'Invalid token'}), 401
        except Exception as e:
            return jsonify({'error': str(e)}), 401
    return decorated
    
@app.route("/api/generate_nodes/<k>", methods=['POST'])
def generate_nodes(k):
    data = request.json
    if not data or not isinstance(data.get('track_id'), str):
        return jsonify({'error': 'Invalid input'}), 400
    return jsonify(faiss_search.find_similar_songs_by_id(data.get('track_id'), k)), 200

if __name__ == '__main__':  
   app.run() 