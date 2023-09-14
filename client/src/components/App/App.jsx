import React, { useState } from "react";
import "react-dom";
//import App.css
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import Spotify from "../../utils/Spotify";
import { useEffect } from "react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return alert("Track already exists");
    } else {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id),
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    const trackURIs = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  const search = (term) => {
    Spotify.search(term).then((searchResults) => {
      setSearchResults(searchResults);
    });
  };

  useEffect(() => {
    Spotify.getAccessToken();
  }, []);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onResult={(term) => search(term)} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
