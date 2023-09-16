import React from "react";
import "react-dom";
import "./Track.css";

const Track = (props) => {
  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={() => removeTrack()}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={() => addTrack()}>
          +
        </button>
      );
    }
  };

  const addTrack = () => {
    return props.onAdd(props.track);
  };

  const playTrack = () => {
    return props.onPlay(props.track?.uri);
  };

  const removeTrack = () => {
    return props.onRemove(props.track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <img
          src={props.track.albumUrl}
          alt="album cover"
          style={{ height: "64px", width: "64px" }}
        />
        <h3>{props.track.name}</h3>
        <p>{`${props.track.artist} | ${props.track.album}`}</p>
      </div>
      <p onClick={() => playTrack()}>Play</p>
      {renderAction()}
    </div>
  );
};

export default Track;
