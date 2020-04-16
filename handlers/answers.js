const model = require("../model/answer-model");

function getAnswers(req, res, next) {
    model
    .getAllAnswers()
    .then(answers => {
        res.status(200).send(answers)
    })
    .catch(next)
}

module.exports = { getAnswers }