let {livros} = require('../data')

function listarPorAno(req,res){
    let {ano} = req.query

    const livroAno = livros.filter(l=> l.ano.toLowerCase().includes(ano.toLowerCase()))

    if(livroAno.length === 0){
        res.status(404).send('livro nao encontrado')
    }

    res.status(202).send({livro: livroAno})
}
module.exports = listarPorAno