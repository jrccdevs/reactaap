import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";

import "../style/Productos2.css";

class BusquedaProducto extends React.Component {
  render() {

    const { handleChange } = this.props;
    const { handleFormaFarmace } = this.props;

    return (
      <>

        <Navbar className="mb-3 nav-bar">
          <Container >
            <div className="container-fluid col-12">
              <section className="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-3">
                <select className="form-select" onChange={(e) => handleFormaFarmace(e)}>
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

              <section className="col-7 col-sm-7 col-md-7 col-lg-7 col-xl-9">
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

            </div>
          </Container>
        </Navbar>

      </>
    );
  }
}

export default BusquedaProducto;
