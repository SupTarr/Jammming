import React, { useState } from "react";
import "react-dom";
//import App.css
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";

const App = (props) => {
  const [searchResults, setSearchResults] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: "id1" },
    { name: "name2", artist: "artist2", album: "album2", id: "id2" },
    { name: "name3", artist: "artist3", album: "album3", id: "id3" },
    { name: "name4", artist: "artist4", album: "album4", id: "id4" },
  ]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    { name: "name1", artist: "artist1", album: "album1", id: "id1" },
    { name: "name2", artist: "artist2", album: "album2", id: "id2" },
    { name: "name3", artist: "artist3", album: "album3", id: "id3" },
  ]);

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return alert("Track already exists");
    } else {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack} 
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
