const model = require("../model/answer-model");

function getAnswers(req, res, next) {
    model
    .getAllAnswers()
    .then(answers => {
        res.status(200).send(answers)
    })
    .catch(next)
}


function createNewAnswer(req, res, next) {
    const answer = req.body.answer;
    const question = req.body.question;
    const authHeader = req.headers.authorization; //come back to this in the afternoon, requires authenticating the tokens

    model
    .createNewAnswer(1, question, answer)
    .then(data => {
        res.status(201).send(data)
    })
    .catch(next)
}

module.exports = { getAnswers, createNewAnswer }