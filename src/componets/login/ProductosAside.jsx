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
            name: "Acciones",
            options: {
                filter: true,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <button className="btn btn-primary" onClick={functionopenpopup}

                        > <CiEdit /></button>
                    );
                }
            }
        }
    ]



    //4 - renderizamos la datatable
    return (
        <div>
            <MUIDataTable
                title={"Show data with Axios"}
                data={products}
                columns={columns}
            />
            <div>
                <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
                    <DialogContent>
                        {/* <DialogContentText>Do you want remove this user?</DialogContentText> */}
                        <Stack spacing={2} margin={2}>
                            <TextField variant="outlined" label="Codigo"></TextField>
                            <TextField variant="outlined" label="Producto"></TextField>
                            <TextField variant="outlined" label="Principio Activo"></TextField>
                            <TextField variant="outlined" label="Accion Terapeutica"></TextField>
                            <Select
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
                            <TextField variant="outlined" label="Forma Farmaceutica"></TextField>
                            <TextField variant="outlined" label="Presentacion"></TextField>
                            <TextField variant="outlined" label="Image" id="fileinput" className="form-control" type="file"></TextField>
                            <TextField variant="outlined" label="Carrucel"></TextField>
                            
                            
                            <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="Agree terms & conditions"></FormControlLabel>
                            <Button color="primary" variant="contained">Submit</Button>
                        </Stack>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )

}
export default ProductosAside

