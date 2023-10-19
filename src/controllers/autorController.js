import { autor } from "../models/Autor.js";

class AutorController {

  // Retorna todos os autores
  static async listarAutores(req, res, next) {
    try {
      const listaAutores = await autor.find({}); 
      res.status(200).json(listaAutores);
    } catch (error) {
      next(error);
    }
  }

  // Retora um autor pelo id fornecido
  static async listarAutorId(req, res, next) {
    const id = req.params.id;
    
    try {
      const autorResult = await autor.findById(id); 

      // Verifica se houve resultado
      if (autorResult != null) {
        return res.status(200).json(autorResult);
      }
      
      return res.status(404).json({ message: "Autor não localizado" });
    } catch (error) {
      next(error);
    }
  }

  // Cadastra um novo autor e retorna seu valor
  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  // Atualiza um autor pelo id fornecido
  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body); 
      res.status(200).json({ message: "Atualizado com sucesso"}); 
    } catch (error) {
      next(error);
    }
  }

  // Exclui um autor pelo id fornecido
  static async excluirAutor(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id); 
      res.status(200).json({ message: "Autor excluído com sucesso"}); 
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;
