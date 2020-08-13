const mongoose = require('mongoose');

const igrejaSchema = mongoose.Schema({
    nameIgreja: { type: String, required: true, minlength: 3, maxlength: 50 },
    campo: { type: String, required: true, minlength: 3, maxlength: 100 },
    localCidade: { type: String, required: true, minlength: 6, maxlength: 200 },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Igreja', igrejaSchema);