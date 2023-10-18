import { autor } from "../models/Autor.js";
import { editora } from "../models/Editora.js";
import livro from "../models/Livro.js";

class LivroController {

  // Retorna todos os livros
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({}); 
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO DOS LIVROS` })
    }
  };

  // Retora um livro pelo id fornecido
  static async listarLivroId(req, res) {
    try {
      const id = req.params.id;
      const livroResult = await livro.findById(id); 
      res.status(200).json(livroResult);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA NA REQUISIÇÃO DO LIVRO POR ID` })
    }
  };

  // Cadastra um novo livro e retorna seu valor
  static async cadastrarLivro(req, res) {
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
      const livroCriado = await livro.create(livroCompleto)
      
      res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO CADASTRAR LIVRO`})
    }
  };

  // Atualiza um livro pelo id fornecido
  static async atualizarLivro(req, res) {
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
      res.status(500).json({ message: `${error.message} - FALHA AO ATUALIZAR LIVRO` })
    }
  };

  // Exclui um livro pelo id fornecido
  static async excluirLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id); 
      res.status(200).json({ message: "Livro excluído com sucesso"}); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - FALHA AO EXCLUIR LIVRO` })
    }
  };
};

export default LivroController;
