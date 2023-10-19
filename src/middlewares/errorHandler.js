import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  // Parâmetro inválido
  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).json({ message: "Parâmetro incorreto: O valor fornecido não pode ser convertido para o tipo definido no esquema." });
  }
    
  // Body da requisição inválido
  if (error instanceof mongoose.Error.ValidationError) {
    const messages = Object.values(error.errors)
      .map(erro => erro.message)
      .join("; ");

    return res.status(400).json({ message: `${messages}` });
  }
  
  console.log(error);
  return res.status(500).json({ message: `Erro interno do serivor: ${error.message}` });
}

export default errorHandler;
