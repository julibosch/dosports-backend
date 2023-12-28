import express from "express";
import dotenv from "dotenv"
import conectarDB from "./src/config/db.js";
import cors from "cors";
import adminRoutes from "./src/routes/admin.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

const app = express();
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

dotenv.config();
conectarDB();

//Configuracion para Cors
const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: (origin,callback) => {
    if (dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null,true)
    }else{
      callback(new Error("No permitido por cors"))
    }
  }
}

app.use(cors(corsOptions));

//Crud de productos
app.use("/api", adminRoutes);
app.use("/api", authRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})