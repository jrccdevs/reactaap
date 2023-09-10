
import React,{ useState, useEffect, Fragment } from "react";
import MUIDataTable from "mui-datatables";
import EditarProducto from './EditarProducto'
import { show_alerta } from './function';
import { CiEdit } from 'react-icons/ci'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from "axios";

//import {Dialog, DialogContent, Button, Modal ,  TextField, Select } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Stack from '@mui/material/Stack';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from "@material-ui/core/Tooltip";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import IconButton from "@material-ui/core/IconButton"
import { actualizarProductosRequest, crearProductosRequest, deleteProductoRequest, getProductosIdRequest } from '../../api/productos.api';


const useStyles = makeStyles((theme) => ({
	modal: {
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	},
	iconos: {
		cursor: 'pointer'
	},
	inputMaterial: {
		width: '100%'
	}
}));

const url = 'https://node-alfa.vercel.app/formafarmaceutica'


function ProductosAside() {

	
	//const styles = useStyles();
	//1 - configuramos Los hooks
	const [productos, setProductos] = useState([]);
	const [modalInsertar, setModalInsertar] = useState(false);
	const [modalEditar, setModalEditar] = useState(false);
	const [modalEliminar, setModalEliminar] = useState(false);


	//const [showModal, setShowModal] = useState(false);
  //const [showModalEditar, setShowModalEditar] = useState(false);

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

  const abrirCerrarModalInsertar = () => {
	setModalInsertar(true);
}
const abrirCerrarModalEditar = () => {
	setModalEditar(true);
}

 /*  const handleRegistrar = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseModalEditar = () => {
    setShowModalEditar(false);
  }; */


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
      console.error('Error al registrar el producto:', error);
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


	const bodyInsertar = (
		<div >

			<Dialog open={modalInsertar} fullWidth maxWidth="sm">
				<h5>REGISTRAR PRODUCTO</h5>
				<DialogContent >
					{/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
					<Stack spacing={2} margin={2}>
						<TextField variant="outlined" type='text' name="codigoproducto" className='form-control' placeholder='Codigo Producto' label="Codigo Producto" value={productoPost.codigoproducto} onChange={handleInputChange}></TextField>
						<TextField variant="outlined" type='text' name="nombreproducto" className='form-control' placeholder='Nombre Producto' label="Producto" value={productoPost.nombreproducto} onChange={handleInputChange}></TextField>
						<TextField variant="outlined" type='text' name="principioactivo" className='form-control' placeholder='Principioactivo' label="Principio Activo" value={productoPost.principioactivo} onChange={handleInputChange}></TextField>
						<TextField variant="outlined" type='text' name='accionterapeutica' className='form-control' placeholder='Accionterapeutica' label="Accion Terapeutica" value={productoPost.accionterapeutica} onChange={handleInputChange}></TextField>
						<FormControl>
							<InputLabel id="demo-mutiple-name-label">  Categoria</InputLabel>

						<Select
							label="Categoria" type='text' placeholder='Categoria' value={productoPost.categoria} onChange={handleInputChange}
							className="form-select" aria-label="Default select example"
							name='categoria'
							variant="outlined"
						>

                                <MenuItem selected>Seleccionar forma farmaceutica</MenuItem>
								<MenuItem value="CAPSULAS">CAPSULAS</MenuItem>
								<MenuItem value="COMPRIMIDOS">COMPRIMIDOS</MenuItem>
								<MenuItem value="CREMAS">CREMAS</MenuItem>
								<MenuItem value="GEL">GEL</MenuItem>
								<MenuItem value="GOTAS">GOTAS</MenuItem>
								<MenuItem value="GRANULADO">GRANULADO</MenuItem>
								<MenuItem value="INYECTABLE">INYECTABLE</MenuItem>
								<MenuItem value="JARABE">JARABE</MenuItem>
								<MenuItem value="POLVO">POLVO</MenuItem>
								<MenuItem value="POMADA">POMADA</MenuItem>
								<MenuItem value="SHAMPO">SHAMPO</MenuItem>
								<MenuItem value="SOLUCION">SOLUCION</MenuItem>
								<MenuItem value="SUPOSITORIO">SUPOSITORIO</MenuItem>
								<MenuItem value="SUSPENCION">SUSPENCION</MenuItem>
								<MenuItem value="TABLETA">TABLETA</MenuItem>
						</Select>
						</FormControl>
						<TextField variant="outlined" type='text' name='formafarmaceutica' className='form-control' placeholder='Formafarmaceutica' label="Forma Farmaceutica" value={productoPost.formafarmaceutica} onChange={handleInputChange}></TextField>
						<Select
							type='text' name='carrucel' placeholder='carrucel' value={productoPost.carrucel} onChange={handleInputChange}
							className="form-select" aria-label="Default select example"
							label="Carrucel"
							variant="outlined"
						>
							 <MenuItem value='INACTIVO' >INACTIVO</MenuItem>
							 <MenuItem value='ACTIVO' >ACTIVO</MenuItem>

						</Select>
						
						<TextField variant="outlined" type='text' name='presentacion' className='form-control' placeholder='presentacion' label="Presentacion" value={productoPost.presentacion} onChange={handleInputChange}></TextField>

						<TextField variant="outlined" type='file' name='image' className='form-control' placeholder='Imagen' label="Image" onChange={handleInputChange} ></TextField>
						<TextField variant="outlined" type='file' name='prospecto' className='form-control' placeholder='Prospecto' label="Prospecto" onChange={handleInputChange}></TextField>


						<Button color="primary" onClick={handleSubmit}>Insertar</Button>
						<Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
					</Stack>
				</DialogContent>
			</Dialog>
		</div>
	)

	const bodyEditar = (
		<div >

			<Dialog open={modalEditar} fullWidth maxWidth="sm">
				<h5>EDITAR PRODUCTO</h5>
				<DialogContent >
					{/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
					<Stack spacing={2} margin={2}>
						<TextField variant="outlined" type='text' name="codigoproducto" placeholder='Codigo Producto' label="Codigo "value={productoPut.codigoproducto} onChange={handleInputChangeEditar}></TextField>
						<TextField variant="outlined" type='text' name="nombreproducto" placeholder='Nombre Producto' label="Producto" value={productoPut.nombreproducto} onChange={handleInputChangeEditar}></TextField>
						<TextField variant="outlined" type='text' name="principioactivo" placeholder='Principioactivo' label="Principio Activo" value={productoPut.principioactivo} onChange={handleInputChangeEditar}></TextField>
						<TextField variant="outlined" type='text' name='accionterapeutica' placeholder='Accionterapeutica' label="Accion Terapeutica" value={productoPut.accionterapeutica} onChange={handleInputChangeEditar}></TextField>
						<FormControl>
							<InputLabel id="demo-mutiple-name-label">  Categoria</InputLabel>

							<Select
								label="Categoria" type='text' placeholder='Categoria'value={productoPut.categoria} onChange={handleInputChangeEditar}
								aria-label="Default select example"
								name='categoria'
								variant="outlined"
							// labelId="demo-multiple-name-label"
							// id="demo-multiple-name"
							// multiple
							// value={personName}
							//onChange={handleChange}
							//input={<OutlinedInput label="Name" />}
							// MenuProps={MenuProps}
							>
								<MenuItem selected>Seleccionar forma farmaceutica</MenuItem>
								<MenuItem value="CAPSULAS">CAPSULAS</MenuItem>
								<MenuItem value="COMPRIMIDOS">COMPRIMIDOS</MenuItem>
								<MenuItem value="CREMAS">CREMAS</MenuItem>
								<MenuItem value="GEL">GEL</MenuItem>
								<MenuItem value="GOTAS">GOTAS</MenuItem>
								<MenuItem value="GRANULADO">GRANULADO</MenuItem>
								<MenuItem value="INYECTABLE">INYECTABLE</MenuItem>
								<MenuItem value="JARABE">JARABE</MenuItem>
								<MenuItem value="POLVO">POLVO</MenuItem>
								<MenuItem value="POMADA">POMADA</MenuItem>
								<MenuItem value="SHAMPO">SHAMPO</MenuItem>
								<MenuItem value="SOLUCION">SOLUCION</MenuItem>
								<MenuItem value="SUPOSITORIO">SUPOSITORIO</MenuItem>
								<MenuItem value="SUSPENCION">SUSPENCION</MenuItem>
								<MenuItem value="TABLETA">TABLETA</MenuItem>
							</Select>
						</FormControl>
						<TextField variant="outlined" type='text' name='formafarmaceutica' placeholder='Formafarmaceutica' label="Forma Farmaceutica" value={productoPut.formafarmaceutica} onChange={handleInputChangeEditar}></TextField>
						

						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Carrucel</InputLabel>
							<Select
								aria-label="Default select example"
								name= 'carrucel'
								value={productoPut.carrucel} onChange={handleInputChangeEditar}
								label="Carrucel"
								
							>
								
								<MenuItem selected>Seleccionar Carrucel</MenuItem>
                                  <MenuItem value='INACTIVO' >INACTIVO</MenuItem>
								  <MenuItem value='ACTIVO' >ACTIVO</MenuItem>
								
								
							</Select>
						</FormControl>
						<TextField variant="outlined" type='text' name='presentacion' placeholder='presentacion' label="Presentacion" value={productoPut.presentacion} onChange={handleInputChangeEditar}></TextField>
						<TextField variant="outlined" type='file' name='image' placeholder='Imagen' label="Image"  onChange={handleInputChangeEditar}></TextField>
						<TextField variant="outlined" type='file' name='prospecto ' placeholder='Prospecto' label="Prospecto" onChange={handleInputChangeEditar}></TextField>


						<Button color="primary" onClick={handleSubmitEditar} >Editar</Button>
						<Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
					</Stack>
				</DialogContent>
			</Dialog>
		</div>
	)

	const columns = [
		{
			name: "codigoproducto",
			label: "CODIGO",
			options: { filter: false }
		},
		{
			name: "nombreproducto",
			label: "PRODUCTO",
			options: { filter: false }
		},
		{
			name: "principioactivo",
			label: "PRINCIPIOACTIVO",
			options: { filter: false }
		},
		{
			name: "accionterapeutica",
			label: " ACCIONTERAPEUTICA",
			options: { filter: false }
		},
		{
			name: "categoria",
			label: "CATEGORIA",
			options: { filter: false }
		},
		{
			name: "formafarmaceutica",
			label: "FORMA FARMACEUTICA",
			options: { filter: false }
		},
		{
			name: "presentacion",
			label: "PRESENTACION",
			options: { filter: false }
		},
		{
			name: "image",
			label: "IMAGEN",
			options: {
				filter: false,
				customBodyRender: (value) => (
					<img
						src={value}
						alt="productos"
						style={{ width: '50px', height: '50px' }}
					/>
				)
			},

		},
		{
			name: "carrucel",
			label: "CARRUCEL",
			options: { filter: false }
		},
		{
			name: "prospecto",
			label: "PROSPECTO",
			options: {
				filter: false,
				customBodyRender: (value) => (
					<img
						src={value}
						alt="productos"
						style={{ width: '50px', height: '50px' }}
					/>
				)
			}
		},
		{
			name: "Acciones",
			label:"ACCIONES",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
						<div>
                        <Button  className="btn btn-primary"   onClick={() => handleEditar(producto.id)}
                         
                        > <CiEdit /></Button>
						</div>
                    );
                }
            }
        }

	]
	//4 - renderizamos la datatable
	const options = {
		filterType: "select",
		selectableRows: "single",
		onRowsSelect: data => {
		  console.log(data);
		},
		textLabels: {},
		customToolbarSelect: selectedRows => (
		  <Tooltip title="edit">
			<IconButton
			 
			  style={{
				marginRight: "24px",
				height: "48px",
				top: "50%",
				display: "block",
				position: "relative",
				transform: "translateY(-50%)"
			  }}
			>
			  <CiEdit />
			</IconButton>
		  </Tooltip>
		)
	  };
	return (
		<div >
			<Button onClick={() => abrirCerrarModalInsertar()} color="primary" variant="contained">Agregar</Button>
			<MUIDataTable
				title={"Show data with Axios"}
				data={productos}
				columns={columns}
				options={options}
				actions={[
					{
						icon: 'edit',
						tooltip: 'Editar Artista',
						
					},
					{
						icon: 'delete',
						tooltip: 'Eliminar Artista',
						// onClick: (event, rowData) => seleccionarArtista(rowData, "Eliminar")
					}
				]}
			/>

			<Modal
				open={modalInsertar}
				onClose={abrirCerrarModalInsertar}>

				{bodyInsertar}
			</Modal>

			<Modal
				open={modalEditar}
				onClose={abrirCerrarModalEditar}>
				{bodyEditar}
			</Modal>

		</div>
	)

}
export default ProductosAside




