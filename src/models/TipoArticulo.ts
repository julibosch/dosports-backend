import mongoose from "mongoose";

const tipoArticuloSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true
  }
})

const TipoArticulo = mongoose.model("TipoArticulo", tipoArticuloSchema);

export default TipoArticulo;