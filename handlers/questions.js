const model = require("../model/question-model");

function getAllQuestions(req, res, next) {
  model
    .getAll()
    .then((questions) => {
      res.status(200).send(questions);
    })
    .catch(next);
}

function getQuestion(req, res, next) {
  const id = req.params.id;
  if (id) {
    model
    .get(id)
    .then((question) => {
      res.status(200).send(question)
    })
    .catch(next);
  } 
//   else {
//       const error = new Error("Question doesn't exist");
//       next(error); 
//   }
}

function postNewQuestion(req, res, next) {
  const userId = req.params.id
  model
    .post(req.body, userId)
    .then(() => {
        res.status(201).send(); //do we want to return anything?
    })
    .catch(next);
}

function updateQuestion(req, res, next) {
  const questionId = req.params.id;
  const question = req.body.question;
  const userId = req.user.id;

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
      .then(() => {
        res.status(200).send(); //do we want to return anything?
      })
      .catch(next);
    }
  })
}

function deleteQuestion(req, res, next){
    const questionId = req.params.id;
    console.log(req.user)
    const userId = req.user.id;

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
      .del(questionId)
      .then(() => {
          res.status(204).send();
      })
      .catch(next);
    }
  })
}

module.exports = { getAllQuestions, getQuestion, postNewQuestion, updateQuestion, deleteQuestion }


