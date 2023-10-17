import express from "express";
import connectIntoDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

// MongoDB connection
const connection = await connectIntoDatabase();

connection.on("error", (error) => {
  console.error("Erro de conexão com o banco", error);
});

connection.once("open", () => {
  console.log("Conexão com banco estabelecida com sucesso");
})

// Server setup
const app = express();

// Middleware
app.use(express.json());

// HTTP requests
app.get("/", (req, res) => {
  res.status(200).send("Curso Alura Node.js");
});

app.get("/livros", async (req, res) => {
  // Retorna todos os livros
  const listaLivros = await livro.find({}); 

  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);

  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);

  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  
  res.status(200).json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);

  res.status(200).send("Livro deletado com sucesso");
});

export default app;
