import { getConeccion } from "../../database/database";

const getEditarPerfilesAdmin = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT documento,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,telefono,correo FROM usuario WHERE id_rol_f = 1");
        res.json(Titulo1);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const putEditarPerfilesAdmin = async (req, res) => {
    try{
        const {documento,correo} = (req.body);
        const Usuario = {documento,correo}
        const coneccion = await getConeccion();
        const result=await coneccion.query("UPDATE usuario SET ? WHERE `documento` = ?", [Usuario, documento]);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getEditarPerfilesAdmin,
    putEditarPerfilesAdmin
};