const { aluguel } = require('../data')

const listarAluguel = (req, res) => {
    res.status(200).send(aluguel)
}

module.exports = listarAluguel