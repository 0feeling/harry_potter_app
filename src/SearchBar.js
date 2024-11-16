import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value); // Appelle la fonction pour mettre à jour les résultats
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Here, Type a name, and Magic will follow..."
        className="search-input"
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
