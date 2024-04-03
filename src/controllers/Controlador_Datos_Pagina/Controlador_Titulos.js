import { getConeccion } from "../../database/database";

const getTitulos = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const titulos = await coneccion.query("SELECT * FROM titulos");
        res.json(titulos);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getTitulos
};

