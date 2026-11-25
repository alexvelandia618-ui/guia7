const express = require('express');
const router = express.Router();
const c = require('../controllers/reporte');

router.get('/estadisticas', c.estadisticas);

module.exports = router;