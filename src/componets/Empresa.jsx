import React, { Component } from 'react';
import CarrucelHeader from './HeaderCarrucel';
import Busquedaprincipal from './Busquedaprincipal';
import Footer from './Footer';
//import empresa from "../img/empresa.jpg";
/* import mision from "../img/mision.png";
import vision from "../img/vision.png";
import valores from "../img/valores.png";

import docferrer from '../assets/img/docferrer.jpg';
import imagen5 from '../assets/img/Imagen5.jpg';
import imagen6 from '../assets/img/Imagen6.jpg';
import imagen7 from '../assets/img/Imagen7.jpg'; */
//import ReactImageMagnify from 'react-image-magnify';
import construccion from "../img/construccion.jpg";
import "../style/Empresa.css";

export default class Empresa extends Component {

    render() {

        return (
            <>
                <div style={{ position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
                    <CarrucelHeader />
                    <Busquedaprincipal />

                </div>

                <div className="container"  style={{ overflow: "hidden", margin: "190px auto 0px" }}>
                    <div className="row">

                         <h4>PAGINA EN DESARROLLO</h4> 
                          <img src={construccion} width="300" height="300" className="rounded img-fluid" alt="..." />
                       
                    </div>
                 </div>
                        {/*  <p className="h1 text-center mb-4">Historia</p>
                        <div className="row mt-4 mb-4">
                            <div className="col-12 col-sm-12 col-md-5 text-center">
                                <img src={empresa} width="100%" height="100%" className="rounded img-fluid" alt="..." />
                            </div>
                            <div className="col-12 col-sm-12 col-md-7 text-center pt-4">
                                <p>El año 1977, la empresa se transforma en Sociedad de Responsabilidad Limitada (S.R.L.) con la integración como socios accionistas de la esposa y los dos hijos del fundador.</p>
                                <p> A principios de la década de los 80's, se trasladan las instalaciones a su nueva planta ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades. </p>
                                <p>  En Abril de 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, iniciando la transformación de S.R.L. a S.A. Asimismo, se constituye en Asunción del Paraguay la Subsidiaria Pharmanest S.A.</p>
                            </div>
                        </div> 
                         <div className="row mt-4">
                            
                            <div className="col-12 col-sm-12 col-md-7 text-center pt-4">
                                <p>El año 1977, la empresa se transforma en Sociedad de Responsabilidad Limitada (S.R.L.) con la integración como socios accionistas de la esposa y los dos hijos del fundador.</p>
                                <p> A principios de la década de los 80's, se trasladan las instalaciones a su nueva planta ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades. </p>
                                <p>  En Abril de 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, iniciando la transformación de S.R.L. a S.A. Asimismo, se constituye en Asunción del Paraguay la Subsidiaria Pharmanest S.A.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 text-center">
                                <img src={empresa} width="100%" height="100%" className="rounded img-fluid" alt="..." />
                            </div>
                        </div>  */}
                  
                    {/*  <div style={{ width: "200px", height: "500px" }}>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: mision
                            },
                            largeImage: {
                                src: mision,
                                width: 1009,
                                height: 1600
                            }
                        }} />
                    </div>
                   */}
                



                <Footer />
            </>
        )
    }
}



