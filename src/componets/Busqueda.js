import React from "react";
// import Menuadmin from "./menuadmin";
import { useNavigate } from "react-router-dom";
// import { FcSearch } from "react-icons/fc";
import Button from "react-bootstrap/Button";
// import LogoAlfa from "../img/LogoAlfa.png";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSearch } from "react-icons/fa";

// import { Navigate } from "react-router-dom";

// import { HashRouter } from "react-router-dom";



import "../style/Header.css";

class Busqueda extends React.Component {


    render() {
        const { handleChange } = this.props;

        // this.props.navigate('/menuadmin');


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
                                <Offcanvas.Body>
                                    <Nav className="justify-content flex-grow-1 pe-3">
                                        <Button href="/menuadmin" variant="primary">ADMINISTRADOR</Button>
                                    </Nav>
                                    <section className="col-12 col-sm-6 col-lg-2">
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


function WithNavigate(props) {
    let navigate = useNavigate();
    return <Busqueda {...props} navigate={navigate} />
}


export default WithNavigate;
