import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, IconButton, Stack, TextField, InputLabel, Select } from "@mui/material";
import FormControlContext from "@mui/material/FormControl/FormControlContext";
import CloseIcon from "@mui/icons-material/Close"




function EditarProducto (){

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
	)
}

export default EditarProducto
