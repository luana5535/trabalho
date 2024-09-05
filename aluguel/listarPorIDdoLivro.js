let {aluguel} = require('../data')

function listarPorIDdoLivro(req, res){
    let {idLivro}= req.query

    const lisIDlivro = aluguel.filter(l => l.idLivro.toLowerCase().includes(idLivro.toLowerCase()))

    if(lisIDlivro.length === 0){
        res.status(404).send('aluguel não encontrado!')
    }

    res.status(202).send({aluguel: lisIDlivro })
    
}

module.exports = listarPorIDdoLivro