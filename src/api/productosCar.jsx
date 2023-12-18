import axios from 'axios'



export const getProductosCarrucel = async () => 



//  await axios.get(`http://localhost:7000/formaFarmaceutica/${formafarmaceutica}`);
//  await axios.get('http://localhost:7000/formaFarmaceutica');


await axios.get('https://node-alfa.vercel.app/carrucel');
//await axios.get('http://localhost:7000/carrucel');

export const getImagenesBannerRespon = async () => 
await axios.get('https://node-alfa.vercel.app/responbanner');


export const getImagenesBanner = async () => 
await axios.get('https://node-alfa.vercel.app/banner');

export const getImagenesVademecum = async () => 


await axios.get('https://node-alfa.vercel.app/vademecum');


export const getImagenesNoticias = async () => 


await axios.get('https://node-alfa.vercel.app/noticias');
 

//  await axios.get('http://localhost:7000/productos');

 //https://node-alfa.vercel.app/productos




export const crearProductosRequest = async(productos) => {
    const form = new FormData()
 
    for(let key in productos){
        form.append(key, productos[key]);
    }
 return await axios.post('https://node-alfa.vercel.app/productos', form, {
   // return await axios.post('http://localhost:7000/productos', form, {
        headers: {
            "Content-Type" : "multipart/form-data",
        },
    });
};

export const getEmpresaBanner = async () => 
await axios.get('https://node-alfa.vercel.app/empresa');
//await axios.get('http://localhost:7000/empresa');

export const getMovil = async () => 
await axios.get('https://node-alfa.vercel.app/movil');
//await axios.get('http://localhost:7000/movil');

export const getBanner = async () => 
await axios.get('https://node-alfa.vercel.app/banner');
//await axios.get('http://localhost:7000/banner');



export const getEmpresaAlafa = async () => 
await axios.get('https://node-alfa.vercel.app/empresaalfa');
//await axios.get('http://localhost:7000/empresa');

export const getBannerAlfa = async () => 
await axios.get('https://node-alfa.vercel.app/banneralfa');
//await axios.get('http://localhost:7000/banner');