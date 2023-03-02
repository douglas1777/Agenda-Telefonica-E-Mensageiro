const pool = require("../bancoConfig/conexao");
const rotaMensagem = {
  async listarMensagens(req, res) {
    const { id } = req.usuario;
    try {
      const queryLista = await pool.query(
        "select * from mensagens where usuario_id = $1",
        [id]
      );
      const mensagensFormatadas = {
        usuario_id: queryLista.rows.usuario_id,
        telefone: queryLista.rows.telefone,
        mensagem: queryLista.rows.mensagem,
      };
      return res.status(200).json(queryLista.rows);
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
  async enviarMensagem(req, res) {
    const { id } = req.usuario;
    const { telefone, mensagem } = req.body;
    try {
      if (!telefone || telefone === "") {
        return res.status(404).json({
          mensagem:
            "É necessário um número de telefone para enviar uma mensagem",
        });
      }
      if (!mensagem || mensagem === "") {
        return res.status(404).json({ mensagem: "Mensagem vazia" });
      }
      const queryMensagem = await pool.query(
        `insert into mensagens (telefone, mensagem, usuario_id) 
values($1, $2, $3) returning*`,
        [telefone, mensagem, id]
      );
      return res.status(201).json(queryMensagem.rows[0]);
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
  async deletarMensagem(req, res) {
    const { id: usuario_id } = req.usuario;
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(404).json({ mensagem: "Id é obrigatório!" });
      }
      const apagarMensgem = await pool.query(
        "delete from mensagens where id=$1 and usuario_id=$2;",
        [id, usuario_id]
      );

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ mensagem: "Mensagem não encontrada" });
    }
  },
};
module.exports = rotaMensagem;
