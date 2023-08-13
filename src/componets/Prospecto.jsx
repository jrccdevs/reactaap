/* import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductosCarrucel } from "../api/productosCar";
import {RViewerTrigger, RViewer} from 'react-viewerjs'

//const { id } = useParams();
  // console.log(id);

  

 function Prospecto () {

  const { id } = useParams();
  // console.log(id);

  const [producto, setProducto] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {

      //cambiar en https
      const data = await fetch(`https://node-alfa.vercel.app/productos/${id}`);
      //const data = await fetch(`http://localhost:7000/productos/${id}`);

      const product = await data.json();
      //   console.log(product);
      setProducto(product);
    };
    fetchData();
  }, [id]);

    
        return (
            <div>
              <RViewer imageUrls={producto}>
                <div style={{display:'flex'}} >
            {producto.map((producto, index) => (
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
              <RViewerTrigger index={index}>
                  <img src={producto.image} style={{position: 'absolute', width: '150px%', height: '150px'}}/>

              </RViewerTrigger>
            </div>
             ))}
             </div>
             </RViewer>
             </div>
        )
    }

export default Prospecto */


import React from "react"
import { RViewer, RViewerTrigger } from 'react-viewerjs'
import Productos from "../img/Productos.png";
function Prospecto () {
  let sourceUrl = {Productos}
  let options={
    toolbar: {//单张图片预览不要pre和next底部按钮，隐藏它
      prev: false,
      next: false
    }
  }
  return (
    <RViewer options={options} imageUrls={sourceUrl}>
      <RViewerTrigger>
        <button>one image preview</button>
      </RViewerTrigger>
    </RViewer>
  )
}


export default Prospecto
