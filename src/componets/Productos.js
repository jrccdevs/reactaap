import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { getProductosRequest } from "../api/productos.api";
import Button from "react-bootstrap/Button";
import "../style/Productos.css";
import Header from "./Header";
import Footer from "./Footer";
import Busqueda from "./Busqueda";
// import Rodrigo from "./rodrigo";

//import Alfatossin from '../assets/productos/Alfa Tossin.png'
import { FcSearch } from "react-icons/fc";
import { AiOutlineFunnelPlot } from "react-icons/ai";
import { GiMedicalThermometer } from "react-icons/gi";
import { FaTable } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import ReactPaginate from "react-paginate";

// import { PaginationControl } from 'react-bootstrap-pagination-control';
// import Pagination from 'react-bootstrap/Pagination';

export default function Productos() {
  // const [page, setPage] = useState(1)

  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    async function loadProductos() {
      const response = await getProductosRequest();
      setProductos(response.data);
    }
    loadProductos();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    buscar(e.target.value);
  };

  let result = [];

  const buscar = (e) => {
    if (!busqueda) {
      result = productos;
    } else {
      result = productos.filter((dato) =>
        dato.principioactivo
          .toLowerCase()
          .includes(busqueda.toLocaleLowerCase())
      );
    }
  };

  buscar();

  console.log(result);

  // if (result == 0) {
  //     console.log("RODRIGO ");
  // };
  /*  const filtrar = (terminobusqueda) => {
            var resbusqueda = productos.filter((elemento) => {
                if (elemento.nombreproducto.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
                    || elemento.formafarmaceutica.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
                ) 
                    return (elemento);
                
            });
            setProductos(resbusqueda);
        }*/

  // let active = 1;
  // // let items = [];
  // for (let number = 1; number <= 5; number++) {
  //     result.push(
  //         <Pagination.Item key={number} active={number === active}>
  //             {number}
  //         </Pagination.Item>,
  //     );
  // }
  // const unreadMessages = "hola";

  // if (result.length > 0) {
  // }else {
  //     console.log("RODRIGO    ")
  // }

  return (
    <Fragment>
      <Header />

      <Busqueda handleChange={handleChange} />

      {/* <Rodrigo handleChange={handleChange}></Rodrigo> */}

      <div className="container">
        {/* <h2>
                    You have {mombre} unread messages.
                </h2> */}
        <div className="col-lg-12">
          <div className="row">
            
            {/* <section className="col-12 col-sm-6 col-lg-3">
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
                <input
                  onChange={handleChange}
                  value={busqueda}
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscador de Productos (x Marca / x P.A.)...."
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  <FaSearch></FaSearch>
                </button>
              </form>
            </section> */}

            {/* <section className="col-12 col-sm-6 col-lg-6">
                            <div className="btn-productos2">
                                <form className="d-flex" role="search">
                                    <input onChange={handleChange} type="search" value={busqueda} className="buscador form-control me-8 " placeholder="Buscador de Productos (x Marca / x P.A.)...." aria-label="Search" aria-describedby="search-addon" />
                                    <Button className="lupa" type="submit"><FcSearch className="lupaicono"></FcSearch></Button>
                                </form> */}

            {/*  {result.find(producto => (
                                       
                                            <div key={producto.id} >
                                        <h6 className="detalle" style={{ color: 'red' }}><AiOutlineFunnelPlot></AiOutlineFunnelPlot>   Principio Activo:<text style={{ color: 'rgb(248, 149, 149)' }}>  {producto.principioactivo}</text></h6>
                                        <h6 className="detalleprospecto" style={{ color: '#2062f0' }}><GiMedicalThermometer></GiMedicalThermometer>   Accion Terapectica:<text style={{ color: '  #5187fc' }}>  {producto.accionterapeutica}</text></h6>
                                        <h6 className="detalleprospecto" style={{ color: 'rgb(65, 67, 68)' }}><FaTable></FaTable>    Forma Farmaceutica:<text style={{ color: 'rgb(159, 163, 165)' }}> {producto.formafarmaceutica} </text></h6>
                                        <h5 style={{ color: 'green' }}>VER MAS (Prospecto)</h5>
                                    </div>
                                     ))
                                    }
                                    {console.log(result.find)} */}
            {/* 
                            </div>
                        </section> */}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="row">
            {/* <section className="col-12 col-sm-12 col-lg-2 mt-4">
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
                        </section> */}

            <section className="col-12 col-sm-12 col-lg-12">
              <div className="row">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {result.map((producto) => (
                    <div className="col d-flex">
                      <div className="card">
                        <div className="card-body">
                          <div key={producto.id}>
                            <div className="div-producto col-12">
                              <a href="#!">
                                <img
                                  className="img-productos"
                                  src={producto.image}
                                  alt=""
                                />
                              </a>
                            </div>
                            <h5
                              className="card-title"
                              style={{ textAlign: "center" }}
                            >
                              {producto.nombreproducto}
                            </h5>
                            <h6 className="detalle" style={{ color: "red" }}>
                              <AiOutlineFunnelPlot></AiOutlineFunnelPlot>{" "}
                              Principio Activo:
                              <text style={{ color: "rgb(248, 149, 149)" }}>
                                {" "}
                                {producto.principioactivo}
                              </text>
                            </h6>
                            <h6
                              className="detalleprospecto"
                              style={{ color: "#2062f0" }}
                            >
                              <GiMedicalThermometer></GiMedicalThermometer>{" "}
                              Accion Terapectica:
                              <text style={{ color: "  #5187fc" }}>
                                {" "}
                                {producto.accionterapeutica}
                              </text>
                            </h6>
                            <h6
                              className="detalleprospecto"
                              style={{ color: "rgb(65, 67, 68)" }}
                            >
                              <FaTable></FaTable> Forma Farmaceutica:
                              <text style={{ color: "rgb(159, 163, 165)" }}>
                                {" "}
                                {producto.formafarmaceutica}{" "}
                              </text>
                            </h6>
                            <h5 style={{ color: "green", textAlign: "center" }}>
                              VER MAS (Prospecto)
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* <PaginationControl
                        page={result}
                        between={2}
                        total={20}
                        limit={5}
                        changePage={(result) => {
                            setPage(result);
                            console.log("paginadoe"+result)
                        }}
                        ellipsis={1}
                    /> */}

          {/* 
                    <div>
                        <Pagination size="lg">{result}</Pagination>
                    </div> */}
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
}
