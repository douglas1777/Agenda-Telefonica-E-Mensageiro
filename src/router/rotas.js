const express = require("express");

const rotaUsuario = require("../controladores/usuario");
const verificarUsuarioLogado = require("../intermediarios/autenticacao");

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
rotas.post("/login", verifica.autLogin, rotaUsuario.loginUsuario);

rotas.use(verificarUsuarioLogado);

rotas.get("/usuario", rotaUsuario.detalharUsuario);
rotas.put("/usuario", rotaUsuario.atualizarUsuario);
rotas.delete("/usuario", rotaUsuario.excluirConta);

module.exports = rotas;
