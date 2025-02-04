import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import ProductGrid from "../components/ProductGrid";
import HelpButton from "../components/HelpButton";
import nikeShoe from "../assets/images/nike-shoe.jpg"
import orangeShoe from "../assets/images/orange-shoe.jpg"
import relCasio from "../assets/images/relogio-casio.webp"
import adidasShirt from "../assets/images/adidas-shirt.png"
import blueShoe from "../assets/images/blue-shoe.webp";
import blackShoe from "../assets/images/black-shoe.webp";
import whiteShoe from "../assets/images/white-shoe.webp";
import hoodieNike from "../assets/images/hoodie-nike.webp";
import watchSamsung from "../assets/images/watch-samsung.jpg";
import backpackAdidas from "../assets/images/backpack-adidas.jpg";


const productsData = [
  { id: 1, name: "Tênis Nike", price: 199.99, category: "Calçados", freeShipping: true, image: nikeShoe },
  { id: 2, name: "Camiseta Adidas", price: 99.99, category: "Roupas", freeShipping: false, image: adidasShirt },
  { id: 3, name: "Relógio Casio", price: 249.99, category: "Acessórios", freeShipping: true, image: relCasio },
  { id: 4, name: "Tênis Plimsoll", price: 349.99, category: "Calçados", freeShipping: true, image: orangeShoe},
  { id: 5, name: "Tênis Azul Nike", price: 299.99, category: "Calçados", freeShipping: false, image: blueShoe },
  { id: 6, name: "Tênis Preto Puma", price: 269.99, category: "Calçados", freeShipping: true, image: blackShoe },
  { id: 7, name: "Tênis Branco Adidas", price: 319.99, category: "Calçados", freeShipping: true, image: whiteShoe },
  { id: 8, name: "Moletom Nike", price: 179.99, category: "Roupas", freeShipping: true, image: hoodieNike },
  { id: 9, name: "Relógio Samsung", price: 599.99, category: "Acessórios", freeShipping: false, image: watchSamsung },
  { id: 10, name: "Mochila Adidas", price: 129.99, category: "Acessórios", freeShipping: true, image: backpackAdidas }
];

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);
  const navigate = useNavigate();

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
