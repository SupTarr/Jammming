import React from "react";
import "./Player.css";

const getUrlFromTrackUri = (trackUri) => {
  const trackId = trackUri.split(":")[2];
  return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
};

function Player({ track }) {
  return (
    <div className="Player">
      <iframe
        src={getUrlFromTrackUri(track)}
        width="100%"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

export default Player;
