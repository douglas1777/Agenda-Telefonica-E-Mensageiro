const pool = require("../bancoConfig/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const rotaContatos = {
  async criarContato(req, res) {
    const { nome, telefone, email } = req.body;
  },
};
