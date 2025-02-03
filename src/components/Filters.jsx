
import React from 'react';

const Filters = ({ setCategory, setFreeShipping }) => {
  return (
    <div className="filters">
      <div className="filter-category">
        <label htmlFor="category">Categoria:</label>
        <select
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Todas</option>
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
          Frete Grátis
        </label>
      </div>
    </div>
  );
};

export default Filters;
