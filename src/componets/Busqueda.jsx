import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input, Card } from "antd";
import { Link, Routes } from "react-router-dom";
import { getProductosRequest } from "../api/productos.api";

import Menuadmin from "./menuadmin";
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
import Search from './Search'

// import { Navigate } from "react-router-dom";

// import { HashRouter } from "react-router-dom";

import "../style/Header.css";

export default function Busqueda() {


  const Busqueda = useNavigate();


  const [productos, setProductos] = useState([]);
  const [productosMatch, etProductosMatch] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      const response = await getProductosRequest();
      setProductos(response.data);
    }
    loadProductos();
  }, []);

  console.log(productos);

  const buscarProductos = (text) => {
    if (!text) {
      etProductosMatch([]);
    } else {
      let matches = productos.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        return (
          country.nombreproducto.match(regex) ||
          country.principioactivo.match(regex)
        );
      });
      etProductosMatch(matches);
    }
  };



  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} variant="dark" expand={expand} className="mb-3 nav-bar">
          <Container fluid>
            <Navbar.Brand href="#">Laboratorios ALFA</Navbar.Brand>
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
                  <select class="form-select mx-4 px-1" aria-label="Default select example">
                    <option selected>Mostrar Productos Por:</option>
                    <option value="1">Capsulas</option>
                    <option value="2">Comprimidos</option>
                    <option value="3">Cremas</option>
                    <option value="4">Gel</option>
                    <option value="5">Gotas</option>
                    <option value="6">Granulado</option>
                    <option value="7">Inyectable</option>
                    <option value="8">Jarabes</option>
                    <option value="9">Polvo</option>
                    <option value="10">Pomada</option>
                    <option value="11">Shampo</option>
                    <option value="12">Solucion</option>
                    <option value="13">Supositorio</option>
                    <option value="14">Suspension</option>
                    <option value="15">Tableta</option>
                  </select>
                </section>

                <section className="col-12 col-sm-6 col-lg-6">
                  <Form className="d-flex">
                    <Form.Control
                      onChange={(e) => buscarProductos(e.target.value)}
                      type="search"
                      placeholder="Buscador de Productos"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="primary"><FaSearch></FaSearch></Button>
                    <div class="position-absolute">
                      {productosMatch && productosMatch.map((item, index) => (
                        <div class="" key={index} style={{ marginLeft: "35%", marginTop: "5px" }}>
                          <div key={item.id}>

                            <div class="card mb-3 " style={{ maxWidth: "100%" }}>
                              <div class="row g-0">
                                <div class="col-md-4">
                                  <Link to={`/productos/${item.id}`}>
                                    <img src={item.image} class="img-fluid rounded-start" alt="..." />
                                  </Link>
                                </div>
                                <div class="col-md-8">
                                  <div class="card-body">
                                    <h5 class="card-title">{item.nombreproducto}</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Form>
                </section>


              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand href="#">  <Nav className="justify-content flex-grow-1 pe-3">
              <Button onClick={() => Busqueda("/menuadmin")} variant="primary">ADMINISTRADOR</Button>
            </Nav></Navbar.Brand>
          </Container>
        </Navbar>
      ))
      }
    </>
  );
}



{/* <section className="col-12 col-sm-6 col-lg-7">
                  <Form className="d-flex">
                    <Search />
                    <Button variant="primary"><FaSearch></FaSearch></Button>
                  </Form>
                </section> */}
{/* <Nav className="justify-content flex-grow-1 pe-3">
                  <Button
                    onClick={() => Busqueda("/menuadmin")}
                    src={Menuadmin}
                    variant="primary">
                    ADMINISTRADOR
                  </Button>
                </Nav> */}