var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecetaSchema = new Schema({
    nombre: {type: String, required:true, max:30},
    cant_ingredientes: {type: String, required:true, max:1800},//max es el valor del numero maximo que puede tomar
    pasos: {type: String, required:true, max:1800},
    id_imagene: {type: String, required:true},//cambie a string
    tiempo: {type: String, required:true},
    modo: {type: String, required:true, max:35},
    id_categoria: {type: Number, required:true, max:20},
    id_comentario: {type: Number},
    created_at: {type: Date, default: Date.now}
})


module.exports = mongoose.model('Receta', RecetaSchema);
