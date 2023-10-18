import { autor } from "../models/Autor.js";

class AutorController {

  // Retorna todos os autores
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({}); 
      res.status(200).json(listaAutores);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO DOS AUTORES` });
    }
  }

  // Retora um autor pelo id fornecido
  static async listarAutorId(req, res) {
    try {
      const id = req.params.id;
      const autorResult = await autor.findById(id); 
      res.status(200).json(autorResult);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO DO AUTOR POR ID` });
    }
  }

  // Cadastra um novo autor e retorna seu valor
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO CADASTRAR AUTOR`});
    }
  }

  // Atualiza um autor pelo id fornecido
  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body); 
      res.status(200).json({ message: "Atualizado com sucesso"}); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO ATUALIZAR AUTOR` });
    }
  }

  // Exclui um autor pelo id fornecido
  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id); 
      res.status(200).json({ message: "Autor excluído com sucesso"}); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO EXCLUIR AUTOR` });
    }
  }
}

export default AutorController;
