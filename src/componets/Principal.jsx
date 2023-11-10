import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ControlCarousel from "./Carrusel";
//import Header from "./Header";
import CarrucelHeader from "./HeaderCarrucel"
import Navegacion from "./Navegacion";
import BusquedaPrincipal from "./Busquedaprincipal";
import Maps from "./Maps";
import { Container, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import ChicaAlfa from "../img/ChicaALFA.JPG";
import "../App.css";
import "../style/Header.css";
//import BusquedaProducto from "./BusquedaProducto";

export default class Principal extends Component {
  render() {
    return (

      <React.Fragment>
        <div className="container-fluid" style={{backgroundColor:"white", position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
          <div className="row">

            <div className="col-md-3" style={{ backgroundColor: "white", height: "auto"}}>
            <Link to={"/"}>
                <img className="logoAlfaprueba" style={{width:"300px", paddingTop:"18px"}} src={ChicaAlfa} alt="" />
                </Link>
            </div>

            <div className="col-md-9" style={{marginRight: "0px"}}>

              <div style={{ backgroundColor: "lightgreen" }}>
              <CarrucelHeader />
              </div>


              <div style={{ backgroundColor: "lightgreen" }}>
              <BusquedaPrincipal />
              </div>
            </div>
          </div>
        </div>



        
        <div style={{ marginTop: "200px" }}>
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
