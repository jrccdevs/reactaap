import axios from "axios";

export const getProductosRequest = async () => await axios.get("/productos");


export const getImagenesRequest = async () => await axios.get("/imagenes");
