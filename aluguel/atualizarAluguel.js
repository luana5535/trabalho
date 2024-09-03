const { aluguel } = require('../data')

const atualizarAluguel = (req,res) => {
    const { id } = req.params
    const { idLivro } = req.params
    const { idEstudante } = req.params
    const novaData = req.body.dataAluguel
    const novaDevolucao = req.body.dataDevolucao

    const aluguel = aluguel.find((f) => f.id == id)

    if(!aluguel){
        return res.status(404).send({message: 'Aluguel não encontrado'})
    }

    aluguel.dataAluguel = novaData
    aluguel.dataDevolucao = novaDevolucao

    res.status(200).send({
        message: 'Aluguel atualizado com sucesso!',
        aluguel: aluguel
    })
}

module.exports = atualizarAluguel