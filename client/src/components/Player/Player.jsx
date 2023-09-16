import React from "react";
import SpotifyPlayer from "react-spotify-player";

function Player({ track }) {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  return (
    <>
      {isFullScreen ? (
        <div style={{ position: "fixed", height: "100vh", top: "25%" }}>
          <SpotifyPlayer uri={track} view="list" theme="black" />
        </div>
      ) : (
        <div
          style={{
            position: "fixed",
            width: "100vw",
            left: "0px",
            bottom: "0px",
            height: "80px",
            padding: "0 17% 0 17%",
          }}
        >
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
