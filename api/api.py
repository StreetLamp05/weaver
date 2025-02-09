from flask import Flask, jsonify, request, redirect, session
import searcher
import requests
from flask_cors import CORS  # Import CORS
import os
import requests
import urllib.parse

app = Flask(__name__)
CORS(app)

app.secret_key = "ugahacks"

SPOTIFY_CLIENT_ID = os.getenv("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = os.getenv("SPOTIFY_CLIENT_SECRET")
SPOTIFY_REDIRECT_URI = "http://localhost:5000/callback"

SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize"
SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1/"
SCOPE = "playlist-modify-public playlist-modify-private"

# File paths
CSV_PATH = "data/spotify_data.csv"
MODEL_PATH = "data/knn_model.pkl"
    
@app.route("/api/generate_nodes/<k>", methods=['POST'])
def generate_nodes(k):
    data = request.json
    print(data.get('track_id'))
    if not data or not isinstance(data.get('track_id'), str):
        return jsonify({'error': 'Invalid input'}), 400
    response = jsonify(searcher.find_similar_songs_by_id(data.get('track_id'), int(k)))
    print(response)
    return response, 200


@app.route("/login")
def login():
    params = {
        "client_id": SPOTIFY_CLIENT_ID,
        "response_type": "code",
        "redirect_uri": SPOTIFY_REDIRECT_URI,
        "scope": SCOPE
    }
    auth_url = f"{SPOTIFY_AUTH_URL}?{urllib.parse.urlencode(params)}"
    print(auth_url)
    return redirect(auth_url)

@app.route("/callback")
def callback():
    code = request.args.get("code")
    print(code)
    if not code:
        return "Error: Authorization failed."

    token_data = {
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": SPOTIFY_REDIRECT_URI,
        "client_id": SPOTIFY_CLIENT_ID,
        "client_secret": SPOTIFY_CLIENT_SECRET
    }
    response = requests.post(SPOTIFY_TOKEN_URL, data=token_data)
    token_info = response.json()

    if "access_token" not in token_info:
        return "Error: Failed to obtain access token."

    session["access_token"] = token_info["access_token"]
    return redirect("/create_playlist")

@app.route("/create_playlist", methods=["POST"])
def create_playlist():
    if "access_token" not in session:
        return redirect("/login")

    headers = {"Authorization": f"Bearer {session['access_token']}"}
    user_response = requests.get(f"{SPOTIFY_API_BASE_URL}me", headers=headers)
    user_info = user_response.json()

    if request.method == "POST":
        playlist_name = request.form["playlist_name"]
        playlist_data = {"name": playlist_name, "public": True}
        playlist_response = requests.post(
            f"{SPOTIFY_API_BASE_URL}users/{user_info['id']}/playlists", 
            headers=headers,
            json=playlist_data
        )
        return jsonify(playlist_response.json())

    return '''
        <form method="post">
            <input type="text" name="playlist_name" placeholder="Enter playlist name" required>
            <button type="submit">Create Playlist</button>
        </form>
    '''
if __name__ == '__main__':  
   app.run() 