import "./SearchBar.css";

const SearchBar = ({ onTermChange, onSearch }) => {
  const handleTermChange = (event) => {
    onTermChange(event.target.value);
  };

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
        onChange={handleTermChange}
      />
      <input type="submit" className="SearchButton" value="Search" />
    </form>
  );
};

export default SearchBar;
