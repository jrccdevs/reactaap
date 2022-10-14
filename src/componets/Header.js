import React, { Component } from 'react'
import '../style/Header.css';
import Logochica from '../assets/img/logochica.jpg'



export default class Header extends Component {
    render() {
        return (

            
                <div className="arriba">

                    <a href="/"><img className="logo" src={Logochica} alt="" /></a>
                    
                </div>

            




        );
    }
}
