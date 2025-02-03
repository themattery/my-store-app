import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import HelpButton from "./components/HelpButton";
import "./index.css";

const productsData = [
  { id: 1, name: "Tênis Nike", price: 199.99, category: "Calçados", freeShipping: true, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Camiseta Adidas", price: 99.99, category: "Roupas", freeShipping: false, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Relógio Casio", price: 249.99, category: "Acessórios", freeShipping: true, image: "https://via.placeholder.com/150" }
];

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);

  const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category) &&
    (!freeShipping || product.freeShipping)
  );

  return (
    <div>
      <Navbar setSearch={setSearch} setCategory={setCategory} setFreeShipping={setFreeShipping} />
      <div className="container">
        <p>{filteredProducts.length} resultados encontrados</p>
        <ProductGrid products={filteredProducts} />
        <HelpButton />
      </div>
    </div>
  );
};

export default App;