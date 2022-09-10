const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/consultar-pessoas', PessoaController.consultarTodasPessoas)
      .get('/consultar-pessoas/:id', PessoaController.consultarPessoaPorId)
      .post('/gravar-pessoa', PessoaController.gravarPessoa)
      .put('/gravar-pessoa/:id', PessoaController.atualizarPessoa)
      .delete('/gravar-pessoa/:id', PessoaController.deletarPessoa);
// alternativa
// router.get('/consultar-pessoas', PessoaController.consultarTodasPessoas);
// router.get('/consultar-pessoas/:id', PessoaController.consultarPessoaPorId);
// router.post('/gravar-pessoa', PessoaController.gravarPessoa);
// router.put('/gravar-pessoa/:id', PessoaController.atualizarPessoa);
// router.delete('/gravar-pessoa/:id', PessoaController.deletarPessoa);

module.exports = router;

