import React from "react";
import "./Player.css";
import SpotifyPlayer from "react-spotify-player";

function Player({ track }) {
  return (
    <div className="Player">
      <SpotifyPlayer
        uri={track}
        size={{ width: "100%" }}
        view="list"
        theme="black"
      />
    </div>
  );
}

export default Player;
