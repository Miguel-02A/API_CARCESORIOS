import { getConeccion } from "../../database/database";

const deleteEliminarProductoCarritos = async(req,res) =>{
    try{
        const { EliminarProducto } = req.query; // Cambia de req.query a req.params
        const coneccion = await getConeccion();
        const categorias = await coneccion.query("DELETE FROM carrito_compras WHERE `id_producto_f` = ?", EliminarProducto);
        res.json(categorias);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const deleteEliminarProducto = async(req,res) =>{
    try{
        const { EliminarProducto } = req.query; // Cambia de req.query a req.params
        const coneccion = await getConeccion();
        const categorias = await coneccion.query("DELETE FROM productos WHERE `id_producto` = ?", EliminarProducto);
        res.json(categorias);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    deleteEliminarProductoCarritos,
    deleteEliminarProducto
};