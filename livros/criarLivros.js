const {livros} = require('../data')


function criarLivros(req,res){
    const {titulo} = req.body
    const {autor} = req.body
    const {ano} = req.body
    const {genero} = req.body

    if(!titulo){
        return res.status(404).send('é nescessario ter um titulo')
    }
    if(!autor){
        return res.status(404).send('é nescessario ter um autor')
    }
    if(!ano){
        return res.status(404).send('é nescessario ter um ano de lancamento do livro')
    }
    if(!genero){
        return res.status(404).send('é nescessario ter um genero de filme')
    }

    let id = 1
    while(livros.some(l => l.id === id)){
        id++
    }

    let novoLivro = {id:id,titulo:titulo,autor:autor,ano:ano,genero:genero}
    livros.push(novoLivro)

    res.status(202).send('adicionado com sucesso')
}
module.exports = criarLivros
// miguel que fez