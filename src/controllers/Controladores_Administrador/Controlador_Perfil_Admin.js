import { getConeccion } from "../../database/database";

const DatosPerfilAdmin = async(req,res) =>{
    try{
        const { Documento } = req.query;
        const coneccion = await getConeccion();
        const resultado = await coneccion.query("SELECT primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,tipo_documento,documento,correo,telefono,direccion FROM usuario WHERE `documento` = ?", Documento);
        res.json(resultado);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const ModificarPerfilAdmin = async (req, res) => {
    try{
        const {primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,telefono,direccion} = (req.body);

        const coneccion = await getConeccion();
        const camposModificados = {};
        if (primer_nombre) camposModificados.primer_nombre = primer_nombre;
        if (segundo_nombre) camposModificados.segundo_nombre = segundo_nombre;
        if (primer_apellido) camposModificados.primer_apellido = primer_apellido;
        if (segundo_apellido) camposModificados.segundo_apellido = segundo_apellido;
        if (telefono) camposModificados.telefono = telefono;
        if (direccion) camposModificados.direccion = direccion;

        const result=await coneccion.query("UPDATE usuario SET ? WHERE `correo` = ?", [camposModificados, correo]);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    DatosPerfilAdmin,
    ModificarPerfilAdmin
};