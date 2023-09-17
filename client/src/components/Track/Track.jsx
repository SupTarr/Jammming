import React from "react";
import { BiPlay } from "react-icons/bi";
import "./Track.css";

const Track = ({ track, onAdd, onPlay, onRemove, isRemoval }) => {
  return (
    <div className="Track">
      <div className="Track-information">
        <img
          src={track.albumUrl}
          alt="album cover"
          style={{ height: "64px", width: "64px" }}
        />
        <div className="Track-information-text">
          <h3>{track.title}</h3>
          <p>{`${track.artist} | ${track.album}`}</p>
        </div>
      </div>
      <div className="play-icon" onClick={() => onPlay(track?.uri)}>
        <BiPlay />
      </div>
      {isRemoval ? (
        <button className="Track-action" onClick={() => onRemove(track)}>
          -
        </button>
      ) : (
        <button className="Track-action" onClick={() => onAdd(track)}>
          +
        </button>
      )}
    </div>
  );
};

export default Track;
