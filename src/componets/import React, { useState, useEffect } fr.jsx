import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Country() {

    const [formaFarma, setformaFarma] = useState([]);
    const [formafarmaceutica, setCountryid] = useState('');
    const [stetes, setSat] = useState([]);

    const [busqueda, setBusqueda] = useState("");


    useEffect(() => {
        const getcountry = async () => {
            //  const req= await fetch("http://localhost/devopsdeveloper/country");
            const req = await fetch("http://localhost:7000/forma");
            const getres = await req.json();
            console.log(getres);
            setformaFarma(await getres);
        }
        getcountry();
    }, []);


    const handleFormaFarmace = (event) => {
        const getcoutryid = event.target.value;
        setCountryid(getcoutryid);
        event.preventDefault();
    }


    useEffect(() => {

        const getstate = async () => {
            //   const resstate= await fetch(`http://localhost/devopsdeveloper/state/getstate/${countryid }`);
            const resstate = await fetch(`http://localhost:7000/formaFarmaceutica/${formafarmaceutica}`);
            const getst = resstate.json();
            setSat(await getst);
            // console.log(getst);
        }
        getstate();
    }, [formafarmaceutica]);


    const handleChange2 = (e) => {
        setBusqueda(e.target.value);
        buscar(e.target.value);
    };

    let result = [];

    const buscar = (e) => {
        if (!busqueda) {
            result = stetes;
        } else {
            result = stetes.filter((dato) =>
                dato.nombreproducto
                    .toLowerCase()
                    .includes(busqueda.toLocaleLowerCase())
            );
        }
    };

    buscar();
    console.log(result);

    return (
        <Container className="content">
            <section className="col-12 col-sm-6 col-lg-9">
                <form className="d-flex">
                    <input
                        onChange={handleChange2}
                        value={busqueda}
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscador de Productos (x Marca / x P.A.)...."
                        aria-label="Search"
                    />
                    <button className="btn btn-primary" type="submit">
                        s
                    </button>
                </form>
            </section>

            <div className="row">
                <div className="col-sm-12">
                    <div className="row ">
                        <div className="form-group col-md-4">
                            <label className="mb-2">Forma</label>
                            <select name="formaFarma" className="form-control" onChange={(e) => handleFormaFarmace(e)}>
                                <option value={''}>--Mostrar Todos--</option>
                                {/* {
                                    country.map((getcon) => (
                                        <option key={getcon.formafarmaceutica} value={getcon.formafarmaceutica}> {getcon.formafarmaceutica}</option>
                                    ))
                                } */}

                                {/* <option value="0" selected>Mostrar Productos Por:</option> */}
                                <option value="Capsulas">Capsulas</option>
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
                        </div>
                        <section className="col-12 col-sm-12 col-lg-12">
                            <div className="row">
                                <div className="row row-cols-1 row-cols-md-4">
                                    {/* {stetes.map((st) => ( */}
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
    );
}
export default Country;
