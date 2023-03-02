const pool = require("../bancoConfig/conexao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const rotaContatos = {
  async adicionarContato(req, res) {
    const { id } = req.usuario;

    const { nome, telefone, email } = req.body;
    try {
      const contatoAdicionado = await pool.query(
        "insert into contatos ( telefone, nome, email, usuario_id) values($1, $2, $3, $4)returning *",
        [telefone, nome, email, id]
      );

      return res.status(201).json({
        id: contatoAdicionado.rows[0].id,
        nome: contatoAdicionado.rows[0].nome,
        telefone: contatoAdicionado.rows[0].telefone,
        email: contatoAdicionado.rows[0].email,
      });
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },

  async detalharContato(req, res) {
    const { telefone } = req.params;
    try {
      const usuario = await pool.query(
        `select *from contatos where telefone = $1 `,
        [telefone]
      );
      const usuarioSemSenha = {
        id: usuario.rows[0].id,
        nome: usuario.rows[0].nome,
        telefone: usuario.rows[0].telefone,
        email: usuario.rows[0].email,
      };
      return res.status(200).json(usuarioSemSenha);
    } catch (error) {
      return res.status(500).json({ mensagem: "Número de telefone inválido" });
    }
  },
  async listarContatos(req, res) {
    const { id } = req.usuario;

    try {
      const contatos = await pool.query(
        `select c.nome, c.telefone, c.email  from contatos c where usuario_id = $1`,
        [id]
      );

      return res.status(200).json(contatos.rows);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  },

  async atualizarContato(req, res) {
    const { id } = req.usuario;
    const { telefone: telefone_rota } = req.params;

    const { nome, telefone, email } = req.body;

    try {
      const alterandoUsuario = await pool.query(
        `update contatos set nome = $1, telefone=$2, email=$3  where telefone=$4 and usuario_id = $5 returning *`,
        [nome, telefone, email, telefone_rota, id]
      );
      if (alterandoUsuario.rowCount < 1) {
        return res.status(404).json({ mensagem: "Contato não encontrado" });
      }

      return res.status(200).json({
        mensagem: "Dados alterados com sucesso!",
      });
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
  async excluirContato(req, res) {
    const { id } = req.usuario;
    const { telefone: telefone_rota } = req.params;
    try {
      console.log(id, telefone_rota);
      const deletando = await pool.query(
        `delete from contatos where usuario_id=$1 and telefone = $2`,
        [id, telefone_rota]
      );

      return res.status(200).json({
        mensagem: "Contato exluído com sucesso",
      });
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
};
module.exports = rotaContatos;
