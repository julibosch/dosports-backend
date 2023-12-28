import express from "express";
import dotenv from "dotenv"
import conectarDB from "./config/db";
import cors, {CorsOptions} from "cors";
import adminRoutes from "./routes/admin.routes";

const app = express();
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

dotenv.config();
conectarDB();

//Configuracion para Cors
const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por cors"), false);
    }
  }
};

app.use(cors(corsOptions));

//Crud de productos
app.use("/api", adminRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})