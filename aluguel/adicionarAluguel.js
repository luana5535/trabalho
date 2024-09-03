const { aluguel } = require('../data');

function adicionarAluguel(req, res) {
    console.log(req.body)
        const novoAluguel = {
            id: aluguel.length + 1,
            idLivro: req.body.idLivro,
            idEstudante: req.body.idEstudante,
            dataAluguel: req.body.dataAluguel,
            dataDevolucao: req.body.dataDevolucao
        }
        aluguel.push(novoAluguel)
        res
        .status(201)
        .send({message: 'Aluguel adicionado com sucesso!', aluguel: novoAluguel})
    }
    
    module.exports = adicionarAluguel