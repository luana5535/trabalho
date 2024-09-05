let {estudantes} = require('../data')

function listarPorMatricula(req, res){
    let {matricula}= req.query

    const estudante = estudantes.filter(f => f.matricula.toLowerCase().includes(matricula.toLowerCase()))

    if(estudante.length === 0){
        res.status(404).send('Estudante não encontrado!')
    }

    res.status(202).send({Estudante: estudante })
    
}

module.exports = listarPorMatricula