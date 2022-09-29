import React from 'react'
import Empresa1 from '../img/empresa.jpg'
import Productos from '../img/productos.jpg'
import Noticia1 from '../img/noticia1.jpg'
import {  useNavigate } from 'react-router-dom';
import '../style/Navigation.css';





export default function Navigation(){
    const navigate = useNavigate();
    
        return (


            <div className="container">
                <div className="row">
                    <secction className="col-12 col-sm-6 col-lg-6">
                        <div className="row">
                            <div className="btn-menu1 col-lg-6">
                                <div className="imagen1">
                               <img  onClick={()=>navigate("/empresa")}  className="fondo-img" src={Empresa1} alt="" />

                                </div>
                                <div className="texto1">
                                <h6>Las Empresasss</h6> 
                                </div>

                            </div>
                            <div className="btn-menu1 col-lg-6">
                                <div className="imagen1">
                                   <img onClick={()=>navigate("/productos")} className="fondo-img" src={Productos} alt="" />

                                </div>
                                <div className="texto1">
                                    <h6>Productos</h6>
                                </div>

                            </div>
                            <div className="btn-menu2 col-lg-6">

                                <div className="texto1">
                                    <h6>Farmacovigilancia</h6>
                                </div>

                            </div>
                            <div className="btn-menu2 col-lg-6">

                                <div className="texto1">
                                

                                    <a style={{textDecoration: 'none', color: 'black'}} href="./vademecun" target="_blank">Vademecun</a>
                                </div>

                            </div>

                        </div>
                    </secction>
                    <section className="col-12 col-sm-6 col-lg-6">
                        <div className="gallery">
                            
                         <div className="container">
                                <div className="row">


                                    <div className="noticiacol-md-12">
                                        <figure className="effect-marley animate__animated animate__fadeInRight div-img">
                                        <img src={Noticia1} alt="" className="img-responsive" />
                 
                                            <figcaption>
                                                <h4>LAB ALFA</h4>
                                                <p>Texto Aqui.........</p>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        
        )
}


