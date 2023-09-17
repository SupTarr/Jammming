import React from "react";
import "react-dom";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList.jsx";

const Playlist = ({
  playlistName,
  playlistTracks,
  onPlay,
  onRemove,
  onNameChange,
  onSave,
}) => {
  return (
    <div className="Playlist">
      <input
        value={playlistName}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="New Playlist"
      />
      <TrackList
        tracks={playlistTracks}
        onPlay={onPlay}
        onRemove={onRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={() => onSave()}>
        Save To Spotify
      </button>
    </div>
  );
};

export default Playlist;
