import React, { useState, useEffect } from "react";
import Empresa from "../img/empresa.png";
import Productos from "../img/Productos.png";
import Farmacovigilancia from "../img/Farmacovigilancia.png";
import Vademecum from "../img/Vademecum.png";
import {  Link } from "react-router-dom";
import LogoAlfa from "../img/LogoAlfa.png";
import { getImagenesNoticias } from "../api/productosCar";
import ReactPlayer from 'react-player'
import "../style/Navegacion.css";
import {MediaComponent} from './prueba';

const iframeStyle = {
  backgroundColor: 'red', // Cambia el fondo a transparente
};

export default function Navegacion () {


  const  grada = "none";

  const esVideo = url => {
    const extensionesVideo = ['.mp4', '.webm', '.ogg', '.ogv', '.avi', '.mov', '.mkv', '.flv'];
    return extensionesVideo.some(ext => url.endsWith(ext));
  };
  
  const esImagen = url => {
    const extensionesImagen = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    return extensionesImagen.some(ext => url.endsWith(ext));
  };
  
  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    async function loadProductos() {
      const response = await getImagenesNoticias();
      setProductos(response.data);
    }
    loadProductos();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    buscar(e.target.value);
  };

  let result = [];

  const buscar = (e) => {
    if (!busqueda) {
      result = productos;
    } else {
      result = productos.filter((dato) =>
        dato.principioactivo
          .toLowerCase()
          .includes(busqueda.toLocaleLowerCase())
      );
    }
  };

  buscar();

  console.log(result);


  //const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <section className="col-12 col-sm-12 col-lg-6">
          <div className="row">
            
            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <Link to="/empresa">
                  <img className="fondo-img" src={Empresa} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <Link to="/productos">
                  <img className="fondo-img" src={Productos} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <Link to="/es/farmaco-vigilancia">
                  <img className="fondo-img" src={Farmacovigilancia} alt="" />
                </Link>
              </div>
            </div>

            <div className="col-6 col-sm-6 mt-4">
              <div className="imagen1">
                <Link to="/vademecun">
                  <img
                    className="fondo-img"
                    target="_blank"
                    src={Vademecum}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="col-12 col-sm-12 col-lg-6">
        {result.map((producto) => (
          <div className="row" key={producto.id}>
            <div className="container-fluit col-lg-12 mt-4 abajo">
              {/* <div className="container2" style={{display:[producto.accion]}}>
                
               
              <ReactPlayer  url={producto.image} controls={true} loop={true} playing={true} pip={true}  width="510"  height="550"></ReactPlayer>
         {/*     
             <MediaComponent url={producto.image} validateFunction={esVideo} />
      <MediaComponent url={producto.image} validateFunction={esImagen} /> 
               
             </div> */}
             <div className="container2"  style={{ width:"100%", height:"auto"}}>
             {producto.tipo === 'imagen' && (
                <div style={{ display: producto.accion ? 'block' : 'none' }}>
                
                  <img
                    
                    className="fondo-img"
                    target="_blank"
                    src={producto.image}
                    alt=""
                  />
                 
               </div>
               )}
                  {producto.tipo === 'video' && (
               <div style={{ display: producto.accion ? 'block' : 'none' }}>
             
               <ReactPlayer  url={producto.image} controls={true} loop={true} playing={true}   width="100%"  height="auto"></ReactPlayer>
              
               
               </div>
               )}
             </div>
            
               
            </div>
          </div>
          
           ))}
        </section>
       
      </div>
    </div>
  );
}
