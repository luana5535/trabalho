let {estudantes} = require('../data')

function listarPorAno(req, res){
    let {ano}= req.query

    const estudante = estudantes.filter(f => f.ano.toLowerCase().includes(ano.toLowerCase()))

    if(estudante.length === 0){
        res.status(404).send('Estudante não encontrado!')
    }

    res.status(202).send({Estudante: estudante })
    
}

module.exports = listarPorAno