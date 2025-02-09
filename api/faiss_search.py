import faiss
import numpy as np
import db

def get_song_features_by_id(track_id):
   song_row = df[df["track_id"] == track_id]
   
   if song_row.empty:
      return None
   
   song_features = song_row[FEATURES].values[0].astype(np.float32)
   
   return song_features

# finds similar songs by track id
def find_similar_songs_by_id(track_id, k):
   song_features = get_song_features_by_id(track_id)
   if song_features is None:
      return None
   return find_similar_songs(song_features, k)


# FILE PATHS
INDEX_PATH = "api/data/faiss_index.index"

# load dataset/ faiss index



FEATURES = ["danceability", "energy", "key", "loudness", "mode",
            "speechiness", "acousticness", "instrumentalness",
            "liveness", "valence", "tempo", "time_signature"]

def find_similar_songs(song_features, k=5):
   song_vector = np.array(song_features, dtype=np.float32).reshape(1,-1)
   
   distances, indicies = index.search(song_vector, k)
   
   similar_songs = df.iloc[indicies[0]].copy()
   
   # similar_songs["distance"] = distances[0]
   
   return similar_songs[["track_name", "artist_name", "track_id"]]


# Example usage
if __name__ == "__main__":
    # Example query song features

    # Find similar songs
    print("test")
    df = db.get_df()
    index = faiss.read_index(INDEX_PATH)
    print(db.connects())
    results = find_similar_songs_by_id("53QF56cjZA9RTuuMZDrSA6", 5)
    print(results)
    
    

    