const models = require('../models');
const WeeklySummary = models.WeeklySummary;

module.exports = {

  create(request, response) {
    return WeeklySummary
      .create({
        jobSatisfactionScore: request.body.jobSatisfactionScore,
        userId: request.params.userId
      })
      .then(weeklySummary => response.status(201).send(weeklySummary))
      .catch(error => response.status(400).send(error));
  },

  list(request, response) {
    return WeeklySummary.findAll({
        where: {
          userId: request.params.userId,
        },
      })
      .then(weeklySummaries => response.status(200).send(weeklySummaries))
      .catch(error => response.status(400).send(error));
  },

};
