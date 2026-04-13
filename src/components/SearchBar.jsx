import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input type="text" placeholder="Search Task" className="search-input" />
    </div>
  );
}

export default SearchBar;
