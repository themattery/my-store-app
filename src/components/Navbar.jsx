import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const Navbar = ({ setSearch, setCategory, setFreeShipping }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="navTop">
        <div className="navItem">
          <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>MyStore</h1>
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
        <h6 className="menuItem">ACESSÓRIOS</h6>
        <h6 className="menuItem">ROUPAS</h6>
        <h6 className="menuItem">CALÇADOS</h6>
        <h6 className="menuItem">AIR JORDAN</h6>
        <h6 className="menuItem">AIR FORCE</h6>
      </div>
    </nav>
  );
};

export default Navbar;
