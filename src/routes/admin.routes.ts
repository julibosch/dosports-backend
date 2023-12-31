import express from "express";
import { listadoProductos, crearProducto, actualizarProducto, eliminarProducto } from "../controller/admin.controller";

const router = express.Router();

router.get("/productos", listadoProductos);
router.post("/productos", crearProducto);
router.put("/productos/:id", actualizarProducto);
router.delete("/productos/:id", eliminarProducto);

export default router