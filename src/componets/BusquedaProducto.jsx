import React from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import { FaSearch } from "react-icons/fa";
import LogoRes from "../img/ChicaALFA.JPG";
import "../style/navbar.css";


  class BusquedaProducto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: "nav__menu",
        icon: "nav__toggler",
        showSearchBar: true, // Nuevo estado para controlar la visibilidad del buscador
  
      };
    }
  
    navToggle = () => {
      const { active, icon } = this.state;
      if (active === "nav__menu") {
        this.setState({ active: "nav__menu nav__active" });
      } else {
        this.setState({ active: "nav__menu" });
      }
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        this.setState({ icon: "nav__toggler toggle" });
      } else {
        this.setState({ icon: "nav__toggler" });
      }
    };
  

    handleFormaFarmace = (event) => {
      const { handleFormaFarmace  } = this.props;
      handleFormaFarmace(event);
  
      // Scroll al inicio de la página
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      // Restablecer el valor del selector a la opción por defecto
    // Restablecer el valor del selector a la opción por defecto
     // Mostrar nuevamente el buscador y selector en la barra responsiva
     this.setState({ showSearchBar: true });
    };

    handleChange = (e) => {
      const { handleChange } = this.props;
      handleChange(e);
  
      // Ocultar el buscador y selector en la barra responsiva después de la búsqueda
      this.setState({ showSearchBar: false });
    };
    render() {
      const { showSearchBar } = this.state;
      const { handleFormaFarmace } = this.props;
  
  
      return (
        <nav className="nav">
          <a href="!#" className="nav__brand">
            <img
              className="logo-responsivo"
              style={{ width: "auto", height: "auto", color: "white" }}
              src={LogoRes}
              alt=""
            />
          </a>
  
          <div className={this.state.active}>
            <select
              className=" nav__item form-select col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
              onChange={(e) => this.handleFormaFarmace(e)}
             
            >
              <option disabled selected hidden className="nav__option">
                FORMA FARMACEUTICA
              </option>
              <option value={""}>MOSTRAR TODOS </option>
                  <option value="CAPSULAS">CÁPSULAS</option>
                  <option value="COMPRIMIDOS">COMPRIMIDOS</option>
                  <option value="CREMAS">CREMAS</option>
                  <option value="GEL">GEL</option>
                  <option value="GOTAS">GOTAS</option>
                  <option value="GRANULADO">GRANULADO</option>
                  <option value="INYECTABLE">INYECTABLE</option>
                  <option value="JARABES">JARABES</option>
                  <option value="POLVO">POLVO</option>
                  <option value="POMADA">POMADA</option>
                  <option value="SHAMPO">SHAMPOO</option>
                  <option value="SOLUCION">SOLUCIÓN</option>
                  <option value="SUPOSITORIO">SUPOSITORIO</option>
                  <option value="SUSPENSION">SUSPENSIÓN</option>
                  <option value="TABLETAS">TABLETAS</option>
            </select>
            <Form className="nav__buscador d-flex">
              <Form.Control
                onChange={(e) => this.handleChange(e)}
                type="search"
                style={{fontSize:"14px"}}
                placeholder="Buscar por Nombre o Principio Activo"
                className="nav-control me-2"
                aria-label="Search"
              />
              <Button className="nav__lupa" variant="primary"><FaSearch></FaSearch></Button>
            </Form>
          </div>
  
          <div onClick={this.navToggle} className={this.state.icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      );
    }
  }
  

export default BusquedaProducto;
