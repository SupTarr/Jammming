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
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <input type="submit" className="SearchButton" value="SEARCH" />
    </form>
  );
};

export default SearchBar;
