import { getConeccion } from "../../database/database";

const getCarritoCliente = async(req,res) =>{
    try{
        const { Documento } = req.query;
        const coneccion = await getConeccion();
        const resultado = await coneccion.query("SELECT id_carrito_compras,url_imagen_producto,nombre_producto,descripcion,precio,id_producto FROM carrito_compras INNER JOIN productos ON productos.id_producto = carrito_compras.id_producto_f INNER JOIN usuario ON usuario.documento = carrito_compras.documento_f WHERE `documento` = ?", Documento);
        res.json(resultado);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};




const postAñadirAlCarrito = async (req, res) => {
    try {
        const { documento_f, id_producto_f } = (req.body);
        console.log(documento_f)
        console.log(id_producto_f)
        const parametros = {documento_f, id_producto_f};
        const coneccion = await getConeccion();
        const resultado = await coneccion.query("INSERT INTO carrito_compras SET ?", parametros);
        res.json(resultado);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const deleteEliminarCarrito = async(req,res) =>{
    try{
        const { IdProductoCarritoR } = req.query; // Cambia de req.query a req.params
        const coneccion = await getConeccion();
        const categorias = await coneccion.query("DELETE FROM carrito_compras WHERE `id_carrito_compras` = ?", IdProductoCarritoR);
        res.json(categorias);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};


const getTituloCarritoCliente = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 14");
        res.json(Titulo1);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getCarritoCliente,
    postAñadirAlCarrito,
    deleteEliminarCarrito,
    getTituloCarritoCliente
};