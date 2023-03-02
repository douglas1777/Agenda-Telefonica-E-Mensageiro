const express = require("express");
const rotaContatos = require("../controladores/contatos");
const rotaMensagem = require("../controladores/mensagens");

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
rotas.post("/contato", rotaContatos.adicionarContato);
rotas.get("/contatos/lista", rotaContatos.listarContatos);
rotas.get("/contato/:telefone", rotaContatos.detalharContato);
rotas.put("/contato/:telefone", rotaContatos.atualizarContato);
rotas.delete("/contato/:telefone", rotaContatos.excluirContato);
rotas.post("/mensagem", rotaMensagem.enviarMensagem);
rotas.get("/mensagem", rotaMensagem.listarMensagens);
rotas.delete("/mensagem/delete/:id", rotaMensagem.deletarMensagem);

module.exports = rotas;
