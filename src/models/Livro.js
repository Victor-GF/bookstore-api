import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";
import { editoraSchema } from "./Editora.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, require: true },
  editora: editoraSchema,
  paginas: { type: Number },
  preco: { type: Number },
  autor: autorSchema
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;
