const Usuario = require('../models/usuario');

exports.registrarUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json({ status: 'OK', message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(400).json({ status: 'Error', error: error.message });
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    res.json({ status: 'OK', token: 'mock-jwt-token-adso-2026', usuario: { email: usuario.email } });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({}, '-password'); // Excluye clave
    res.json({ status: 'OK', data: usuarios });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select('-password');
    res.status(200).json({ status: 'OK', data: usuarios });
  } catch (error) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
};