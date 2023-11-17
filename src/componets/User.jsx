import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import "../style/navbar.css";


 

  function Navbar () {
    
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };


  
      const { handleChange } = this.props;
      const { handleFormaFarmace } = this.props;
  
  return (
    <nav className="nav">
    <a href="!#" className="nav__brand">
  {/*   <img className="logo-responsivo" style={{width:"40%", height:"auto"}} src={LogoRes} alt="" />
*/}             
    </a>
    <div className={active}>
              <select className="nav__item form-select col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  onChange={(e) => handleFormaFarmace(e)}>
              <option disabled selected hidden className="nav__option">FORMA FARMACEUTICA</option>
                <option value={''}>MOSTRAR TODOS </option>
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
              <Form className="nav__buscador d-flex" >
                <Form.Control
                  onChange={handleChange}     
                  type="search"
                  placeholder="Buscador de Productos"
                  className="nav-control me-2"
                  aria-label="Search"
                />
                <Button className="nav__lupa"  variant="primary"><FaSearch></FaSearch></Button>
              
              </Form>
             
            </div>

   
    <div onClick={navToggle} className={icon}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
  );
}


export default Navbar;
