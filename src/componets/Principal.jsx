import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import ControlCarousel from "./Carrusel";
import CarouselRespon from "./CarrucelResponsiv";
//import Header from "./Header";
import CarrucelHeader from "./HeaderCarrucel"
import Navegacion from "./Navegacion";
import BusquedaPrincipal from "./Principalbusqueda";
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

      <React.Fragment style={{height:"auto"}}>
        <nav className="container-fluid" style={{backgroundColor:"white", position: "fixed", marginBottom:"0px", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
          <div className="row">

            <div className=" col-md-3" style={{ backgroundColor: "white", height: "auto"}}>
              <div className=" col-12">
            <Link to={"/"}>
                <img className="logoAlfaprueba" style={{width:"100%", height:"auto", justifyContent:"center", paddingTop:"10px"}} src={ChicaAlfa} alt="" />
                </Link>
                </div>
            </div>

            <div className="  col-md-9" style={{marginRight: "0px"}}>

              <div className="carrucel-header" style={{ backgroundColor: "white" }}>
              <CarrucelHeader />
              </div>
              <div className="busqueda-principal" style={{ backgroundColor: "white",marginTop:"0px" }}>
              <BusquedaPrincipal />
              </div>
            </div>
          </div>
        </nav>



       
         
        <div className="carrucel-principal" style={{ marginTop: "190px" }} >
          <ControlCarousel />

        </div>
        <div className="carrucel-respon" style={{ marginTop: "190px" }} >
          <CarouselRespon />

        </div>
       
        <div>
          <Navegacion />
        </div>

        <div>
          <Maps />
        </div>

        <div className="principal-footer">
          <Footer />
        </div>
      
      </React.Fragment>
    );
  }
}
