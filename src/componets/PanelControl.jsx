
import React, { useEffect } from 'react';
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaProductHunt } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import Pagination from "react-js-pagination";
import Productosaside from "./login/ProductosAside";
import CarrucelAside from "./login/CarrucelAside";
import BannerAside from "./login/BannerAside";
import EmpresaAside from "./login/EmpresaAside";
import axios from 'axios';
import { useNavigate } from 'react-router';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { actualizarProductosRequest, crearProductosRequest, deleteProductoRequest, getProductosIdRequest } from '../api/productos.api';
import "../style/PanelControl.css";
import logoPanel from '../img/logoPanel.png';
import chicaAlfa from '../img/chiac.jpg';

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
    link: '',
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
      link: '',
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
      !productoPost.link
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
/*       !productoPut.image ||
      !productoPost.prospecto || */
      !productoPost.link
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
    link: '',
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
        prospecto: producto[0].prospecto,
        link: producto[0].link
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
    const setCurrentContent = (content) => {
      setCurrentContent(content);
    };
  };



  return (
    <>
    
      <div className="panel-control-container">

        <div className="container-fluid scroll-x-hidden">
          <div className="row flex-nowrap">
            <div className=" aside col-4 col-md-3 col-xl-2 px-sm-2 px-0 ">

              
              <div className="d-flex flex-column align-items-center align-items-sm-start px-13 pt-2 text-white min-vh-100">
                <a href="/panelControl" className="logoPanel d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  {/* <span className="fs-5 d-none d-sm-inline">Laboratorio ALFA</span> */}
                  <img className="logoPanelImage" style={{width:"50%", height:"auto"}} src={logoPanel} alt="logoAlfa" />
                </a>
                <hr />
                <ul  className="nav-pills mb-sm-100 mb-0 flex-row align-items-center align-items-sm-start" id="menu">
                  <li  className={`nav-item ${currentContent === 'panelControl/producto' ? 'selected' : ''}`}>
                    <Link
                      to="/panelControl/producto"
                      
                      className="nav-link align-middle px-20"
                      onClick={() => setCurrentContent('panelControl/producto')}
                    >
                      <i></i> <span  className="ms-10 d-none d-sm-inline">Productos</span>
                    </Link>
                  </li>
                  <li className={`nav-item ${currentContent === 'panelControl/imagenes' ? 'selected' : ''}`}>
                    <Link
                      to="/panelControl/imagenes"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('panelControl/imagenes')}
                    >
                      <i></i> <span className="ms-1 d-none d-sm-block">Imagenes</span>
                    </Link>
                  </li>
                  <li className={`nav-item ${currentContent === 'panelControl/asidecarrucel' ? 'selected' : ''}`}>
                    <Link
                      to="/panelControl/asidecarrucel"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('panelControl/asidecarrucel')}
                    >
                      <i></i> <span className="ms-1 d-none d-sm-inline">Banner Movil</span>
                    </Link>
                  </li>
                  <li className={`nav-item ${currentContent === 'panelControl/asidebanner' ? 'selected' : ''}`}>
                    <Link
                      to="/panelControl/asidebanner"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('panelControl/asidebanner')}
                    >
                      <i></i> <span className="ms-1 d-none d-sm-inline">Banner</span>
                    </Link>
                  </li>
                  <li className={`nav-item ${currentContent === 'panelControl/asideempresa' ? 'selected' : ''}`}>
                    <Link
                      to="/panelControl/asideempresa"
                      className="nav-link align-middle px-0"
                      onClick={() => setCurrentContent('panelControl/asideempresa')}
                    >
                      <i></i> <span className="ms-1 d-none d-sm-inline">Empresa</span>
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
                    <li><a className="dropdown" href="/#">Perfil</a></li>

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
            {currentContent === 'panelControl/asidecarrucel' && (
                  <div>
                 
           
                <CarrucelAside></CarrucelAside>
                </div>
                  )}
                  {currentContent === 'panelControl/asidebanner' && (
                  <div>
                 
           
                <BannerAside></BannerAside>
                </div>
                  )}
            {currentContent === 'panelControl/imagenes' && (
                  <div>
                 
                <Productosaside></Productosaside>
              
                </div>
                  )}

               {currentContent === 'panelControl/asideempresa' && (
                  <div>
                 
           
                <EmpresaAside></EmpresaAside>
                </div>
                  )}
             {currentContent === 'dashboard' && (
                <div>
                  <h1 className='tituloLaboratorio'>Bienvenido al Dashboard de Laboratorios Alfa</h1>
                  <img style={{width:"80%", height:"auto"}} src={chicaAlfa} alt="logoAlfa" />
                </div>
              )}
              {currentContent === 'panelControl/producto' && (

                <div className="my-4 mx-4">
                  <h2 className='tituloProducto'>Productos Alfa</h2>

                  <div className="my-4 float-right mx-4">
                    <Button onClick={() => handleRegistrar()} variant="primary"> <i><FaPlusCircle /></i> Registrar</Button>
                  </div>
                  <table className="table mt-4" style={{fontSize:"15px"}}>
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
                      <form style={{fontSize:"15px"}}>
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

                          <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Link</label>
                            <input type="text" className="form-control" name="link" value={productoPost.link} onChange={handleInputChange} />
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
                      <Modal.Title >Editar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form style={{fontSize:"15px"}}>
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
                        <div className="mb-3 col-6">
                            <label htmlFor="exampleInputPassword1" className="form-label">Link</label>
                            <input type="text" className="form-control" name="link" value={productoPut.link} onChange={handleInputChangeEditar} />
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
