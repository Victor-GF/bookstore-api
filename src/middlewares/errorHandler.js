import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  // Parâmetro inválido
  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).json({ message: "Parâmetro incorreto: O valor fornecido não pode ser convertido para o tipo definido no esquema." });
  }

  res.status(500).json({ message: `${error.message}` });
}

export default errorHandler;
