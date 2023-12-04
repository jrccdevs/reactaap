//import axios from 'axios'



//export const getProductosRequest = async () => 



//  await axios.get(`http://localhost:7000/formaFarmaceutica/${formafarmaceutica}`);
//  await axios.get('http://localhost:7000/formaFarmaceutica');


//await axios.get('https://node-alfa.vercel.app/productos');
/////// await axios.get('http://localhost:7000/productos');
 





 

//  await axios.get('http://localhost:7000/productos');

 //https://node-alfa.vercel.app/productos




/* export const crearProductosRequest = async(productos) => {
    const form = new FormData()
 
    for(let key in productos){
        form.append(key, productos[key]);
    }
 return await axios.post('https://node-alfa.vercel.app/productos', form, {
 //  return await axios.post('http://localhost:7000/productos', form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
}; */




import axios from "axios";

export const getProductosRequest = async () => {
  //  await axios.get(`http://localhost:7000/formaFarmaceutica/${formafarmaceutica}`);
  //  await axios.get('http://localhost:7000/formaFarmaceutica');

  await axios.get("https://node-alfa.vercel.app/productos");
  // await axios.get('http://localhost:7000/productos');
};

//  await axios.get('http://localhost:7000/productos');

//https://node-alfa.vercel.app/productos

export const crearProductosRequest = async (productos) => {
  const form = new FormData();

  for (let key in productos) {
    form.append(key, productos[key]);
  }
  // return await axios.post("http://localhost:7000/productos", form, {
  return await axios.post("https://node-alfa.vercel.app/productos", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getProductosIdRequest = async (id) => {
  try {
    // const response = await axios.get(`http://localhost:7000/productos/${id}`);
    const response = await axios.get(`https://node-alfa.vercel.app/productos/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los detalles del producto:", error);
    throw error;
  }
};

export const actualizarProductosRequest = async (productos, id) => {
  const form = new FormData();

  for (let key in productos) {
    form.append(key, productos[key]);
  }
  return await axios.put(`https://node-alfa.vercel.app/productos/${id}`, form, {
  // return await axios.put(`http://localhost:7000/productos/${id}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProductoRequest = async (id) => {
  // await axios.delete(`http://localhost:7000/productos/${id}`);
  await axios.delete(`https://node-alfa.vercel.app/productos/${id}`);
};



//------------------------------------------------------------------------------------------------//
// crud de imagenes 

export const getImagenesRequest = async () => {
 

 await axios.get("https://node-alfa.vercel.app/imagenes");
   //await axios.get('http://localhost:7000/imagenes');
};

//  await axios.get('http://localhost:7000/productos');

//https://node-alfa.vercel.app/productos

export const crearImagenesRequest = async (imagenes) => {
  const form = new FormData();

  for (let key in imagenes) {
    form.append(key, imagenes[key]);
  }
  // return await axios.post("http://localhost:7000/imagenes", form, {
  return await axios.post("https://node-alfa.vercel.app/imagenes", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

export const getImagenesIdRequest = async (id) => {
  try {
    // const response = await axios.get(`http://localhost:7000/imagenes/${id}`);
    const response = await axios.get(`https://node-alfa.vercel.app/imagenes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los detalles del las imagenes:", error);
    throw error;
  }
};

export const actualizarImagenesRequest = async (productos, id) => {
  const form = new FormData();

  for (let key in productos) {
    form.append(key, productos[key]);
  }
  return await axios.put(`https://node-alfa.vercel.app/imagenes/${id}`, form, {
  //return await axios.put(`http://localhost:7000/imagenes/${id}`, form, {
    
    headers: {
      "Content-Type": `multipart/form-data`,
     
     
    },
  });
};

export const deleteImagenesRequest = async (id) => {
   //await axios.delete(`http://localhost:7000/imagenes/${id}`);
  await axios.delete(`https://node-alfa.vercel.app/imagenes/${id}`);
};

