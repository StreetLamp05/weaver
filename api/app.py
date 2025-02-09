from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import pickle


app = Flask(__name__)

# Load dataset from CSV
df = pd.read_csv(CSV_PATH)

# Load trained KNN model
with open(MODEL_PATH, "rb") as f:
    knn = pickle.load(f)

FEATURES = ["danceability", "energy", "key", "loudness", "mode",
            "speechiness", "acousticness", "instrumentalness",
            "liveness", "valence", "tempo", "time_signature"]

def get_song_features_by_id(track_id):
    """Fetches song features by track ID from CSV."""
    song_row = df[df["track_id"] == track_id]
    if song_row.empty:
        return None
    return song_row[FEATURES].values[0].astype(np.float32)

def find_similar_songs(song_features, k=5):
    """Finds `k` nearest neighbors for given song features."""
    song_vector = np.array(song_features, dtype=np.float32).reshape(1, -1)
    distances, indices = knn.kneighbors(song_vector, n_neighbors=k)
    
    similar_songs = df.iloc[indices[0]].copy()
    similar_songs["distance"] = distances[0]
    
    return similar_songs[["track_name", "artist_name", "track_id"]].to_dict(orient="records")

@app.route("/find_similar", methods=["GET"])
def find_similar():
    """API endpoint to find similar songs."""
    track_id = request.args.get("track_id")
    k = int(request.args.get("k", 5))
    
    song_features = get_song_features_by_id(track_id)
    if song_features is None:
        return jsonify({"error": "Song not found"}), 404
    
    similar_songs = find_similar_songs(song_features, k)
    return jsonify(similar_songs)

@app.route("/find_similar", methods=["GET"])
def find_similar():
    """API endpoint to find similar songs."""
    track_id = request.args.get("track_id")
    k = int(request.args.get("k", 5))
    
    song_features = get_song_features_by_id(track_id)
    if song_features is None:
        return jsonify({"error": "Song not found"}), 404
    
    similar_songs = find_similar_songs(song_features, k)
    return jsonify(similar_songs)

if __name__ == "__main__":
    app.run(debug=True)
