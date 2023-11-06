import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ControlCarousel from "./Carrusel";
//import Header from "./Header";
import CarrucelHeader from "./HeaderCarrucel"
import Navegacion from "./Navegacion";
import BusquedaPrincipal from "./Busquedaprincipal";
import Maps from "./Maps";
import {Container, Grid} from "@mui/material"
import "../App.css";
import "../style/Header.css";
//import BusquedaProducto from "./BusquedaProducto";

export default class Principal extends Component {
  render() {
    return (
    
      <React.Fragment>
      <div  className="principalbusqueda" style={{ position: "fixed", top:"0px", left: "0px", right:"0px",   zIndex: "999"}}>
       {/*  <Header  /> */}
       <CarrucelHeader />
        <BusquedaPrincipal />
        {/* <BusquedaProducto /> */}
      </div>
    
      <div style={{marginTop: "200px"}}>
        <ControlCarousel />
        
      </div>
      <div>
        <Navegacion />
      </div>

      <div>
        <Maps />
      </div>

      <div>
        <Footer />
      </div>
    
    </React.Fragment>
    );
  }
}
