const { Router } = require('express');
const router = Router();
const { obtenerUsuario, registrarUsuario,  actualizaUsuario, eliminaUsuario} = require('../controllers/usuario.controller')

router.get('/usuarios', obtenerUsuario);
router.post('/usuarios', registrarUsuario);
router.put('/usuarios/:id_usuario', actualizaUsuario);
router.delete('/usuarios/:id_usuario', eliminaUsuario);


module.exports = router;