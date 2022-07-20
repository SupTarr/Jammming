//import TrackList.css
import "./TrackList.css";
import Track from "../Track/Track.jsx";

const TrackList = (props) => {
  
  return (
    <div className="TrackList">
      {
        props.tracks.map((track) => {
          return (
            <Track
              track={track}
              key={track.id}
            />
          );
        })
      }
      <h2></h2>
    </div>
  );
};

export default TrackList;
