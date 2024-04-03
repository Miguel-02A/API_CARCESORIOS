import { Router } from "express";
// Usuario
import { methods as paginaRegistro } from "../controllers/Controladores_Usuario/Controlador_Registro";
import { methods as paginaIniciarSesion } from "../controllers/Controladores_Usuario/Controlador_Inicio_Sesion";
import { methods as HeaderCliente } from "../controllers/Controladores_Usuario/Controlador_Header_Cliente";
import { methods as CarritoCliente } from "../controllers/Controladores_Usuario/Controlador_Carrito_Cliente";
import { methods as ConfirmarCompra } from "../controllers/Controladores_Usuario/Controlador_Confirmar_Compra_Cliente";
import { methods as ComprasCliente } from "../controllers/Controladores_Usuario/Controlador_Compras_Cliente";

// Administrador
import { methods as HeaderAdmin } from "../controllers/Controladores_Administrador/Controlador_Header_Admin";
import { methods as DatosPerfilAdmin } from "../controllers/Controladores_Administrador/Controlador_Perfil_Admin";
import { methods as EliminarProductoAdmin } from "../controllers/Controladores_Administrador/Controlador_Eliminar_Producto";
import { methods as AgregarProductoAdmin } from "../controllers/Controladores_Administrador/Controlador_Agregar_Producto";
import { methods as ListarProductosAdmin } from "../controllers/Controladores_Administrador/Controlador_Listar_Productos";
import { methods as putModificarProducto } from "../controllers/Controladores_Administrador/Controlador_Editar_Producto";
import { methods as EstadoPedidoAdmin } from "../controllers/Controladores_Administrador/Controlador_Estado_Pedido_Admin";
import { methods as EditarPerfilesAdmin } from "../controllers/Controladores_Administrador/Controlador_EditarPerfiles_Admin";
import { methods as EliminarUsuarioAdmin } from "../controllers/Controladores_Administrador/Controlador_EliminarPerfil_Admin";

// Datos pagina
import { methods as paginaPrincipal } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Principal";
import { methods as paginaVolantes } from "../controllers/Controlador_Datos_Pagina/Controlador_Catalogo_Volantes";
import { methods as DatosContacto } from "../controllers/Controlador_Datos_Pagina/Controlador_Datos_Contacto";
import { methods as TituloAyuda } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Ayuda";
import { methods as titulos } from "../controllers/Controlador_Datos_Pagina/Controlador_Titulos";
import { methods as PaginaOfertas } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Ofertas";
import { methods as PaginaPalancas } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Palancas";
import { methods as PaginaAlerones } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Alerones";
import { methods as PaginaTomasAire } from '../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Tomas_A'
import { methods as PaginaTubosEscape } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_TubosE";
import { methods as PaginaRines } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Rines";
import { methods as PaginaNeumaticos } from "../controllers/Controlador_Datos_Pagina/Controlador_Pagina_Neumaticos";
import { methods as PaginaBodyKit } from "../controllers/Controlador_Datos_Pagina/Controlador_BodyKyt";


import { methods as DescripcionProducto } from "../controllers/Controlador_Datos_Pagina/Controlador_Producto_Descripcion";


const router = Router();

// Usuario

router.get("/CrearCuenta", paginaRegistro.getCrearCuenta);
router.post("/CrearCuenta", paginaRegistro.addUsuario);

router.get("/IniciarSesion", paginaIniciarSesion.getIniciarSesion);
router.post("/IniciarSesion", paginaIniciarSesion.addSesion);
router.get("/IniciarSesion/Documento", paginaIniciarSesion.getDocumentoUsuario);

router.get("/Cliente/Datos", HeaderCliente.HeaderCliente);

router.get("/Cliente/Carrito", CarritoCliente.getCarritoCliente);
router.post("/Cliente/Carrito", CarritoCliente.postAñadirAlCarrito);
router.delete("/Cliente/Carrito", CarritoCliente.deleteEliminarCarrito);
router.get("/Cliente/Carrito/Titulo", CarritoCliente.getTituloCarritoCliente);

router.get("/Cliente/Confirmar/Compra", ConfirmarCompra.getPaginaTituloCompra);
router.put("/Cliente/Confirmar/Compra/CantidadProducto", ConfirmarCompra.putCantidadProducto);
router.post("/Cliente/Confirmar/Compra/DatosFactura", ConfirmarCompra.postDatosFactura);
router.get("/Cliente/Confirmar/Compra/IdFactura", ConfirmarCompra.getIdFactura);
router.post("/Cliente/Confirmar/Compra/DetallesFactura", ConfirmarCompra.postDetallesFactura);

router.get("/Cliente/ComprasCliente", ComprasCliente.getComprasCliente);

// Administrador


router.get("/ADMIN/Datos", HeaderAdmin.HeaderAdmin);

router.get("/ADMIN/Perfil", DatosPerfilAdmin.DatosPerfilAdmin);
router.put("/ADMIN/Perfil", DatosPerfilAdmin.ModificarPerfilAdmin);

router.delete("/ADMIN/EliminarProducto", EliminarProductoAdmin.deleteEliminarProducto);
router.delete("/ADMIN/EliminarProducto/Carrito", EliminarProductoAdmin.deleteEliminarProductoCarritos);

router.post("/ADMIN/AgregarProducto", AgregarProductoAdmin.postProducto);

router.get("/ADMIN/ListaProductos", ListarProductosAdmin.getListarProductos);

router.put("/ADMIN/ModificarProducto", putModificarProducto.putModificarProducto);

router.get("/ADMIN/EstadoPedido", EstadoPedidoAdmin.getEstadoPago);
router.put("/ADMIN/EstadoPedido", EstadoPedidoAdmin.putModificarEstadoPago);

router.get("/ADMIN/EditarPerfilesAdmin", EditarPerfilesAdmin.getEditarPerfilesAdmin);
router.put("/ADMIN/EditarPerfilesAdmin", EditarPerfilesAdmin.putEditarPerfilesAdmin);

router.delete("/ADMIN/EliminarUsuarioAdmin/Carrito", EliminarUsuarioAdmin.deleteEliminarUsuarioCarrito);
router.delete("/ADMIN/EliminarUsuarioAdmin", EliminarUsuarioAdmin.deleteEliminarUsuario);

// Datos pagina

router.get("/", paginaPrincipal.getPaginaPrincipal);
router.get("/T1", paginaPrincipal.getPaginaPrincipalTitulo);

router.get("/volantes", paginaVolantes.getCatalogo_Volantes);
router.get("/volantes/Titulos", paginaVolantes.getPaginaTituloVolantes);

router.get("/Ofertas", PaginaOfertas.getPaginaOfertas);
router.get("/Ofertas/Titulos", PaginaOfertas.getPaginaOfertasTitulo);

router.get("/Contacto", DatosContacto.getDatos_Contacto);
router.get("/Ayuda", TituloAyuda.getTituloPaginaAyuda);
router.get("/titulos", titulos.getTitulos);

router.get("/PaginaPalancas", PaginaPalancas.getCatalogo_Palancas);
router.get("/PaginaPalancas/Titulo", PaginaPalancas.getCatalogo_Palancas_Titulo);

router.get("/PaginaAlerones", PaginaAlerones.PaginaAlerones);
router.get("/PaginaAlerones/Titulo", PaginaAlerones.PaginaAleronesTitulo);

router.get("/PaginaTomasAire", PaginaTomasAire.TomasDeAire);
router.get("/PaginaTomasAire/Titulo", PaginaTomasAire.TomasDeAireTitulo);

router.get("/TubosEscape", PaginaTubosEscape.getPagTubosEscape);
router.get("/TubosEscape/Titulos", PaginaTubosEscape.getTituloPagTubosEscape);

router.get("/Rines", PaginaRines.getPagRines);
router.get("/Rines/Titulos", PaginaRines.getTituloPagRines);

router.get("/PaginaNeumaticos", PaginaNeumaticos.getPagNeumaticos);
router.get("/PaginaNeumaticos/Titulos", PaginaNeumaticos.getTituloPagNeumaticos);

router.get("/PaginaBodyKit", PaginaBodyKit.getPagBodykyt);
router.get("/PaginaBodyKit/Titulos", PaginaBodyKit.getTituloPagbodykyt);

router.get("/Descripcion/Producto", DescripcionProducto.DescripcionProducto);



export default router;