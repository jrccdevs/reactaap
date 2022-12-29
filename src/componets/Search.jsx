import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Input, Card } from "antd";
import { Link, Routes } from "react-router-dom";
import { getProductosRequest } from "../api/productos.api";
import Form from "react-bootstrap/Form";
import "../style/Busca.css";


function Search() {

    const [productos, setProductos] = useState([]);
    const [productosMatch, etProductosMatch] = useState([]);


    // useEffect(() => {
    //     const loadCountries = async () => {
    //         const response = await axios.get("http://localhost:7000/productos");
    //         setProductos(response.data);
    //     };

    //     loadCountries();
    // }, []);


    useEffect(() => {
        async function loadProductos() {
            const response = await getProductosRequest();
            // const response = await fetch(`http://localhost:7000/formaFarmaceutica/solucion`);
            setProductos(response.data);
        }
        loadProductos();
    }, []);


    console.log(productos);

    const buscarProductos = (text) => {
        if (!text) {
            etProductosMatch([]);
        } else {
            let matches = productos.filter((country) => {
                const regex = new RegExp(`${text}`, "gi");
                return country.nombreproducto.match(regex) || country.principioactivo.match(regex);
            });
            etProductosMatch(matches);
        }
    };


    return (
        <div className='container'>
            <h2>Country Search</h2>

            <Input
                style={{ width: "40%", marginTop: "10px" }}
                placeholder="Enter country or Capital"
                onChange={(e) => buscarProductos(e.target.value)}
            />


            {productosMatch && productosMatch.map((item, index) => (
                <div key={index} style={{ marginLeft: "35%", marginTop: "5px" }}>
                    <div key={item.id}>
                        <Card style={{ width: "50%" }} title={`Country: ${item.nombreproducto}`}>
                            <Link to={`/productos/${item.id}`}>
                                <img
                                    style={{ width: "50%",height: "50%" }}
                                    className="img-productos"
                                    src={item.image}
                                    alt=""
                                />
                            </Link>
                        </Card>
                    </div>
                </div>
            ))}

        </div>


        // <div className='container'>
        //     <div className='row justify-content-center'>

        //         <Input
        //         style={{ width: "40%", marginTop: "10px", paddingTop: "15px" }}
        //         placeholder="Buscar producto"
        //         onChange={(e) => buscarProductos(e.target.value)}
        //     />
        //         <section className="col-12 col-sm-6 col-lg-6">
        //             <Form class="busca">
        //                 <Form.Control
        //                     onChange={(e) => buscarProductos(e.target.value)}
        //                     type="search"
        //                     placeholder="Buscador de ProductosER"
        //                     className="col-lg-6"
        //                     aria-label="Search"
        //                 />

        //                 <div class="">
        //                     {productosMatch && productosMatch.map((item, index) => (
        //                         <div class="" key={index} style={{ marginLeft: "35%", marginTop: "5px" }}>
        //                             <div key={item.id}>

        //                                 <div class="card mb-3 " style={{ maxWidth: "100%" }}>
        //                                     <div class="row g-0">
        //                                         <div class="col-md-4">
        //                                             <Link to={`/productos/${item.id}`}>
        //                                                 <img src={item.image} class="img-fluid rounded-start" alt="..." />
        //                                             </Link>
        //                                         </div>
        //                                         <div class="col-md-8">
        //                                             <div class="card-body">
        //                                                 <h5 class="card-title">{item.nombreproducto}</h5>
        //                                                 <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //                                                 <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </Form>
        //         </section>
        //     </div >
        // </div >
    );
}


export default Search;
