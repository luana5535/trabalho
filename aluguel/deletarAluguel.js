const { aluguel } = require('../data')

const deletarAluguel = (req,res) =>{
    const { id } = req.params

    const index = aluguel.findIndex(a => a.id === Number(id))

    if(index === -1){
        return res.status(404).send('ID doAluguel não encontrado!')
    }

    aluguel.splice(index, 1) [0]

    res.status(200).send('Aluguel deletado com sucesso')
}

module.exports = deletarAluguel