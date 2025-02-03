import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const Navbar = ({ setSearch, setCategory, setFreeShipping }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">MyStore</h1>
      <div className="search-section">
        <SearchBar setSearch={setSearch} />
      </div>
        <Filters setCategory={setCategory} setFreeShipping={setFreeShipping} />
      
      <ul className="navbar-links">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">Produtos</a></li>
        <li><a href="#" className="navbar-link">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;