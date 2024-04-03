import { getConeccion } from "../../database/database";

const getListarProductos = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo2 = await coneccion.query("SELECT * FROM productos");
        res.json(Titulo2);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};


export const methods = {
    getListarProductos
};