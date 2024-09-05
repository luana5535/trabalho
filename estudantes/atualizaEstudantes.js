let {estudantes} = require('../data')

function atualizarEstudantes(req, res){
    const {id}= req.params
    const newNome = req.body.nome
    const newMatricula = req.body.matricula
    const newCurso = req.body.curso
    const newAno = req.body.ano

    const estudante = estudantes.find(e => e.id === Number(id))

    if(!estudante){
        return res.status(404).send('Estudante não encontrado')
    }
    estudante.nome= newNome
    estudante.matricula= newMatricula
    estudante.curso= newCurso
    estudante.ano= newAno

    res.status(202).send({mensagem: 'Atualizado com sucesso', estudante: estudante})
}

module.exports = atualizarEstudantes