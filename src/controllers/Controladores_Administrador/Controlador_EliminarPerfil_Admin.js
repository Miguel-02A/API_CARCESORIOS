import { getConeccion } from "../../database/database";

const deleteEliminarUsuarioCarrito = async(req,res) =>{
    try{
        const { documento } = req.query; // Cambia de req.query a req.params
        const coneccion = await getConeccion();
        const Usuario = await coneccion.query("DELETE carrito_compras FROM carrito_compras INNER JOIN productos ON productos.id_producto = carrito_compras.id_producto_f INNER JOIN usuario ON usuario.documento = carrito_compras.documento_f WHERE usuario.documento = ?", [documento]);
        res.json(Usuario);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const deleteEliminarUsuario = async(req,res) =>{
    try{
        const { documento } = req.query; // Cambia de req.query a req.params
        const coneccion = await getConeccion();
        const Usuario = await coneccion.query("DELETE FROM usuario WHERE usuario.documento = ?", [documento]);
        res.json(Usuario);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    deleteEliminarUsuarioCarrito,
    deleteEliminarUsuario
};