import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import ProductGrid from "../components/ProductGrid";
import HelpButton from "../components/HelpButton";
import productsData from "../data/productsData"; // ✅ Importando os produtos

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="container">
        <ProductGrid products={productsData} />
        <HelpButton />
      </div>
    </div>
  );
};

export default HomePage;
