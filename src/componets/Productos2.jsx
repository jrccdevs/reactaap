import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BusquedaProducto from "./BusquedaProducto";
import Footer from "./Footer";
import Header from "./Header";
import Pagination from "react-js-pagination";
import "../style/Productos2.css";
import ModalProducto from "./ModalProducto";
import { useLocation } from 'react-router-dom';



export default function Productos2() {



    const [formafarmaceutica, setformafarmaceuticaid] = useState('');
    const [producto, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    //Parametro de selectValue
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const selectedValue = searchParams.get('selectedValue');
    // console.log(selectedValue);

    //Busqueda por el boton 
    const searchText = searchParams.get('searchProcut');
    // console.log(searchText);


    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const navigate = useNavigate();

    const handleFormaFarmace = (event) => {
        const getformafarmaceuticaid = event.target.value;
        setformafarmaceuticaid(getformafarmaceuticaid);
        navigate(`/productos`);
        event.preventDefault();
    }


    useEffect(() => {
        const fetchData = async () => {
            let endpoint = `https://node-alfa.vercel.app/formaFarmaceutica/${formafarmaceutica}`;
            if (selectedValue) {
                endpoint = `https://node-alfa.vercel.app/formaFarmaceutica/${selectedValue}`;
            }
            const response = await fetch(endpoint);
            const data = await response.json();
            setProductos(data);
        };
        fetchData();
    }, [selectedValue, formafarmaceutica, searchText]);


    const handleChange = (e) => {
        navigate(`/productos`);
        setBusqueda(e.target.value);
        buscar(e.target.value);
        e.preventDefault();
        // e.preventDefault();
    };

    let result = [];


    // const buscar = (e) => {
    //     if (!busqueda) {
    //         result = producto;
    //     } else {
    //         result = producto.filter((dato) =>
    //             dato.nombreproducto
    //                 .toLowerCase()
    //                 .includes(busqueda.toLocaleLowerCase())
    //         );
    //     }
    // };

    const buscar = () => {
        if (!busqueda && busqueda.length > 0) {
            result = producto;
        } else {
            result = producto.filter((dato) =>
                dato.nombreproducto
                    .toLowerCase()
                    .includes(busqueda.toLowerCase())
            );
        }

        if (searchText) {
            result = result.filter((dato) =>
                dato.nombreproducto.toLowerCase().includes(searchText.toLowerCase())
            );
        }
    };


    // let searchTextTemp = searchText;

    // const buscar = () => {
    //     if (!busqueda && busqueda.length >= 0) {
    //         navigate(`/productos`);
    //         result = producto;
    //         searchTextTemp = null;
    //     } else {
    //         result = producto.filter((dato) =>
    //             dato.nombreproducto
    //                 .toLowerCase()
    //                 .includes(busqueda.toLowerCase())
    //         );
    //     }

    //     if (searchTextTemp) {
    //         result = result.filter((dato) =>
    //             dato.nombreproducto.toLowerCase().includes(searchTextTemp.toLowerCase())
    //         );
    //     }
    // };

    buscar();

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = result.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <ModalProducto />
            <Header />
            <BusquedaProducto handleChange={handleChange} handleFormaFarmace={handleFormaFarmace} />
            <Container className="content">
                <section className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3 ">


                            {/*   row-cols-xl-4    {result.map((producto) => ( */}
                            {currentItems.map((producto) => (

                                <div className="col flex-nowrap">
                                    <div className="card ">
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
                                                <h5 className="card-title" style={{ textAlign: "left" }} >
                                                   <strong> {producto.nombreproducto}</strong>
                                                </h5>
                                                <h5 className="card-title1" style={{ textAlign: "left" }} >
                                                    {producto.precio}
                                                </h5>
                                                <h5 className="card-title1" style={{ textAlign: "left" }} >
                                                    {producto.presentacion}
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
