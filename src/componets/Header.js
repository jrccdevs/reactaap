import React, { Component } from 'react'
import '../style/Header.css';
import Logochica from '../img/imgLogochica.png'
import LogoAlfa from '../img/LogoAlfa.png'



export default class Header extends Component {
    render() {
        return (

            
                <div className="arriba">

                    <a href="/"><img className="logo" src={Logochica} alt="" /><img className="logoAlfa" src={LogoAlfa} alt="" /></a>
                    
                </div>

            




        );
    }
}
