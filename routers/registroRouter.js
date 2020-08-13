const express = require('express');
const router = express.Router()
var methodOverride = require('method-override')

router.use(methodOverride('_method'))
const obreiroController = require('../controllers/registroController')

router.get('/registro', (req, res) => res.render('registro-sistema'))

//codigo aqui...

module.exports = router