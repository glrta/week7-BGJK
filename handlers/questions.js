const model = require("../model/question-model");

function getAllQuestions(req, res, next) {
  model
    .getAllIcebreakers()
    .then((questions) => {
      res.status(200).send(questions);
    })
    .catch(next);
}

module.exports = { getAllQuestions }