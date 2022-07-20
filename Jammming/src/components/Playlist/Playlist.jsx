import React, { useState } from "react";
import "react-dom";
//import Playlist.css
import "./Playlist.css";
import TrackList from "../TrackList/TrackList.jsx";

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <input value={'New Playlist'} />
      {/* Add a TrackList component */}
      <TrackList 
        tracks={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
