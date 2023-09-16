import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import useAuth from "../../useAuth.jsx";

const backend = import.meta.env.VITE_BACKEND_URL;

function DashBoard({ code }) {
  const accessToken = useAuth(code);

  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term, accessToken) => {
    axios
      .post(`${backend}search`, {
        accessToken,
        term,
      })
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addTrack = (track) => {
    setSearchResults(
      searchResults.filter((savedTrack) => savedTrack.id !== track.id)
    );
    setPlaylistTracks([...playlistTracks, track]);
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
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  return (
    <>
      <SearchBar
        onTermChange={setTerm}
        onSearch={() => search(term, accessToken)}
      />
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
    </>
  );
}

export default DashBoard;
