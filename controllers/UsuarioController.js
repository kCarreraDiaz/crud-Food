var mongoose = require('mongoose');
var Usuario = require('../models/Usuario'); //importo el modelo usuario - Traigo todos los atributos de USUARIO


var usuarioController = {};

usuarioController.list = function(req, res) {

    Usuario.find({}).exec(function(err, listaUsuarios) {
        if (err) {
            console.log('Error', err);
            return;
        }
    
        res.render('../views/usuario/index',{usuarios: listaUsuarios });

    });
};

usuarioController.create = function(req, res) {
    //pasar las categorias
   /** Categoria.find({}).exec(function(err, listaCategorias) {
        if (err) {
            console.log('Error', err);
            return;
        }
        //{categorias:listaCategorias} parametro del render
*/
    res.render('../views/usuario/create');
};

usuarioController.save = function(req, res) {
    var usuario = new Usuario( req.body );

    usuario.save(function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Usuario creado satisfactoriamente");
        req.flash('success', 'Usuario agregado correctamente');
        res.redirect("/usuarios/show/" + usuario._id);
        // res.redirect("/empleados");        

    });
};

usuarioController.show = function(req, res) {

    Usuario.findOne({ _id: req.params.id }).exec(function(err, usuario) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/usuario/show',{usuario: usuario });

    });
};

usuarioController.edit = function(req, res) {

    Usuario.findOne({ _id: req.params.id }).exec(function(err, usuario) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/usuario/edit',{usuario: usuario });

    });
};

usuarioController.delete = function(req, res) {

    Usuario.remove( { _id: req.params.id}, function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Usuario eliminado");
        req.flash('success', 'Usuario eliminado correctamente');
        res.redirect('/usuarios');

    });
};

usuarioController.update = function(req, res){

    Usuario.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        //id_persona: req.body.id_persona
        
    }}, { new: true },

    function( err, usuario){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/usuario/edit', {usuario: req.body} );
        }
        
        console.log( usuario );
        req.flash('success', 'Usuario actualizado correctamente');
        res.redirect('/usuarios/show/' + usuario._id);
        
    });
};


module.exports = usuarioController;
