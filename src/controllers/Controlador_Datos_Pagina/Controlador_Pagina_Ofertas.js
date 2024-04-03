import { getConeccion } from "../../database/database";

const getPaginaOfertas = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const Ofertas = await coneccion.query("SELECT id_producto,nombre_producto,precio,url_imagen_producto,descuento FROM productos WHERE descuento > 1");
        res.json(Ofertas);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

const getPaginaOfertasTitulo = async(req,res) =>{
    try{
        const coneccion = await getConeccion();
        const TituloOfertas = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 6");
        res.json(TituloOfertas);
    }
    catch(error){
        res.status(500);
        res.send(error.message); 
    }   
};

export const methods = {
    getPaginaOfertas,
    getPaginaOfertasTitulo
};