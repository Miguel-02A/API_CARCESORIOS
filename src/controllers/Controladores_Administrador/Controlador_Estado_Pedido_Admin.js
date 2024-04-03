import { getConeccion } from "../../database/database";

const getEstadoPago = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT id_factura,documento,total,estado_del_pago FROM detalles_factura INNER JOIN factura ON factura.id_factura = detalles_factura.id_factura_f");
        res.json(Titulo1);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const putModificarEstadoPago = async (req, res) => {
    try{
        const {id_factura,estado_del_pago} = (req.body);
        const factura = {id_factura,estado_del_pago}
        const coneccion = await getConeccion();
        const result=await coneccion.query("UPDATE factura SET ? WHERE `id_factura` = ?", [factura, id_factura]);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getEstadoPago,
    putModificarEstadoPago
};