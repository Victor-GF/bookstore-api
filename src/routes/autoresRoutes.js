import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

// HTTP Requests
routes.get("/", AutorController.listarAutores);
routes.get("/:id", AutorController.listarAutorId);
routes.post("/", AutorController.cadastrarAutor);
routes.put("/:id", AutorController.atualizarAutor);
routes.delete("/:id", AutorController.excluirAutor);

export default routes;
