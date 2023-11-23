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

    try {
        console.log(req.body)

        res.status(200).json({
            estado:1,
            mensaje: "datos registrados correctamente",
        })

    }catch(e) {
        
        res.status(500).json({
            estado:0,
            mensaje: "Error en el servidor",
        })
    }
}

module.exports = {
    obtenerUsuario,
    registrarUsuario
}