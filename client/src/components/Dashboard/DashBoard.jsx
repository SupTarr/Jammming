import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import useAuth from "../../useAuth.jsx";
import Player from "../Player/Player.jsx";

const backend = import.meta.env.VITE_BACKEND_URL;

function DashBoard({ code }) {
  const accessToken = useAuth(code);

  const [term, setTerm] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term, accessToken) => {
    axios
      .get(`${backend}search`, {
        params: {
          accessToken,
          term,
        },
      })
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const playTrack = (trackUri) => {
    setSelectedTrack(trackUri);
  };

  const addTrack = (track) => {
    setSearchResults(searchResults.filter((result) => result.id !== track.id));
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
    axios
      .post(`${backend}save`, {
        accessToken: accessToken,
        playlistName: playlistName,
        uris: playlistTracks.map((track) => track.uri),
      })
      .then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <SearchBar
        onTermChange={setTerm}
        onSearch={() => search(term, accessToken)}
      />
      <div className="App-playlist">
        <SearchResults
          searchResults={searchResults}
          onAdd={addTrack}
          onPlay={playTrack}
        />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onPlay={playTrack}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
        />
        {selectedTrack && <Player track={selectedTrack} />}
      </div>
    </>
  );
}

export default DashBoard;
