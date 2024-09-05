let {aluguel} = require('../data')

function listarPorDataDevolucao(req, res){
    let {dataDevolucao}= req.query

    const lisDataDevolucao = aluguel.filter(d => d.dataDevolucao.toLowerCase().includes(dataDevolucao.toLowerCase()))

    if(lisDataDevolucao.length === 0){
        return res.status(404).send('aluguel não encontrado!')
    }

    res.status(202).send({aluguel: lisDataDevolucao })
    
}

module.exports = listarPorDataDevolucao