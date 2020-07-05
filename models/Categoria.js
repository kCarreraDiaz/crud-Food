var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = new Schema({
    nombre: {type: String, required:true, max:20},
    descripcion: {type: String, required:true},
    created_at: {type: Date, default: Date.now}
})
module.exports = mongoose.model('Categoria', CategoriaSchema);