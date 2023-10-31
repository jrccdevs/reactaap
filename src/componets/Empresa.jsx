import React, { useState, useEffect } from "react";
import CarrucelHeader from './HeaderCarrucel';
import Busquedaprincipal from './Busquedaprincipal';
import Footer from './Footer';
import gradas from "../img/Grada.jpg";
import construccion from "../img/MisionVision.jpg";
import drferrer from "../img/DrFerrer.jpg";
import { Modal, Container, Row, Col } from "react-bootstrap";
import ImageMapResizer from 'image-map-resizer';
import Menu from '@material-ui/core/Menu';



export default function Empresa() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    
    const [textoModal, setTextoModal] = useState(false);
    const [openData, setOpenData] = useState(null);
    
  
    const openModal = (event, data) => {
      event.preventDefault();
      setModalOpen(true);
      setModalData(data);
    };
  
    const closeModal = () => {
      setModalOpen(false);
      setModalData(null);
    };

// modal de la descripcion solo texto
    const modalTexto = (event, data) => {
      event.preventDefault();
      setTextoModal(true);
      setOpenData(data);
    };
  
    const modalClose = () => {
      setTextoModal(true);
      setOpenData(null);
    };
  
    useEffect(() => {
      ImageMapResizer();
    }, []);
  
   
  
    const containerStyle = {
      width: '100%',
      height: '100px'
    };
    
    return (
        <div>
            <div style={{ position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
                <CarrucelHeader />
                <Busquedaprincipal />

            </div>
            <br></br>
            <div className="container" style={{ overflow: "hidden", margin: "190px auto 0px" }}>
                <div className="row">

                    <h4></h4>
                    <img src={construccion} width="300" height="300" className="rounded img-fluid" alt="..." />

                </div>
            </div>

            <h5 style={{marginLeft:"150px", color:"#003057", fontSize:"30px"}}>HISTORIA</h5>
            <br></br>
          
            <div className="container">
      <div className="row">
        <section className="col-12">
          <div className="col-lg-12 text-center">
             <img style={{width:"100%", height:"400px"}} className="img-fluid" src={gradas} alt="sucursales-bolivia" useMap="#Map" />
            <map name="Map">
              <area 
                fontSize="10px"
                shape="rect"
                coords="81,44,143,71"
                href="#"
                alt="1950"
                onClick={(event) => openModal(event, {
                  body: "El Dr. Santiago Ferrer Alsina, farmacéutico catalán, emigra a Bolivia (1950) e inicia su actividad profesional en la Farmacia Española en la ciudad de La Paz, la cual se encontraba en la Plaza Murillo.",
                  telefono: <img style={{width:"40%", height:"40%"}} src={drferrer} alt=""></img>,
                 
                })}
              />
              <area
                shape="rect"
                coords="143,72,205,99"
                href="#"
                alt="1952"
                onClick={(event) => modalTexto(event, {
                  titulo: " El 20 de Marzo de 1952 se asocia con los Doctores José  Benet y Carlos Grau, ambos de origen catalán, para formar el Laboratorio Farmacéutico GRABESA.",
                 
                })}
              />
            
              <area
                shape="rect"
                coords="209,96,271,123"
                href="#"
                alt="1964"
                onClick={(event) => modalTexto(event, {
                  
                  titulo: "El año 1964 la sociedad se disuelve y el Dr. Santiago Ferrer adquiere la maquinaria, equipos  y marcas de Laboratorios GRABESA  para constituir su propia empresa."
                  
                  
                })}
              />

              <area
                shape="rect"
                coords="275,121,337,148"
                href="#"
                alt="1965"
                onClick={(event) => modalTexto(event, {
                  titulo: <p>El Dr. Santiago Ferrer Alsina funda la empresa unipersonal  
                  LABORATORIOS ALFA (Marzo de 1965), con el propósito y la visión 
                  emprendedora de transformarla posteriormente en una empresa familiar de 
                  responsabilidad limitada.<br></br>El nombre de la empresa se constituye a partir de los apellidos del fundador 
                  (ALsina Ferrer y Asociados= ALFA).</p>
          
                 
                })}
              />

              <area
                shape="rect"
                coords="339,148,401,175"
                href="#"
                alt="1977"
                onClick={(event) => modalTexto(event, {
                  titulo: " Se transforma la empresa unipersonal en Sociedad de Responsabilidad Ltda. con la integración, como socios accionistas, de la  esposa y los dos hijos del  fundador.",
                 
                })}
              />

              <area
                shape="rect"
                coords="404,174,466,201"
                href="#"
                alt="1980"
                onClick={(event) => modalTexto(event, {
                  titulo: "Se trasladan las instalaciones a su  nueva planta,  ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades.        ",
                  
                })}
              />

              <area
                shape="rect"
                coords="467,201,529,228"
                href="#"
                alt="1993"
                onClick={(event) => modalTexto(event, {
                  titulo: <p>El 3 de Mayo de 1993 fallece el Dr. Santiago Ferrer en la ciudad de Santiago de Chile, 
                  asumiendo la dirección de la empresa sus hijos, quienes ya trabajaban en la Empresa 
                  desde el año 1982. En Octubre de 1993 la empresa es auspiciada por el Centro para la 
                  Promoción de Exportaciones de países en desarrollo del Gobierno de  Holanda (CBI), 
                  para asistir al seminario EXPRO IV realizado en Rotterdam.</p>
                   
                })}
              />

              <area
                shape="rect"
                coords="532,227,594,254"
                href="#"
                alt="2015"
                onClick={(event) => modalTexto(event, {
                  titulo: "  Abril 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, iniciando la transformación de SRL a S.A.",
                 
                })}
              />
            </map>
          </div>
        </section>
      </div>
      {
        modalData && (
          <Modal show={modalOpen} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
            <Modal.Header className="text-justify" /* closeButton */>
              <Modal.Title className="fw-bold fs-4">
              <Container>
                <Row>
                  <Col className="text-justify fw-bold" >
                    <p className="fs-5 px-2"> {modalData.body}</p>
                   
                  </Col>
                  
                  <Col className="text-center fw-bold fs-4" >
                   
                    <p className="fs-5 px-2"> {modalData.telefono}</p>
                  </Col>
                </Row>
              </Container>
              </Modal.Title>
            </Modal.Header>
       
          </Modal>
        )
      }



{
        openData && (
          <Modal show={textoModal} onHide={modalClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
            <Modal.Header className="text-justify" /* closeButton */>
              <Modal.Title className="fw-bold fs-4">
              <p className="fs-5 px-2"> {openData.titulo}</p> 
              </Modal.Title>
            </Modal.Header>
            {/* <Modal.Body>
              <Container>
                <Row>
                  <Col className="text-center" >
                    <p className="fs-5 px-2"> {openData.body}</p>
                   
                  </Col>
                  
                  <Col className="text-center" >
                   
                    <p className="fs-5 px-2"> {openData.telefono}</p>
                  </Col>

                  {/* <Col xs={12} md={12} >
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
            </Modal.Body> */}
            {/* <Modal.Footer>
              {/* <Button variant="primary" onClick={closeModal}>
                Cerrar
              </Button> 
            </Modal.Footer> */}
          </Modal>
        )
      }

    </div >
        

            <Footer />
        </div>
    );
}



