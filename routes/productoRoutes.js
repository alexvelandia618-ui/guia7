const express = require('express');
const router = express.Router();
const c = require('../controllers/controller');

router.post('/', c.crearProducto);
router.get('/', c.obtenerProductos);
router.get('/categoria/:categoria', c.obtenerPorCategoria); // antes de '/:id'
router.get('/:id', c.obtenerProductoPorId);
router.put('/:id', c.actualizarProducto);
router.delete('/:id', c.eliminarProducto);

module.exports = router;