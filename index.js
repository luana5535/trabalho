const express = require('express')
app = express()
port = 3000
app.use(express.json())

app.get('/', (req, res) =>{
    console.log('Inicializando')
})

//Estudantes
const adicionarEstudante= require('./estudantes/adicionarEstudante')
app.post('/estudante', adicionarEstudante)

const listarEstudantes = require('./estudantes/listaEstudantes')
app.get('/estudante', listarEstudantes)

const atualizarEstudantes = require('./estudantes/atualizaEstudantes')
app.put('/estudante/:id', atualizarEstudantes)

const exluirEstudantes = require('./estudantes/excluirEstudante')
app.delete('/estudante/delete/:id', exluirEstudantes)

const listarPorNome = require('./estudantes/listarPorNome')
app.get('/estudante/nome', listarPorNome)

const listarPorMatricula = require('./estudantes/listarPorMatricula')
app.get('/estudante/matricula', listarPorMatricula)

const listarPorCurso = require('./estudantes/listarPorCurso')
app.get('/estudante/curso', listarPorCurso)

const listarPorAno = require('./estudantes/listarPorAno')
app.get('/estudante/ano', listarPorAno)

//Livros
const criarLivros = require('./livros/criarLivros')
app.post('/livros', criarLivros)

const listarLivros = require('./livros/listarLivros')
app.get('/livros',listarLivros)

const atualizarLivros = require('./livros/atualizarLivros')
app.put('/atualizar/:id',atualizarLivros)

const deletarLivros = require('./livros/deletarLivros')
app.delete('/deletar/:id',deletarLivros)

const listarPorTitulo = require('./livros/listarPorTitulo')
app.get('/livro/titulo',listarPorTitulo)

const listarLivroPorAno = require('./livros/listarPorAno')
app.get('/livro/ano',listarLivroPorAno)

const listarPorGenero = require('./livros/listarPorGenero')
app.get('/livro/genero',listarPorGenero)

const listarPorAutor = require('./livros/listarPorAutor')
app.get('/livro/autor',listarPorAutor)

//Aluguel
const adicionarAluguel = require('./aluguel/adicionarAluguel')
app.post('/aluguel', adicionarAluguel)

const listarAluguel = require('./aluguel/listarAluguel')
app.get('/aluguel', listarAluguel)

const atualizarAluguel = require('./aluguel/atualizarAluguel')
app.put('/aluguel/:id', atualizarAluguel)

const deletarAluguel = require('./aluguel/deletarAluguel')
app.delete('/aluguel/:id', deletarAluguel)

const listarPorIDdoEstudante = require('./aluguel/listarPorIdEstudante')
app.get('/aluguel/idEstudante', listarPorIDdoEstudante)

const listarPorIDdoLivro = require('./aluguel/listarPorIDdoLivro')
app.get('/aluguel/idLivro', listarPorIDdoLivro)

const listarPorDataAluguel = require('./aluguel/listarPorDataAluguel')
app.get('/aluguel/dataAluguel', listarPorDataAluguel)

const listarPorDataDevolucao = require('./aluguel/listarPorDataDevolucao')
app.get('/aluguel/dataDevolucao', listarPorDataDevolucao)


app.listen(port, () =>{
    console.log(`Iniciado em http://localhost:${port}`)
})