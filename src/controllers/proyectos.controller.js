const conexionPG = require('../config/config_pg');

const registrarProyecto = async(req, res) => {

    const { nombre, foto, descripcion, link, id_usuario } = req.body;

    const query = `INSERT INTO portafolio.proyectos(nombre, foto, descripcion, link, id_usuario) VALUES ($1, $2, $3, $4, $5)`;
    try {
        await conexionPG.query(query,[nombre, foto, descripcion, link, id_usuario])
        
        res.status(200).json({
            estado: 1,
            mensaje: "Registro de proyecto correcto!!"
        })
    } catch (e) {
        res.status(500).json({
            estado: 0,
            mensaje: "Error al registrar el prokyecto"
        })
    }
}

const actualizarUsuario = async(req, res) =>{
    const { id_proyectos } = req.params;
    const { nombre, foto, descripcion, link, id_usuario } = req.body;
    const query = `UPDATE portafolio.proyectos SET nombre=$1, foto=$2, descripcion=$3, link=$4, id_usuario=$5 WHERE id_proyectos = $6`;

    try {
        await conexionPG.query(query,[nombre, foto, descripcion, link, id_usuario, id_proyectos])
        
        res.status(200).json({
            estado: 1,
            mensaje: "Actualizado correctamente!!"
        })
    } catch (e) {
        res.status(500).json({
            estado: 0,
            mensaje: "Error al actualizar el prokyecto"
        })
    }
}

const obtenerProyectos = async(req, res) => {
  const query = `select * from portafolio.proyectos`

  try {
    const resultado = await conexionPG.query(query)
    
    res.status(200).json({
        estado: 1,
        mensaje: "proyectos obtenidos correctamente!!",
        data: resultado.rows
    })
} catch (e) {
    res.status(500).json({
        estado: 0,
        mensaje: "Error al obtener proyectos"
    })
}
}

const borrarProyecto = async(req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM portafolio.proyectos WHERE id_proyectos=$1`;

    try {
        await conexionPG.query(query, [id]);
      
      res.status(200).json({
          estado: 1,
          mensaje: "Proyecto borrado correctamente!!",
      })
  } catch (e) {
      res.status(500).json({
          estado: 0,
          mensaje: "Error al borrar proyecto"
      })
  }
}

module.exports = {
    registrarProyecto,
    actualizarUsuario,
    obtenerProyectos,
    borrarProyecto
}