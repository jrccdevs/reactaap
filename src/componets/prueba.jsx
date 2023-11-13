import React, { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import Logochica from "../img/imgLogochica.png";
import LogoAlfa from "../img/LogoAlfa.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/prueba.css";





export default function Productos2() {


    return (

        <div class="container">
  <h1 class="text-center mt-5">Dos Elementos div Responsivos</h1>

  <div class="row mt-4">

    <div class="col-md-6">

      <div class="bg-primary p-3">
        <p class="text-white">Elemento 1</p>
      </div>
    </div>

    <div class="col-md-6 mt-3 mt-md-0">
     
      <div class="bg-secondary p-3">
        <p class="text-white">Elemento 2</p>
      </div>
    </div>
  </div>
</div>
    );
}
/* {currentItems.map((producto) => (
    <div className="App">
        <Slider
            dots={false}
            slidesToShow={2}
            slidesToScroll={2}
            autoplay={true}

        >
            {producto.image}
        </Slider>
    </div>
))} */


<Container maxWidth={"xl"} style={{marginTop:"200px"}}>
{producto.map((producto, index) => (
<Grid container>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{marginTop:"50px",textAlign: "center", height:"auto", width:"auto"}}>
            <div className="imageresponsive" style={{textAlign: "center"}}>
                ...
              <ReactImageMagnify className="img-fluid" variant="top" style={{textAlign: "center", width: "200px", height: 'auto' }} {...{
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
              ...
              </div>
         
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{textAlign: "center", marginTop:"20px"}}>
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

                <div className="boton" style={{ marginTop: "20px", width: "auto", height: "30px", color: "white", marginLeft: "50px", backgroundColor: "#003057", textAlign: "center" }}>
                  <a href={producto.prospecto} type="application/pdf" target="_blank" rel="noreferrer" style={{ color: "white", textDecoration: "none" }} zoom={100}> VER MAS (Prospecto)</a>
                </div>

              </Card.Text>
            </Card.Body>
          </div>
         

      
      </Grid>
      
    </Grid>
 ))}
</Container>


