import React from 'react';

const SearchBar = ({ setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded"
      />
      <a href="a">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
};

export default SearchBar;
