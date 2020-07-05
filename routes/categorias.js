var express = require('express');
var router = express.Router();

var categoria = require('../controllers/CategoriaController');
const categoriaController = require('../controllers/CategoriaController');

router.get('/', categoria.list);
router.get('/create', categoria.create);
router.post('/save', categoria.save);
router.get('/edit/:id', categoria.edit);
router.post('/delete/:id', categoria.delete);
router.post('/update/:id', categoria.update);
router.get('/show/:id', categoria.show);

module.exports = router;