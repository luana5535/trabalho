let {estudantes} = require('../data')

function listarPorCurso(req, res){
    let {curso}= req.query

    const estudante = estudantes.filter(f => f.curso.toLowerCase().includes(curso.toLowerCase()))

    if(estudante.length === 0){
        res.status(404).send('Estudante não encontrado!')
    }

    res.status(202).send({Estudante: estudante })
    
}

module.exports = listarPorCurso