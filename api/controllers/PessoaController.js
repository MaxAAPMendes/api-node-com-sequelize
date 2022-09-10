const database = require('../models');

class PessoaController {

  static async consultarTodasPessoas(req, res) {
    try {
      // database.Pessoas (Pessoas é o return do arquivo pessoas.js)
      const retornoPessoas = await database.Pessoas.findAll();
      return res.status(200).json(retornoPessoas)
    } catch (error) {
      return res.status(500).json({
        status: 'erro',
        mensagem: error.message
      });
    }
  };

  static async consultarPessoaPorId(req, res) {
    try {
      const id = req.params.id;
      const resultadoPessoaPorId = await database.Pessoas.findByPk(id);
      // const resultadoPessoaPorId = await database.Pessoas.findOne({
      //   where: { id: Number(id) }
      // });
      return res.status(200).json(resultadoPessoaPorId);
    } catch (error) {
      res.status(500).json({
        status: 'erro',
        mensagem: `Erro ao consultar ${error.message}`
      });
    }
  };

  static async gravarPessoa(req, res) {
    try {
      const resultadoGravacao = await database.Pessoas.create(req.body);
      return res.status(201).json({
        status: 'sucesso',
        mensagem: `Pessoa com ID ${resultadoGravacao.dataValues.id} gravado com sucesso!`
      })
    } catch (error) {
      return res.status(500).json({
        status: 'erro',
        mensagem: `Erro na gravação ${error.message}`
      })
    }
  }

  static async atualizarPessoa(req, res) {
    try {
      const { body, params } = req;
      // retorna array com 0 ou 1
      const resultado = await database.Pessoas.update(body, {
        where: { id: Number(params.id) }
      });
      res.status(200).json({
        status: `${resultado[0] ? 'atualizado': 'Não atualizado'}`
      })
    } catch (error) {
      res.status(500).json({
        status: 'erro',
        mensagem: `Erro ao atualizar ${error.message}`
      });
    }
  }

  static async deletarPessoa(req, res) {
    try {
      const { id } = req.params;
      // retorna 0 ou 1
      const resultado = await database.Pessoas.destroy({
        where: { id: Number(id) }
      })
      // console.log(resultado);
      return res.status(200).json({
        status: 'sucesso',
        mensagem: `${resultado} ? 'Registro deletado' : 'Não deletou'`
      })
    } catch (error) {
      return res.status(500).json({
        status: 'erro',
        mensagem: `Erro na exclusãp ${error.message}`
      })
    }
  }
};

module.exports = PessoaController;