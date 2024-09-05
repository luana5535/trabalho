let {estudantes} = require('../data')

function listarEstudantes(req, res){
    res.status(202).send(estudantes)
}

module.exports = listarEstudantes