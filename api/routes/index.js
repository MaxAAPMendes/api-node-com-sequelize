const bodyParser = require('body-parser');
const { use } = require('../app');
const consultarPessoas = require('./pessoas');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(consultarPessoas);

  app.get('/', (req, res) => {
    res.json({
      status: 'UP',
      mensagem: 'Servidor rodando',
    })
  })
}
