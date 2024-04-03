import { getConeccion } from "../../database/database";

const getDatos_Contacto = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Datos = await coneccion.query("SELECT * FROM informacion_contacto");
        res.json(Datos);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getDatos_Contacto
};