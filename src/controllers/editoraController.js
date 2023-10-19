import { Editora } from "../models/Editora.js";

class EditoraController {

  // Retorna todas as editoras
  static async listarEditoras(req, res, next) {
    try {
      const listaEditoras = await Editora.find({}); 
      res.status(200).json(listaEditoras);
    } catch (error) {
      next(error);
    }
  }

  // Retora uma Editora pelo id fornecido
  static async listarEditoraId(req, res, next) {
    try {
      const id = req.params.id;
      const editoraResult = await Editora.findById(id); 
      res.status(200).json(editoraResult);
    } catch (error) {
      next(error);
    }
  }

  // Cadastra uma nova Editora e retorna seu valor
  static async cadastrarEditora(req, res, next) {
    try {
      const editoraCriada = await Editora.create(req.body);
      
      res.status(201).json({ message: "Criado com sucesso", data: editoraCriada });
    } catch (error) {
      next(error);
    }
  }

  // Atualiza uma Editora pelo id fornecido
  static async atualizarEditora(req, res, next) {
    try {
      const id = req.params.id;
      await Editora.findByIdAndUpdate(id, req.body); 
      res.status(200).json({ message: "Atualizado com sucesso"}); 
    } catch (error) {
      next(error);
    }
  }

  // Exclui um Editora pelo id fornecido
  static async excluirEditora(req, res, next) {
    try {
      const id = req.params.id;
      await Editora.findByIdAndDelete(id); 
      res.status(200).json({ message: "Editora excluída com sucesso"}); 
    } catch (error) {
      next(error);
    }
  }
}

export default EditoraController;
