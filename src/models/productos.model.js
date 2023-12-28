import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  }
})

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;