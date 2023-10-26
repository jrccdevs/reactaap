import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ControlCarousel from "./Carrusel";
//import Header from "./Header";
import CarrucelHeader from "./HeaderCarrucel"
import Navegacion from "./Navegacion";
import BusquedaPrincipal from "./Busquedaprincipal";
import Maps from "./Maps";
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
      <div  style={{ overflow: "hidden", margin:"200px auto 0px", marginBottom:"20px"}}>
        <div style={{marginBottom: "20px"}}>
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
      </div>
      </React.Fragment>
    );
  }
}
