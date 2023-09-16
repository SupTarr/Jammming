import { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

const backend = import.meta.env.VITE_BACKEND_URL;

const SearchBar = ({ accessToken }) => {
  const [term, setTerm] = useState("");

  const search = (term) => {
    axios
      .post(`${backend}search`, {
        accessToken,
        term,
      })
      .then((res) => {
        setTracks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={() => search(term)}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
