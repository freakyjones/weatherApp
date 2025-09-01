import React, { useState, useEffect } from "react";
import { IoSearch, IoLocationSharp } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const SearchBar = ({ onSearch, onLocationClick, loading, searchTerm }) => {
  const { classes } = useTheme();
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Sync the internal query with the external searchTerm when it changes.
    setQuery(searchTerm);
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={classes.searchInput}
        />
        <button
          type="submit"
          disabled={!query.trim() || loading}
          className={classes.searchIconContainer}
          aria-label="Search"
        >
          <IoSearch className="h-4 w-4" />
        </button>
      </div>
      <button
        type="button"
        onClick={onLocationClick}
        disabled={loading}
        className={classes.locationButton}
        aria-label="Use my location"
      >
        <IoLocationSharp className="h-4 w-4" />
        <span className="hidden sm:inline">Current Location</span>
      </button>
    </form>
  );
};

export default SearchBar;
