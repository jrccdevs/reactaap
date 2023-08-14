import { useState, useEffect, Fragment } from "react";
import MUIDataTable from "mui-datatables";
import EditarProducto from './EditarProducto'

import { CiEdit } from 'react-icons/ci'
import { Modal/* , Button */ } from "react-bootstrap";
import axios from "axios";

import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, InputLabel, Select } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"


function ProductosAside() {
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
	const [image, setImage] = useState('')
	const [prospecto, setProspecto] = useState('')
	const [operation, setOperation] = useState(1)
	const [title, setTitle] = useState('')


    ///modal popup
    const [open, openchange] = useState(false);
    const functionopenpopup = () => {
        openchange(true);
    }
    const closepopup = () => {
        openchange(false);
    }

    //2 - fcion para mostrar los datos con axios
    const endpoint = 'https://node-alfa.vercel.app/formafarmaceutica'

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data
            console.log(data)
            setProducts(data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

//definimos cual modal se va a abriri

const openModal = (op,id, codigoproducto, nombreproducto,principioactivo, accionterapeutica, categoria, formafarmaceutica, carrucel, image, prospecto )=>{
    openchange(true);
    setId('');
    setCodigoproducto('');
    setNombreproducto('');
    setPrincipioactivo('');
    setAccionterapeutica('');
    setCategoria('');
    setFormafarmaceutica('');
    setCarrucel('');
    setImage('');
    setProspecto('');
    setOperation(op);
    if(op === 1) {
        setTitle('Regiistrar Producto');
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
    setCarrucel(carrucel);
    setImage(image);
    setProspecto(prospecto);
    }
    window.setTimeout(function(){
        document.getElementById('codigoproducto').focus();
    }, 500);
}

    //3 - Definimos las columns
    const columns = [
        {
            name: "codigoproducto",
            label: "CODIGO"
        },
        {
            name: "nombreproducto",
            label: "PRODUCTO"
        },
        {
            name: "formafarmaceutica",
            label: "FORMA FARMACEUTICA"
        },
        {
            name: "presentacion",
            label: "PRESENTACION"
        },
        {
            name: "image",
            label: "IMAGEN",
            options: {
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
            name: "carrucel",
            label: "CARRUCEL"
        },
        {
            name: "prospecto",
            label: "PROSPECTO",
            options: {
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
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <Button data-bs-toggle='modal' data-bs-target='#modalProducts' className="btn btn-primary" onClick={()=> openModal(2,  codigoproducto, nombreproducto, principioactivo, accionterapeutica, categoria, formafarmaceutica, carrucel, image, prospecto)}

                        > <CiEdit /></Button>
                    );
                }
            }
        }
    ]



    //4 - renderizamos la datatable
    return (
        <div >
             <Button onClick={()=>openModal(1)} data-bs-toggle='modal' data-bs-target='#modalProducts' color="primary" variant="contained">Agregar</Button>
            <MUIDataTable
                title={"Show data with Axios"}
                data={products}
                columns={columns}
            />
            
            <div >
           
                <Dialog  open={open} onClose={closepopup} fullWidth maxWidth="sm">
                    <DialogContent >
                        {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                        <Stack id='modalProducts' spacing={2} margin={2}>
                            <label className='h5'>{title} </label>
                        <TextField variant="outlined" type='text' id='codigoproducto' className='form-control' placeholder='Codigo' value={codigoproducto} onChange={(e)=> setCodigoproducto(e.target.value)} label="Codigo"></TextField>
					<TextField variant="outlined" type='text' id='nombreproducto' className='form-control' placeholder='Nombre Producto' value={nombreproducto} onChange={(e)=> setNombreproducto(e.target.value)} label="Producto"></TextField>
					<TextField variant="outlined" type='text' id='principioactivo' className='form-control' placeholder='Principioactivo' value={principioactivo} onChange={(e)=> setPrincipioactivo(e.target.value)} label="Principio Activo"></TextField>
					<TextField variant="outlined" type='text' id='accionterapeutica' className='form-control' placeholder='Accionterapeutica' value={accionterapeutica} onChange={(e)=> setAccionterapeutica(e.target.value)} label="Accion Terapeutica"></TextField>
					<Select
					    label="Categoria" type='text' id='categoria'  placeholder='Categoria' value={categoria} onChange={(e)=> setCategoria(e.target.value)}
						className="form-select"
						
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
						className="form-control"
						label="Categoria"
						variant="outlined"
					></Select>
					<TextField variant="outlined" type='file' id='image' className='form-control' placeholder='Imagen' value={image} onChange={(e)=> setImage(e.target.value)} label="Image" ></TextField>
					<TextField variant="outlined" type='file' id='prospecto' className='form-control' placeholder='Prospecto' value={prospecto} onChange={(e)=> setProspecto(e.target.value)} label="Prospecto" ></TextField>
				
                            
                              <Button color="primary" variant="contained">Submit</Button>
                        </Stack>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )

}
export default ProductosAside

