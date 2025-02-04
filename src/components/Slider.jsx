import React from "react";
import redShoe from "../assets/images/red-shoes.png"

function Slider() {

    // const wrapper = document.querySelector(".sliderWrapper");
    // const menuItems = document.querySelectorAll(".menuItem");

    // menuItems.forEach(item, index) => {
    //     item.addEventListener("click", () =>{
    //         wrapper.style.transform = `translateX(${-100 * index})`
    //     })
    // }

    return (
        <div className="slider">
            <div className="sliderWrapper">
                <div className="sliderItem">
                    <img src={redShoe} alt="" className="sliderImg"></img>
                    <div className="sliderBg"></div>
                    <h1 className="sliderTitle">AIR JORDAN</h1>
                    <h2 className="sliderPrice">R$289,90</h2>
                    <button className="buyButton">COMPRAR</button>
                </div>
                <div className="sliderItem">
                    <img src={redShoe} alt="" className="sliderImg"></img>
                    <div className="sliderBg"></div>
                    <h1 className="sliderTitle">CALÇADOS</h1>
                    <h2 className="sliderPrice">R$289,90</h2>
                    <button className="buyButton">COMPRAR</button>
                </div>
                <div className="sliderItem">
                    <img src={redShoe} alt="" className="sliderImg"></img>
                    <div className="sliderBg"></div>
                    <h1 className="sliderTitle">CALÇADOS</h1>
                    <h2 className="sliderPrice">R$289,90</h2>
                    <button className="buyButton">COMPRAR</button>
                </div>
            </div>
        </div>
    )
}

export default Slider;