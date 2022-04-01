import Cadastro from "../models/Cadastro";

class CadastroController {
  async store(req, res) {
    try {
      const novoCadastro = await Cadastro.create(req.body);
      const { id, nome,cpf } = novoCadastro;
      return res.json({ id, nome,cpf  });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const cadastros = await Cadastro.findAll({ attributes: ["id", "nome", "cpf"] });
      return res.json(cadastros);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }
      const cadastro = await Cadastro.findByPk(id, {
        attributes: ["id", "nome", "cpf"],
        order: [["id", "DESC"]],
      });

      return res.json(cadastro);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const cadastro = await Cadastro.findByPk(req.params.id);

      if (!cadastro) {
        return res.status(400).json({
          errors: ["Cadastro não existe"],
        });
      }

      const novosDados = await cadastro.update(req.body);
      const { id, nome,cpf } = novosDados;
      return res.json({ id, nome,cpf });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const cadastro = await Cadastro.findByPk(req.params.id);

      if (!cadastro) {
        return res.status(400).json({
          errors: ["Cadastro não existe"],
        });
      }

      await cadastro.destroy();
      return res.json('Cadastro excluido com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CadastroController();
