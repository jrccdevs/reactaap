import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ControlCarousel from "./Carrusel";
import Header from "./Header";
import Navegacion from "./Navegacion";
import BusquedaPrincipal from "./Busquedaprincipal";
import Maps from "./Maps";
import "../App.css";
//import BusquedaProducto from "./BusquedaProducto";

export default class Principal extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <BusquedaPrincipal />
          {/* <BusquedaProducto /> */}
        </div>

        <div>
          <ControlCarousel />
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
