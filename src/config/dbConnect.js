import mongoose from "mongoose";

async function connectIntoDatabase() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);

  return mongoose.connection;
}

export default connectIntoDatabase;
