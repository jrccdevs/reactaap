import axios from 'axios'



export const getProductosRequest = async () => 



//  await axios.get(`http://localhost:7000/formaFarmaceutica/${formafarmaceutica}`);
//  await axios.get('http://localhost:7000/formaFarmaceutica');


await axios.get('https://node-alfa.vercel.app/productos');
 //await axios.get('http://localhost:7000/productos');
 





 

//  await axios.get('http://localhost:7000/productos');

 //https://node-alfa.vercel.app/productos




export const crearProductosRequest = async(productos) => {
    const form = new FormData()
 
    for(let key in productos){
        form.append(key, productos[key]);
    }
  return await axios.post('https://node-alfa.vercel.app/productos', form, {
    //return await axios.post('http://localhost:7000/productos', form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
};


