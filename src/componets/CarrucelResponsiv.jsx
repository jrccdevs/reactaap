import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { getMovil } from "../api/productosCar";
import { Container, Grid } from "@mui/material"
import { Link, useNavigate } from "react-router-dom";
import "../style/Header.css";
import { useLocation } from 'react-router-dom';

export default function ControlCarousel() {

  const location = useLocation();
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    async function loadProductos() {
      const response = await getMovil();
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
    <div className="container-fluid" style={{backgroundColor:"white",  marginBottom:"0px", top: "0px", left: "0px", right: "0px", zIndex: "999"  }}>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-12">
          <Carousel fade indicators={false} activeIndex={index} onSelect={handleSelect}>
          {result.map((producto) => (
              <Carousel.Item key={producto.id}>
                <Link to={`/paginacarrucel/${producto.id}/page/1`}>
                  <img style={{width:"100%", height:"auto"}} className="carrucel-responcive " src={producto.image} alt="Banner Limpieza" />
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>


  );
}


