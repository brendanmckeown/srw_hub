const models = require('../models');
const Role = models.Role;
const User = models.User;

module.exports = {

  create(request, response) {
    return Role
      .create({
        title: request.body.title
      })
      .then(todo => response.status(201).send(todo))
      .catch(error => response.status(400).send(error));
  },

  list(request, response) {
    return Role
      .findAll({
        include: [{
          model: User,
          as: 'users'
        }]
      })
      .then(roles => response.status(200).send(roles))
      .catch(error => response.status(400).send(error));
  },

  retrieve(request, response) {
    return Role
      .findById(request.params.roleId, {
        include: [{
          model: User,
          as: 'users'
        }]
      })
      .then(role => {
        if (!role) {
          return response.status(404).send({
            message: 'Role not found'
          });
        }
        return response.status(200).send(role);
      })
      .catch(error => response.status(400).send(error));
  },

  update(request, response) {
    return Role
      .findById(request.params.roleId)
      .then(role => {
        if (!role) {
          return response.status(404).send({
            message: 'Role Not Found',
          });
        }
        return role
          .update({
            title: request.body.title || role.title,
          })
          .then(() => response.status(200).send(role))
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  }

};
