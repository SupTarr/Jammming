import React, { useState } from 'react';
//import Track.css
import "./Track.css";

const Track = (props) => {
  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={props.onRemove}>-</button>
      );
    } else {
      return (
        <button className="Track-action" onClick={() => addTrack()}>+</button>
      );
    }
  }

  const addTrack = () => {
    return props.onAdd(props.track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{`${props.track.artist} | ${props.track.album}`}</p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
