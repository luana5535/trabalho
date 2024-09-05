let {aluguel} = require('../data')

function listarPorIDdoEstudante(req, res){
    let {idEstudante}= req.query

    const lisIDestudante = aluguel.filter(a => a.idEstudante.toLowerCase().includes(idEstudante.toLowerCase()))

    if(lisIDestudante.length === 0){
        res.status(404).send('aluguel não encontrado!')
    }

    res.status(202).send({Aluguel: lisIDestudante })
    
}

module.exports = listarPorIDdoEstudante