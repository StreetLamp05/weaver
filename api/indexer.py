import os
import numpy as np
import pandas as pd
import pickle
from sklearn.neighbors import NearestNeighbors

# CSV path and model save path
CSV_PATH = "data/spotify_data.csv"
MODEL_DIR = "data/"
MODEL_PATH = os.path.join(MODEL_DIR, "knn_model.pkl")

# Ensure the directory exists
os.makedirs(MODEL_DIR, exist_ok=True)

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
 