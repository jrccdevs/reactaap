import React from 'react'
import Menuadmin from './menuadmin'
import { useNavigate } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import '../style/Header.css';
import LogoAlfa from '../img/LogoAlfa.png'

export default function Busqueda() {
    const Busqueda = useNavigate();
    return (

        <nav className="navbar navbar-expand-lg ">
              <a href="/"><img className="logoAlfa" src={LogoAlfa} alt="" /></a> 
            <div className="busqueda container-fluid">
                <div className="mh-8" style={{ marginLeft: '-390px' }} >
                    <Button className="btn btn-primary" onClick={() => Busqueda("/menuadmin")} src={Menuadmin} alt="">Administrador</Button>
                </div>
                 <div className="flexbox flex-1">
                    <div className="rel">
                        <span className="barra search-icon"><i className="search"></i></span>
                        <input className="form-control" placeholder="Buscar..." />
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                    <div className="buscador1 input-group ">
                        <form className="d-flex" role="search">

                            <input type="search" className="buscador form-control me-8 " placeholder="Buscador de Productos (x Marca / x P.A.)...." aria-label="Search" aria-describedby="search-addon" />
                            <Button className="lupa1" type="submit"><FcSearch className="lupaicono1"></FcSearch></Button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

    )
}

