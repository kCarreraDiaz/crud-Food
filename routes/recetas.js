var express = require('express');
var router = express.Router();

var receta = require('../controllers/RecetaController');

router.get('/', receta.list);
router.get('/create', receta.create);
router.post('/save', receta.save);
router.get('/show/:id', receta.show);
router.get('/edit/:id', receta.edit);
router.post('/update/:id', receta.update);
router.post('/delete/:id', receta.delete);


module.exports = router;
