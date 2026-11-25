const express = require('express');
const router = express.Router();
const c = require('../controllers/usuario');

router.post('/registro', c.registrarUsuario);
router.post('/login', c.loginUsuario);
router.get('/', c.obtenerUsuarios);

module.exports = router;