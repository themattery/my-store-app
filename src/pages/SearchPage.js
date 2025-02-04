import React from "react";
import { useLocation } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

const productsData = [
  { id: 1, name: "Tênis Nike", price: 199.99, category: "Calçados", freeShipping: true, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Camiseta Adidas", price: 99.99, category: "Roupas", freeShipping: false, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Relógio Casio", price: 249.99, category: "Acessórios", freeShipping: true, image: "https://via.placeholder.com/150" }
];

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
