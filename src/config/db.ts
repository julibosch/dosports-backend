import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
      throw new Error("La variable de entorno MONGO_URI no está definida");
    }

    const db = await mongoose.connect(mongoURI);
    
    const url = `${db.connection.host}:${db.connection.port}`

    console.log(`MongoDB conectado en: ${url}`)
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

export default conectarDB;