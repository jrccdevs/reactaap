import React, { useState, useEffect } from "react";
import { useParams, Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material"
import Footer from "./Footer";
import Busquedaprincipal from './Principalbusqueda';
import ChicaAlfa from "../img/ChicaALFA.JPG";
//import { RViewer, RViewerTrigger } from "react-viewerjs"
import Viewer from 'react-viewer'
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from "react-bootstrap";
import icono1 from "../img/icono 1.png";
import icono2 from "../img/icono 2.png";
import icono3 from "../img/icono 3.png";
import icono4 from "../img/icono 4.png";
//import Header from "./Header";
import CarrucelHeader from "./HeaderCarrucel";
import imagen7 from '../assets/img/Imagen7.jpg';
import ReactImageMagnify from 'react-image-magnify';
import { useHistory } from "react-router-dom";


import "../style/DetalleProductos.css";
import ModalProducto from "./ModalProducto";



export default function DetalleProducto() {


  const [visible, setVisible] = React.useState(false);
  //   console.log(useParams());

  const { id, page } = useParams();
  console.log(page);


  const [producto, setProducto] = React.useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://node-alfa.vercel.app/productos/${id}`);
      const product = await data.json();
      setProducto(product);
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();


  const options = {
    toolbar: {//单张图片预览不要pre和next底部按钮，隐藏它
      navPrev: false,
      noNavbar: false,
      rotatable: false
    }


  }
  return (
    <>

      <div className="container-fluid" style={{ backgroundColor: "white", position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
        <div className="row">
          <ModalProducto />
          <div className="col-md-3" style={{ backgroundColor: "white", height: "auto" }}>
            <Link to={"/"}>
              <img className="logoAlfaprueba" style={{ width: "300px", paddingTop: "7px" }} src={ChicaAlfa} alt="" />
            </Link>
          </div>

          <div className="col-md-9" style={{ marginRight: "0px" }}>

            <div className="carrucel-header" style={{ backgroundColor: "white" }}>
              <CarrucelHeader />
            </div>


            <div className="busqueda-principal" style={{ backgroundColor: "white" }}>
              <Busquedaprincipal />
            </div>
          </div>
        </div>
      </div>
     
<Container className="detalle-producto" maxWidth={"xl"} style={{marginTop:"190px"}}>
{producto.map((producto, index) => (
<Grid container>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{marginTop:"-60px",justifyContent: "center", height:"auto", width:"auto"}}>
            <div className="imageresponsiv" style={{justifyContent: "center", width: "600px", height: 'auto', padding:"90px" }}>
                
              <ReactImageMagnify className="imgfluid" variant="top" style={{justifyContent: "center", width: "500px", height: 'auto' }} {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: producto.image,
                  sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 160px'

                },

                largeImage: {
                  src: producto.image,
                  width: 1000,
                  height: 1000,

                },
                lensStyle: {
                  backgroundColor: 'hsla(0, 0%, 100%, .3)',
                  marginRight: '30px'
                },
                isHintEnabled: true
              }} />
              
              </div>
         
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{  marginTop:"20px"}}>
         <div className="copy"  >
            <Card.Body style={{textAlign: "center"}}>
              <div className="tituloDetalleProducto">{producto.nombreproducto}</div>
              <Card.Text >
                {/*  <h6 className="detalle" style={{ color: "red" }}> <AiOutlineFunnelPlot></AiOutlineFunnelPlot>{" "}
                      Precio:
                      <text style={{ color: "rgb(248, 149, 149)" }}>
                        {" "} Bs. {producto.precio}
                      </text>
                    </h6> */}


                <h6 className="detalle" style={{ width: "auto", color: "red" }}>   <img style={{ width: "30px", height: "30px" }} src={icono1} alt="" />{" "}
                  Principio Activo:
                  <text style={{ display: "block", width: "auto", height: "auto", marginTop: "-29px", color: "rgb(248, 149, 149)", paddingTop: "2px", textAlign: "left", marginLeft: "172px" }}>
                    {producto.principioactivo}
                  </text>
                </h6>





                <h6 className="detalle" style={{ color: "#2062f0", width: "auto" }}>
                  <img style={{ width: "30px", height: "30px" }} src={icono2} alt="" />{" "}
                  Acción Terapéutica:
                  <text style={{ color: "  #5187fc", display: "flex", width: "auto", height: "auto", marginTop: "-29px", paddingTop: "2px", textAlign: "left", marginLeft: "192px" }}>
                    {" "} {producto.accionterapeutica}
                  </text>
                </h6>
                <h6 className="detalle" style={{ color: "rgb(65, 67, 68)" }}>
                  <img style={{ width: "30px", height: "30px" }} src={icono3} alt="" /> Forma Farmacéutica:
                  <text style={{ color: "rgb(159, 163, 165)" }}>
                    {" "}
                    {producto.formafarmaceutica}{" "}
                  </text>
                </h6>

                <h6 className="detalle" style={{ color: "rgb(12, 143, 12)" }}>
                  <img style={{ width: "30px", height: "30px" }} src={icono4} alt="" /> Presentación:
                  <text style={{ color: " rgb(93, 180, 93)" }}>
                    {" "}
                    {producto.presentacion}{" "}
                  </text>
                </h6>
                <h6 className="detalle" style={{ color: "blue", width: "30px", height: "30px" }}>
                <Link to={producto.link}>
                <text style={{ color: " blue" }}>
                    {" "}
                    {producto.link}{" "}
                  </text>
                    </Link>
                </h6>
                <div className="boton" style={{ marginTop: "20px", width: "auto", height: "30px", color: "white", marginLeft: "0px", backgroundColor: "#003057", textAlign: "center" }}>
                  <a href={producto.prospecto} type="application/pdf" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "none" }} zoom={100}> VER MAS (Prospecto)</a>
                </div>
               
                
              </Card.Text>
            </Card.Body>
          </div>
         

      
      </Grid>
      
    </Grid>
 ))}
</Container>


<div className="detalle-footer">
<Footer />
</div>
      
    </>
  );
}
