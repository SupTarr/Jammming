import React, { useState } from "react";
import "react-dom";
//import SearchBar.css
import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const search = () => {
    props.onSearch(term);
  }

  const handleTermChange = (event) => {
    useState({term: event.target.value});
  }

  return (
    <div className="SearchBar">
      <input 
        placeholder="Enter A Song, Album, or Artist" 
        onChange={handleTermChange}
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};

export default SearchBar;