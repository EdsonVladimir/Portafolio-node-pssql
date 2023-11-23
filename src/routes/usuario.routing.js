const { Router } = require('express');
const router = Router();
const { obtenerUsuario, registrarUsuario } = require('../controllers/usuario.controller')

router.get('/usuarios', obtenerUsuario)

router.post('/usuarios', registrarUsuario)

module.exports = router;