import React from "react";
import Menuadmin from "./menuadmin";
import { useNavigate } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../style/Header.css";

export default function Busqueda() {
  const Busqueda = useNavigate();
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Button variant="primary" onClick={() => Busqueda("/menuadmin")} src={Menuadmin}>Administrador</Button></Nav.Link>
            <Nav.Link href="#action2"><Button variant="primary">Registrese</Button></Nav.Link>

          </Nav>
          <Form className="d-flex buscar">
            <Form.Control
              type="search"
              placeholder="Buscador de Productos (x Marca / x P.A.)... "
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary"><FcSearch className="lupaicono1"></FcSearch></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}