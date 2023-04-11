import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import { AiOutlineFunnelPlot } from "react-icons/ai";
//import { GiMedicalThermometer } from "react-icons/gi";
//import { FaTable } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import Busqueda from "./Busqueda";
import Card from 'react-bootstrap/Card';
import { Button, Col, Container, Row } from "react-bootstrap";
import icono1 from "../img/icono 1.png";
import icono2 from "../img/icono 2.png";
import icono3 from "../img/icono 3.png";
import icono4 from "../img/icono 4.png";

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
      <div style={{ position: "fixed", top:"0px", left: "0px", right:"0px",   zIndex: "999"}}>
        <Header />
        <Busqueda />
      </div>
      
      <Container className="detalleimg" style={{ overflow: "hidden", margin:"190px auto 0px"}}>
        {producto.map((producto) => (
          <div  >
            <Row className="detalleProducto">
              <Col sm={12} md={12} lg={6} xl={6}>
                <Card.Img variant="top" style={{objectFit: 'fill',  height:'auto' }}  src={producto.image} />
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
                    <h6 className="detalle" style={{ color: "red" }}>   <img style={{ width: "30px" , height: "30px" }} src={icono1} alt="" />{" "}
                      Principio Activo:
                      <text style={{ color: "rgb(248, 149, 149)" }}>
                        {" "} {producto.principioactivo}
                      </text>
                    </h6>
                    <h6 className="detalle" style={{ color: "#2062f0" }}>
                    <img style={{ width: "30px" , height: "30px" }} src={icono2}alt="" />{" "}
                      Acción Terapéutica:
                      <text style={{ color: "  #5187fc" }}>
                        {" "} {producto.accionterapeutica}
                      </text>
                    </h6>
                    <h6 className="detalle" style={{ color: "rgb(65, 67, 68)" }}>
                    <img style={{ width: "30px" , height: "30px" }} src={icono3}alt="" /> Forma Farmacéutica:
                      <text style={{ color: "rgb(159, 163, 165)" }}>
                        {" "}
                        {producto.precio}{" "}
                      </text>
                    </h6>

                    <h6 className="detalle" style={{ color: "rgb(12, 143, 12)" }}>
                    <img style={{ width: "30px" , height: "30px" }} src={icono4}alt="" /> Presentación:
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
