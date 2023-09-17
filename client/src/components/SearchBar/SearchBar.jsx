import "./SearchBar.css";

const SearchBar = ({ onTermChange, onSearch }) => {
  return (
    <form
      className="SearchBar"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        placeholder="Enter song, album, or artist"
        onChange={(e) => onTermChange(e.target.value)}
      />
      <input type="submit" className="SearchButton" value="Search" />
    </form>
  );
};

export default SearchBar;
