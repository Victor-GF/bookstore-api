import express from "express";
import EditoraController from "../controllers/editoraController.js"

const routes = express.Router();

// HTTP Requests
routes.get("/", EditoraController.listarEditoras);
routes.get("/:id", EditoraController.listarEditoraId);
routes.post("/", EditoraController.cadastrarEditora);
routes.put("/:id", EditoraController.atualizarEditora);
routes.delete("/:id", EditoraController.excluirEditora);

export default routes;
