import mongoose from "mongoose";

const articuloSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  codigo_barra:{
    type: Number,
    required: false
  },
  stock: {
    type: Number,
    required: false,
  },
  talle: {
    type: String,
    required: false,
  },
  tipo_articulo: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  proveedor: {
    type: String,
    required: true
  }
})

const Articulo = mongoose.model("Articulo", articuloSchema);

export default Articulo;