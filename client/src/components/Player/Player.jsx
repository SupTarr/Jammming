import React from "react";
import SpotifyPlayer from "react-spotify-player";

function Player({ accessToken, trackUri }) {
  return (
    <div style={{ position: "fixed", width: "100vw", bottom: "0px" }}>
      <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        view="list"
        theme="black"
      />
    </div>
  );
}

export default Player;
