const conexionPG = require('../config/config_pg');
// con async creamos una promesa
const obtenerUsuario = async(req, res) => {

    const query = `select * from portafolio.usuarios`;
    
    try {
        const resultado = await conexionPG.query(query);

        res.status(200).json({
            estado:1,
            mensaje: "datos devueltos correctamente",
            data: resultado.rows
        })

    }catch(e) {
        console.log(e)
        res.status(500).json({
            estado:0,
            mensaje: "Error en el servidor",
        })
    }
}

//controllador registrar usuario
const registrarUsuario = async(req, res) => {

    const { nombre, telefono, email, descripcion, ocupacion, fecha_nac } = req.body;

    const query = `INSERT INTO portafolio.usuarios(nombre, telefono, email, descripcion, ocupacion, fecha_nac) VALUES ($1, $2, $3, $4, $5, $6)`;
    
    try {
        const respuesta = await conexionPG.query(query, [nombre, telefono, email, descripcion, ocupacion, fecha_nac]);

        res.status(200).json({
            estado:1,
            mensaje: "datos registrados correctamente",
        })

    }catch(e) {
        console.log(e);
        res.status(500).json({
            estado:0,
            mensaje: "Error en el servidor",
        })
    }
}

actualizaUsuario = async(req, res) => {
    const { nombre, telefono, email, descripcion, ocupacion, fecha_nac } = req.body;
    const { id_usuario } = req.params;
    const query = `UPDATE portafolio.usuarios SET nombre=$1, telefono=$2, email=$3, descripcion=$4, ocupacion=$5, fecha_nac=$6 WHERE id_usuario = $7`;
    
    try {
        await conexionPG.query(query, [nombre, telefono, email, descripcion, ocupacion, fecha_nac, id_usuario]);
         
        res.status(200).json({
            estado:1,
            mensaje: "datos actuaslizados coprrectamente!!",
        })
    } catch(e) {
        console.log(e);
        res.status(500).json({
            estado:0,
            mensaje: "Error al actualizar los datos",
        })
    }
}

const eliminaUsuario = async(req, res) => {
    const { id_usuario } = req.params;

    const query = `DELETE FROM portafolio.usuarios WHERE id_usuario = $1`

    try {
        await conexionPG.query(query, [id_usuario]);
         

        res.status(200).json({
            estado:1,
            mensaje: "el registro fue eliminado correctamente!!",
        })
    } catch(e) {
        console.log(e);
        res.status(500).json({
            estado:0,
            mensaje: "Error al eliminar refgistro",
        })
    }
}

module.exports = {
    obtenerUsuario,
    registrarUsuario,
    actualizaUsuario,
    eliminaUsuario
}