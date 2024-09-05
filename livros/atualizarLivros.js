let {livros} = require('../data')

function atualizarLivros(req,res){
    const {id} = req.params
    const novoTitulo = req.body.titulo
    const novoAutor = req.body.autor
    const novoAno = req.body.ano
    const novoGenero = req.body.genero


    const livro = livros.find(l => l.id === Number(id))

    if(!livro){
        return res.status(404).send('livro nao encontrado')
    }

    livro.titulo = novoTitulo
    livro.autor = novoAutor
    livro.ano = novoAno
    livro.genero = novoGenero

    res.status(202).send({message:'atualizado com sucesso',livro:livro},)
}

module.exports = atualizarLivros