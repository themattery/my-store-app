import React from "react";
import redShoe from "../assets/images/red-shoes.png"

function Slider() {
    return (
        <div className="slider">
            <div className="sliderWrapper">
                <img src={redShoe} alt="" className="sliderImg"></img>
                <div className="slideBg"></div>
                <h1 className="sliderTitle">CALÇADOS</h1>
                <h2 className="sliderPrice">R$289,90</h2>
                <button className="buyButton">COMPRAR</button>
            </div>
        </div>
    )
}

export default Slider;