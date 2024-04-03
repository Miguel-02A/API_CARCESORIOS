import { getConeccion } from "../../database/database";

const postProducto = async (req, res) => {
    try{
        const {nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento} = (req.body);

        const Producto = {nombre_producto,precio,url_imagen_producto,stock,descripcion,descuento}
        const coneccion = await getConeccion();
        const result=await coneccion.query("INSERT INTO productos SET ?", Producto);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};



export const methods = {
    postProducto
};