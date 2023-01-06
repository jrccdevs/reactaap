import React from "react";
// import Menuadmin from "./menuadmin";
import { useNavigate } from "react-router-dom";
// import { FcSearch } from "react-icons/fc";
import Button from "react-bootstrap/Button";
// import LogoAlfa from "../img/LogoAlfa.png";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../style/Header.css";

class BusquedaProducto extends React.Component {
  render() {
    
    const { handleChange } = this.props;
    const { handleFormaFarmace } = this.props;

    return (
      <>
        {['lg'].map((expand) => (
          <Navbar key={expand} variant="dark" expand={expand} className="mb-3 nav-bar">
            <Container fluid>
              {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Laboratorio ALFA
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="row justify-content-center">
                  {/* <Nav className="justify-content flex-grow-1 pe-3">
                    <Button href="/menuadmin" variant="primary">ADMINISTRADOR</Button>
                  </Nav> */}
                  <section className="col-12 col-sm-6 col-lg-2 me-2">
                    <select className="form-select mx-4 px-1" aria-label="Default select example" onChange={(e) => handleFormaFarmace(e)}>
                      <option value={''}>-- MOSTRAR TODOS --</option>
                      <option value="CAPSULAS">CAPSULAS</option>
                      <option value="COMPRIMIDOS">COMPRIMIDOS</option>
                      <option value="CREMAS">CREMAS</option>
                      <option value="GEL">GEL</option>
                      <option value="GOTAS">GOTAS</option>
                      <option value="GRANULADO">GRANULADO</option>
                      <option value="INYECTABLE">INYECTABLE</option>
                      <option value="JARABES">JARABES</option>
                      <option value="POLVO">POLVO</option>
                      <option value="POMADA">POMADA</option>
                      <option value="SHAMPO">SHAMPO</option>
                      <option value="SOLUCION">SOLUCION</option>
                      <option value="SUPOSITORIO">SUPOSITORIO</option>
                      <option value="SUSPENSION">SUSPENSION</option>
                      <option value="TABLETAS">TABLETAS</option>
                    </select>
                  </section>

                  <section className="col-12 col-sm-6 col-lg-5">
                    <Form className="d-flex">
                      <Form.Control
                        onChange={handleChange}
                        type="search"
                        placeholder="Buscador de Productos"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="primary"><FaSearch></FaSearch></Button>
                    </Form>
                  </section>


                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))
        }
      </>
    );
  }
}

export default BusquedaProducto;
