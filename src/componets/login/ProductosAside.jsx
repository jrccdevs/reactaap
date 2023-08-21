import React, { useState, useEffect, Fragment } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { show_alerta } from './function';
import axios from "axios";



function ProductosAside() {

    const url = 'https://node-alfa.vercel.app/formafarmaceutica'

    //1 - configuramos Los hooks
    const [products, setProducts] = useState([])
    const [id, setId] = useState('')
    const [codigoproducto, setCodigoproducto] = useState('')
    const [nombreproducto, setNombreproducto] = useState('')
    const [principioactivo, setPrincipioactivo] = useState('')
    const [accionterapeutica, setAccionterapeutica] = useState('')
    const [categoria, setCategoria] = useState('')
    const [formafarmaceutica, setFormafarmaceutica] = useState('')
    const [carrucel, setCarrucel] = useState('')
    const [presentacion, setPresentacion] = useState('')
    const [image, setImage] = useState('')
    const [prospecto, setProspecto] = useState('')
    const [operation, setOperation] = useState(1)
    const [title, setTitle] = useState('')



    //2 - fcion para mostrar los datos con axios
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {

        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }


    /* const getProducts = async () => {
        await axios.get(url).then((response) => {
            const data = response.data
            console.log(data)
            setProducts(data)
        })
    }

    useEffect(() => {
        getProducts()
    }, []) */

    //definimos cual modal se va a abriri

    const openModal = (op, id, codigoproducto, nombreproducto, principioactivo, accionterapeutica, categoria, formafarmaceutica, carrucel, presentacion, image, prospecto) => {

        setId('');
        setCodigoproducto('');
        setNombreproducto('');
        setPrincipioactivo('');
        setAccionterapeutica('');
        setCategoria('');
        setFormafarmaceutica('');
        setCarrucel('');
        setPresentacion('');
        setImage(null);
        setProspecto(null);
        setOperation(op);
        if (op === 1) {
            setTitle('Registrar Producto');
        }
        else if (op === 2) {
            setTitle('Editar Producto');
            setId(id);
            setCodigoproducto(codigoproducto);
            setNombreproducto(nombreproducto);
            setPrincipioactivo(principioactivo);
            setAccionterapeutica(accionterapeutica);
            setCategoria(categoria);
            setFormafarmaceutica(formafarmaceutica);
            setCarrucel(carrucel);
            setPresentacion(presentacion);
            setImage(image);
            setProspecto(prospecto);
        }
        window.setTimeout(function () {
            document.getElementById('codigoproducto').focus();
        }, 500);
    }

    //3 - Definimos las columns
    const validar = () => {
        var parametros;
        var metodo;

        if (codigoproducto === '') {
            show_alerta('Ingrese el codigo del Producto')
        }
        else if (nombreproducto.trim() === '') {
            show_alerta('Escribe el Nombre del Producto');
        }
        else if (principioactivo.trim() === '') {
            show_alerta('Escribe el Nombre del Principio Activo');
        }
        else {
            if (operation === 1) {
                parametros = { codigoproducto: codigoproducto, nombreproducto: nombreproducto.trim(), principioactivo: principioactivo.trim(), accionterapeutica: accionterapeutica.trim(), categoria: categoria.trim(), formafarmaceutica: formafarmaceutica.trim(), carrucel: carrucel.trim(), presentacion: presentacion.trim(), image: image.trim(), prospecto: prospecto.trim() };
                metodo = 'POST';
            }
            else {
                parametros = { id: id, codigoproducto: codigoproducto, nombreproducto: nombreproducto.trim(), principioactivo: principioactivo.trim(), accionterapeutica: accionterapeutica.trim(), categoria: categoria.trim(), formafarmaceutica: formafarmaceutica.trim(), carrucel: carrucel.trim(), presentacion: presentacion.trim(), image: image.trim(), prospecto: prospecto.trim() };
                metodo = 'PUT';
            }
            enviarSolicitud(metodo, parametros);
        }
    }

    const enviarSolicitud = async (metodo, parametros) => {
        await axios({ method: metodo, url: url, data: parametros }).then(function (respuesta) {
            var tipo = respuesta.data[0];
            var msj = respuesta.data[1];
            show_alerta(msj, tipo);
            if (tipo === 'success') {
                document.getElementById('btnCerrar').click();
                getProducts();
            }
        })
            .catch(function (error) {
                show_alerta('Error en la solictud', 'error');
                console.log(error)
            });
    }
    //4 - renderizamos la datatable
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <div className="d-grid mx-auto">
                            <button onClick={() => openModal(1)} className="btn btn-dark" data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                <i className='fa-solid fa-circle-plus'></i>Añadir
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row- mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <div className='table-responsive'>
                            <table className='table table-dordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>CODIGO</th>
                                        <th>PRODUCTO</th>
                                        <th>PRINCIPIO ACTIVO</th>
                                        <th>ACCION TERA</th>
                                        <th>CATEGORIA</th>
                                        <th>FORMA FAR</th>
                                        <th>CARRUCEL</th>
                                        <th>PRESENTACION</th>
                                        <th>IMAGE</th>
                                        <th>PROSPECTO</th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {products.map((product, i) => (
                                        <tr key={product.id}>
                                            <td>{(i + 1)} </td>
                                            <td>{product.codigoproducto} </td>
                                            <td>{product.nombreproducto} </td>
                                            <td>{product.principioactivo} </td>
                                            <td>{product.accionterapeutica} </td>
                                            <td>{product.categoria} </td>
                                            <td>{product.formafarmaceutica} </td>
                                            <td>{product.carrucel} </td>
                                            <td>{product.presentacion} </td>
                                            <td>{product.image} </td>
                                            <td>{product.prospecto} </td>
                                            <td>
                                                <button onClick={() => openModal(2, product.id, product.codigoproducto, product.nombreproducto, product.principioactivo, product.accionterapeutica, product.categoria, product.formafarmaceutica, product.carrucel, product.presentacion, product.image, product.prospecto)}
                                                    data-bs-toggle='modal' data-bs-target='#modalProducts' className='btn btn-warning'>
                                                    <i className='fa solid fa-edit'></i>
                                                </button>
                                               &nbsp;
                                               <button className='btn btn-danger'>
                                                    <i className='fa-solid fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div id='modalProducts' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className='h5'>{title} </label>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div className='modal-body'>
                            <input type='hidden' id='id'></input>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input label='Codigo' type='text' id='codigoproducto' className='form-control' placeholder='Codigo' value={codigoproducto}
                                    onChange={(e) => setCodigoproducto(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='nombreproducto' className='form-control' placeholder='Nombre Producto' value={nombreproducto}
                                    onChange={(e) => setNombreproducto(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='principioactivo' className='form-control' placeholder='Principio Activo' value={principioactivo}
                                    onChange={(e) => setPrincipioactivo(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='accionterapeutica' className='form-control' placeholder='accionterapeutica' value={accionterapeutica}
                                    onChange={(e) => setAccionterapeutica(e.target.value)}></input>
                            </div>

                            <div className="input-group mb-3">
                                <label className="block">Categoria</label>
                                <select type="text" id='categoria' placeholder='Categoria' value={categoria} className="form-select" aria-label="Default select example" onChange={(e) => setCategoria(e.target.value)}>
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
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='formafarmaceutica' className='form-control' placeholder='Forma Farmaceutica' value={formafarmaceutica}
                                    onChange={(e) => setFormafarmaceutica(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='carrucel' className='form-control' placeholder='Carrucel' value={carrucel}
                                    onChange={(e) => setCarrucel(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='presentacion' className='form-control' placeholder='Presentacion' value={presentacion}
                                    onChange={(e) => setPresentacion(e.target.value)}></input>
                            </div>
                            <div className="input-group ">
                                <div className="custom-file">
                                    <input id="image"

                                        placeholder='Imagen'
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className="form-control" type="file" />
                                </div>

                            </div>
                            <div className="input-group ">
                                <div className="custom-file">
                                    <input id="prospecto"

                                        value={prospecto}
                                        placeholder='Prospecto'
                                        onChange={(e) => setProspecto(e.target.value)}
                                        className="form-control" type="file" />
                                </div>

                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i>
                                      Guardar
                                </button>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ProductosAside

