import { getConeccion } from "../../database/database";

const putModificarProducto = async (req, res) => {
    try {
        const { id_producto, nombre_producto, precio, url_imagen_producto, stock, descripcion, descuento } = req.body;
        const coneccion = await getConeccion();
        const camposModificados = {};
        if (nombre_producto) camposModificados.nombre_producto = nombre_producto;
        if (precio) camposModificados.precio = precio;
        if (url_imagen_producto) camposModificados.url_imagen_producto = url_imagen_producto;
        if (stock) camposModificados.stock = stock;
        if (descripcion) camposModificados.descripcion = descripcion;
        if (descuento) camposModificados.descuento = descuento;
        const result = await coneccion.query("UPDATE productos SET ? WHERE `id_producto` = ?", [camposModificados, id_producto]);

        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    putModificarProducto
};