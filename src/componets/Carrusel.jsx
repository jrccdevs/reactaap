import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import BannerAnvena from "../img/Avena.png";
import BannerCetrimida from "../img/Cetrimida.png";
import BannerDermiurea from "../img/Dermiurea.png";
import BannerDermosul from "../img/Dermosul.png";
import BannerDesulpir from "../img/Desulpir.png";
import BannerTrietal from "../img/Trietal.png";

import "../style/Header.css";

export default function ControlCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="carrucel d-block w-100" src={BannerAnvena} alt="Banner Anticaspa" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carrucel d-block w-100" src={BannerCetrimida} alt="Banner Hidratacion" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carrucel d-block w-100" src={BannerDermiurea} alt="Banner Limpieza" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carrucel d-block w-100" src={BannerDermosul} alt="Banner Limpieza" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carrucel d-block w-100" src={BannerDesulpir} alt="Banner Limpieza" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="carrucel d-block w-100" src={BannerTrietal} alt="Banner Limpieza" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
