import React from "react";
import "./Player.css";
import SpotifyPlayer from "react-spotify-player";

function Player({ track }) {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  return (
    <>
      {isFullScreen ? (
        <div className="Player-fullscreen">
          <SpotifyPlayer uri={track} view="list" theme="black" />
        </div>
      ) : (
        <div className="Player-fixed-bottom">
          <SpotifyPlayer
            uri={track}
            size={{ width: "100%" }}
            view="list"
            theme="black"
          />
        </div>
      )}
    </>
  );
}

export default Player;
