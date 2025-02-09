class SongData:
    def __init__(self, artist_name, track_name, track_id, popularity, year, 
                 danceability, energy, key, loudness, mode, speechiness, 
                 acousticness, instrumentalness, liveness, valence, tempo, 
                 time_signature, duration_ms):
        self.artist_name = artist_name
        self.track_name = track_name
        self.track_id = track_id
        self.popularity = popularity
        self.year = year
        self.danceability = danceability
        self.energy = energy
        self.key = key
        self.loudness = loudness
        self.mode = mode
        self.speechiness = speechiness
        self.acousticness = acousticness
        self.instrumentalness = instrumentalness
        self.liveness = liveness
        self.valence = valence
        self.tempo = tempo
        self.time_signature = time_signature
        self.duration_ms = duration_ms

    def get_artist_name(self):
        return self.artist_name
    
    def get_track_name(self):
        return self.track_name
    
    def get_track_id(self):
        return self.track_id
    
    def get_popularity(self):
        return self.popularity
    
    def get_year(self):
        return self.year
    
    def get_danceability(self):
        return self.danceability
    
    def get_energy(self):
        return self.energy
    
    def get_key(self):
        return self.key
    
    def get_loudness(self):
        return self.loudness
    
    def get_mode(self):
        return self.mode
    
    def get_speechiness(self):
        return self.speechiness
    
    def get_acousticness(self):
        return self.acousticness
    
    def get_instrumentalness(self):
        return self.instrumentalness
    
    def get_liveness(self):
        return self.liveness
    
    def get_valence(self):
        return self.valence
    
    def get_tempo(self):
        return self.tempo
    
    def get_time_signature(self):
        return self.time_signature
    
    def get_duration_ms(self):
        return self.duration_ms

class SongNode:
    def __init__(self, data):
        self.data = data
        self.children = []

    def add_child(self, child_node):
        self.children.append(child_node)

class Web:
    def __init__(self, root):
        self.root = root
        self.recommended = []