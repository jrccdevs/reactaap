import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getImagenesBanner } from "../api/productosCar";
import {Container, Grid} from "@mui/material"

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

    <Container >
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <Carousel fade indicators={false}   activeIndex={index} onSelect={handleSelect}>
     {result.map((producto) => (
      <Carousel.Item >
        <img className="carrucel "  src={producto.image} alt="Banner Limpieza" />
       
      </Carousel.Item>
  ))}
    </Carousel>
     </Grid>
    </Grid>

    </Container>
   );
  }
   
    
