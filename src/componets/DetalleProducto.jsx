import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineFunnelPlot } from "react-icons/ai";
import { GiMedicalThermometer } from "react-icons/gi";
import { FaTable } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import Busqueda from "./Busqueda";
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from "react-bootstrap";

import "../style/DetalleProductos.css";
import ModalProducto from "./ModalProducto";


export default function DetalleProducto() {

  //   console.log(useParams());

  const { id } = useParams();
  // console.log(id);

  const [producto, setProducto] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {

      //cambiar en https
     const data = await fetch(`https://node-alfa.vercel.app/productos/${id}`);
      //const data = await fetch(`http://localhost:7000/productos/${id}`);
      
      const product = await data.json();
      //   console.log(product);
      setProducto(product);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <ModalProducto />
      <Header />
      <Busqueda />
      <Container className="detalleimg">
        {producto.map((producto) => (
          <div  >
            <Row className="detalleProducto">
              <Col  sm={12} md={12} lg={6} xl={6}>
                <Card.Img  variant="top" src={producto.image} />
              </Col>
              <Col sm={12} md={12} lg={6} xl={6}>
                <Card.Body className="detalleimg">
                  <div className="tituloDetalleProducto">{producto.nombreproducto}</div>
                  <Card.Text>
                    {/*  <h6 className="detalle" style={{ color: "red" }}> <AiOutlineFunnelPlot></AiOutlineFunnelPlot>{" "}
                      Precio:
                      <text style={{ color: "rgb(248, 149, 149)" }}>
                        {" "} Bs. {producto.precio}
                      </text>
                    </h6> */}
                    <h6 className="detalle" style={{ color: "red" }}> <AiOutlineFunnelPlot></AiOutlineFunnelPlot>{" "}
                      Principio Activo:
                      <text style={{ color: "rgb(248, 149, 149)" }}>
                        {" "} {producto.principioactivo}
                      </text>
                    </h6>
                    <h6 className="detalle" style={{ color: "#2062f0" }}>
                      <GiMedicalThermometer></GiMedicalThermometer>{" "}
                      Accion Terapeuctica:
                      <text style={{ color: "  #5187fc" }}>
                        {" "} {producto.accionterapeutica}
                      </text>
                    </h6>
                    <h6 className="detalle" style={{ color: "rgb(65, 67, 68)" }}>
                      <FaTable></FaTable> Forma Farmaceutica:
                      <text style={{ color: "rgb(159, 163, 165)" }}>
                        {" "}
                        {producto.precio}{" "}
                      </text>
                    </h6>

                    <h6 className="detalle" style={{ color: "rgb(12, 143, 12)" }}>
                      <FaTable></FaTable> Presentacion:
                      <text style={{ color: " rgb(93, 180, 93)" }}>
                        {" "}
                        {producto.presentacion}{" "}
                      </text>
                    </h6>

                    <h5 className="detalle" style={{ textAlign: "center" }}>
                      <Button variant="success">VER MAS (Prospecto)</Button>
                    </h5>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
}
