import React from "react";
import "react-dom";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList.jsx";

const SearchResults = ({ searchResults, onAdd, onPlay }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={searchResults}
        onAdd={onAdd}
        onPlay={onPlay}
        isRemoval={false}
      />
    </div>
  );
};

export default SearchResults;
