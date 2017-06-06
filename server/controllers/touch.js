const models = require('../models');
const Touch = models.Touch;

module.exports = {

  create(request, response) {
    return Touch
      .create({
        pressureValue: request.body.pressureValue,
        duration: request.body.duration,
        userId: request.params.userId
      })
      .then(touch => response.status(201).send(touch))
      .catch(error => response.status(400).send(error));
  },

  list(request, response) {
    return Touch.findAll({
        where: {
          userId: request.params.userId,
        },
      })
      .then(touches => response.status(200).send(touches))
      .catch(error => response.status(400).send(error));
  },

};
