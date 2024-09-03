const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});

const adicionarAluguel = require('./aluguel/adicionarAluguel')
app.post('/aluguel', adicionarAluguel)

const atualizarAluguel = require('./aluguel/atualizarAluguel');
app.put('/aluguel/:id', atualizarAluguel);

const listarAluguel = require('./aluguel/listarAluguel');
app.get('/aluguel', listarAluguel);

const deletarAluguel = require('./aluguel/deletarAluguel');
app.delete('/aluguel/:id', deletarAluguel);
