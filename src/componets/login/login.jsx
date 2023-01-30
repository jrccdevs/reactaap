
import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from "@mui/material"
//import { makeStyles } from "@mui/material/styles"
//import fondo from './assets/images/fondo.png'
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material'
import "../../style/login/Login.css"
import axios from 'axios'
function Login () {

/* const useStyles = makeStyles(theme => ({
	root: {
		//backgroundImage: `url(${fondo})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},
	container: {
		opacity: '0.8',
		height: '60%',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	}
})) */


	const [body, setBody] = useState({ email: '', password: '' })
	//const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		axios.post('http://localhost:7000/login', body)
		.then(({ data }) => {
			console.log(data)
		})
		.catch(({ response }) => {
			console.log(response.data)
		})
		console.log(body)
	}

	return (
		<Grid container component='main' className="root">
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className="container">
				<div className="div">
					<Avatar className="avatar">
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Laboratorios ALFA S.A.</Typography>
					<form className="form">
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
							color='secondary'
							className="button"
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
  