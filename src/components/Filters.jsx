import React from "react";
import { useNavigate } from "react-router-dom";

const Filters = ({ setCategory, setFreeShipping }) => {
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    navigate(`/search?category=${e.target.value}`);  // Redirecionar para SearchPage com a categoria
  };

  return (
    <div className="filters">
      <div className="filter-category">
        {/* <label htmlFor="category">Categoria:</label> */}
        <select
          id="category"
          onChange={handleCategoryChange}
          className=""
        >
          <option value="">Categorias</option>
          <option value="Calçados">Calçados</option>
          <option value="Roupas">Roupas</option>
          <option value="Acessórios">Acessórios</option>
        </select>
      </div>
      <div className="filter-shipping">
        <label>
          <input
            type="checkbox"
            onChange={(e) => setFreeShipping(e.target.checked)}
            className="mr-2"
          />
          <span className="frete">  Frete Grátis</span>
        </label>
      </div>
    </div>
  );
};

export default Filters;
