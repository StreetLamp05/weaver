import faiss
import numpy as np
import pandas as pd

# CSV path
CSV_PATH = "api/data/spotify_data.csv"
INDEX_PATH = "api/data/faiss_index.index"

# Features to use for comparison 
FEATURES = ["danceability", "energy", "key", "loudness", "mode",
            "speechiness", "acousticness", "instrumentalness",
            "liveness", "valence", "tempo", "time_signature"]

# load dataset 
df = pd.read_csv(CSV_PATH)

# convert to numpy arrays (FAISS uses float 32) 
# https://github.com/facebookresearch/faiss/wiki/getting-started
song_vectors = df[FEATURES].to_numpy(dtype=np.float32)

# create faiss index (l2 euclidean distance)
feature_dim = len(FEATURES)
index = faiss.IndexFlatL2(feature_dim)

index.add(song_vectors)

faiss.write_index(index, INDEX_PATH)

print(f"Faiss index saved at `{INDEX_PATH}`. Total songs indexed: `{index.ntotal}`")