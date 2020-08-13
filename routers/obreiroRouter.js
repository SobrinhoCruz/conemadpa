const express = require('express');
const router = express.Router()
var methodOverride = require('method-override')

router.use(methodOverride('_method'))
const obreiroController = require('../controllers/obreiroController')

router.get('/obreiros', obreiroController.allObreiros);

//Rota para ficha cadastral de obreiros
router.get('/ficha-cadastro', (req, res) => res.render('add'))
router.get('/edit/:id', obreiroController.loadCad)

router.post('/', express.urlencoded({ extended: true }), obreiroController.addObreiro);
router.post('/edit/:id', express.urlencoded({ extended: true }), obreiroController.editCad);

router.delete('/:id', obreiroController.deleteObreiro)
router.delete('/', express.urlencoded({ extended: true }), obreiroController.deleteObreiro)

module.exports = router