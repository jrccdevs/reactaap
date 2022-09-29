import React, { Component } from 'react'
import '../style/Header.css';
import Imagen1 from '../img/Imagen1.jpg'



export default class Header extends Component {
    render() {
        return (


            <div className="arriba">
                
                    <a href="/"><img className="logo" src={Imagen1} alt="" /></a>
                
            </div>
            


        );
    }
}
