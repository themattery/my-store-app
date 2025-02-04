import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      navigate(`/search?query=${e.target.value}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar..."
        onKeyDown={handleSearch}
        className="searchInput"
      />
      <a href="a">
        <i className="fas fa-search"></i>
      </a>
    </div>
  );
};

export default SearchBar;
