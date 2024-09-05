const {livros} = require('../data')

function deletarLivros(req,res){
    const {id} = req.params

    const index = livros.findIndex(l => l.id === Number(id))

    if(index === -1){
        res.status(404).send('livro nao encontrado')
    }

    livros.splice(index,1)[0]
    res.status(200).send('excluido com sucesso')

}
module.exports = deletarLivros