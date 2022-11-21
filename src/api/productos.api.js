import axios from 'axios'



export const getProductosRequest = async () => 
 await axios.get('http://localhost:7000/productos');


export const crearProductosRequest = async(productos) => {
    const form = new FormData()
 
    for(let key in productos){
        form.append(key, productos[key]);
    }
   return await axios.post('http://localhost:7000/productos', form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
};
