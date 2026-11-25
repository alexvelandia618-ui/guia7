const express = require('express');
require('./config/bd');           // tu conexión a Mongo

const app = express();
app.use(express.json());

app.use('/api/productos', require('./routes/productoRoutes'));
app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/reportes', require('./routes/reportes'));

app.listen(3000, () => console.log('Servidor en puerto 3000'));