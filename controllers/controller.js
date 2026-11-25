const Producto = require('../models/producto');

exports.crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const guardado = await nuevoProducto.save();
    res.status(201).json({ status: 'OK', data: guardado });
  } catch (error) {
    res.status(400).json({ status: 'Error', error: error.message });
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json({ status: 'OK', data: productos });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};

exports.obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ status: 'Error', error: 'Producto no encontrado' });
    }
    res.status(200).json({ status: 'OK', data: producto });
  } catch (error) {
    res.status(400).json({ status: 'Error', error: error.message });
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!actualizado) {
      return res.status(404).json({ status: 'Error', error: 'Producto no encontrado' });
    }
    res.status(200).json({ status: 'OK', data: actualizado });
  } catch (error) {
    res.status(400).json({ status: 'Error', error: error.message });
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    const eliminado = await Producto.findByIdAndDelete(req.params.id);
    if (!eliminado) {
      return res.status(404).json({ status: 'Error', error: 'Producto no encontrado' });
    }
    res.status(200).json({ status: 'OK', message: 'Producto eliminado' });
  } catch (error) {
    res.status(400).json({ status: 'Error', error: error.message });
  }
};

exports.obtenerPorCategoria = async (req, res) => {
  try {
    const productos = await Producto.find({ categoria: req.params.categoria });
    res.status(200).json({ status: 'OK', data: productos });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};