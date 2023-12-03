const conexionPG = require('../config/config_pg');

const registrarHabilidad = async(req, res) => {

    const { icono, nombre, descripcion, id_usuario } = req.body;

    const query = `INSERT INTO portafolio.habilidades(icono, nombre, descripcion, id_usuario) VALUES ($1, $2, $3, $4)`;
    
    try {
        const respuesta = await conexionPG.query(query, [icono, nombre, descripcion, id_usuario]);

        res.status(200).json({
            estado:1,
            mensaje: "Habilidad registrada correctamente!!",
        })

    }catch(e) {
        console.log(e);
        res.status(500).json({
            estado:0,
            mensaje: "Error en el servidor",
        })
    }
}

const obtenerHabilidades = async(req, res) => {

    const query = `select * from portafolio.habilidades`;
    
    try {
        const resultado = await conexionPG.query(query);

        res.status(200).json({
            estado:1,
            mensaje: "habilidades registradas",
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

module.exports = { 
    registrarHabilidad,
    obtenerHabilidades
}