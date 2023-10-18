import express from "express";
import livros from "./livrosRoutes.js";
import autores from "./autoresRoutes.js";
import editoras from "./editoraRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {res.status(200).send("Curso de Node.js")});

  app.use(express.json());

  // Setup routes for "livros" collection
  app.use("/livros", livros);

  // Setup routes for "autores" collection
  app.use("/autores", autores);

  // Setup routes for "editoras" collection
  app.use("/editoras", editoras);
};

export default routes;
