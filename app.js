const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const path = require('path')
const userRouter = require('./routers/userRouter')
const obreiroRouter = require('./routers/obreiroRouter')

//Diretório de arquivos do site - staticos.
app.use(express.static(path.join(__dirname, 'templates')))
app.use(express.static(path.join(__dirname, 'imagens')))
app.use(express.static(path.join(__dirname, 'css')))
app.use(express.static(path.join(__dirname, 'uploads/documentos')))

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost/conemadpa',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
let db = mongoose.connection;
db.on("erro", () => { console.log("Houve um erro!") });
db.once("open", () => { console.log("MongoDB Connected!"); })

//Template engine .ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

//Rotas
app.get('/', (req, res) => { res.render('index.ejs'); })
app.get('/executivo', (req, res) => { res.render('executivo.ejs'); })
app.get('/diretoria', (req, res) => { res.render('diretoria.ejs'); })
app.get('/sistemaconemadpa', (req, res) => { res.render('login.ejs'); })
app.get('/eventos', (req, res) => { res.render('eventos.ejs'); })
app.get('/downloads', (req, res) => { res.render('downloads.ejs'); })

app.get('/ficha-cadastro', obreiroRouter)

app.use('/user', express.json(), userRouter);
app.use('/obreiros', obreiroRouter)

app.listen(PORT, () => console.log(`Server Runnning on Port: ${PORT}`))
