let {livros} = require('../data')

function listarPorTitulo(req,res){
    let {titulo} = req.query

    const livroTitulo = livros.filter(l=> l.titulo.toLowerCase().includes(titulo.toLowerCase()))

    if(livroTitulo.length === 0){
        res.status(404).send('livro nao encontrado')
    }

    res.status(202).send({livro: livroTitulo})
}
module.exports = listarPorTitulo