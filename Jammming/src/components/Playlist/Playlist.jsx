import React, { useState } from "react";
//import Playlist.css
import "./Playlist.css";
import TrackList from "../TrackList/TrackList.jsx";

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <input value={'New Playlist'} />
      {/* Add a TrackList component */}
      <TrackList tracks={props.playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
