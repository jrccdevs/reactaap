
import React, { useEffect } from 'react';
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaCaretDown, FaListAlt, FaProductHunt } from 'react-icons/fa';
import Pagination from "react-js-pagination";
import Productosaside from "./login/ProductosAside"

import axios from 'axios';
import { useNavigate } from 'react-router';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import "../style/PanelControl.css";
import FooterControl from './login/FooterControl';
import ContentControl from './login/ContentControl';
import AsideControl from './login/AsideControl';
import HeaderControl from './login/HeaderControl';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { actualizarProductosRequest, crearProductosRequest, deleteProductoRequest, getProductosIdRequest } from '../api/productos.api';

function PanelControl() {

  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)

  const [currentContent, setCurrentContent] = useState('dashboard');
  const [currentImage, setCurrentImage] = useState('dashboard');
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const cerrarSesion = async () => {
    console.log(" cerrando sesion")
    await axios.get(`https://node-alfa.vercel.app/logout`)
      .then((result) => {
        console.log("cerrado", result.data, result.status, result.text)
        //return <Redirect to="/" />;
        result.clear();
        navigate("/../login");
      })

      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const loadProductos = async () => {
      // const response = await fetch(`http://localhost:7000/formaFarmaceutica/`);
      const response = await fetch(`https://node-alfa.vercel.app/formaFarmaceutica/`);
      const data = response.json();
      setProductos(await data);
    }
    loadProductos();
  }, []);

  useEffect(() => {
    document.body.classList.add("panel-control-body");
    return () => {
      document.body.classList.remove("panel-control-body");
    };
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [showModal, setShowModal] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);

  const handleRegistrar = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalEditar = () => {
    setShowModalEditar(false);
  };


  const loadProductos = async () => {
    // const response = await fetch(`http://localhost:7000/formaFarmaceutica/`);
    const response = await fetch(`https://node-alfa.vercel.app/formaFarmaceutica/`);
    const data = response.json();
    setProductos(await data);
  }

  const [productoPost, setProductoPost] = useState({
    codigoproducto: '',
    nombreproducto: '',
    principioactivo: '',
    accionterapeutica: '',
    categoria: '',
    formafarmaceutica: '',
    carrucel: '',
    presentacion: '',
    image: null,   //img
    prospecto: null,  //pdf
  });


  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setProductoPost({ ...productoPost, [name]: newValue });
  };

  const resetForm = () => {
    setProductoPost({
      codigoproducto: '',
      nombreproducto: '',
      principioactivo: '',
      accionterapeutica: '',
      categoria: '',
      formafarmaceutica: '',
      carrucel: '',
      presentacion: '',
      image: null,
      prospecto: null,
    });
  };

  const validateForm = () => {
    if (
      !productoPost.codigoproducto ||
      !productoPost.nombreproducto ||
      !productoPost.principioactivo ||
      !productoPost.accionterapeutica ||
      !productoPost.formafarmaceutica ||
      !productoPost.categoria ||
      !productoPost.carrucel ||
      !productoPost.presentacion ||
      !productoPost.image ||
      !productoPost.prospecto
    ) {
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: '"Por Favor, llene todos los campos son obligatorios."',
        showConfirmButton: true,
      })
      return false;
    }
    return true;
  };

  const validateFormEditar = () => {
    if (
      !productoPut.codigoproducto ||
      !productoPut.nombreproducto ||
      !productoPut.principioactivo ||
      !productoPut.accionterapeutica ||
      !productoPut.formafarmaceutica ||
      !productoPut.categoria ||
      !productoPut.carrucel ||
      !productoPut.presentacion ||
      !productoPut.image ||
      !productoPut.prospecto
    ) {
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: '"Por Favor, llene todos los campos son obligatorios."',
        showConfirmButton: true,
      })
      return false;
    }
    return true;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await crearProductosRequest(productoPost);
      const result = await MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'El producto se registró exitosamente.',
        showConfirmButton: true,
      });
      if (result.isConfirmed) {
        setShowModal(false);
        resetForm();
        loadProductos();
      }
    } catch (error) {
      console.error('Error al registrar el producto:', error);
    }
  };


  const [productoPut, setProductoPut] = useState({
    id: 0,
    codigoproducto: '',
    nombreproducto: '',
    principioactivo: '',
    accionterapeutica: '',
    categoria: '',
    formafarmaceutica: '',
    carrucel: '',
    presentacion: '',
    image: null,   //img
    prospecto: null,  //pdf
  });


  const obtenerDetallesProducto = async (idProducto) => {
    try {
      const producto = await getProductosIdRequest(idProducto);
      setProductoPut({
        ...productoPut,
        id: producto[0].id,
        codigoproducto: producto[0].codigoproducto,
        nombreproducto: producto[0].nombreproducto,
        principioactivo: producto[0].principioactivo,
        accionterapeutica: producto[0].accionterapeutica,
        categoria: producto[0].categoria,
        formafarmaceutica: producto[0].formafarmaceutica,
        carrucel: producto[0].carrucel,
        presentacion: producto[0].presentacion,
        image: producto[0].image,
        prospecto: producto[0].prospecto
      });
    } catch (error) {
      console.error("Error al obtener los detalles del producto:", error);
    }
  };


  const handleEditar = (id) => {
    setShowModalEditar(true);
    obtenerDetallesProducto(id);
    setProductoPut({ ...productoPut, image: null });

  };

  const handleSubmitEditar = async (e) => {
    e.preventDefault();
    if (!validateFormEditar()) {
      return;
    }
    try {
      await actualizarProductosRequest(productoPut, productoPut.id);
      const result = await MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'El producto se actualizo exitosamente.',
        showConfirmButton: true,
      });
      if (result.isConfirmed) {
        setShowModalEditar(false);
        resetForm();
        loadProductos();
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const handleInputChangeEditar = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setProductoPut({ ...productoPut, [name]: newValue });
  };


  const handleEliminar = async (id) => {
    try {
      const result = await MySwal.fire({
        title: '¿Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonColor: "#e72323",
        confirmButtonColor: "#008000",
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      });
      if (result.isConfirmed) {
        await deleteProductoRequest(id);
        MySwal.fire(
          '¡Eliminado!',
          'El producto ha sido eliminado exitosamente',
          'success'
        );
        loadProductos();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
    
      <div className="panel-control-container">

        <div className="container-fluid scroll-x-hidden">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">Laboratorio ALFA</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                  

                  <li className="nav-item">
                    <Link
                      to="/panelControl/producto"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('panelControl/producto')}
                    >
                      <i><FaProductHunt /></i> <span className="ms-1 d-none d-sm-inline">Productos</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/panelControl/imagenes"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('panelControl/imagenes')}
                    >
                      <i><FaProductHunt /></i> <span className="ms-1 d-none d-sm-inline">Imagenes</span>
                    </Link>
                  </li>

                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a href="/#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">ADMIN</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="/#">Perfil</a></li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <Button
                      fullWidth
                      variant='contained'
                      className="login-button"
                      onClick={cerrarSesion}
                    >
                      Cerrar Sesion
                    </Button>   </ul>
                </div>
              </div>
            </div>
            
            <div className="col py-3" id="content">
            {currentContent === 'panelControl/imagenes' && (
                  <div>
                 
                <Productosaside></Productosaside>
                </div>
                  )}
              {currentContent === 'dashboard' && (
                <h1>Laboratorios Alfa</h1>
              )}
              {currentContent === 'panelControl/producto' && (

                <div className="my-4 mx-4">
                  <h2>Productos</h2>

                  <div className="my-4 float-right mx-4">
                    <Button onClick={() => handleRegistrar()} variant="primary">Registrar</Button>
                  </div>
                  <table className="table mt-4">
                    <thead>
                      <tr>
                        <th scope="col">Codigo</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Forma Farmaceutica</th>
                        <th scope="col">Presentacion</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((producto, index) => (
                        <tr key={index}>
                          <td>{producto.codigoproducto}</td>
                          <td>{producto.nombreproducto}</td>
                          <td>{producto.categoria}</td>
                          <td>{producto.presentacion}</td>
                          <td>
                            <img className="productoImg" src={producto.image} alt={producto.nombreproducto} style={{height:"30px", width:"30px"}} />
                          </td>
                          <td>
                            <button type="button" class="btn btn-primary btn-sm mx-2" onClick={() => handleEditar(producto.id)} >Editar</button>
                            <button type="button" class="btn btn-danger btn-sm" onClick={() => handleEliminar(producto.id)} >Eliminar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {productos.length > 0 ? (
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={itemsPerPage}
                      totalItemsCount={productos.length}
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

                  {/* Modal */}
                  <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>Registrar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form >
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Codigo</label>
                            <input type="text" className="form-control" name="codigoproducto" value={productoPost.codigoproducto} onChange={handleInputChange} />
                          </div>
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="nombreproducto" value={productoPost.nombreproducto} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Princio Activo</label>
                            <input type="text" className="form-control" name="principioactivo" value={productoPost.principioactivo} onChange={handleInputChange} />
                          </div>
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Accion Terapeutica</label>
                            <input type="text" className="form-control" name="accionterapeutica" value={productoPost.accionterapeutica} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Forma Farmaceutica</label>
                            <input type="text" className="form-control" name="formafarmaceutica" value={productoPost.formafarmaceutica} onChange={handleInputChange} />
                          </div>
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Categoria</label>
                            <input type="text" className="form-control" name="categoria" value={productoPost.categoria} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Carrusel</label>
                            <select className="form-select" name="carrucel" value={productoPost.carrucel} onChange={handleInputChange}>
                              <option defaultValue >Seleccione Carrucel : </option>
                              <option value="INACTIVO">INACTIVO</option>
                              <option value="ACTIVO">ACTIVO</option>
                            </select>
                          </div>


                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Presentacion</label>
                            <input type="text" className="form-control" name="presentacion" value={productoPost.presentacion} onChange={handleInputChange} />
                          </div>
                        </div>


                        <div className="row">

                          <div className="mb-3 col-6">
                            <label htmlFor="formFile" className="form-label">Imagen</label>
                            <input type="file" name="image" onChange={handleInputChange} />
                          </div>

                          {/* {productoPost.image && (
                          <div className="mb-3">
                            <label>Imagen Previa:</label>
                            <img src={productoPost.image} alt="Vista previa" width="100" />
                          </div>
                        )} */}

                          <div className="mb-3 col-6">
                            <label htmlFor="formFile" className="form-label">Prospecto</label>
                            <input type="file" name="prospecto" onChange={handleInputChange} />
                          </div>
                        </div>

                        {/* <button type="submit" className="btn btn-primary">Registrar</button> */}


                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <button type="submit" onClick={handleSubmit} className="btn btn-primary">Registrar</button>
                    </Modal.Footer>
                  </Modal>

                  {/* EDITAR */}
                  <Modal show={showModalEditar} onHide={handleCloseModalEditar} centered size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title>Editar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form >
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputEmail1" className="form-label">Codigo</label>
                            <input type="text" className="form-control" name="codigoproducto" value={productoPut.codigoproducto} onChange={handleInputChangeEditar} />
                          </div>
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
                            <input type="text" className="form-control" name="nombreproducto" value={productoPut.nombreproducto} onChange={handleInputChangeEditar} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Princio Activo</label>
                            <input type="text" className="form-control" name="principioactivo" value={productoPut.principioactivo} onChange={handleInputChangeEditar} />
                          </div>
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Accion Terapeutica</label>
                            <input type="text" className="form-control" name="accionterapeutica" value={productoPut.accionterapeutica} onChange={handleInputChangeEditar} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Forma Farmaceutica</label>
                            <input type="text" className="form-control" name="formafarmaceutica" value={productoPut.formafarmaceutica} onChange={handleInputChangeEditar} />
                          </div>
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Categoria</label>
                            <input type="text" className="form-control" name="categoria" value={productoPut.categoria} onChange={handleInputChangeEditar} />
                          </div>
                        </div>
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Carrusel</label>
                            <select className="form-select" name="carrucel" value={productoPut.carrucel} onChange={handleInputChangeEditar}>
                              <option defaultValue >Seleccione Carrucel : </option>
                              <option value="INACTIVO">INACTIVO</option>
                              <option value="ACTIVO">ACTIVO</option>
                            </select>
                          </div>


                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Presentacion</label>
                            <input type="text" className="form-control" name="presentacion" value={productoPut.presentacion} onChange={handleInputChangeEditar} />
                          </div>

                        </div>


                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="formFile" className="form-label">Imagen</label>
                            <input type="file" name="image" onChange={handleInputChangeEditar} />
                          </div>

                          {/* Vista previa de la imagen actual si hay una imagen */}
                          {productoPut.image !== null && (
                            <div className="mb-3 col-6">
                              <img src={productoPut.image} alt="Imagen Actual" width="150" />
                            </div>
                          )}
                        </div>
                        <div className="row">
                          <div className="mb-3 col-6">
                            <label htmlFor="formFile" className="form-label">Prospecto</label>
                            <input type="file" name="prospecto" onChange={handleInputChangeEditar} />
                          </div>
                           {/* Vista previa de la imagen actual si hay una imagen */}
                           {productoPut.prospecto !== null && (
                            <div className="mb-3 col-6">
                              <img src={productoPut.prospecto} alt="Prospecto Actual" width="150" />
                            </div>
                          )}
                        </div>

                      </form>
                    </Modal.Body>
                    <Modal.Footer>
                      <button type="submit" onClick={handleSubmitEditar} className="btn btn-primary">Editar</button>
                    </Modal.Footer>
                  </Modal>

                </div>
              )}

            </div>
            

          </div>
        </div>
      </div >
     
     
    </>
  );
}

export default PanelControl;
