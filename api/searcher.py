import numpy as np
import pandas as pd
import pickle
import db  # Assuming `db.get_df()` loads the dataset

# Load dataset and model
MODEL_PATH = "api/data/knn_model.pkl"
df = db.get_df()

# Features used for recommendations
FEATURES = ["danceability", "energy", "key", "loudness", "mode",
            "speechiness", "acousticness", "instrumentalness",
            "liveness", "valence", "tempo", "time_signature"]

# Load trained KNN model
with open(MODEL_PATH, "rb") as f:
    knn = pickle.load(f)

def get_song_features_by_id(track_id):
    """Fetches song features by track ID."""
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
    
    return similar_songs[["track_name", "artist_name", "track_id"]]

def find_similar_songs_by_id(track_id, k=5):
    """Finds similar songs given a track ID."""
    song_features = get_song_features_by_id(track_id)
    if song_features is None:
        return None
    return find_similar_songs(song_features, k)

# Example usage
if __name__ == "__main__":
    print("Test search")
    results = find_similar_songs_by_id("53QF56cjZA9RTuuMZDrSA6", 5)
    print(results)
