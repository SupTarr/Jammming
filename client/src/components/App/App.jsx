import React, { useState, useEffect } from "react";
import "react-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import Spotify from "../../utils/Spotify.js";

const codeFromURL = new URLSearchParams(window.location.search).get("code");

const App = () => {
  const [code, setCode] = useState("");
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
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
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
    setCode(codeFromURL);
    window.history.replaceState({}, document.title, window.location.pathname);
  }, [codeFromURL]);

  return (
    <div>
      <Navbar code={code} onLogout={() => setCode("")} />
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
