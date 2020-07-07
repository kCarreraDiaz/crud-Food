var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: {type: String, required:true, max:30},
    apellido: {type: String, required:true, max:30},
    dni: {type: String, required:true, max:8},
    telefono: {type: String, required:true, max:9},
    direccion: {type: String, required:true, max:50},  
    //id_persona: {type: Number, required:true, max:20},
    created_at: {type: Date, default: Date.now}
})


module.exports = mongoose.model('Usuario', UsuarioSchema);