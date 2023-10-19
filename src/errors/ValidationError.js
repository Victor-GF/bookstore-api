import InvalidRequisition from "./InvalidRequisition.js";

/**
 * Classe `ValidationError` é usada para criar erros personalizados relacionados a erros de validação do Mongoose.
 * Esta classe estende a classe `InvalidRequisition`.
 */
class ValidationError extends InvalidRequisition {
  /**
   * Cria uma instância de `ValidationError`.
   *
   * @param {Mongoose.Error.ValidationError} error - O erro de validação capturado, associado ao Mongoose.
   */
  constructor(error) {
    // Obtém mensagens de erro detalhadas a partir do objeto de erro.
    const messages = Object.values(error.errors)
      .map(erro => erro.message)
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${messages}`);
  }
}

export default ValidationError;
