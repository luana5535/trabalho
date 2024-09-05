const { aluguel, estudantes, livros } = require('../data');

function adicionarAluguel(req, res) {
    const {idLivro, idEstudante , dataAluguel, dataDevolucao}= req.body
    
    if(!idLivro){
        res.status(404).send('É necessario o id do livro!')
    }
    if(!idEstudante){
        return res.status(404).send('É necessario o id do estudante!')
    }
    if(!dataAluguel){
        return res.status(404).send('É necessario uma data de aluguel!')
    }
    if(!dataDevolucao){
        return res.status(404).send('É necessario uma data de devoluçao!')
    }

    const idDoLivro= livros.find(l => l.id === Number(idLivro))
    if(!idDoLivro){
        return res.status(404).send('ID do livro não encontrado!')
    }

    const idDoEstudante= estudantes.find(e => e.id === Number(idEstudante))
    if(!idDoEstudante){
        return res.status(404).send('ID do estudante não encontrado!')
    }

    let id=1
    while(aluguel.some(a => a.id === id)){
        id++
    }

    let newAluguel = {id: id, idLivro: idDoLivro.id, idEstudante: idDoEstudante.id, dataAluguel: dataAluguel, dataDevolucao: dataDevolucao}

    aluguel.push(newAluguel)

    res.status(201).send('Adicionado com sucesso!')

    }
    
    module.exports = adicionarAluguel