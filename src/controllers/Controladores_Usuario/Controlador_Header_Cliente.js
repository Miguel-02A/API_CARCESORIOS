import { getConeccion } from "../../database/database";

const HeaderCliente = async(req,res) =>{
    try{
        const { correo } = req.query;
        const coneccion = await getConeccion();
        const resultado = await coneccion.query("SELECT primer_nombre,segundo_nombre,primer_apellido,segundo_apellido FROM usuario WHERE `correo` = ?", correo);
        res.json(resultado);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    HeaderCliente
};