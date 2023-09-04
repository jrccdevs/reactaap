
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

import IconButton from "@material-ui/core/IconButton"


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
	const [data, setData] = useState([])
	const [modalInsertar, setModalInsertar] = useState(false);
	const [modalEditar, setModalEditar] = useState(false);
	const [modalEliminar, setModalEliminar] = useState(false);
	const [productoSeleccionado, setProductoSeleccionado] = useState({
		acciones:"",
		accionterapeutica: "",
        carrucel: "",
        categoria: "",
        codigoproducto: "",
        formafarmaceutica: "",
        id: "",
        image: "",
        nombreproducto: " ",
        presentacion: "",
        principioactivo: "",
        prospecto: "",
		
		/* id: "",
		codigoproducto: "",
		nombreproducto: " ",
		principioactivo: "",
		accionterapeutica: "",
		categoria: "",
		formafarmaceutica: "",
		carrucel: "",
		presentacion: "",
		image: "",
		prospecto: "" */
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setProductoSeleccionado(prevState => ({
			...prevState,
			[name]: value
		}));
console.log(productoSeleccionado);
	}

    /* ///modal popup
     const [open, openchange] = useState(false);
    
     const closepopup = () => {
         openchange(false);
     }  */

	//2 - fcion para mostrar los datos con axios

	const peticionGet = async () => {
		await axios.get(url)
			.then(response => {
				setData(response.data);
			}).catch(error => {
				console.log(error);
			})
	}


	const peticionPost = async () => {
		await axios.post(url, productoSeleccionado)
			.then(response => {
				setData(data.concat(response.data));
				abrirCerrarModalInsertar();
			}).catch(error => {
				console.log(error);
			})
	}

	const peticionPut = async () => {
		await axios.put(url + "/" + productoSeleccionado.id, productoSeleccionado)
			.then(response => {
				var dataNueva = data;
				dataNueva.map(artista => {
					if (artista.id === productoSeleccionado.id) {
						artista.codigoproducto = productoSeleccionado.codigoproducto;
						artista.nombreproducto = productoSeleccionado.nombreproducto;
						artista.principioactivo = productoSeleccionado.principioactivo;
						artista.accionterapeutica = productoSeleccionado.accionterapeutica;
						artista.categoria = productoSeleccionado.categoria;
						artista.formafarmaceutica = productoSeleccionado.formafarmaceutica;
						artista.carrucel = productoSeleccionado.carrucel;
						artista.presentacion = productoSeleccionado.presentacion;
						artista.image = productoSeleccionado.image;
						artista.prospecto = productoSeleccionado.prospecto;
					}
				});
				setData(dataNueva);
				abrirCerrarModalEditar();
			}).catch(error => {
				console.log(error);
			})
	};
	//3 - Definimos las columns
	const seleccionarProducto = (artista, caso, error) => {
		setProductoSeleccionado(artista);
		
		if(caso === "Editar"){
			abrirCerrarModalEditar()
		} else{
			console.log(error)
		}
		console.log(productoSeleccionado)
	};

	const abrirCerrarModalInsertar = () => {
		setModalInsertar(!modalInsertar);
	}
	const abrirCerrarModalEditar = () => {
		setModalEditar(!modalEditar);
	}
    /*   const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar);
      } */

	//definimos cual modal se va a abriri

    /* const openModal = (op,id, codigoproducto, nombreproducto,principioactivo, accionterapeutica, categoria, formafarmaceutica,presentacion, carrucel, image, prospecto )=>{
        openchange(true);
        setId('');
        setCodigoproducto('');
        setNombreproducto('');
        setPrincipioactivo('');
        setAccionterapeutica('');
        setCategoria('');
        setFormafarmaceutica('');
        setPresentacion('')
        setCarrucel('');
        setImage('');
        setProspecto('');
        setOperation(op);
        if(op === 1) {
            setTitle('Registrar Producto');
        }
        else if(op === 2){
            setTitle('Editar Producto');
            setId(id);
        setCodigoproducto(codigoproducto);
        setNombreproducto(nombreproducto);
        setPrincipioactivo(principioactivo);
        setAccionterapeutica(accionterapeutica);
        setCategoria(categoria);
        setFormafarmaceutica(formafarmaceutica);
        setPresentacion(presentacion)
        setCarrucel(carrucel);
        setImage(image);
        setProspecto(prospecto);
        }
        window.setTimeout(function(){
            document.getElementById('codigoproducto').focus();
        }, 500);
    } */
    /*  const validar = () => {
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
     } */

    /* const enviarSolicitud = async (metodo, parametros) => {
        await axios({ method: metodo, url: url, data: parametros }).then(function (respuesta) {
            var tipo = respuesta.data[0];
            var msj = respuesta.data[1];
            show_alerta(msj, tipo);
            if (ti
                document.getElementById('btnCerrar').click();
                getProducts();
            }
        })
            .catch(function (error) {
                show_alerta('Error en la solictud', 'error');
                console.log(error)
            });
    } */

	useEffect(() => {
		peticionGet();
	}, [])

	const bodyInsertar = (
		<div >

			<Dialog open={modalInsertar} fullWidth maxWidth="sm">
				<h5>REGISTRAR PRODUCTO</h5>
				<DialogContent >
					{/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
					<Stack spacing={2} margin={2}>
						<TextField variant="outlined" type='text' name="codigoproducto" className='form-control' placeholder='Codigo Producto' label="Codigo Producto" onChange={handleChange}></TextField>
						<TextField variant="outlined" type='text' name="nombreproducto" className='form-control' placeholder='Nombre Producto' label="Producto" onChange={handleChange}></TextField>
						<TextField variant="outlined" type='text' name="principioactivo" className='form-control' placeholder='Principioactivo' label="Principio Activo" onChange={handleChange}></TextField>
						<TextField variant="outlined" type='text' name='accionterapeutica' className='form-control' placeholder='Accionterapeutica' label="Accion Terapeutica" onChange={handleChange}></TextField>
						<FormControl>
							<InputLabel id="demo-mutiple-name-label">  Categoria</InputLabel>

						<Select
							label="Categoria" type='text' placeholder='Categoria' onChange={handleChange}
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
						<TextField variant="outlined" type='text' name='formafarmaceutica' className='form-control' placeholder='Formafarmaceutica' label="Forma Farmaceutica" onChange={handleChange}></TextField>
						<Select
							type='text' name='carrucel' placeholder='carrucel' onChange={handleChange}
							className="form-select" aria-label="Default select example"
							label="Carrucel"
							variant="outlined"
						>
							 <MenuItem value='INACTIVO' >INACTIVO</MenuItem>
							 <MenuItem value='ACTIVO' >ACTIVO</MenuItem>

						</Select>
						
						<TextField variant="outlined" type='text' name='presentacion' className='form-control' placeholder='presentacion' label="Presentacion" onChange={handleChange}></TextField>

						<TextField variant="outlined" type='file' name='image' className='form-control' placeholder='Imagen' label="Image" onChange={handleChange} ></TextField>
						<TextField variant="outlined" type='file' name='prospecto' className='form-control' placeholder='Prospecto' label="Prospecto" onChange={handleChange} ></TextField>


						<Button color="primary" onClick={() => peticionPost()}>Insertar</Button>
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
						<TextField variant="outlined" type='text' name="codigoproducto" placeholder='Codigo Producto' label="Codigo " onChange={handleChange} value={productoSeleccionado && productoSeleccionado.codigoproducto}></TextField>
						<TextField variant="outlined" type='text' name="nombreproducto" placeholder='Nombre Producto' label="Producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.nombreproducto}></TextField>
						<TextField variant="outlined" type='text' name="principioactivo" placeholder='Principioactivo' label="Principio Activo" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.principioactivo}></TextField>
						<TextField variant="outlined" type='text' name='accionterapeutica' placeholder='Accionterapeutica' label="Accion Terapeutica" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.accionterapeutica}></TextField>
						<FormControl>
							<InputLabel id="demo-mutiple-name-label">  Categoria</InputLabel>

							<Select
								label="Categoria" type='text' placeholder='Categoria' onChange={handleChange} value={productoSeleccionado && productoSeleccionado.categoria}
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
						<TextField variant="outlined" type='text' name='formafarmaceutica' placeholder='Formafarmaceutica' label="Forma Farmaceutica" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.formafarmaceutica}></TextField>
						

						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Carrucel</InputLabel>
							<Select
								aria-label="Default select example"
								name= 'carrucel'
								value={productoSeleccionado && productoSeleccionado.carrucel}
								label="Carrucel"
								onChange={handleChange}
							>
								
								<MenuItem selected>Seleccionar Carrucel</MenuItem>
                                  <MenuItem value='INACTIVO' >INACTIVO</MenuItem>
								  <MenuItem value='ACTIVO' >ACTIVO</MenuItem>
								
								
							</Select>
						</FormControl>
						<TextField variant="outlined" type='text' name='presentacion' placeholder='presentacion' label="Presentacion" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.presentacion}></TextField>
						<TextField variant="outlined" type='file' name='image' placeholder='Imagen' label="Image" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.image}></TextField>
						<TextField variant="outlined" type='file' name='prospecto ' placeholder='Prospecto' label="Prospecto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.prospecto}></TextField>


						<Button color="primary" onClick={() => peticionPut()} >Editar</Button>
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
                        <Button  className="btn btn-primary"   onClick={(event, rowData) => seleccionarProducto(rowData, "Editar")}
                         
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
			  onClick={(event, rowData) => seleccionarProducto(rowData, "Editar")}
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
				data={data}
				columns={columns}
				options={options}
				actions={[
					{
						icon: 'edit',
						tooltip: 'Editar Artista',
						onClick: (event, rowData) => seleccionarProducto(rowData, "Editar")
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




