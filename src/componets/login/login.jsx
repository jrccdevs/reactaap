
import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from "@mui/material"
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import "../../style/login/Login.css"
import axios from 'axios'
import LogoAlfa from '../../img/LogoAlfa.png'

import { useNavigate } from "react-router-dom";

//import { useHistory } from "react-router-dom";


function Login () {

	const navigate = useNavigate();

	const [body, setBody] = useState({ email: '', password: '' })
	//const { push } = useHistory()
	const inputChange = ({ target}) => {
		const {name, value } = target
		setBody({
			...body,
			[name]: value
		})
	}

   const onSubmit = async() =>{
	console.log(" primera validacion ingreso")
	await axios.post('https://reactaap.vercel.app/login', body)
	.then((result) =>{
		console.log("estoy logueado", result.data, result.status, result.text)
		//return <Redirect to="/" />;
		  return result.data;
		  	
	})
	.then((result) =>{
		if(result.length>0){
		 axios.post('https://reactaap.vercel.app/authenticacion', body)
			console.log("ingreso")
			navigate("../PanelControl");
			//window.location.href="../PanelControl";
		}else{
			console.log("error al entrar")
          alert("usuario y contraseña incorrecto");
		}
	
	})
	.catch((error) => {
		console.log(error)
	})
   }


	 /*  const onSubmit =() => {
	axios.post('http://localhost:7000/login', body)
	.then(({data}) =>{
       localStorage.setItem('auth', '"yes"')
	
			return (
				<Navigate to="/menuadmin" replace={true} />
			  )
			//Login("/menuadmin")
		})
		.catch(({ response }) => {
			console.log(response.data)
			return (
				<Navigate to="/login" replace={true} />
			  )
		})
		console.log(body)
	}  */
 
	return (
		<Grid container component='main' className="login-root">
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className="login-container">
				<div className="login-div">
					<Avatar className="login-avatar">
						<LockOutlinedIcon />
					</Avatar>
					<img className="logosesion" src={LogoAlfa} alt="..."></img>
					<Typography component='h1' variant='h5' className="login-alfa">Laboratorios ALFA S.A.</Typography>
					<form  className="login-form">
						<TextField
							fullWidth
							autoFocus
							type="email"
							color='primary'
							margin='normal'
							variant='outlined'
							label='E-mail'
							name="email"
							value={body.email}
							onChange={inputChange}
						/>
						<TextField
							fullWidth
							type="password"
							color='primary'
							margin='normal'
							variant='outlined'
							label="password"
							name="password"
							value={body.password}
							onChange={inputChange}
						/>
						<Button
							fullWidth
							variant='contained'
							
							className="login-button"
							onClick={onSubmit}
						>
							Iniciar Sesion
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
}

export default Login;
  