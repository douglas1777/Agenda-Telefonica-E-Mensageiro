const express = require("express");
const rotaUsuario = require("../controladores/usuario");

const verifica = require("../intermediarios/validacaoDeDadosEnviados");
const rotas = express();

rotas.post(
  "/usuario",
  verifica.nome,
  verifica.telefone,
  verifica.email,
  verifica.senha,
  rotaUsuario.cadastrarUsuario
);

rotas.post("/login", verifica.email, verifica.senha);

module.exports = rotas;
