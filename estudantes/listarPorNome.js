let {estudantes} = require('../data')

function listarPorNome(req, res){
    let {nome}= req.query

    const estudante = estudantes.filter(f => f.nome.toLowerCase().includes(nome.toLowerCase()))

    if(estudante.length === 0){
        res.status(404).send('Estudante não encontrado!')
    }

    res.status(202).send({Estudante: estudante })
    
}

module.exports = listarPorNome