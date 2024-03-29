import React, { useEffect } from 'react';
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaPlusCircle } from 'react-icons/fa';

import Pagination from "react-js-pagination";
import { useNavigate } from 'react-router';

import { useState } from 'react';


import "../../style/PanelControl.css";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { actualizarBannerMovil, crearBannerMovil, deleteBannerMovil, getBannerMovilId } from '../../api/productos.api';


function CarrucelAside() {
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)
  
    const [currentContent, setCurrentContent] = useState('dashboard');
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
  
    
  
    useEffect(() => {
      const loadProductos = async () => {
     //    const response = await fetch(`http://localhost:7000/empresa/`);
     const response = await fetch(`https://node-alfa.vercel.app/empresa/`);
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
      // const response = await fetch(`http://localhost:7000/empresa/`);
      const response = await fetch(`https://node-alfa.vercel.app/empresa/`);
      const data = response.json();
      setProductos(await data);
    }
  
    const [productoPost, setProductoPost] = useState({
      


      descripcion: '',
      estado:'',
      identificador:'',
      archivo: null,   //img
      image: null,   //img
      accion:'',
     
      
    });
  
  
    const handleInputChange = (e) => {
      const { name, value, type, files } = e.target;
      const newValue = type === 'file' ? files[0] : value;
      setProductoPost({ ...productoPost, [name]: newValue });
    };
  
    const resetForm = () => {
      setProductoPost({
        descripcion: '',
        estado:'',
        identificador:'',
        archivo: null,   //img
        image: null,   //img
        accion:'',
       
      });
    };
  
    const validateForm = () => {
      if (
       
        !productoPost.descripcion ||
       
        !productoPost.estado ||
        !productoPost.identificador ||
        !productoPost.accion 
      ) {
        MySwal.fire({
          position: 'center',
          icon: 'error',
          title: '"Por Favor, verifique que los campos esten llenados correctamente."',
          showConfirmButton: true,
        })
        return false;
      }
      return true;
    };
  
    const validateFormEditar = () => {
      if (
          !productoPost.nombre ||
          !productoPost.image ||
          !productoPost.estado 
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
        const response = await crearBannerMovil(productoPost);
        const result = await MySwal.fire({
          position: 'center',
          icon: 'success',
          title: 'El Banner movil se registró exitosamente.',
          showConfirmButton: true,
        });
        if (result.isConfirmed) {
          setShowModal(false);
          resetForm();
          loadProductos();
        }
      } catch (error) {
        console.error('Error al registrar el Banner movil:', error);
      }
    };
  
  
    const [productoPut, setProductoPut] = useState({
      id: 0,
      descripcion: '',
      estado:'',
      identificador:'',
      archivo: null,   //img
      image: null,   //img
      accion:'',
    });
  
  
    const obtenerDetallesProducto = async (idProducto) => {
      try {
        const producto = await getBannerMovilId(idProducto);
        setProductoPut({
          ...productoPut,
          id: producto[0].id,
          descripcion: producto[0].descripcion,
          estado: producto[0].estado,
          identificador: producto[0].identificador,
          archivo: producto[0].archivo,
          image: producto[0].image,
          accion: producto[0].accion
        });
      } catch (error) {
        console.error("Error al obtener los detalles del Banner movil:", error);
      }
    };
  
  
    const handleEditar = (id) => {
      setShowModalEditar(true);
      obtenerDetallesProducto(id);
      setProductoPut({ ...productoPut, image: null });
  
    };
  
    const handleSubmitEditar = async (e) => {
      e.preventDefault();
      /* if (!validateFormEditar()) {
        return;
      } */
      try {
        await actualizarBannerMovil(productoPut, productoPut.id);
        const result = await MySwal.fire({
          position: 'center',
          icon: 'success',
          title: 'El Banner movil se actualizo exitosamente.',
          showConfirmButton: true,
        });
        if (result.isConfirmed) {
          setShowModalEditar(false);
          resetForm();
          loadProductos();
        }
      } catch (error) {
        console.error('Error al actualizar el banner movil:', error);
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
          title: '¿Está seguro de eliminar el item seleccionado?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
          cancelButtonColor: "#e72323",
          confirmButtonColor: "#008000",
          cancelButtonText: 'Cancelar',
          reverseButtons: true
        });
        if (result.isConfirmed) {
          await deleteBannerMovil(id);
          MySwal.fire(
            '¡Eliminado!',
            'Item seleccionado ha sido eliminado exitosamente',
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
        
                 
               
                  <div className="my-4 mx-4">
                  <h2 className='tituloProducto'>Imagenes Banner Movil Alfa</h2>
  
                    <div className="my-4 float-right mx-4">
                    <Button onClick={() => handleRegistrar()} variant="primary"> <i><FaPlusCircle /></i> Registrar</Button>
                    </div>
                    <table className="table mt-4" style={{fontSize:"15px"}}>
                      <thead>
                        <tr>
                         
                         
                          <th scope="col">Descripcion</th>
                          <th scope="col">Identificador</th>
                          <th scope="col">archivo</th>
                          <th scope="col">Imagen</th>
                          <th scope="col">Activacion</th>
                          <th scope="col">Estado</th>
                        
                         
                          
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.map((producto, index) => (
                          <tr key={index}>
                            
                            <td>{producto.descripcion}</td>
                            
                            <td>{producto.identificador}</td>
                            <td>
                              <img className="productoImg" src={producto.archivo} alt={producto.descripcion} style={{height:"30px", width:"30px"}} />
                            </td>
                            <td>
                              <img className="productoImg" src={producto.image} alt={producto.nombre} style={{height:"30px", width:"30px"}} />
                            </td>
                            <td>{producto.accion}</td>
                            <td>{producto.estado}</td>
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
                      <p className="text-center">No hay Registros para mostrar</p>
                    )}
  
                    {/* Modal */}
                    <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
                      <Modal.Header closeButton>
                        <Modal.Title>Registrar Banner Movil</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>

                        <form style={{fontSize:"15px"}}>
                          <div className="row">
                            <div className="mb-3 col-12">
                              <label htmlFor="exampleInputPassword1" className="form-label">Descripcion</label>
                              <input type="text" className="form-control" name="descripcion" value={productoPost.descripcion} onChange={handleInputChange} />
                            </div>
                          </div>

                          <div className="row">
                            <div className="mb-3 col-6">
                              <label htmlFor="exampleInputPassword1" className="form-label">Identificador</label>
                              <input type="text" className="form-control" name="identificador" value={productoPost.identificador} onChange={handleInputChange} />
                            </div>
                            <div className="mb-3 col-6">
                              <label htmlFor="formFile" className="form-label">Archivo</label>
                              <input type="file" name="archivo" onChange={handleInputChange} />
                            </div>
                            
                          </div>
                          
                          
                          <div className="row">
                           
                            <div className="mb-3 col-6">
                              <label htmlFor="formFile" className="form-label">Imagen</label>
                              <input type="file" name="image" onChange={handleInputChange} />
                            </div>
                            <div className="mb-3 col-6">
                              <label htmlFor="exampleInputPassword1" className="form-label">Activacion</label>
                              <select className="form-select" name="accion" value={productoPost.accion} onChange={handleInputChange}>
                                <option defaultValue >Seleccione la Activacion : </option>
                                <option value="flex">flex</option>
                                <option value="none">none</option>
                              </select>
                            </div>

                            <div className="mb-3 col-6">
                              <label htmlFor="exampleInputPassword1" className="form-label">Estado</label>
                              <select className="form-select" name="estado" value={productoPost.estado} onChange={handleInputChange}>
                                <option defaultValue >Seleccione un Estado : </option>
                                <option value="ACTIVO">ACTIVO</option>
                                <option value="INACTIVO">INACTIVO</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Registrar</button>
                      </Modal.Footer>
                    </Modal>
  
                    {/* EDITAR */}
                    <Modal show={showModalEditar} onHide={handleCloseModalEditar} centered size="lg">
                      <Modal.Header closeButton>
                        <Modal.Title>Editar Banner Movil</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form encType="multipart/form-data" action='' style={{fontSize:"15px"}}>
                          <div className="row">
                            
                            <div className="mb-3 col-6">
                              <label htmlFor="exampleInputPassword1" className="form-label">Descripcion</label>
                              <input type="text" className="form-control" name="descripcion" value={productoPut.descripcion} onChange={handleInputChangeEditar} />
                            </div>
                          </div>
                          
                          <div className="row">
                          <div className="mb-3 col-6">
                              <label htmlFor="exampleInputPassword1" className="form-label">Identificador</label>
                              <input type="text" className="form-control" name="identificador" value={productoPut.identificador} onChange={handleInputChangeEditar} />
                            </div>

                            <div className="mb-3 col-6">
                              <label htmlFor="archivo" className="form-label">Archivo</label>
                              <input type="file" name="archivo"   onChange={handleInputChangeEditar} />
                            </div>
  
                            {/* Vista previa de la imagen actual si hay una imagen */}
                            {productoPut.archivo !== null && (
                              <div className="mb-3 col-6">
                                <img src={productoPut.archivo} alt="Archivo Actual" width="150" />
                              </div>
                            )}
                            
                          </div>
  
  
                          <div className="row">
                            <div className="mb-3 col-6">
                              <label htmlFor="image" className="form-label">Imagen</label>
                              <input type="file" name="image"   onChange={handleInputChangeEditar} />
                            </div>
  
                            {/* Vista previa de la imagen actual si hay una imagen */}
                            {productoPut.image !== null && (
                              <div className="mb-3 col-6">
                                <img src={productoPut.image} alt="Imagen Actual" width="150" />
                              </div>
                            )}
                            <div className="mb-3 col-6">
                              <label htmlFor="exampleInputPassword1" className="form-label">Activacion</label>
                              <select className="form-select" name="accion" value={productoPut.accion} onChange={handleInputChangeEditar}>
                                <option defaultValue >Seleccione la Activacion : </option>
                                <option value="flex">flex</option>
                                <option value="none">none</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="row">
                            
                          <div className="mb-3 col-6">
                              <label htmlFor="exampleInputPassword1" className="form-label">Estado</label>
                              <select className="form-select" name="estado" value={productoPut.estado} onChange={handleInputChangeEditar}>
                                <option defaultValue >Seleccione un Estado : </option>
                                <option value="INACTIVO">INACTIVO</option>
                                <option value="ACTIVO">ACTIVO</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <button type="submit" onClick={handleSubmitEditar} className="btn btn-primary">Editar</button>
                      </Modal.Footer>
                    </Modal>
  
                  </div>
               
       
       
      </>
    );
  }
  
  
  
  
  
  export default CarrucelAside;
