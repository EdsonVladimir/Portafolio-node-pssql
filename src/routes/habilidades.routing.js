const { Router } = require('express');
const { registrarHabilidad, obtenerHabilidades } = require('../controllers/habilidades.controller');
const router = Router();   

router.post('/habilidad', registrarHabilidad);
router.get('/habilidad', obtenerHabilidades);
//router.put('/habilidad', )
//router.delete('/habilidad', )

module.exports = router;