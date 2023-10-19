import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: { 
    type: String, 
    required: [true, "Parâmetro 'titulo' é obrigatório"] 
  },
  editora: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Autor",
    required: [true, "Parâmetro 'editora' é obrigatório"]
  },
  paginas: Number,
  preco: Number,
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Editora",
    required: [true, "Parâmetro 'autor' é obrigatório"]
  }
}, { versionKey: false });

const Livro = mongoose.model("livros", livroSchema);

export default Livro;
