import React, { useState } from 'react';
//import SearchResults.css
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList.jsx";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* Add a TrackList component */}
      <TrackList tracks={props.searchResults} />
      {console.log(props.searchResults)}
    </div>
  )
}

export default SearchResults