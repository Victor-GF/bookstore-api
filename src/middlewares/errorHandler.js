import mongoose from "mongoose";
import BasicError from "../errors/basicError.js";
import InvalidRequisition from "../errors/InvalidRequisition.js";
import ValidationError from "../errors/ValidationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {

  // Parâmetro inválido
  if (error instanceof mongoose.Error.CastError) {
    return new InvalidRequisition().sendResponse(res);
  }
    
  // Body da requisição inválido
  if (error instanceof mongoose.Error.ValidationError) {
    return new ValidationError(error).sendResponse(res);
  }
  
  console.log(error);
  return new BasicError().sendResponse(res);
}

export default errorHandler;
