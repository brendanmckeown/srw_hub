const controllers = require('../controllers');
const rolesController = controllers.rolesController;
const usersController = controllers.usersController;
const touchController = controllers.touchController;

module.exports = (app) => {

  app.get('/api', (request, response) => response.status(200).send({
    message: 'Welcome to the API!'
  }));

  app.get('/api/roles', rolesController.list);
  app.post('/api/roles', rolesController.create);
  app.get('/api/roles/:roleId', rolesController.retrieve);
  app.put('/api/roles/:roleId', rolesController.update);
  app.delete('/api/roles/:roleId', rolesController.destroy);

  app.post('/api/roles/:roleId/users', usersController.create);

  app.get('/api/users/:userId/touches', touchController.list);
  app.post('/api/users/:userId/touches', touchController.create);

};
