const Role = require('../models').Role;

module.exports = {

  create(request, response) {
    return Role.create({
        title: request.body.title
      })
      .then(todo => response.status(201).send(todo))
      .catch(error => response.status(400).send(error));
  },

  list(request, response) {
    return Role.all()
      .then(roles => response.status(200).send(roles))
      .catch(error => response.status(400).send(error));
  }

};
