//import App.css
import "./App.css";
import "../SearchBar/SearchBar.jsx";
import "../SearchResults/SearchResults.jsx";
import "../Playlist/Playlist.jsx";

const App = () => {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        {/* <SearchBar /> */}
        <div className="App-playlist">
            {/* <SearchResults /> */}
            {/* <Playlist /> */}
        </div>
      </div>
    </div>
  );
};

export default App;
