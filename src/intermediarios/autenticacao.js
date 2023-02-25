const jwt = require("jsonwebtoken");

const pool = require("../bancoConfig/conexao");

const verificarUsuarioLogado = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ mensagem: "Usuário não autorizado" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.SECRETJWT);

    const usuario = await pool.query("select * from usuarios where id = $1", [
      id,
    ]);

    if (usuario.rowCount < 1) {
      return res.status(401).json({ mensagem: "Não encontrado" });
    }

    req.usuario = usuario.rows[0];

    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
};
module.exports = verificarUsuarioLogado;
