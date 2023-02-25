const verifica = {
  nome(req, res, next) {
    const { nome } = req.body;
    try {
      if (!nome) {
        return res.status(401).json({ mensagem: "O nome é obrigatório" });
      }
      next();
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
  telefone(req, res, next) {
    const { telefone } = req.body;
    try {
      if (!telefone) {
        return res.status(401).json({ mensagem: "O telefone é obrigatório" });
      }
      next();
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
  email(req, res, next) {
    const { email } = req.body;
    try {
      if (!email) {
        return res.status(401).json({ mensagem: "O email é obrigatório" });
      }
      next();
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
  senha(req, res, next) {
    const { senha } = req.body;
    try {
      if (!senha) {
        return res.status(401).json({ mensagem: "A senha é obrigatória" });
      }
      next();
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
  autLogin(req, res, next) {
    const { telefone, email } = req.body;
    try {
      if (!telefone && !email) {
        return res
          .status(401)
          .json({ mensagem: "Efetue o login com o email ou a senha" });
      }
      next();
    } catch (error) {
      return res.status(500).json(error.mensagem);
    }
  },
};
module.exports = verifica;
