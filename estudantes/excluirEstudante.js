let {estudantes} = require('../data')

function exluirEstudantes(req, res){
    const {id}= req.params

    const index = estudantes.findIndex(e => e.id === Number(id))

    if(index === -1){
        res.status(404).send('Estudante não encontrado')
    }

    estudantes.splice(index, 1)[0]

    res.status(200).send('Excluido com sucesso!')
}

module.exports = exluirEstudantes