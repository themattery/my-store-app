import React from "react";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const Navbar = ({ setSearch, setCategory, setFreeShipping }) => {
  return (
    <nav>
      <div className="navTop">
        <div className="navItem">
          <h1>MyStore</h1>
        </div>
        <div className="navItem search-div">
          <div className="search-section">
            <SearchBar setSearch={setSearch} />
          </div>
          <div className="filters">
            <Filters setCategory={setCategory} setFreeShipping={setFreeShipping} />
          </div>
        </div>
        <div className="navItem limitedOffer">
          Ofertas
        </div>
      </div>
      <div className="navBottom">
        <h5 className="menuItem">ACESSÓRIOS</h5>
        <h5 className="menuItem">ROUPAS</h5>
        <h5 className="menuItem">CALÇADOS</h5>
        <h5 className="menuItem">JORDAN</h5>
        <h5 className="menuItem">AIRFORCE</h5>
      </div>
    </nav>
  );
};

export default Navbar;