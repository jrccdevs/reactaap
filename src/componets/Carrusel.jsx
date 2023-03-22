import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import BannerAnticaspa from "../img/Banner1.png";
import BannerHidratacion from "../img/Banner2.png";
import BannerLimpieza from "../img/Banner3.png";

import "../style/Header.css";

export default function ControlCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={BannerAnticaspa} alt="Banner Anticaspa" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={BannerHidratacion} alt="Banner Hidratacion" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={BannerLimpieza} alt="Banner Limpieza" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
