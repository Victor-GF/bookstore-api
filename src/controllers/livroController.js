import { Autor } from "../models/Autor.js";
import { Editora } from "../models/Editora.js";
import livro from "../models/Livro.js";

class LivroController {

  // Retorna todos os livros
  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({}); 
      res.status(200).json(listaLivros);
    } catch (error) {
      next(error);
    }
  }

  // Retora um livro pelo id fornecido
  static async listarLivroId(req, res, next) {
    const id = req.params.id;

    try {
      const livroResult = await livro.findById(id);

      // Verifica se houve resultado
      if (livroResult != null) {
        return res.status(200).json(livroResult);
      } 
      
      return res.status(404).json({ message: "Livro não localizado" });
    } catch (error) {
      next(error);
    }
  }

  // Cadastra um novo livro e retorna seu valor
  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;

    try {
      
      // Objeto a ser criado na coleção
      let livroCompleto = { 
        ...novoLivro        
      };

      // Importando os dados da colação editoras
      const editoraEncontrada = await Editora.findById(novoLivro.editora);
      if (editoraEncontrada) {
        livroCompleto.editora = { ...editoraEncontrada._doc };
      }
      
      // Importando os dados da coleção autores 
      const autorEncontrado = await Autor.findById(novoLivro.autor);
      if (autorEncontrado) {
        livroCompleto.autor = { ...autorEncontrado._doc };
      }

      const livroCriado = await livro.create(livroCompleto);
      
      res.status(201).json({ message: "Livro criado com sucesso.", data: livroCriado });
    } catch (error) {
      next(error);
    }
  }

  // Atualiza um livro pelo id fornecido
  static async atualizarLivro(req, res, next) {
    const id = req.params.id;
    const novoLivro = req.body;

    try {
      // Importando os dados da coleção autor
      const autorEncontrado = await Autor.findById(novoLivro.autor);

      // Importando os dados da colação editoras
      const editoraEncontrada = await Editora.findById(novoLivro.editora);

      // Objeto a ser inserido na coleção
      const livroCompleto = { 
        ...novoLivro, 
        editora: { ...editoraEncontrada._doc },
        autor: { ...autorEncontrado._doc } 
      };
      await livro.findByIdAndUpdate(id, livroCompleto);

      res.status(200).json({ message: "Livro atualizado com sucesso"}); 
    } catch (error) {
      next(error);
    }
  }

  // Exclui um livro pelo id fornecido
  static async excluirLivro(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id); 
      res.status(200).json({ message: "Livro excluído com sucesso"}); 
    } catch (error) {
      next(error);
    }
  }

  // Retorna livros pelo nome da editora
  static async listaLivrosEditora(req, res, next) {
    const queryEditora = req.query.editora;

    try {
      const livrosEditora = await livro.find({ "editora.nome": queryEditora });
      res.status(200).json(livrosEditora);
    } catch (error) {
      next(error);
    }
  }

}

export default LivroController;
