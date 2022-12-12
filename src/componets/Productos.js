import React, { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { getProductosRequest } from '../api/productos.api'
import Button from 'react-bootstrap/Button';
import '../style/Productos.css';
import Header from './Header'
import Footer from './Footer'
import Busqueda from './Busqueda';

//import Alfatossin from '../assets/productos/Alfa Tossin.png'
import { FcSearch } from 'react-icons/fc';
import { AiOutlineFunnelPlot } from 'react-icons/ai'
import { GiMedicalThermometer } from 'react-icons/gi'
import { FaTable } from 'react-icons/fa'




export default function Productos() {

    const [productos, setProductos] = useState([])

    const [busqueda, setBusqueda] = useState("")

    useEffect(() => {
        async function loadProductos() {
            const respopnse = await getProductosRequest()
            setProductos(respopnse.data)

        }
        loadProductos();
    }, [])

    const handleChange = e => {
        setBusqueda(e.target.value);
        buscar(e.target.value)
    }

    let result = []
    const buscar = e => {
        if (!busqueda) {
            result = productos
        } else {
            result = productos.filter((dato) =>
                dato.principioactivo.toLowerCase().includes(busqueda.toLocaleLowerCase())
            )
        }
    }
    buscar();

    console.log(result)
    /*  const filtrar = (terminobusqueda) => {
          var resbusqueda = productos.filter((elemento) => {
              if (elemento.nombreproducto.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
                  || elemento.formafarmaceutica.toString().toLowerCase().includes(terminobusqueda.toLowerCase())
              ) 
                  return (elemento);
              
          });
          setProductos(resbusqueda);
      }*/
    return (
        <Fragment>

            {/* <Header></Header>*/}
            <Header />
            <Busqueda />
            <div className="container">
                <div className="col-lg-12">
                    <div className="row">

                        <section className="col-12 col-sm-6 col-lg-3">
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
                        </section>
                        <section className="col-12 col-sm-6 col-lg-4">
                            <div className="row">
                                <div className="btn-productos">
                                   

                                    {result.map((producto) => (
                                        <div className="col-12 col-sm-6 col-lg-12">
                                            <div className="div-producto col-12">
                                                <a href="#!"><img className="img-productos" src={producto.image} alt="" /></a>

                                            </div>
                                        </div>

                                    ))

                                    }

                                </div>

                            </div>
                        </section>
                        <section className="col-12 col-sm-6 col-lg-5">
                            <div className="row">

                                <div className="btn-productos2">
                                    
                                    <div className="col-12 col-sm-6 col-lg-12">
                                        <div className="buscador input-group ">
                                            <form className="d-flex" role="search">

                                                <input onChange={handleChange} type="search" value={busqueda} className="buscador form-control me-8 " placeholder="Buscador de Productos (x Marca / x P.A.)...." aria-label="Search" aria-describedby="search-addon" />
                                                <Button className="lupa" type="submit"><FcSearch className="lupaicono"></FcSearch></Button>
                                            </form>
                                        </div>
                                    </div>

                                    {result.map((producto) => (

                                        <div key={producto.id} >
                                            <h6 className="detalle" style={{ color: 'red' }}><AiOutlineFunnelPlot></AiOutlineFunnelPlot>   Principio Activo:<text style={{ color: 'rgb(248, 149, 149)' }}>  {producto.principioactivo}</text></h6>
                                            <h6 className="detalleprospecto" style={{ color: '#2062f0' }}><GiMedicalThermometer></GiMedicalThermometer>   Accion Terapectica:<text style={{ color: '  #5187fc' }}>  {producto.accionterapeutica}</text></h6>
                                            <h6 className="detalleprospecto" style={{ color: 'rgb(65, 67, 68)' }}><FaTable></FaTable>    Forma Farmaceutica:<text style={{ color: 'rgb(159, 163, 165)' }}> {producto.formafarmaceutica} </text></h6>
                                            <h5 style={{ color: 'green' }}>VER MAS (Prospecto)</h5>
                                        </div>


                                    ))

                                    }

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

                                </div>
                            </div>
                        </section>
                    </div>
                </div>


            </div>

            <Footer></Footer>
        </Fragment >
    )
}

