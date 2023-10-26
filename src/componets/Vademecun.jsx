import React, { useEffect, useState } from 'react'
import { getImagenesVademecum } from "../api/productosCar";
export default function Vademecun()  {

    const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    async function loadProductos() {
      const response = await getImagenesVademecum();
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
   
        return (
            
           
            <div style={{position: 'absolute', width: '100%', height: '100%'}}>
            {result.map((producto) => (
               <object
               data={producto.image}
               type="application/pdf"
               target="_blank"
               width= "100%"
               height="100%"
               >
               </object>
                 ))}
            </div>
            
            
        )
    
}
