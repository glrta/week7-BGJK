const model = require("../model/question-model");

//returns all questions from db 
function getAllQuestions(req, res, next) {
  model
    .getAllQuestions()
    .then((questions) => {
      res.status(200).send(questions);
    })
    .catch(next);
}

//returns question associated to question id.
function getQuestion(req, res, next) {
  const id = req.params.id;
  if (id) {
    model
    .getQuestionByQuestionId(id)
    .then((question) => {
      res.status(200).send(question)
    })
    .catch(next);
  } 
}

function postNewQuestion(req, res, next) {
  const userId = req.user.id
  model
    .post(req.body, userId)
    .then((question) => {
        res.status(201).send(question); 
    })
    .catch(next);
}

function updateQuestion(req, res, next) {
  const questionId = req.params.id;
  const question = req.body.question;
  const userId = req.user.id;

  //refactor this to get rid of the first model query if possible
  model
  .getUserIdByQuestionId(questionId)
  .then(userIdArr => {
    console.log(userIdArr)
    if(userIdArr[0].user_id !== userId){
      const error = new Error('Unauthorized!')
      error.status = 401;
      next(error)
    } else {
      model
      .put(questionId, question)
      .then((updated) => {
        res.status(200).send(updated); 
      })
      .catch(next);
    }
  })
}

function deleteQuestion(req, res, next){
    const questionId = req.params.id;
    const userId = req.user.id;

  model
  .getUserIdByQuestionId(questionId)
  .then(userIdArr => {
    if(userIdArr[0].user_id !== userId){
      const error = new Error('Unauthorized!')
      error.status = 401;
      next(error)
    } else {
    model
      .del(questionId)
      .then(() => {
          res.status(204).send();
      })
      .catch(next);
    }
  })
}

module.exports = { getAllQuestions, getQuestion, postNewQuestion, updateQuestion, deleteQuestion }


