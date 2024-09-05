let {estudantes} = require('../data')

function adicionarEstudante(req, res){
    const {nome}= req.body
    const {matricula}= req.body
    const {curso}= req.body
    const {ano}= req.body 

    if(!nome){
        return res.status(404).send('É necessario um nome!')
    }
    if(!matricula){
        return res.status(404).send('É necessario a matricula!')
    }
    if(!curso){
        return res.status(404).send('É necessario um curso!')
    }
    if(!ano){
        return res.status(404).send('É necessaro um ano!')
    }

    let id=1
    while(estudantes.some(e => e.id === id)){
        id++
        }
        let newEstudante= {id: id, nome: nome, matricula: matricula, curso: curso, ano: ano}
        estudantes.push(newEstudante)

        res.status(202).send('Adicionado com sucesso!')
    
}

module.exports = adicionarEstudante