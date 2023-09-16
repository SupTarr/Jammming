import "./SearchBar.css";

const SearchBar = ({ onTermChange, onSearch }) => {
  const handleTermChange = (event) => {
    onTermChange(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={() => onSearch()}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
