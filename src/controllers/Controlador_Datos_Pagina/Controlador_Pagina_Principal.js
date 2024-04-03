import { getConeccion } from "../../database/database";

const getPaginaPrincipal = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const categorias = await coneccion.query("SELECT * FROM categorias");
        res.json(categorias);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const getPaginaPrincipalTitulo = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 1");
        res.json(Titulo1);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getPaginaPrincipal,
    getPaginaPrincipalTitulo
};