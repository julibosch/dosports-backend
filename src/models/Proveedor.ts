import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
  descripcion: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: false
  }
})

const Proveedor = mongoose.model("Proveedor", proveedorSchema);

export default Proveedor;