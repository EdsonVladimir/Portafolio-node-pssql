const { Router } = require('express');
const router = Router();

const { registrarProyecto, actualizarUsuario, obtenerProyectos, borrarProyecto } = require('../controllers/proyectos.controller');

router.post('/proyectos', registrarProyecto);
router.put('/proyectos/:id_proyectos', actualizarUsuario);
router.get('/proyectos', obtenerProyectos);
router.delete('/proyectos/:id', borrarProyecto);

module.exports = router;