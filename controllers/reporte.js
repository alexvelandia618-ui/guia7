const Producto = require('../models/producto');

exports.estadisticas = async (req, res) => {
  try {
    const stats = await Producto.aggregate([
      {
        $group: {
          _id: '$categoria',
          totalProductos: { $sum: 1 },
          stockTotal: { $sum: '$stock' },
          precioPromedio: { $avg: '$precio' }
        }
      }
    ]);
    res.status(200).json({ status: 'OK', data: stats });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};