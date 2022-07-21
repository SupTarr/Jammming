import React, { useState } from "react";
import "react-dom";
//import Playlist.css
import "./Playlist.css";
import TrackList from "../TrackList/TrackList.jsx";

const Playlist = (props) => {
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  }

  return (
    <div className="Playlist">
      <input 
        value={props.playlistName}
        onChange={handleNameChange}
        placeholder="New Playlist"
      />
      {/* Add a TrackList component */}
      <TrackList 
        tracks={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button 
        className="Playlist-save"
        onClick={() => props.onSave()}>
          SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
