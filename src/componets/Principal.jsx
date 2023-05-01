import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ControlCarousel from "./Carrusel";
//import Header from "./Header";
import Prueba from "./prueba"
import Navegacion from "./Navegacion";
import BusquedaPrincipal from "./Busquedaprincipal";
import Maps from "./Maps";
import "../App.css";
//import BusquedaProducto from "./BusquedaProducto";

export default class Principal extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ position: "fixed", top:"0px", left: "0px", right:"0px",   zIndex: "999"}}>
         {/*  <Header  /> */}
         <Prueba />
          <BusquedaPrincipal />
          {/* <BusquedaProducto /> */}
        </div>
      <div  style={{ overflow: "hidden", margin:"190px auto 0px"}}>
        <div >
          <ControlCarousel />
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
