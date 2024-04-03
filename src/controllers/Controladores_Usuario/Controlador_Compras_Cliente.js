import { getConeccion } from "../../database/database";

const getComprasCliente = async(req,res) =>{
    try{
        const { Documento } = req.query;
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT id_factura,documento,fecha,nombre_producto,precio,cantidad,iva,total,estado_del_pago FROM detalles_factura INNER JOIN factura ON factura.id_factura = detalles_factura.id_factura_f INNER JOIN productos ON productos.id_producto = detalles_factura.id_producto_f WHERE documento = ?", Documento);
        res.json(Titulo1);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getComprasCliente,
};