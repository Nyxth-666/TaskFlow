import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="SEARCH"
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;