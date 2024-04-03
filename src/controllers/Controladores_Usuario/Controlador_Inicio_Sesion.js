import { getConeccion } from "../../database/database";

const getIniciarSesion = async (req, res) => {
    try {
        console.log(req.params);
        const coneccion = await getConeccion();
        const result = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 4");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addSesion = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;
        const parametros = [correo, contraseña];
        const coneccion = await getConeccion();
        const resultado = await coneccion.query("SELECT * FROM usuario WHERE `correo` = ? AND `contraseña` = ?", parametros);
        if (resultado.length > 0) {
            // Consulta para obtener el rol del usuario
            const rolResultado = await coneccion.query("SELECT primer_nombre, rol, documento FROM usuario INNER JOIN rol ON rol.id_rol = usuario.id_rol_f WHERE `correo` = ? AND `contraseña` = ?", parametros);

            if (rolResultado.length > 0) {
                // Si se encuentra un rol para el usuario
                return res.json({ status: "Aprobado", rol: rolResultado[0].rol });
            } else {
                // Si no se encuentra un rol para el usuario
                return res.json({ status: "Aprobado", rol: null });
            }
        } else {
            // Si no se encuentra el usuario
            return res.json({ status: "Fail", rol: null });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getDocumentoUsuario = async(req,res) =>{
    try{
        const { correo } = req.query;
        const coneccion = await getConeccion();
        const CorreoUsuario = await coneccion.query("SELECT documento FROM usuario WHERE correo = ?", correo);
        res.json(CorreoUsuario);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getIniciarSesion,
    addSesion,
    getDocumentoUsuario
};