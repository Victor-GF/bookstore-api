import BasicError from "./basicError.js";

/**
 * Classe `InvalidRequisition` representa um erro personalizado para tratamento de requisições inválidas.
 * Esta classe estende a classe `BasicError`.
 */
class InvalidRequisition extends BasicError {
  /**
   * Cria uma instância de `InvalidRequisition`.
   *
   * @param {string} message - A mensagem de erro personalizada (padrão: "Um ou mais dados fornecidos estão incorretos").
   */
  constructor(message = "Um ou mais dados forncedidos estão incorretos") {
    super(message, 400);
  }
}

export default InvalidRequisition; 
