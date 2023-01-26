/* import React from 'react'

import "../../style/login/Login.css"


const btnSignIn= document.querySelector('sign-in-btn'),
      btnSignUp = document.querySelector('sign-up-btn'),  
      signUp = document.querySelector('sign-up'),
      signIn  = document.querySelector('sign-in');

document.addEventListener('click', e => {
    if (e.target === btnSignIn || e.target === btnSignUp) {
        signIn.classList.toggle('active');
        signUp.classList.toggle('active')
    }
});

export default function login() {

    return (
    <>
        <div className="container-form sign-up">
            <div className="welcome-back">
                <div className="message">
                    <h2>Bienvenido a DaniCodex</h2>
                    <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                    <button className="sign-up-btn">Iniciar Sesion</button>
                </div>
            </div>
            <form className="formulario">
                <h2 className="create-account">Crear una cuenta</h2>
                <div className="iconos">
                    <div className="border-icon">
                        <i className='bx bxl-instagram'></i>
                    </div>
                    <div className="border-icon">
                        <i className='bx bxl-linkedin' ></i>
                    </div>
                    <div className="border-icon">
                        <i className='bx bxl-facebook-circle' ></i>
                    </div>
                </div>
                <p className="cuenta-gratis">Crear una cuenta gratis</p>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <input type="button" value="Registrarse" />
            </form>
        </div>
        <div className="container-form sign-in">
            <form className="formulario">
                <h2 className="create-account">Iniciar Sesion</h2>
                <div className="iconos">
                    <div clclassNameass="border-icon">
                        <i className='bx bxl-instagram'></i>
                    </div>
                    <div className="border-icon">
                        <i className='bx bxl-linkedin' ></i>
                    </div>
                    <div className="border-icon">
                        <i className='bx bxl-facebook-circle' ></i>
                    </div>
                </div>
                <p className="cuenta-gratis">¿Aun no tienes una cuenta?</p>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Contraseña" />
                <input type="button" value="Iniciar Sesion" />
            </form>
            <div className="welcome-back">
                <div className="message">
                    <h2>Bienvenido de nuevo</h2>
                    <p>Si aun no tienes una cuenta por favor registrese aqui</p>
                    <button className="sign-in-btn">Registrarse</button>
                </div>
            </div>
        </div>
    </> 
        )

}
 */
/* 

import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from './assets/images/fondo.png'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: `url(${fondo})`,
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
}))

const App = () => {
	const [body, setBody] = useState({ nickname: '', password: '' })
	const classes = useStyles()


	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body)
	}

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Sign In</Typography>
					<form className={classes.form}>
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Nickname'
							name='nickname'
							value={body.nickname}
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
							className={classes.button}
							onClick={() => onSubmit()}
						>
							Sign In
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
}

export default App
 */