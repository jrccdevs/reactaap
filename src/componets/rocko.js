

import React, { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../style/Productos.css';
import Header from './Header';
import Busqueda from './Busqueda';
import Footer from './Footer';


import { AiOutlineFunnelPlot } from 'react-icons/ai'
import { GiMedicalThermometer } from 'react-icons/gi'
import { FaTable } from 'react-icons/fa'
import { FaSearch } from "react-icons/fa";
export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 6,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }




    receivedData() {
        axios
            .get(`https://node-alfa.vercel.app/productos`)
            .then(res => {

                const data = res.data;

                console.log(data);

                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <div className="container">
                        <section className="col-12 col-sm-12 col-lg-12">
                            <div className="row">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col d-flex">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="div-producto col-12">
                                                    <a href="#!"><img className="img-productos" src={pd.image} alt="" /></a>
                                                </div>
                                                <h5 className="card-title" style={{ textAlign: 'center' }}>{pd.nombreproducto}</h5>
                                                <h6 className="detalle" style={{ color: 'red' }}><AiOutlineFunnelPlot></AiOutlineFunnelPlot>   Principio Activo:<text style={{ color: 'rgb(248, 149, 149)' }}>  {pd.principioactivo}</text></h6>
                                                <h6 className="detalleprospecto" style={{ color: '#2062f0' }}><GiMedicalThermometer></GiMedicalThermometer>   Accion Terapectica:<text style={{ color: '  #5187fc' }}>  {pd.accionterapeutica}</text></h6>
                                                <h6 className="detalleprospecto" style={{ color: 'rgb(65, 67, 68)' }}><FaTable></FaTable>    Forma Farmaceutica:<text style={{ color: 'rgb(159, 163, 165)' }}> {pd.formafarmaceutica} </text></h6>
                                                <h5 style={{ color: 'green', textAlign: 'center' }}>VER MAS (Prospecto)</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    


    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };


    componentDidMount() {
        this.receivedData()
    }


    render() {
        return (
            <div>
                <Header />
                <Busqueda />
                <div className="container">
                    <div className="col-lg-12">
                        <div className="row">
                            <section className="col-12 col-sm-6 col-lg-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Mostrar Productos Por:</option>
                                    <option value="1">Capsulas</option>
                                    <option value="2">Comprimidos</option>
                                    <option value="3">Cremas</option>
                                    <option value="4">Gel</option>
                                    <option value="5">Gotas</option>
                                    <option value="6">Granulado</option>
                                    <option value="7">Inyectable</option>
                                    <option value="8">Jarabes</option>
                                    <option value="9">Polvo</option>
                                    <option value="10">Pomada</option>
                                    <option value="11">Shampo</option>
                                    <option value="12">Solucion</option>
                                    <option value="13">Supositorio</option>
                                    <option value="14">Suspension</option>
                                    <option value="15">Tableta</option>
                                </select>

                            </section>

                            <section className="col-12 col-sm-6 col-lg-9">
                                <form className="d-flex">
                                    <input onChange={handleChange} value={busqueda}  className="form-control me-2" type="search" placeholder="Buscador de Productos (x Marca / x P.A.)...." aria-label="Search" />
                                    <button className="btn btn-primary" type="submit"><FaSearch></FaSearch></button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
                <Footer />
            </div>

        )
    }
}
