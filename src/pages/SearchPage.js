import React from "react";
import { useLocation } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import productsData from "../data/productsData"; // ✅ Importando os produtos corretos

const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";
  const categoryQuery = queryParams.get("category") || "";

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryQuery ? product.category === categoryQuery : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h2>Resultados para "{searchQuery}"</h2>
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </div>
  );
};

export default SearchPage;
