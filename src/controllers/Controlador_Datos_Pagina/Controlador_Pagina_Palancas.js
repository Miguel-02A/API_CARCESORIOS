import { getConeccion } from "../../database/database";

const getCatalogo_Palancas = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const categorias = await coneccion.query("select id_producto,nombre_producto,precio,url_imagen_producto from productos where nombre_producto like '%Palanca%';");
        res.json(categorias);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const getCatalogo_Palancas_Titulo = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 7");
        res.json(Titulo1);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getCatalogo_Palancas,
    getCatalogo_Palancas_Titulo
};