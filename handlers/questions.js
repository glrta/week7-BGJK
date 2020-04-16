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
  model
    .post(req.body)
    .then(() => {
        res.status(201).send(); //do we want to return anything?
    })
    .catch(next);
}

function updateQuestion(req, res, next) {
  const questionId = req.params.id;
  const question = req.body.question;
  
  if (questionId) {
    model
    .put(questionId, question)
    .then(() => {
      res.status(200).send(); //do we want to return anything?
    })
    .catch(next);
  } 
//   else {
//       const error = new Error("Question doesn't exist");
//       next(error);
//   }
}

function deleteQuestion(req, res, next){
    const questionId = req.params.id;
    model
      .del(questionId)
      .then(() => {
          res.status(204).send();
      })
      .catch(next);
}

module.exports = { getAllQuestions, getQuestion, postNewQuestion, updateQuestion, deleteQuestion }


