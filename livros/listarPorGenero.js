let {livros} = require('../data')

function listarPorGenero(req,res){
    let {genero} = req.query

    const livroGenero = livros.filter(l=> l.genero.toLowerCase().includes(genero.toLowerCase()))

    if(livroGenero.length === 0){
        res.status(404).send('livro nao encontrado')
    }

    res.status(202).send({livro: livroGenero})
}
module.exports = listarPorGenero