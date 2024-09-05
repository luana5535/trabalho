const { aluguel, estudantes, livros } = require('../data')

const atualizarAluguel = (req,res) => {
    const { id } = req.params
    const newidEstudante = req.body.idEstudante
    const newIDLivro = req.body.idLivro
    const novaData = req.body.dataAluguel
    const novaDevolucao = req.body.dataDevolucao

    const attaluguel = aluguel.find(a => a.id === Number(id))
    if(!attaluguel){
        return res.status(404).send({message: 'id do Aluguel não encontrado'})
    }

    console.log(newidEstudante)
    const idDoEstudante = estudantes.find(e => e.id === Number(newidEstudante))
    if(!idDoEstudante){
        return res.status(404).send({message: 'id do Estudante não encontrado'})
    }

    const idDoLivro = livros.find(l => l.id === Number(newIDLivro))
    if(!idDoLivro){
        return res.status(404).send({message: 'id do Livro não encontrado'})
    }

    attaluguel.idLivro = newIDLivro
    attaluguel.idEstudante = newidEstudante
    attaluguel.dataAluguel = novaData
    attaluguel.dataDevolucao = novaDevolucao

    res.status(200).send({message: 'Aluguel atualizado com sucesso!',aluguel: aluguel})
}

module.exports = atualizarAluguel