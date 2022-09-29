import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import '../style/Productos.css';
import Header from './Header'
import Footer from './Footer'
import Imagen1 from '../img/Imagen1.jpg'


export default class Productos extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div class="container">
                    <div className="col-lg-12">
                        <div className="row">

                            <section className="col-12 col-sm-6 col-lg-3">
                                <div className="row">
                                    <div className="btn-productos">
                                        <div className=" boton1 col-12 col-sm-6 col-lg-12">
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Capsulas</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Comprimidos</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Cremas</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Gel</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Gotas</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Granulado</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Inyectable</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Jarabes</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Polvo</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Pomada</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Shampo</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Solucion</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Supositorio</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Suspension</h6>
                                            </Button>
                                            <Button className="btn-btn" variant="outline-primary" type="checkbox">
                                                <h6>Tableta</h6>
                                            </Button>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <Button variant="outline-primary" type="checkbox">
                                                <h6>comprimidos</h6>
                                            </Button>
                                        </div>

                                    </div>

                                </div>
                            </section>
                            <section className="col-12 col-sm-6 col-lg-6">
                                <div className="row">
                                    <div className="btn-productos">
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <a href="/"><img className="logo_producto" src={Imagen1} alt="" /></a>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <div className="div-producto col-12">

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </section>
                            <section className="col-12 col-sm-6 col-lg-3">
                                <div className="row">
                                    <div className="btn-productos">
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <a href="/"><img className="logo_producto" src={Imagen1} alt="" /></a>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <div className="buscador input-group rounded">
                                                <input type="search" className="buscador form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                                <span className="input-group-text border-0" id="search-addon">
                                                    <i className="fas fa-search"></i>
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </section>
                        </div>
                    </div>


                </div>
                <h1>productos</h1>
                <Footer></Footer>
            </div>
        )
    }
}
