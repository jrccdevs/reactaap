import React, { Component } from 'react'
import '../style/Empresa.css'
import Header from './Header'
import Footer from './Footer'

export default class Empresa extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                        <section className="about-us col-12" id="about-us">

                            <h1>NOSOTROS</h1>
                            <div className="column-one col-lg-4">
                                <div className="circle-one"></div>
                                <h2>MISION</h2>
                                <p>“Laboratorios Alfa es una empresa industrial farmacéutica que tiene el propósito de desarrollar, fabricar y comercializar medicamentos accesibles, efectivos y seguros, que contribuyan a mantener y restablecer la salud de la población boliviana.”</p>

                            </div>

                            <div className="column-two col-lg-4">

                                <div className="circle-two"></div>

                                <h2>VISION</h2>
                                <p>“Queremos ser, en el año 2025, la empresa industrial farmacéutica boliviana, líder de excelencia, que se adapta permanentemente al cambio para satisfacer las necesidades de nuestros clientes.”</p>

                            </div>


                            <div className="column-three col-lg-4">

                                <div className="circle-three"></div>

                                <h2>VALORES</h2>
                                <p>El trabajo en equipo, La fuerza de la verdad. La riqueza del conocimiento. La responsabilidad. El entusiasmo. La lealtad, El respeto.</p>

                            </div>


                        </section>
                    </div>
                    </div>
                </div>
                <section id="testimonials">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="section-title">HISTORIA</h3>
                                <div className="section-title-divider"></div>
                                <p className="section-description">TEXTO AQUI</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="profile">
                                    <div className="pic1"><img src="../../css/img/Imagen4.jpg" alt="" /></div>
                                        <h4>Dr. Santiago Ferrer Alsina</h4>
                                        <span>texto </span>
                                </div>
                            </div>
                            <div className="col-md-9">
                                 <div className="quote">
                                        <b><img src="img/quote_sign_left.png" alt="" /></b> Laboratorios ALFA S.A., nace como empresa unipersonal en Marzo de 1965, fundada por el Dr. Santiago Ferrer Alsina, con el propósito y la visión emprendedora de transformarla posteriormente en una empresa familiar de responsabilidad limitada.
                                          <small><img src="img/quote_sign_right.png" alt="" /></small>
                                 </div>
                            </div>
                        </div>

                                    <div className="row">
                                        <div className="col-md-9">
                                            <div className="quote">
                                                <b><img src="" alt="" /></b> El año 1977, la empresa se transforma en Sociedad de Responsabilidad Limitada (S.R.L.) con la integración como socios accionistas de la esposa y los dos hijos del fundador.

                                                  <small><img src="img/quote_sign_right.png" alt="" /></small>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="profile">
                                                 <div className="pic"><img src="../../css/img/Imagen5.jpg" alt="" /></div>
                                                    <h4>texto referencial</h4>
                                                        <span>Texto</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                                <div className="profile">
                                                    <div className="pic"><img src="../../css/img/Imagen6.jpg" alt="" /></div>
                                                        <h4>texto referencial</h4>
                                                            <span>Texto</span>
                                                </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="quote">
                                                  <b><img src="img/quote_sign_left.png" alt="" /></b>  A principios de la década de los 80's, se trasladan las instalaciones a su nueva planta ubicada en la Plaza Uyuni, donde desarrolla actualmente sus actividades. <small><img src="img/quote_sign_right.png" alt="" /></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                       <div className="col-md-9">
                                             <div className="quote">
                                                    <b><img src="" alt="" /></b>  En Abril de 2015 se incorporan nuevos socios con nuevos aportes de capital y “know-how”, iniciando la transformación de S.R.L. a S.A. Asimismo, se constituye en Asunción del Paraguay la Subsidiaria Pharmanest S.A.
                                                    <small><img src="img/quote_sign_right.png" alt="" /></small>
                                             </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="profile">
                                             <div className="pic"><img src="../../css/img/Imagen7.jpg" alt="" /></div>
                                                  <h4>texto refrencial</h4>
                                                       <span>texto</span>
                                             </div>
                                          </div>
                                        </div>
                                    </div>

                     </section>
                   <Footer></Footer>
                                                            </div>
        )
    }
}
