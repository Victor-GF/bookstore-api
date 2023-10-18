import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId},
  nome: { type: String, require: true}
}, { versionKey: false });

const editora = mongoose.model("editoras", editoraSchema);

export { editora, editoraSchema };
