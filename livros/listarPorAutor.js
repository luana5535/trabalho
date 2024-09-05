let {livros} = require('../data')

function listarPorAutor(req,res){
    let {autor} = req.query

    const livroAutor = livros.filter(l=> l.autor.toLowerCase().includes(autor.toLowerCase()))

    if(livroAutor.length === 0){
        res.status(404).send('livro nao encontrado')
    }

    res.status(202).send({livro: livroAutor})
}
module.exports = listarPorAutor