import { getConeccion } from "../../database/database";

const DescripcionProducto = async(req,res) =>{
    try{
        const { idProductoSeleccionado } = req.query; // Cambia de req.query a req.params
        const coneccion = await getConeccion();
        const categorias = await coneccion.query("SELECT nombre_producto,url_imagen_producto,precio,descripcion,stock,descuento,iva FROM productos WHERE `id_producto` = ?", idProductoSeleccionado);
        res.json(categorias);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    DescripcionProducto,
};