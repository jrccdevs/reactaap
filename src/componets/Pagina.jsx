import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import BannerAnticaspa from "../img/BannerAnticaspa.png";
import BannerHidratacion from "../img/BannerHidratacion.png";
import BannerLimpieza from "../img/BannerLimpieza.png";
import "../style/Pagina.css";


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={BannerAnticaspa} alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={BannerHidratacion} alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={BannerLimpieza} alt="" />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
