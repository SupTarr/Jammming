//import Playlist.css
import "./Playlist.css";

const Playlist = () => {
  return (
    <div className="Playlist">
      <input value={'New Playlist'} />
      {/* Add a TrackList component */}
      {/* <TrackList /> */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
