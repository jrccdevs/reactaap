import axios from "axios";

export const getProductosRequest = async () => await axios.get("/productos");
