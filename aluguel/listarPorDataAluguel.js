let {aluguel} = require('../data')

function listarPorDataAluguel(req, res){
    let {dataAluguel}= req.query

    const lisDataAluguel = aluguel.filter(a => a.dataAluguel.toLowerCase().includes(dataAluguel.toLowerCase()))

    if(lisDataAluguel.length === 0){
        return res.status(404).send('aluguel não encontrado!')
    }

    res.status(202).send({aluguel: lisDataAluguel })
    
}

module.exports = listarPorDataAluguel