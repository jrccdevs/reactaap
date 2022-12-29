import React, { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BusquedaProducto from "./BusquedaProducto";
import Footer from "./Footer";
import Header from "./Header";

export default function Productos2() {

    const [formafarmaceutica, setformafarmaceuticaid] = useState('');
    const [producto, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");



    const handleFormaFarmace = (event) => {
        const getformafarmaceuticaid = event.target.value;
        setformafarmaceuticaid(getformafarmaceuticaid);
        event.preventDefault();
    }

    useEffect(() => {
        const getstate = async () => {
            const response = await fetch(`http://localhost:7000/formaFarmaceutica/${formafarmaceutica}`);
            const getst = response.json();
            setProductos(await getst);
            // console.log(getst);
            if (getst.length > 0) {
                console.log("rodrigo");
            }
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
    console.log(result);

    return (

        <Fragment>
            <Header />
            <BusquedaProducto handleChange={handleChange} handleFormaFarmace={handleFormaFarmace} />
            <Container className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row ">
                            {/* <div className="form-group col-md-4">
                                <label className="mb-2">Forma</label>
                                <select name="formaFarma" className="form-control" onChange={(e) => handleFormaFarmace(e)}>
                                    <option value={''}>--Mostrar Todos--</option> */}
                            {/* {
                                    country.map((getcon) => (
                                        <option key={getcon.formafarmaceutica} value={getcon.formafarmaceutica}> {getcon.formafarmaceutica}</option>
                                    ))
                                } */}

                            {/* <option value="0" selected>Mostrar Productos Por:</option> */}
                            {/* <option value="Capsulas">Capsulas</option>
                                    <option value="Comprimidos">Comprimidos</option>
                                    <option value="Cremas">Cremas</option>
                                    <option value="Gel">Gel</option>
                                    <option value="Gotas">Gotas</option>
                                    <option value="Granulado">Granulado</option>
                                    <option value="Inyectable">Inyectable</option>
                                    <option value="Jarabes">Jarabes</option>
                                    <option value="Polvo">Polvo</option>
                                    <option value="Pomada">Pomada</option>
                                    <option value="Shampo">Shampo</option>
                                    <option value="Solucion">Solucion</option>
                                    <option value="Supositorio">Supositorio</option>
                                    <option value="Suspension">Suspension</option>
                                    <option value="Tableta">Tableta</option>

                                </select>
                            </div> */}
                            <section className="col-12 col-sm-12 col-lg-12">
                                <div className="row">
                                    <div className="row row-cols-1 row-cols-md-4">
                                        {/* {producto.map((st) => ( */}
                                        {result.map((producto) => (
                                            <div className="col flex-nowrap">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div key={producto.id}>
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
                        </div>

                    </div>
                </div>
            </Container>
            <Footer></Footer>

        </Fragment>
    );
}
