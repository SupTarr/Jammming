import React, { useState } from 'react';
//import App.css
import "./App.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";

const App = (props) => {
  const [searchResults, setSearchResults] = useState([
    {name: 'name1', artist: 'artist1', album: 'album1', id: 'id1'},
    {name: 'name2', artist: 'artist2', album: 'album2', id: 'id2'},
    {name: 'name3', artist: 'artist3', album: 'album3', id: 'id3'}
]);
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
            <SearchResults searchResults={searchResults} />
            {console.log(searchResults)}
            <Playlist />
        </div>
      </div>
    </div>
  );
};

export default App;
