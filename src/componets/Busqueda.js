import React from 'react'
import ProductoAdmin from './productoadmin'
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import '../style/Header.css';
//import LogoAlfa from '../img/LogoAlfa.png'

export default function Busqueda() {
    const Busqueda = useNavigate();
    return (

        <nav className="navbar navbar-expand-lg ">
            {  /*  <a href="/"><img className="logoAlfa" src={LogoAlfa} alt="" /></a>*/}
            <div className="busqueda container-fluid">
                <div className="mh-8" style={{ marginLeft: '-390px' }} >
                    <Button className="btn btn-primary" onClick={() => Busqueda("/productoadmin")} src={ProductoAdmin} alt="">Administrador</Button>
                </div>
                <div className="flexbox flex-1">
                    <div className="rel">
                        <span className="barra search-icon"><i className="search"></i></span>
                        <input className="form-control" placeholder="Buscar..." />
                    </div>

                </div>
            </div>
        </nav>

    )
}

