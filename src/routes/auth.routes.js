import express from "express";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/perfil", perfil); //Tiene un middleware, primero se ejecuta la funcion authRequired y luego la otra

export default router;