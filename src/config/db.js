import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log("conectado")
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

export default conectarDB;