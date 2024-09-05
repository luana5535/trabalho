const {livros} = require('../data')

function listarLivros(req,res){
    res.status(202).send(livros)
}
module.exports = listarLivros