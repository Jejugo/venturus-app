const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  _id: Number,
  ride: String,
	weekDays: Array,
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
