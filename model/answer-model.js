const db = require("../database/connection");

function getAllAnswers() {
    return db.query('SELECT * FROM answers')
    .then((result) => {
        return result.rows
    })
    .catch(console.log)
}


function createNewAnswer(user, question, answer) {
    return db
    .query('INSERT INTO answers (user_id, question_id, answers) VALUES (($1), ($2), ($3))', [`${user}`, `${question}`, `${answer}`])
    .then((result) => {
        return result.rows
    })
    .catch(console.log) 
}

function getAnswer(answerId) {
    return db.query('SELECT answers FROM answers WHERE id=($1)', [`${answerId}`])
    .then(result => {
        return result.rows[0]
    })
    .catch(console.log) 
}

function updateAnswer(answerId, newAnswer) {
    return db
    .query('UPDATE answers SET answers=($1) WHERE id=($2)', [`${newAnswer}`, `${answerId}`])
    .then(result => {
        result.rows
    })
    .catch(console.log) 
}

function deleteAnswer(answerId) {
    return db
    .query('DELETE FROM answers WHERE id=($1)', [`${answerId}`])
    .then(result => {
        result.rows
    })
    .catch(console.log)
}

module.exports = { 
getAllAnswers,
createNewAnswer,
getAnswer,
updateAnswer,
deleteAnswer
}