import "react-dom";
import "./TrackList.css";
import Track from "../Track/Track.jsx";

const TrackList = ({ tracks, onAdd, onPlay, onRemove, isRemoval }) => {
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            onPlay={onPlay}
            onRemove={onRemove}
            isRemoval={isRemoval}
          />
        );
      })}
      <h2></h2>
    </div>
  );
};

export default TrackList;
