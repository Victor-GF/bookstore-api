/**
 * Classe que representa um erro interno do servidor para tratamento genérico de erros.
 */
class BasicError extends Error {
  /**
   * @param {string} message - A mensagem de erro.
   * @param {number} status - O código de status HTTP a ser enviado na resposta (padrão: 500 - Erro Interno do Servidor).
   */
  constructor(message = "Erro interno do servidor", status = 500) {
    super();
    this.message = message; // A mensagem de erro
    this.status = status;   // O código de status HTTP
  }

  /**
   * Envia uma resposta JSON contendo a mensagem de erro e o código de status HTTP.
   *
   * @param {Express.Response} res - O objeto de resposta Express.
   */
  sendResponse(res) {
    res.status(this.status).json({
      error: this.message
    });
  }
}

export default BasicError;
