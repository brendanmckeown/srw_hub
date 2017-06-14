const makeHttpRequest = require('request');
const controllers = require('../controllers');

function sendMessageToSlack(messageJSON) {
  const requestOptions = {
    uri: process.env.SLACK_URL,
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    json: messageJSON
  };
  makeHttpRequest(requestOptions, (error, response, body) => {
    if (error) {
      console.error(error);
    }
  })
}

module.exports = {

  processAction(request, response) {

    const mockPayload = {
      "actions":[
        {
          "name":"5",
          "value":"5"
        }
      ],
      "callback_id":"kevn_weekly",
      "team":{
        "id":"USERS_TEAM_ID",
        "domain":"TEAM_NAME"
      },
      "channel":{
        "id":"CHANNEL_ID",
        "name":"CHANNEL_NAME"
      },
      "user":{
        "id":"USER_ID",
        "name":"USER_NAME"
      },
      "action_ts":"1471473851.000000",
      "message_ts":"1471473846.000000",
      "attachment_id":"1",
      "token":"TOKEN",
      "response_url":"UNIQUE_RESPONSE_URL"
    };

    return controllers.weeklySummaryController.create(request, response);
  },

  sendWeeklySummary(request, response) {
    const requestBody = request.body;

    if (requestBody.token !== process.env.SLACK_TOKEN) {
      return response.status(403).end('Access forbidden');

    } else {

      const message = {
          "text": "Your Weekly Job Satisfaction Score",
          "attachments": [
              {
                  "text": "On a scale of 1-5, how would you rate this week?",
                  "fallback": "You are unable to rate the week.",
                  "callback_id": "kevn_weekly",
                  "color": "#3AA3E3",
                  "attachment_type": "default",
                  "actions": [
                      {
                          "name": "1",
                          "text": "1 - I was completely overwhelmed / My week was too slow, I was bored",
                          "type": "button",
                          "value": "1"
                      }, {
                          "name": "2",
                          "text": "2 - It was busy but I got through",
                          "type": "button",
                          "value": "2"
                      }, {
                          "name": "3",
                          "text": "3 - Average, nothing really stood out either way",
                          "type": "button",
                          "value": "3"
                      }, {
                          "name": "4",
                          "text": "4 - I had a pretty nice week",
                          "type": "button",
                          "value": "4"
                      }, {
                          "name": "5",
                          "text": "5 - It was extremely enjoyable",
                          "type": "button",
                          "value": "5"
                      }
                  ]
              }
          ]
      };

      sendMessageToSlack(message);
      return response.status(200).end('OK');
    }
  }

};
