import axios from 'axios'



export const getProductosRequest = async () => 
 await axios.get('https://node-alfa.vercel.app/productos');
 //https://node-alfa.vercel.app/productos

export const crearProductosRequest = async(productos) => {
    const form = new FormData()
 
    for(let key in productos){
        form.append(key, productos[key]);
    }
   return await axios.post('https://node-alfa.vercel.app/productos', form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
};
