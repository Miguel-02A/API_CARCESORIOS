import { getConeccion } from "../../database/database";

const getPaginaTituloCompra = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 15");
        res.json(Titulo);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const postDatosFactura = async (req, res) => {
    try{
        const {fecha,documento,tipo_documento,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,telefono,direccion} = (req.body);

        const DatosFactura = {fecha,documento,tipo_documento,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,correo,telefono,direccion}
        const coneccion = await getConeccion();
        const result=await coneccion.query("INSERT INTO factura SET ?", DatosFactura);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const getIdFactura = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT MAX(id_factura) AS id_factura FROM factura;");
        res.json(Titulo1);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const postDetallesFactura = async (req, res) => {
    try{
        const {id_factura_f,id_producto_f,cantidad,total} = (req.body);

        const DetallesFactura = {id_factura_f,id_producto_f,cantidad,total}
        const coneccion = await getConeccion();
        const result=await coneccion.query("INSERT INTO detalles_factura SET ?", DetallesFactura);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

const putCantidadProducto = async (req, res) => {
    try{
        const {id_producto,stock} = (req.body);
        const producto = {stock}
        const coneccion = await getConeccion();
        const result=await coneccion.query("UPDATE productos SET ? WHERE id_producto = ?", [producto, id_producto]);

        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    putCantidadProducto,
    getPaginaTituloCompra,
    postDatosFactura,
    getIdFactura,
    postDetallesFactura
};