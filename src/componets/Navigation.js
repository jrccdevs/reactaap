import React from 'react'
import Empresa from '../img/imgempresa.png'
import Productos from '../img/imgProductos.png'
import Noticias from '../img/Botonnoticias.png'
import Farmacovigilancia from '../img/imgFarmacovigilancia.png'
import Vademecum from '../img/imgVademecum.png'
import { useNavigate, Link } from 'react-router-dom';

import '../style/Navigation.css';

export default function Navigation() {
    const navigate = useNavigate();

    return (

        <div className="container">
            <div className="row">
                <section className="col-12 col-sm-6 col-lg-6">
                    <div className="row">
                        
                        <div className="col-lg-6 mt-3">
                            <div className="imagen1">
                                <img onClick={() => navigate("/empresa")} className="fondo-img" src={Empresa} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 mt-3">
                            <div className="imagen1">
                                <img onClick={() => navigate("/productos")} className="fondo-img" src={Productos} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-3">
                            <div className="imagen1">
                                <Link to= "/es/farmaco-vigilancia"><img className="fondo-img" src={Farmacovigilancia} alt="" /></Link>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-3">
                            <div className="imagen1">
                            <Link to= "/vademecun"><img className="fondo-img" target="_blank" src={Vademecum} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="col-12 col-sm-6 col-lg-6">
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="imagen1">
                                <img onClick={() => navigate("/empresa")} className="fondo-img" src={Empresa} alt="" />
                            </div>
                        </div>

 
                    </div>
                </section>

{/* 
                <section className="col-12 col-sm-6 col-lg-6">
                    <div className="gallery">

                        <div className="container">
                            <div className="row">


                                <div className="noticiacol-md-12">
                                    <figure className="effect-marley animate__animated animate__fadeInRight div-img">
                                        <img src={Noticias} alt="" className="img-responsive" />

                                        <figcaption>
                                            <h4>LAB ALFA</h4>
                                            <p>Texto Aqui.........</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
            
        </div>

        

    )
}


