import React from 'react';

import construccion from "../img/construccion.jpg";
import { Link }  from "react-router-dom";

function PaginaCarrucel() {

    return (
        <div className='container'>

            <div  style={{ width: "100%", height: "100%" ,marginTop:"10px"}}>
                <Link to="/">
                <button style ={{backgroundColor:"blue"}}>VOLVER</button>
                </Link>
              
                <img
                    style={{marginLeft:"1%", marginTop:"5%", width: "100%", height: "100%" }}
                    className="img-productos"
                    src={construccion}
                    alt=""
                />

            </div>
        </div >
    );
}


export default PaginaCarrucel;
