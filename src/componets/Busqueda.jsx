import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductosRequest } from "../api/productos.api";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaSearch } from "react-icons/fa";

import "../style/Header.css";

export default function Busqueda() {

  const Busqueda = useNavigate();

  const [formafarmaceutica, setformafarmaceuticaid] = useState('');
  const [productos, setProductos] = useState([]);
  const [productosMatch, setProductosMatch] = useState([]);


  const handleFormaFarmace = (event) => {
    const getformafarmaceuticaid = event.target.value;
    setformafarmaceuticaid(getformafarmaceuticaid);
    event.preventDefault();
  }

  // useEffect(() => {
  //   async function loadProductos() {
  //     const response = await getProductosRequest();
  //     setProductos(response.data.slice(0, 5));
  //   }
  //   loadProductos();
  // }, []);

  useEffect(() => {
    const getstate = async () => {
      const response = await fetch(`https://node-alfa.vercel.app/formaFarmaceutica/${formafarmaceutica}`);
      const getst = response.json();
      setProductos(await getst);
      // console.log(getst);
    }
    getstate();
  }, [formafarmaceutica]);


  // console.log(productos);

  const buscarProductos = (text) => {
    if (!text) {
      setProductosMatch([]);
    } else {
      let matches = productos.filter((country) => {
        const regex = new RegExp(`${text}`, "gi");
        return (
          country.nombreproducto.match(regex) ||
          country.principioactivo.match(regex)
        );
      });
      setProductosMatch(matches);
    }
  };

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} variant="dark" expand={expand} className="mb-3 nav-bar">
          <Container fluid>
            <Navbar.Brand className="tituloLafar" href="#" >Laboratorios ALFA</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
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

                <section className="col-8 col-sm-7 col-md-4 col-lg-5 col-xl-3 me-2">
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

                <section className="busquer col-12 col-sm-6 col-lg-6">
                  <Form className="d-flex">
                    <Form.Control
                      onChange={(e) => buscarProductos(e.target.value)}
                      type="search"
                      placeholder="Buscador de Productos"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="primary"><FaSearch></FaSearch></Button>
                    <div className="position-absolute" style={{ maxWidth: "88%", marginTop: "56px" }}>

                      {productosMatch && productosMatch.slice(0, 5).map((item, index) => (
                        <div key={index}>
                          <div key={item.id} className="producto-item">
                            <Link to={`/productos/${item.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                              <div className="mb-3 " style={{ maxWidth: "100%" }}>
                                <div className="row g-0">
                                  <div className="col-md-3">
                                    <img src={item.image} style={{ maxWidth: "50%", maxHeight: "80%", display: "block", margin: "0 auto" }} className="img-fluid rounded-start" alt={item.nombreproducto} />
                                  </div>
                                  <div className="col-md-9">
                                    <div className="text-center">
                                      <h5 className="">{item.nombreproducto}</h5>
                                      {/* <p className="">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
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

