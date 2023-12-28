import sanitize from "mongo-sanitize";
import Usuario from "../models/usuario.model.js";

const register = async (req, res) => {
  console.log(req.body);

  try{
    //Validacion por si ya existe el email al querer registrarse
    const usuarioEncontrado = await User.findOne({email});
    if (usuarioEncontrado) {
        return res.status(400).json(["El email ya existe"]);
    }

    const passwordHash = await bcrypt.hash(password, 10)// encripta la contraseña,

    const nuevoUsuario = new Usuario({
        nombreUsuario,
        email,
        password: passwordHash,
        uid: uid,
    })

    const userSaved = await nuevoUsuario.save(); //Guardamos el usuario
  } catch(error) {
    console.log(error)
  }
}

const login = async (req, res) => {

}

const perfil = async (req, res) => {

}

export {
  register,
  login,
  perfil
}