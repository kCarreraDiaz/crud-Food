var mongoose = require('mongoose');
var Receta = require('../models/Receta'); //importo el modelo receta - Traigo todos los atributos de RECETA
//var Categoria = require('../models/Categoria');

var recetaController = {};

recetaController.list = function(req, res) {

    Receta.find({}).exec(function(err, listaRecetas) {
        if (err) {
            console.log('Error', err);
            return;
        }
    
        res.render('../views/receta/index',{recetas: listaRecetas });

    });
};

recetaController.create = function(req, res) {
    //pasar las categorias
   /** Categoria.find({}).exec(function(err, listaCategorias) {
        if (err) {
            console.log('Error', err);
            return;
        }
        //{categorias:listaCategorias} parametro del render
*/
    res.render('../views/receta/create');
};

recetaController.save = function(req, res) {
    var receta = new Receta( req.body );

    receta.save(function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Receta creado satisfactoriamente");
        req.flash('success', 'Receta creada satisfactoriamente');
        res.redirect("/recetas/show/" + receta._id);
        // res.redirect("/empleados");        

    });
};

recetaController.show = function(req, res) {

    Receta.findOne({ _id: req.params.id }).exec(function(err, receta) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/receta/show',{receta: receta });

    });
};

recetaController.edit = function(req, res) {

    Receta.findOne({ _id: req.params.id }).exec(function(err, receta) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/receta/edit',{receta: receta });

    });
};

recetaController.delete = function(req, res) {

    Receta.remove( { _id: req.params.id}, function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Receta eliminado");
        req.flash('success', 'Receta eliminada correctamente');
        res.redirect('/recetas');

    });
};

recetaController.update = function(req, res){

    Receta.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        cant_ingredientes: req.body.cant_ingredientes,
        pasos: req.body.pasos,
        id_imagene: req.body.id_imagene,
        tiempo: req.body.tiempo,
        modo: req.body.modo,
        id_categoria: req.body.id_categoria
    }}, { new: true },

    function( err, receta){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/receta/edit', {receta: req.body} );
        }
        
        console.log( receta );
        req.flash('success', 'Receta actualizada correctamente');
        res.redirect('/recetas/show/' + receta._id);
        
    });
};


module.exports = recetaController;
