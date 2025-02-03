import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card-img" />
      <h2 className="product-card-title">{product.name}</h2>
      <p className="product-card-price">${product.price}</p>
      <button className="btn">Comprar</button>
    </div>
  );
};

export default ProductCard;
