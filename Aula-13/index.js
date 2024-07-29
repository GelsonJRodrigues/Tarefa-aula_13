
const express = require("express");
const service = require("./service/service")
const app = express();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', async (req, res) => {
    await service.getData();
    return res.send("<h3>Conexão com banco de dados bem sucedida</h3>")
})

app.post('/', (req, res) => {
    return res.status(200).json('Rota POST')
})

app.put('/', (req, res) => {
    return res.status(200).json('Rota PUT')
})

app.delete('/', (req, res) => {
    return res.status(200).json('Rota DELETE')
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})