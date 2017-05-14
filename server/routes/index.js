const rolesController = require('../controllers').rolesController;

module.exports = (app) => {

  app.get('/api', (request, response) => response.status(200).send({
    message: 'Welcome to the API!'
  }));

  app.get('/api/roles', rolesController.list);
  app.post('/api/roles', rolesController.create);

};
