import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

// HTTP Requests
routes.get("/", LivroController.listarLivros);
routes.get("/search", LivroController.listaLivrosEditora);
routes.get("/:id", LivroController.listarLivroId);
routes.post("/", LivroController.cadastrarLivro);
routes.put("/:id", LivroController.atualizarLivro);
routes.delete("/:id", LivroController.excluirLivro);

export default routes;
