import React, { useState, useEffect } from 'react'
import axios from "axios";

import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, InputLabel, Select } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { show_alerta } from './function';



function EditarProducto (){

	const endpoint = 'https://node-alfa.vercel.app/formafarmaceutica'
	const [products, setProducts] = useState([])
	const [id, setId] = useState('')
	const [codigoproducto, setCodigoproducto] = useState('')
	const [nombreproducto, setNombreproducto] = useState('')
	const [principioactivo, setPrincipioactivo] = useState('')
	const [accionterapeutica, setAccionterapeutica] = useState('')
	const [categoria, setCategoria] = useState('')
	const [formafarmaceutica, setFormafarmaceutica] = useState('')
	const [carrucel, setCarrucel] = useState('')
	const [image, setImage] = useState('')
	const [prospecto, setProspecto] = useState('')
	const [operatio, setoperatio] = useState(1)
	const [title, setTitle] = useState('')


	useEffect( () =>{
		getProducts();
	},[]);

	const getProducts = async () => {
		const respuesta = await axios.get(endpoint);
		setProducts(respuesta.data);
	}

 ///modal popup
 const [open, openchange] = useState(false);
 const functionopenpopup = () => {
	 openchange(true);
 }
 const closepopup = () => {
	 openchange(false);
 }
	return (
		<div>
		<Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
			<DialogContent>
				{/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
				<Stack spacing={2} margin={2}>
					<TextField variant="outlined" type='text' id='codigoproducto' className='form-control' placeholder='Codigo' value={codigoproducto} onChange={(e)=> setCodigoproducto(e.target.value)} label="Codigo"></TextField>
					<TextField variant="outlined" type='text' id='nombreproducto' className='form-control' placeholder='Nombre Producto' value={nombreproducto} onChange={(e)=> setNombreproducto(e.target.value)} label="Producto"></TextField>
					<TextField variant="outlined" type='text' id='principioactivo' className='form-control' placeholder='Principioactivo' value={principioactivo} onChange={(e)=> setPrincipioactivo(e.target.value)} label="Principio Activo"></TextField>
					<TextField variant="outlined" type='text' id='accionterapeutica' className='form-control' placeholder='Accionterapeutica' value={accionterapeutica} onChange={(e)=> setAccionterapeutica(e.target.value)} label="Accion Terapeutica"></TextField>
					<Select
					    type='text' id='categoria'  placeholder='Categoria' value={categoria} onChange={(e)=> setCategoria(e.target.value)}
						className="form-select"
						label="Categoria"
						variant="outlined"
					   // labelId="demo-multiple-name-label"
					   // id="demo-multiple-name"
					   // multiple
					   // value={personName}
						//onChange={handleChange}
						//input={<OutlinedInput label="Name" />}
					   // MenuProps={MenuProps}
					></Select>
					<TextField variant="outlined" type='text' id='formafarmaceutica' className='form-control' placeholder='Formafarmaceutica' value={formafarmaceutica} onChange={(e)=> setFormafarmaceutica(e.target.value)} label="Forma Farmaceutica"></TextField>
					<Select
					    type='text' id='carrucel'  placeholder='carrucel' value={carrucel} onChange={(e)=> setCarrucel(e.target.value)}
						className="form-select"
						label="Categoria"
						variant="outlined"
					></Select>
					<TextField variant="outlined" type='file' id='image' className='form-control' placeholder='Imagen' value={image} onChange={(e)=> setImage(e.target.value)} label="Image" ></TextField>
					<TextField variant="outlined" type='file' id='prospecto' className='form-control' placeholder='Prospecto' value={prospecto} onChange={(e)=> setProspecto(e.target.value)} label="Prospecto" ></TextField>
				
					
						<Button color="primary" variant="contained">Guardar</Button>
				</Stack>
			</DialogContent>
		</Dialog>
	</div>
	)
}

export default EditarProducto
