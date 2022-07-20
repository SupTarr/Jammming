//import SearchBar.css
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};

export default SearchBar;