import { getConeccion } from "../../database/database";

const TomasDeAire = async (req, res) => {
    try {
        const coneccion = await getConeccion();
        const categorias = await coneccion.query("select id_producto,nombre_producto,precio,url_imagen_producto from productos where nombre_producto like '%Toma de aire%';");
        res.json(categorias);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const TomasDeAireTitulo = async (req, res) => {
    try {
        const coneccion = await getConeccion();
        const Titulo1 = await coneccion.query("SELECT * FROM titulos WHERE id_titulo = 9");
        res.json(Titulo1);
    }
    catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    TomasDeAire,
    TomasDeAireTitulo
};