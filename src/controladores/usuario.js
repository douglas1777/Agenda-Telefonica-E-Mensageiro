const pool = require("../bancoConfig/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const rotaUsuario = {
  async cadastrarUsuario(req, res) {
    const { nome, telefone, email, senha } = req.body;
    try {
      const criptografiSenha = await bcrypt.hash(senha, 10);

      const usuarioCadastrado = await pool.query(
        "insert into usuarios (nome, telefone, email, senha) values($1, $2, $3, $4)returning *",
        [nome, telefone, email, criptografiSenha]
      );
      const usuarioSemSenha = {
        id: usuarioCadastrado.rows[0].id,
        telefone: usuarioCadastrado.rows[0].telefone,
        nome: usuarioCadastrado.rows[0].nome,
        email: usuarioCadastrado.rows[0].email,
      };

      return res.status(201).json(usuarioSemSenha);
    } catch (error) {
      return res.status(500).json({
        mensagem:
          "Já existe um usuario cadastrado com o telefone ou email informado",
      });
    }
  },

  async loginUsuario(req, res) {
    const { telefone, email, senha } = req.body;

    try {
      const consultaUSuario = await pool.query(
        "select * from usuarios where telefone = $1 or email = $2",
        [telefone, email]
      );

      if (!consultaUSuario.rows[0]) {
        return res.status(400).json({ message: "usuario ou senha invalido" });
      }

      const validarLogin = await bcrypt.compare(
        senha,
        consultaUSuario.rows[0].senha
      );

      if (!validarLogin) {
        return res.status(400).json({ message: "usuario ou senha invalido" });
      }

      const token = await jwt.sign(
        { id: consultaUSuario.rows[0].id },
        process.env.SECRETJWT,
        { expiresIn: "24h" }
      );

      return res.status(200).json({
        usuario: {
          id: consultaUSuario.rows[0].id,
          telefone: consultaUSuario.rows[0].telefone,
          nome: consultaUSuario.rows[0].nome,
          email: consultaUSuario.rows[0].email,
        },
        token,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async detalharUsuario(req, res) {
    const { id } = req.usuario;
    try {
      const usuario = await pool.query(`select *from usuarios where id = $1`, [
        id,
      ]);
      const usuarioSemSenha = {
        id: usuario.rows[0].id,
        nome: usuario.rows[0].nome,
        telefone: usuario.rows[0].telefone,
        email: usuario.rows[0].email,
      };
      return res.status(200).json(usuarioSemSenha);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async atualizarUsuario(req, res) {
    const usuario = req.usuario;

    const { nome, telefone, email, senha } = req.body;

    try {
      const criptografiSenha = await bcrypt.hash(senha, 10);

      const alterandoUsuario = await pool.query(
        `update usuarios set nome = $1, telefone = $2, email = $3, senha = $4 where id = ${usuario.id}`,
        [nome, telefone, email, criptografiSenha]
      );

      return res.status(200).json({ mensagem: "Dados alterados com sucesso!" });
    } catch (error) {
      return res.status(500).json({
        mensagem:
          "O e-mail informado ou telefone já está sendo utilizado por outro usuário.",
      });
    }
  },
  async excluirConta(req, res) {
    const usuario = req.usuario;
    const { senha } = req.body;
    try {
      const consultaUSuario = await pool.query(
        `select * from usuarios where id = $1`,
        [usuario.id]
      );

      if (!consultaUSuario.rows[0]) {
        return res.status(400).json({ message: "usuario ou senha invalido" });
      }

      const validarLogin = await bcrypt.compare(
        senha,
        consultaUSuario.rows[0].senha
      );

      const deletando = await pool.query(`delete from usuarios where id =$1`, [
        usuario.id,
      ]);
      return res.status(200).json({
        mensagem: "Foi uma pena que tenha decidido excluir sua conta :(",
      });
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
};
module.exports = rotaUsuario;
