const express = require("express");
const rotas = require("./router/rotas");

const app = express();

app.use(express.json());
app.use(rotas);
const porta = 3000;
app.listen(porta, () => {
  return console.log(`Conexão estabelecida na porta ${porta}`);
});
