import React, { Component } from 'react'
import '../style/Header.css';
import LogoAlfa from '../img/LogoAlfa.png'

export default class Busqueda extends Component {
    render() {
        return (
            
                 <nav className="navbar navbar-expand-lg ">
                    <a href="/"><img className="logoAlfa" src={LogoAlfa} alt="" /></a>
                    <div className="busqueda container-fluid">

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
}
