import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import mapa from "../img/mapa-sucursales.png";
import ImageMapResizer from 'image-map-resizer';


export default function Maps() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);


  const openModal = (event, data) => {
    event.preventDefault();
    setModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  useEffect(() => {
    ImageMapResizer();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <section className="col-12">
          <div className="col-lg-12 text-center">
            <h4 className="text-center my-4">SUCURSALES BOLIVIA</h4>

            <img className="img-fluid" src={mapa} alt="sucursales-bolivia" useMap="#Map" />
            <map name="Map">
              <area
                shape="circle"
                coords="417,319,17"
                href="#"
                alt="santa_cruz"
                onClick={(event) => openModal(event, {
                  title: "Sucursal Santa Cruz",
                  body: "Información de la sucursal de Santa Cruz",
                })}
              />
              <area
                shape="circle"
                coords="236,182,17"
                href="#"
                alt="beni"
                onClick={(event) => openModal(event, {
                  title: "Sucursal Beni",
                  body: "Información de la sucursal de Beni",
                })}
              />

              <area
                shape="circle"
                coords="134,49,17"
                href="#"
                alt="pando"
                onClick={(event) => openModal(event, {
                  title: "Sucursal pando",
                  body: "Información de la sucursal de pando",
                })}
              />

              <area
                shape="circle"
                coords="91,240,17"
                href="#"
                alt="la_paz"
                onClick={(event) => openModal(event, {
                  title: "Sucursal La Paz",
                  body: "Avda. Bush Nº 1970 (entre Rosendo Villalobos y Díaz Romero), Miraflores.",
                })}
              />

              <area
                shape="circle"
                coords="215,327,17"
                href="#"
                alt="cochabamba"
                onClick={(event) => openModal(event, {
                  title: "Sucursal cochabamba",
                  body: "Información de la sucursal de cochabamba",
                })}
              />

              <area
                shape="circle"
                coords="136,391,17"
                href="#"
                alt="oruro"
                onClick={(event) => openModal(event, {
                  title: "Sucursal oruro",
                  body: "Información de la sucursal de oruro",
                })}
              />

              <area
                shape="circle"
                coords="193,464,17"
                href="#"
                alt="potosi"
                onClick={(event) => openModal(event, {
                  title: "Sucursal potosi",
                  body: "Información de la sucursal de potosi",
                })}
              />

              <area
                shape="circle"
                coords="292,429,17"
                href="#"
                alt="chuquisaca"
                onClick={(event) => openModal(event, {
                  title: "Sucursal chuquisaca",
                  body: "Información de la sucursal de chuquisaca",
                })}
              />

              <area
                shape="circle"
                coords="267,531,17"
                href="#"
                alt="tarija"
                onClick={(event) => openModal(event, {
                  title: "Sucursal tarija",
                  body: "Información de la sucursal de tarija",
                })}
              />
            </map>
          </div>
        </section>
      </div>

      {modalData && (
        <Modal show={modalOpen} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              {modalData.title}
            </Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>{modalData.body}</Modal.Body> */}
          <Modal.Body>
            <Container>
              <Row>
                <Col className="bg-danger" xs={6} md={6}>
                  <p>{modalData.body}</p>
                </Col>
                <Col className="bg-info" xs={6} md={6}>
                  .col-xs-6 .col-md-4
                </Col>

              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={closeModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )
      }

    </div >
  );
}

