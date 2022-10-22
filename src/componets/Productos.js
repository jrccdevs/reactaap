import React from 'react'

import Button from 'react-bootstrap/Button';
import '../style/Productos.css';
//import Header from './Header'
import Footer from './Footer'
import Logochica from '../assets/img/logochica.jpg'
import Calidad from '../assets/img/calidad.png'
import Alfatossin from '../assets/productos/Alfa Tossin.png'
import { FcSearch } from 'react-icons/fc';
import { AiOutlineFunnelPlot } from 'react-icons/ai'
import { GiMedicalThermometer } from 'react-icons/gi'
import { FaTable } from 'react-icons/fa'




export default function Productos(){
    
   
        return (
            <div>
                 
                {/* <Header></Header>*/}
                <div className="barra-superio-producto">
                    
                    <div className="barra-superio-producto-dentro">

                    </div>
                </div>
                <div class="container">
                    <div className="col-lg-12">
                        <div className="row">

                            <section className="col-12 col-sm-6 col-lg-3">
                                <div className="row">
                                    <div className="btn-productos">
                                        <h6>MOSTRAR PRODUCTOS POR:</h6>
                                        <div className=" boton1 col-12 col-sm-6 col-lg-12">

                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Capsulas
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Comprimidos
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Cremas
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Gel
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Gotas
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Granulado
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Inyectable
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Jarabes
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Polvo
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Pomada
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Shampo
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Solucion
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Supositorio
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Suspension
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                Tableta
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <section className="col-12 col-sm-6 col-lg-4">
                                <div className="row">
                                    <div className="btn-productos">
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <a href="#!"><img className="logo_producto" src={Logochica} alt="" /></a>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <div className="div-producto col-12">
                                                <a href="#!"><img className="img-productos" src={Alfatossin} alt="" /></a>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </section>
                            <section className="col-12 col-sm-6 col-lg-5">
                                <div className="row">
                                    <div className="btn-productos2">
                                        <div className="col-12 col-sm-6 col-lg-8">
                                            <a href="#!"><img className="logo_producto2" src={Calidad} alt="" /></a>
                                        </div>

                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <div className="buscador input-group ">
                                                <input type="search" className="buscador form-control " placeholder="Buscador de Productos (x Marca / x P.A.)...." aria-label="Search" aria-describedby="search-addon" />
                                                <div className="lupa"><FcSearch className="lupaicono"></FcSearch></div>

                                            </div>

                                            <h6 className="detalle" style={{ color: 'red' }}><AiOutlineFunnelPlot></AiOutlineFunnelPlot>   Principio Activo:<text style={{ color: 'rgb(248, 149, 149)' }}>  Codeina</text></h6>
                                            <h6 className="detalleprospecto" style={{ color: '#2062f0' }}><GiMedicalThermometer></GiMedicalThermometer>   Accion Terapectica:<text style={{ color: '  #5187fc' }}>  Antitusigeno</text></h6>
                                            <h6 className="detalleprospecto" style={{ color: 'rgb(65, 67, 68)' }}><FaTable></FaTable>    Forma Farmaceutica:<text style={{ color: 'rgb(159, 163, 165)' }}>  Jarabe</text></h6>
                                            <h6 className="detalleprospecto" style={{ color: 'black' }}>Precio:<text style={{ color: 'rgb(78, 78, 78)' }}>  34.60 Bs</text></h6>

                                            <h5 style={{ color: 'green' }}>VER MAS (Prospecto)</h5>
                                        </div>

                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>


                </div>

                <Footer></Footer>
            </div>
        )
    }

