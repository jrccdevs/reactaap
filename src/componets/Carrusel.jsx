import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getImagenesBanner } from "../api/productosCar";
import BannerAnvena from "../img/Avena.png";
import BannerCetrimida from "../img/Cetrimida.png";
import BannerDermiurea from "../img/Dermiurea.png";
import BannerDermosul from "../img/Dermosul.png";
import BannerDesulpir from "../img/Desulpir.png";
import BannerTrietal from "../img/Trietal.png";

import "../style/Header.css";

export default function ControlCarousel() {

  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    async function loadProductos() {
      const response = await getImagenesBanner();
      setProductos(response.data);
    }
    loadProductos();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    buscar(e.target.value);
  };

  let result = [];

  const buscar = (e) => {
    if (!busqueda) {
      result = productos;
    } else {
      result = productos.filter((dato) =>
        dato.principioactivo
          .toLowerCase()
          .includes(busqueda.toLocaleLowerCase())
      );
    }
  };

  buscar();

  console.log(result);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    
    <Carousel fade indicators={false} className="carrucel-principal"  activeIndex={index} onSelect={handleSelect}>
     {result.map((producto) => (
      <Carousel.Item className="carrucel-altura">
        <img className="carrucel d-block w-100"  src={producto.image} alt="Banner Limpieza" />
       
      </Carousel.Item>

    
  ))}
    </Carousel>
   
  );
}
