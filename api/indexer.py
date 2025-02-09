import numpy as np
import pandas as pd
import pickle
from sklearn.neighbors import NearestNeighbors

# CSV path
CSV_PATH = "api/data/spotify_data.csv"
MODEL_PATH = "api/data/knn_model.pkl"

# Features for similarity
FEATURES = ["danceability", "energy", "key", "loudness", "mode",
            "speechiness", "acousticness", "instrumentalness",
            "liveness", "valence", "tempo", "time_signature"]

# Load dataset
df = pd.read_csv(CSV_PATH)

# Convert features to numpy array
song_vectors = df[FEATURES].to_numpy(dtype=np.float32)

# Train KNN model (using Euclidean distance)
knn = NearestNeighbors(n_neighbors=10, metric="euclidean")
knn.fit(song_vectors)

# Save the trained model
with open(MODEL_PATH, "wb") as f:
    pickle.dump(knn, f)

print(f"KNN model saved at `{MODEL_PATH}`. Total songs indexed: `{len(df)}`")
