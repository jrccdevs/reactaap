import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../style/Pagina.css";
import BannerAnticaspa from "../img/BannerAnticaspa.png";
import BannerHidratacion from "../img/BannerHidratacion.png";
import BannerLimpieza from "../img/BannerLimpieza.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="tamanio  d-block" src={BannerAnticaspa} alt="" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="tamanio d-block" src={BannerHidratacion} alt="" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="tamanio d-block" src={BannerLimpieza} alt="" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
