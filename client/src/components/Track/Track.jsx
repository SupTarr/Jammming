import React from "react";
import { BiPlay } from "react-icons/bi";
import { MdLyrics } from "react-icons/md";
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
        <div className="Track-information-text">
          <h3>{props.track.title}</h3>
          <p>{`${props.track.artist} | ${props.track.album}`}</p>
        </div>
      </div>
      <div className="play-icon" onClick={() => playTrack()}>
        <BiPlay />
      </div>
      <div className="lyric-icon" onClick={() => playTrack()}>
        <MdLyrics />
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
