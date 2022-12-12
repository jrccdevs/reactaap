import React, { Component } from 'react'
import '../style/Empresa.css'
import Header from './Header'
import Busqueda from './Busqueda'
import Footer from './Footer'
import empresa from "../img/empresa.jpg";
import mision from "../img/mision.png";
import vision from "../img/vision.png";
import valores from "../img/valores.png";

export default class Empresa extends Component {
    render() {
        return (
            <div>
                <Header />
                <Busqueda />
                <div className="container">

                    <div className="row">
                        <p className="h1 text-center mb-4">“Laboratorios ALFA”</p>

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

                        <p className="h1 text-center mb-4">Historia</p>
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
                        {/* <div className="row mt-4">
                            
                            <div className="col-12 col-sm-12 col-md-7 text-center pt-4">
                                <p>El año 1977, la empresa se transforma en Sociedad de Responsabilidad Limitada (S.R.L.) con la integración como socios accionistas de la esposa y los dos hijos del fundador.</p>
                                <p> A principios de la década de los 80's, se trasladan las instalaciones a su nueva planta ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades. </p>
                                <p>  En Abril de 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, iniciando la transformación de S.R.L. a S.A. Asimismo, se constituye en Asunción del Paraguay la Subsidiaria Pharmanest S.A.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 text-center">
                                <img src={empresa} width="100%" height="100%" className="rounded img-fluid" alt="..." />
                            </div>
                        </div> */}
                    </div>




                </div>

                <Footer></Footer>
            </div>
        )
    }
}
