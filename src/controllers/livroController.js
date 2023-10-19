import { autor } from "../models/Autor.js";
import { editora } from "../models/Editora.js";
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
      // Importando os dados da coleção autor 
      const autorEncontrado = await autor.findById(novoLivro.autor);

      // Importando os dados da colação editoras
      const editoraEncontrada = await editora.findById(novoLivro.editora);

      // Objeto final a ser criado na coleção
      const livroCompleto = { 
        ...novoLivro, 
        editora: { ...editoraEncontrada._doc },
        autor: { ...autorEncontrado._doc } 
      };
      const livroCriado = await livro.create(livroCompleto);
      
      res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
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
      const autorEncontrado = await autor.findById(novoLivro.autor);

      // Importando os dados da colação editoras
      const editoraEncontrada = await editora.findById(novoLivro.editora);

      // Objeto final a ser atualizado na coleção
      const livroCompleto = { 
        ...novoLivro, 
        editora: { ...editoraEncontrada._doc },
        autor: { ...autorEncontrado._doc } 
      };
      await livro.findByIdAndUpdate(id, livroCompleto);

      res.status(200).json({ message: "Atualizado com sucesso"}); 
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
