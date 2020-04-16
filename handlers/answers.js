const model = require("../model/answer-model");

function getAnswers(req, res, next) {
  model
    .getAllAnswers()
    .then((answers) => {
      res.status(200).send(answers);
    })
    .catch(next);
}

function getUserAnswers (req, res, next) {
    const userId = req.params.userId
    model
    .getAnswer(userId)
    .then((results) => {
        res.status(200).send(results)
    })
    .catch(next)
}

function createNewAnswer(req, res, next) {
  const answer = req.body.answer;
  const question = req.body.question;
  const user = req.params.id;
  model
    .createNewAnswer(user, question, answer)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch(next);
}

function updateAnswer(req, res, next) {
  const answerId = req.params.id;
  const newAnswer = req.body.answer;
  // console.log(req)

  const userId = req.user.id;
  model.getAnswerByAnswerId(answerId)
  .then(answer => {
    console.log(answer)
    return answer[0].user_id
  })
  .then(answerUserId => {
    if(answerUserId !== userId){
      const error = new Error('Unauthorized!');
      error.status = 401;
      next(error);
    } else {
      model.updateAnswer(answerId, newAnswer)
        .then((answer) => {
          res.status(200).send(answer);
        })
    }
  })
    .catch(next);
}

function deleteAnswer(req, res, next) {
  const answerId = req.params.id;
  model
    .deleteAnswer(answerId)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
}

module.exports = { getAnswers, createNewAnswer, updateAnswer, deleteAnswer, getUserAnswers };
