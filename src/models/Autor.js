import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: { 
    type: String, 
    required: [true, "Parâmetro 'nome' é obrigatório"] 
  },
  nacionalidade: String,
}, { versionKey: false });

const Autor = mongoose.model("autores", autorSchema);

export { Autor, autorSchema };
