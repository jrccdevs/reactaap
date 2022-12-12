import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

import Footer from "./Footer";
import ControlledCarousel from "./Pagina";
import Header from "./Header";
import Navigation from "./Navigation";
import Busqueda from "./Busqueda";
import Maps from "./Maps";

export default class Principal extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <Busqueda />
        </div>

        <div>
          <ControlledCarousel />
          <Navigation />
        </div>
        <div>
          <Maps></Maps>
        </div>
        <div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
