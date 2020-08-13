const Obreiro = require('../models/Obreiro')

const redirect = async (req, res) => {
    let id = req.params.id;
    try {
        let doc = await obreiro.findOne({ id })
        console.log(doc);
        res.redirect(doc.obreiro);
    } catch (error) {
        res.send(error);
    }
}

const addObreiro = async (req, res) => {
    let obreiro = new Obreiro(req.body)
    try {
        let doc = await obreiro.save()
        res.render('/obreiros')
    } catch (error) {
        res.render('add', { error, body: req.body });
    }
}

const allObreiros = async (req, res) => {

    try {
        let docs = await Obreiro.find({});
        res.redirect('obreiros', { obreiros: docs });
    } catch (error) {
        res.send(error);
    }
}

const deleteObreiro = async (req, res) => {

    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }

    try {
        await Obreiro.findByIdAndDelete(id)
        //res.send(id)
        res.redirect('/')
    } catch (error) {
        res.status(404).send(error);
    }

}

const loadCad = async (req, res) => {
    let id = req.params.id;
    try {
        let doc = await Obreiro.findById(id)
        res.render('edit', { error: false, body: doc })
    } catch (error) {
        res.status(404).send(error);
    }

}

const editCad = async (req, res) => {
    let obreiro = {};
    obreiro.nome = req.body.nome;
    obreiro.campo = req.body.campo;
    obreiro.atvEclesiastica = req.body.atvEclesiastica;
    try {
        let doc = await Obreiro.findByIdAndUpdate(id)
        res.redirect('/')
    } catch (error) {
        res.render('edit', { error, body: req.body });
    }
}


module.exports = { redirect, addObreiro, allObreiros, deleteObreiro, loadCad, editCad }