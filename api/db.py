from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import csv
import os
import pandas as pd
from graph import SongData

load_dotenv()
MONGODB_URI = os.getenv("MONGODB_URI")
DB_NAME = 'weaver'
COLLECTION_NAME = 'tracks'

# Create a new client and connect to the server
client = MongoClient(MONGODB_URI, server_api=ServerApi('1'))

def parse_csv(file_path):
    songs = []
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            song = SongData(
                row['artist_name'], row['track_name'], row['track_id'], int(row['popularity']), int(row['year']),
                float(row['danceability']), float(row['energy']), int(row['key']), float(row['loudness']), int(row['mode']),
                float(row['speechiness']), float(row['acousticness']), float(row['instrumentalness']), float(row['liveness']),
                float(row['valence']), float(row['tempo']), int(row['time_signature']), int(row['duration_ms'])
            )
            songs.append(song)
    return songs

def tracks_to_db(tracks):
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    track_dicts = [track.__dict__ for track in tracks]
    collection.insert_many(track_dicts)

def get_df():
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    data = list(collection.find())
    return pd.DataFrame(data)

def get_track_by_id(track_id):
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]
    doc = collection.find_one({"track_id": track_id})
    if doc:
        return SongData(
            doc['artist_name'], doc['track_name'], doc['track_id'], doc['popularity'], doc['year'],
            doc['danceability'], doc['energy'], doc['key'], doc['loudness'], doc['mode'],
            doc['speechiness'], doc['acousticness'], doc['instrumentalness'], doc['liveness'],
            doc['valence'], doc['tempo'], doc['time_signature'], doc['duration_ms']
        )
    return None

def connects():
    try:
        client.admin.command('ping')
        return True
    except Exception as e:
        print(e)
        return False