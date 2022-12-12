import { useEffect, useState } from 'react'
//import {  Link } from 'react-router-dom';
//import { usePosts } from "../context/postContext";
import { Form, Formik } from 'formik'
import { crearProductosRequest, getProductosRequest } from '../api/productos.api'
import Menuadmin from './menuadmin.js'


export default function ProductoAdmin() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        async function loadProductos() {
            const respopnse = await getProductosRequest()
            setProductos(respopnse.data)
        }
        loadProductos();
    }, [])


    return (
        <>
            <div>
                <Menuadmin></Menuadmin>
            </div>
            <Formik
                initialValues={{
                    codigoproducto: '',
                    nombreproducto: '',
                    principioactivo: '',
                    accionterapeutica: '',
                    formafarmaceutica: '',
                    precio: '',
                    presentacion: '',
                    image: null

                }}
                onSubmit={async (values) => {

                    try {
                        const respon = await crearProductosRequest(values)
                        console.log(respon)
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                {({ handleChange, handleSubmit, setFieldValue }) => (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <Form onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label className="block">Codigo Producto</label>
                                                <input
                                                    type="number"
                                                    name="codigoproducto"
                                                    placeholder="Codigo"
                                                    className="form-control" onChange={handleChange}
                                                //  value={values.title}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label className="block">Producto</label>
                                                <input
                                                    type="text"
                                                    name="nombreproducto"
                                                    placeholder="Producto"
                                                    className="form-control" onChange={handleChange}
                                                // value={values.title}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="block">Principio Activo</label>
                                                <input
                                                    type="text"
                                                    name="principioactivo"
                                                    placeholder="Principio Activo"
                                                    className="form-control" onChange={handleChange}
                                                //value={values.title}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="block">Accion Terapeutica</label>
                                                <input
                                                    type="text"
                                                    name="accionterapeutica"
                                                    placeholder="Accion Terapeutica"
                                                    className="form-control" onChange={handleChange}
                                                // value={values.title}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="block">Forma Farmaceutica</label>
                                                <select type="text" name="formafarmaceutica" onChange={handleChange} className="form-select" aria-label="Default select example">
                                                    <option selected>Seleccionar forma farmaceutica</option>
                                                    <option value="CAPSULAS">CAPSULAS</option>
                                                    <option value="COMPRIMIDOS">COMPRIMIDOS</option>
                                                    <option value="CREMAS">CREMAS</option>
                                                    <option value="GEL">GEL</option>
                                                    <option value="GOTAS">GOTAS</option>
                                                    <option value="GRANULADO">GRANULADO</option>
                                                    <option value="INYECTABLE">INYECTABLE</option>
                                                    <option value="JARABE">JARABE</option>
                                                    <option value="POLVO">POLVO</option>
                                                    <option value="POMADA">POMADA</option>
                                                    <option value="SHAMPO">SHAMPO</option>
                                                    <option value="SOLUCION">SOLUCION</option>
                                                    <option value="SUPOSITORIO">SUPOSITORIO</option>
                                                    <option value="SUSPENCION">SUSPENCION</option>
                                                    <option value="TABLETA">TABLETA</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="block">Precio</label>
                                                <input
                                                    type="double"
                                                    name="precio"
                                                    placeholder="Precio"
                                                    className="form-control" onChange={handleChange}
                                                //  value={values.title}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="block">Presentacion</label>
                                                <input
                                                    type="text"
                                                    name="presentacion"
                                                    placeholder="Forma Farmaceutica"
                                                    className="form-control" onChange={handleChange}
                                                // value={values.title}
                                                />
                                            </div>
                                            <div className="input-group ">
                                                <div className="custom-file">
                                                    <input id="fileinput"
                                                        name="image"
                                                        onChange={(e) => setFieldValue('image', e.target.files[0])}
                                                        className="form-control" type="file" />
                                                </div>

                                            </div>
                                            <button
                                                //  onClick={() => setPosts([1, 2, 3])} 
                                                className="btn btn-primary" type="submit">
                                                subir imagen
                                    </button>


                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>producto</th>
                                            <th>forma Farmaceutica</th>
                                            <th>precio</th>
                                            <th>imagen</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        {productos.map(producto => (
                                            <tr key={producto.id} >
                                                <th>{producto.nombreproducto}</th>
                                                <th>{producto.formafarmaceutica}</th>
                                                <th>{producto.precio}</th>
                                                <th>
                                                    <a href={producto.image} target="_blank" className="btn btn-primary" rel="noreferrer">Ver Imagen</a>


                                                </th>

                                            </tr>
                                        ))

                                        }



                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                )}
            </Formik>

        </>
    )

}
