import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: { 
    type: String, 
    required: [true, "Parâmetro 'nome' é obrigatório"]
  }
}, { versionKey: false });

const Editora = mongoose.model("editoras", editoraSchema);

export { Editora, editoraSchema };
