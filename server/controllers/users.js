const User = require('../models').User;

module.exports = {

  create(request, response) {
    return User.create({
      name: request.body.name,
      roleId: request.params.roleId
    })
    .then(user => response.status(201).send(user))
    .catch(error => response.status(400).send(error));
  }

};

