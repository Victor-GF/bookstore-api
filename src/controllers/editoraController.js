import { editora } from "../models/Editora.js";

class EditoraController {

  // Retorna todas as editoras
  static async listarEditoras(req, res) {
    try {
      const listaEditoras = await editora.find({}); 
      res.status(200).json(listaEditoras);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO DAS EDITORAS` })
    }
  };

  // Retora uma editora pelo id fornecido
  static async listarEditoraId(req, res) {
    try {
      const id = req.params.id;
      const editoraResult = await editora.findById(id); 
      res.status(200).json(editoraResult);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO DA EDITORA PELO ID` })
    }
  };

  // Cadastra uma nova editora e retorna seu valor
  static async cadastrarEditora(req, res) {
    try {
      const editoraCriada = await editora.create(req.body)
      
      res.status(201).json({ message: "Criado com sucesso", editora: editoraCriada });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO CADASTRAR EDITORA`})
    }
  };

  // Atualiza uma editora pelo id fornecido
  static async atualizarEditora(req, res) {
    try {
      const id = req.params.id;
      await editora.findByIdAndUpdate(id, req.body); 
      res.status(200).json({ message: "Atualizado com sucesso"}); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO ATUALIZAR EDITORA` })
    }
  };

  // Exclui um editora pelo id fornecido
  static async excluirEditora(req, res) {
    try {
      const id = req.params.id;
      await editora.findByIdAndDelete(id); 
      res.status(200).json({ message: "Editora excluída com sucesso"}); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO EXCLUIR EDITORA` })
    }
  };
};

export default EditoraController;
