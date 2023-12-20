import React, { useState, useEffect } from "react";
import { useParams, Link, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { getEmpresaBanner } from "../api/productosCar";
import Footer from './Footer';
import construccion from "../img/construccion.jpg";

//componente para imagenes moviles 
function PaginaCarrucel() {
    const [visible, setVisible] = React.useState(false);
  //   console.log(useParams());

  const { id, page } = useParams();
  console.log(page);


  const [producto, setProducto] = React.useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://node-alfa.vercel.app/empresa/${id}`);
      const product = await data.json();
      setProducto(product);
    };
    fetchData();
  }, [id]);

  const navigate = useNavigate();


    return (
        <>
       {producto.map((producto) => (
        <div className='container' key={producto.id}>
         
            <div className='row' >
                
            <div className='col-md-12' style={{ width: "100%", height: "100%" ,marginTop:"10px"}}>
                
            
                <img
                    style={{marginLeft:"1%", marginTop:"5%", width: "100%", height: "auto", marginBottom:"45px" }}
                    className="img-productos"
                    src={producto.archivo}
                    alt=""
                />

            </div>

            </div>

           {/*  <div>
                <p> {producto.descripcion} </p>
            </div>

            <div>
                <p> {producto.estado} </p>
            </div>
            <div>
                <p> {producto.categoria} </p>
            </div>
            <div>
                <p> {producto.id} </p>
            </div> */}
         
        </div >
         ))}
         <div className="principal-footer mb-12 mt-12">
         <Footer />
         </div>
        </>
    );
}


export default PaginaCarrucel;
