const answerModel = require("../model/answer-model");
const questionModel = require("../model/question-model");

function getAnswers(req, res, next) {
  answerModel
    .getAllAnswers()
    .then((answers) => {
      res.status(200).send(answers);
    })
    .catch(next);
}

function createNewAnswer(req, res, next) {
  const answer = req.body.answer;
  const question = req.body.question;
  const user = req.params.id;
  answerModel
    .createNewAnswer(user, question, answer)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch(next);
}

function updateAnswer(req, res, next) {
  const answerId = req.params.id;
  const newAnswer = req.body.answer;

  answerModel
    .updateAnswer(answerId, newAnswer)
    .then((answer) => {
      res.status(200).send(answer);
    })
    .catch(next);
}

function deleteAnswer(req, res, next) {
  const answerId = req.params.id;
  answerModel
    .deleteAnswer(answerId)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
}

module.exports = { getAnswers, createNewAnswer, updateAnswer, deleteAnswer };
