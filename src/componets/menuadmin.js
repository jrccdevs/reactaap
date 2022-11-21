import React from 'react'
import {  Link } from 'react-router-dom';
export default function Menuadmin () {
  
return(
    <>

    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/productoadmin' className="nav-link active" aria-current="page">Prueba </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/administradorcarrucel' 
                            className="nav-link" >Carrucel</Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/administrarproducto'
                         className="nav-link" >Productos</Link >
                       </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

