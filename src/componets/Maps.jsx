import React, { useState, useEffect } from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import mapa from "../img/mapa-sucursales.png";
import ImageMapResizer from 'image-map-resizer';
import { BsTelephoneInbound } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// import Swal from 'react-sweetalert2';




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

  //Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCu1PibFXxSl3qpJvjbEcs0TgRHSyd_gbE"
  })

  // const {isLoaded, loadError} = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyCu1PibFXxSl3qpJvjbEcs0TgRHSyd_gbE",
  //   onLoad: () => console.log('Google Maps API loaded!'),
  //   onError: (error) => console.error(error),
  // })


  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <div className="container">
      <div className="row">
        <section className="col-12">
          <div className="col-lg-12 text-center">
            <h4 style={{ color: "#003057" }} className="text-center my-4 fw-bold">OFICINAS ALFA BOLIVIA</h4>
            <img className="img-fluid" src={mapa} alt="sucursales-bolivia" useMap="#Map" />
            <map name="Map">
              <area
                shape="circle"
                coords="417,319,17"
                href="#"
                alt="santa_cruz"
                onClick={(event) => openModal(event, {
                  title: <p style={{ color: "#003057" }}>  Sucursal Santa Cruz</p>,
                  body: "C/ Los Gomeros Nº 96 - Barrio Sirari",
                  telefono: "Tel.: (3) 3 413444, Cel.: 721-30959",
                  lugar: {
                    lat: -17.765003,
                    lng: -63.200214
                  }
                })}
              />
              <area
                shape="circle"
                coords="236,182,17"
                href="#"
                alt="beni"
                onClick={(event) => openModal(event, {
                  title: "Sucursal Beni",
                  body: "Calle Alfredo Pereira s/n, entre Av. Cochabamba y Av. Ganadera (lado Caja Petrolera de Salud)",
                  lugar: {
                    lat: -14.822037,
                    lng: -64.902107
                  }
                })}
              />

            {/*   <area
                shape="circle"
                coords="134,49,17"
                href="#"
                alt="pando"
                onClick={(event) => openModal(event, {
                  title: "Sucursal pando",
                  body: "Información de la sucursal de pando",
                })}
              /> */}

              <area
                shape="circle"
                coords="91,240,17"
                href="#"
                alt="la_paz"
                onClick={(event) => openModal(event, {
                  title: "Sucursal La Paz",
                  body: "Calle 19 No. 100 (entre av. Francia y Enrique Hertzog) - Achumani, sector del Franco, Tel.: (2)2224217, (2)2227910, (2)2224237",
                  telefono: "Tel.: (2) 2 224217, (2) 2 227910, (2 )2 224237",
                  lugar: {
                    lat: -16.528251,
                    lng: -68.073195
                  }
                })}
              />

              <area
                shape="circle"
                coords="215,327,17"
                href="#"
                alt="cochabamba"
                onClick={(event) => openModal(event, {
                  title: "Sucursal cochabamba",
                  body: "Calle Aniceto Padilla Nº 406 Zona Recoleta",
                  telefono: "Tel.: (4) 4 141977, Cel.:717-29408",
                  lugar: {
                    lat: -17.3782952166273,
                    lng: -66.15580733516121
                  }
                })}
              />

              <area
                shape="circle"
                coords="136,391,17"
                href="#"
                alt="oruro"
                onClick={(event) => openModal(event, {
                  title: "Sucursal oruro",
                  body: "Calle Sucre Nº 930 Zona Central",
                  telefono: "Tel.: (2) 5 280755, Cel.: 718-40821",
                  lugar: {
                    lat: -17.970390,
                    lng: -67.116676
                  }
                })}
              />

              <area
                shape="circle"
                coords="193,464,17"
                href="#"
                alt="potosi"
                onClick={(event) => openModal(event, {
                  title: "Sucursal potosi",
                  body: "Calle Ecuador Nº 19 - zona  ciudad satelite",
                  telefono: "Tel.: (2) 6 228180, Cel.:679-00639",
                  lugar: {
                    lat: -19.576336,
                    lng: -65.766487
                  }
                })}
              />

              <area
                shape="circle"
                coords="292,429,17"
                href="#"
                alt="sucre"
                onClick={(event) => openModal(event, {
                  title: "Sucursal Sucre",
                  body: "Calle 4 Nº 94 - entre calle 1 y Bernardo Bitti - Zona los Alamos",
                  telefono: "Tel.: (4) 6 445995, Cel.: 728-76811",
                  lugar: {
                    lat: -19.047775,
                    lng: -65.252602
                  }
                })}
              />

              <area
                shape="circle"
                coords="267,531,17"
                href="#"
                alt="tarija"
                onClick={(event) => openModal(event, {
                  title: "Sucursal Tarija",
                  body: "Calle Coronel Delgadillo Nº 165 (entre calle Abaroa y Av. Victor Paz). Zona Las Panosas",
                  telefono: "Tel.: (4) 6 673093, Cel.: 729-86212, 687-05408",
                  lugar: {
                    lat: -21.538475,
                    lng: -64.731079
                  }
                })}
              />
            </map>
          </div>
        </section>
      </div>
      {
        modalData && (
          <Modal show={modalOpen} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
            <Modal.Header className="text-center" closeButton>
              <Modal.Title className="fw-bold fs-4">
                {modalData.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <Row>
                  <Col className="text-center" xs={12} md={12}>
                    <p className="fs-5 px-2"><FaMapMarkerAlt /> {modalData.body}</p>
                    <p className="fs-5 px-2"><BsTelephoneInbound /> {modalData.telefono}</p>
                  </Col>

                  <Col xs={12} md={12} >
                    {isLoaded ? (
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={modalData.lugar}
                        zoom={19}
                      >
                        <Marker
                          position={modalData.lugar}
                        >
                        </Marker>
                      </GoogleMap>
                    ) : <></>}
                  </Col>

                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="primary" onClick={closeModal}>
                Cerrar
              </Button> */}
            </Modal.Footer>
          </Modal>
        )
      }

    </div >
  );
}

