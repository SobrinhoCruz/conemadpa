const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, minlength: 3, maxlength: 100 },
    campo: { type: String, required: true, minlength: 6, maxlength: 200 },
    createdAt: { type: Date, default: Date.now }
})

//Modelo de Registro
module.exports = mongoose.model('Registro', registroSchema);