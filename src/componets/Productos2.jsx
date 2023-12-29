import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BusquedaProducto from "./BusquedaProducto";
import Footer from "./Footer";
//import Header from "./Header";
import CarrucelHeader from "./HeaderCarrucel";
import Pagination from "react-js-pagination";
import "../style/Productos2.css";
/* import "../style/Header.css"; */
import ModalProducto from "./ModalProducto";
import { useLocation } from 'react-router-dom';
import ChicaAlfa from "../img/ChicaALFA.JPG";

function useKey(key, cb) {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        function handle(event) {
            if (event.code === key) {
                callbackRef.current(event)
            }
        }
        document.addEventListener("keypress", handle);
        return () => document.removeEventListener("keypress", handle);
    }, [key]);
}


export default function Productos2() {

    const isMobile = window.innerWidth <= 768;

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
    // const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);


    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };


    const navigate = useNavigate();

    /* const handleFormaFarmace = (event) => {
        const getformafarmaceuticaid = event.target.value;
        setformafarmaceuticaid(getformafarmaceuticaid);
        navigate(`/productos`);
        event.preventDefault();
    }
 */ 

    const handleFormaFarmace = (event) => {
        const getformafarmaceuticaid = event.target.value;
        const selectedValue = event.target.value;
        setformafarmaceuticaid(getformafarmaceuticaid);
        
        navigate(`/productos?page=${selectedValue}&selectedValue=${getformafarmaceuticaid}&page=1`);
        currentPage([]);
         window.scrollTo({
            top: 0,
            behavior: 'smooth', // Esto hará que el desplazamiento sea suave
          });
        event.preventDefault();
    }

    // useEffect(() => {
    //     navigate(`/productos?page=${currentPage}`);
    // }, [currentPage, navigate]);

    // const currentPageFromURL = searchParams.get('page');
    // const [currentPage, setCurrentPage] = useState(currentPageFromURL ? parseInt(currentPageFromURL) : 1);


    const currentPageFromURL = parseInt(searchParams.get('page')) || 1;

    const [currentPage, setCurrentPage] = useState(currentPageFromURL);


    const handlePageChange = (pageNumber) => {
         setCurrentPage(pageNumber);
        navigate(`/productos?page=${pageNumber}`);
 
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Esto hará que el desplazamiento sea suave
          });
    };

    // useEffect(() => {
    //     setCurrentPage(currentPageFromURL);

    //   }, [currentPageFromURL]);

    useEffect(() => {
        setCurrentPage(currentPageFromURL);
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
    }, [selectedValue, formafarmaceutica, searchText, currentPageFromURL]);


    const handleChange = (e) => {
        navigate(`/productos`);
        setBusqueda(e.target.value);
        buscar(e.target.value);
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Esto hará que el desplazamiento sea suave
          });
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
    const normalizeText = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
      

      const buscar = () => {
       
        if (!busqueda || busqueda.length === 0) {
          result = producto;
        } else {
          const normalizedBusqueda = normalizeText(busqueda.toLowerCase());
      
          result = producto.filter((dato) =>
            normalizeText(dato.principioactivo.toLowerCase()).includes(normalizedBusqueda) ||
            normalizeText(dato.nombreproducto.toLowerCase()).includes(normalizedBusqueda)
          );
        }
      
        if (searchText) {
          const normalizedSearchText = normalizeText(searchText.toLowerCase());
      
          result = result.filter((dato) =>
            normalizeText(dato.principioactivo.toLowerCase()).includes(normalizedSearchText) ||
            normalizeText(dato.nombreproducto.toLowerCase()).includes(normalizedSearchText)
          );
        }
      
        // Resto de tu lógica...
      
        return result;
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
    /*    useEffect(() => {
         // Guardar la página actual en LocalStorage
   localStorage.setItem( currentPage);
   
          return () => {
            // Recuperar la página actual de LocalStorage
   const currentPage = localStorage.getItem(currentPage);
    
           };
         }, []); */

    useKey("Enter", handleChange)
    return (
        <>
            <ModalProducto />
            <div className="container-fluid" style={{ backgroundColor: "white", position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "999" }}>
                <div className="row">

                    <div className="col-md-3" style={{ backgroundColor: "white", height: "auto" }}>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img className="logoAlfaprueba" style={{ width: "100%", height: "auto", paddingTop: "7px" }} src={ChicaAlfa} alt="" />
                        </Link>
                    </div>

                    <div className="col-md-9" style={{ marginRight: "0px" }}>

                        <div className="carrucel-header" style={{ backgroundColor: "white" }}>
                            <CarrucelHeader />
                        </div>


                        <div className="busqueda-principal" style={{ backgroundColor: "white" }}>
                            <BusquedaProducto handleChange={handleChange} handleFormaFarmace={handleFormaFarmace} />
                        </div>
                    </div>
                </div>
            </div>

            <Container className="content" style={{ overflow: "hidden", margin: "150px auto 0px" }}>
                <section className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-4 row-cols-lg-4 ">


                            {/*   row-cols-xl-4    {result.map((producto) => ( */}
                            {currentItems.map((producto) => (

                                <div className="col flex-nowrap">
                                    <div className="card ">
                                        <div className="card-body">
                                            <div key={producto.id}>
                                                {/* <div key={producto.id.toString()}> */}
                                                <div className="div-producto col-12">
                                                    <a href="#!">
                                                        <Link className="cover" to={`/productos/${producto.id}/page/${currentPage}`} onClick={() => window.scrollTo(0, 0)}>
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
                                                </h5><br></br><br></br>
                                                <h5 className="card-title1" style={{ textAlign: "left", color: "rgb(65, 67, 68)" }} >
                                                    {producto.precio}
                                                </h5>
                                                <h5 className="card-title1" style={{ textAlign: "left", color: "rgb(65, 67, 68)" }} >
                                                    {producto.formafarmaceutica}
                                                </h5>
                                                <h5 className="card-title1" style={{ textAlign: "left", color: "rgb(65, 67, 68)" }} >
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
                <section className="col-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12 d-flex justify-content-center" style={{ maxWidth: '100%' }}>
                                {result.length > 0 ? (
                                    
                                    <Pagination
                                        activePage={currentPage}
                                        itemsCountPerPage={ itemsPerPage} // Ajustar el número de elementos por página
                                        totalItemsCount={result.length}
                                        pageRangeDisplayed={isMobile ? 3 : 5} // Ajustar el rango de páginas mostradas
                                     
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
                                        activeLabel='(current)'
                                        
                                    />
                                ) : (
                                        <p className="text-center">No hay productos para mostrar</p>
                                    )}
                             </div>
                        </div>
                    </div>
                </section>
            </Container>
            <div className="principal-footer">
                <Footer />
            </div>

        </>
    );
}