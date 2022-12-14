import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BusquedaProducto from "./BusquedaProducto";
import Footer from "./Footer";
import Header from "./Header";
import Pagination from "react-js-pagination";
import "../style/Productos2.css";


export default function Productos2() {

    const [formafarmaceutica, setformafarmaceuticaid] = useState('');
    const [producto, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFormaFarmace = (event) => {
        const getformafarmaceuticaid = event.target.value;
        setformafarmaceuticaid(getformafarmaceuticaid);
        event.preventDefault();
    }

    useEffect(() => {
        const getstate = async () => {
            const response = await fetch(`https://node-alfa.vercel.app/formaFarmaceutica/${formafarmaceutica}`);
            const getst = response.json();
            setProductos(await getst);
            // console.log(getst);
        }
        getstate();
    }, [formafarmaceutica]);

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        buscar(e.target.value);
    };

    let result = [];


    const buscar = (e) => {
        if (!busqueda) {
            result = producto;
        } else {
            result = producto.filter((dato) =>
                dato.nombreproducto
                    .toLowerCase()
                    .includes(busqueda.toLocaleLowerCase())
            );
        }
    };

    buscar();
    // console.log(result);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <Header />
            <BusquedaProducto handleChange={handleChange} handleFormaFarmace={handleFormaFarmace} />
            <Container className="content">
                <section className="col-12 col-sm-12 col-lg-12">
                    <div className="row">
                        <div className="row row-cols-1 row-cols-md-4">
                            {/* {result.map((producto) => ( */}
                            {currentItems.map((producto) => (

                                <div className="col flex-nowrap">
                                    <div className="card">
                                        <div className="card-body">
                                            <div key={producto.id}>
                                            {/* <div key={producto.id.toString()}> */}
                                                <div className="div-producto col-12">
                                                    <a href="#!">
                                                        <Link to={`/productos/${producto.id}`}>
                                                            <img
                                                                className="img-productos"
                                                                src={producto.image}
                                                                alt=""
                                                            />
                                                        </Link>
                                                    </a>
                                                </div>
                                                <h5 className="card-title" style={{ textAlign: "center" }} >
                                                    {producto.nombreproducto}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {result.length > 0 ? (
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={result.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        activeClassName="active"
                        firstPageText="First"
                        lastPageText="Last"
                        prevPageText="Anterior"
                        nextPageText="Siguiente"
                        innerClass="pagination justify-content-center"
                        itemClass="page-item"
                        linkClass="page-link"
                        disabledClass="disabled"
                        hideDisabled={false}
                        hideNavigation={false}
                        hideFirstLastPages={true}
                        breakLabel="..."
                    />
                ) : (
                    <p className="text-center">No hay productos para mostrar</p>
                )}
            </Container>

            <Footer />
        </>
    );
}
