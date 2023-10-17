import express from "express";
import connectIntoDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

// MongoDB connection
const connection = await connectIntoDatabase();
connection.on("error", (error) => {
  console.error("Erro de conexão com o banco", error);
});
connection.once("open", () => {
  console.log("Conexão com banco estabelecida com sucesso");
})

// Server setup
const app = express();
routes(app);

export default app;
