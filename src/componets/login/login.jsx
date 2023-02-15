
import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from "@mui/material"
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import "../../style/login/Login.css"
import axios from 'axios'

import { Navigate } from "react-router-dom";




function Login () {

	//const Login = useNavigate();
	



	const [body, setBody] = useState({ email: '', password: '' })
	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}
	 const onSubmit = () => {
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
	}
 
	return (
		<Grid container component='main' className="login-root">
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className="login-container">
				<div className="login-div">
					<Avatar className="login-avatar">
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5' className="login-alfa">Laboratorios ALFA S.A.</Typography>
					<form className="login-form">
						<TextField
							fullWidth
							autoFocus
							type='email'
							color='primary'
							margin='normal'
							variant='outlined'
							label='E-mail'
							name='email'
							value={body.email}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Password'
							name='password'
							value={body.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							
							className="login-button"
							onClick={() => onSubmit()}
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
  