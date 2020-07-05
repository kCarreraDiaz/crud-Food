var mongoose = require('mongoose');
var Categoria = require('../models/Categoria');

var categoriaController = {}

categoriaController.list = function(req, res) {
    Categoria.find({}).exec(function(err, categorias) {
        if(err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/categoria/index', {categorias: categorias});
    });
};

categoriaController.create = function(req, res) {
    res.render('../views/categoria/create');
};

categoriaController.save = function(req,res) {
    var categoria = new Categoria( req.body );
    categoria.save(function(err) {
        if(err) {
            console.log('Error', err);
            return;
        }
        console.log('Categoria creada satisfactoriamente');
        req.flash('success', 'Categoria agregada satisfactoriamente');
        // res.redirect('/categorias/show/'+categoria._id)
        res.redirect('/categorias');
    });
};

categoriaController.edit = function(req, res) {
    Categoria.findOne({_id: req.params.id}).exec(function(err, categoria) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/categoria/edit', {categoria: categoria});
    });
};

categoriaController.delete = function(req,res) {
    Categoria.remove({_id: req.params.id}, function(err) {
        if(err) {
            console.log('Error', err);
            return;
        }
        console.log('Categoria eliminada');
        req.flash('success', 'Categoria eliminada correctamente');
        res.redirect('/categorias');
    });
};

categoriaController.update = function(req,res) {
    Categoria.findByIdAndUpdate(req.params.id, {
        $set: {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        }}, {new:true}, function(err, categoria) {
            if(err) {
                console.log('Error', err);
                res.render('../views/categoria/edit', {categoria: req.body});
                return;
            }
            console.log(categoria);
            req.flash('success', 'Categoria actualizada correctamente');
            res.redirect('/categorias');
        });
};

categoriaController.show = function(req, res) {
    Categoria.findOne({_id:req.params.id}).exec(function(err, categoria) {
        if(err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/categoria/show', {categoria: categoria})
    });
};

module.exports = categoriaController;