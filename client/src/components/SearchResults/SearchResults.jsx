import React from "react";
import "react-dom";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList.jsx";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
        onPlay={props.onPlay}
        isRemoval={false}
      />
    </div>
  );
};

export default SearchResults;
