import React, { Component } from 'react';
import Header from './Header';
import Busquedaprincipal from './Busquedaprincipal';
import Footer from './Footer';
//import empresa from "../img/empresa.jpg";
import mision from "../img/mision.png";
import vision from "../img/vision.png";
import valores from "../img/valores.png";
//import construccion from "../img/construccion.jpg";
import docferrer from '../assets/img/docferrer.jpg';
import imagen5 from '../assets/img/Imagen5.jpg';
import imagen6 from '../assets/img/Imagen6.jpg';
import imagen7 from '../assets/img/Imagen7.jpg';
//import ReactImageMagnify from 'react-image-magnify';

import "../style/Empresa.css";

export default class Empresa extends Component {

    render() {

        return (
            <>
                <Header />
                <Busquedaprincipal />

                <div className="container">
                    <div className="row">

                        {/* <h4>PAGINA EN DESARROLLO</h4> */}
                        {/*   <img src={construccion} width="300" height="300" className="rounded img-fluid" alt="..." />
             */}            <p className="h1 text-center mb-4">“Laboratorios Alfa S.A.”</p>
                        <div className="row mt-4">
                            <div className="col-12 col-sm-12 col-md-4 text-center">
                                <img src={mision} width="300" height="300" className="rounded img-fluid" alt="..." />
                                <h2 className="mt-2">MISION</h2>
                                <p>“Laboratorios Alfa es una empresa industrial farmacéutica que tiene el propósito de desarrollar, fabricar y comercializar medicamentos accesibles, efectivos y seguros, que contribuyan a mantener y restablecer la salud de la población boliviana.”</p>
                            </div>
                            <div className="col-12 col-sm-12 col-6 col-md-4 text-center">
                                <img src={vision} width="300" height="300" className="rounded img-fluid" alt="..." />
                                <h2 className="mt-2">VISION</h2>
                                <p>“Queremos ser, en el año 2025, la empresa industrial farmacéutica boliviana, líder de excelencia, que se adapta permanentemente al cambio para satisfacer las necesidades de nuestros clientes.”</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 text-center">
                                <img src={valores} width="300" height="300" className="rounded img-fluid" alt="..." />
                                <h2 className="mt-2">VALORES</h2>
                                <p>El trabajo en equipo, La fuerza de la verdad. La riqueza del conocimiento. La responsabilidad. El entusiasmo. La lealtad, El respeto.</p>
                            </div>
                        </div>
                        <div id="testimonials">
                            <div className="container wow fadeInUp">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className="section-title">HISTORIA</h3>
                                        <div className="section-title-divider"></div>
                                        {/*  <p className="section-description">TEXTO AQUI</p> */}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="profile">
                                            <div className="pic1">
                                                <img className="docferrer" src={docferrer} alt="..."></img>
                                            </div>
                                            <h4>Dr. Santiago Ferrer Alsina</h4>

                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="quote">
                                            <b>
                                                <img src="img/quote_sign_left.png" alt=""></img>
                                            </b>
                                                Laboratorios ALFA S.A., nace como empresa unipersonal en Marzo de 1965, fundada por el Dr. Santiago Ferrer Alsina, con el propósito y la visión emprendedora de transformarla posteriormente en una empresa familiar de responsabilidad limitada.
                                                <div>
                                                <img src="img/quote_sign_right.png" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="quote">
                                            {/* <b>
                                                <img src="" alt=""></img>
                                            </b> */}
                                                 El año 1977, la empresa se transforma en Sociedad de Responsabilidad Limitada (S.R.L.) con la integración como socios accionistas de la esposa y los dos hijos del fundador.

                                                {/* <small>
                                                <img src="img/quote_sign_right.png" alt=""></img>
                                            </small> */}
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="profile">
                                            <div className="pic">
                                                <img className="imagencuadro" src={imagen5} alt="..."></img>
                                            </div>
                                            {/* <h4>texto referencial</h4>
                                            <span>Texto</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="profile">
                                            <div className="pic">
                                                <img className="imagencuadro" src={imagen6} alt="..."></img>
                                            </div>
                                            {/*  <h4>texto referencial</h4>
                                            <span>Texto</span> */}
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="quote">
                                            {/* <b>
                                                <img src="img/quote_sign_left.png" alt=""></img>
                                            </b> */}
                                                     A principios de la década de los 80's, se trasladan las instalaciones a su nueva planta ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades.
                                                   {/*   <small>
                                                <img src="img/quote_sign_right.png" alt=""></img>
                                            </small> */}
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="quote">
                                            {/* <b>
                                                <img src="" alt=""></img>
                                            </b>  */} En Abril de 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, iniciando la transformación de S.R.L. a S.A. Asimismo, se constituye en Asunción del Paraguay la Subsidiaria Pharmanest S.A.
                                                    {/*  <small>
                                                <img src="img/quote_sign_right.png" alt=""></img>
                                            </small> */}
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="profile">
                                            <div className="pic">
                                                <img className="imagencuadro" src={imagen7} alt="..."></img>
                                            </div>
                                            {/* <h4>texto refrencial</h4>
                                            <span>texto</span> */}
                                        </div>
                                    </div>
                                </div>
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
                    </div>
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
                </div>



                <Footer />
            </>
        )
    }
}
