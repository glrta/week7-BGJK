const db = require("../database/connection");

function getRows(result){
    return result.rows
}

function getAllAnswers() {
    return db.query('SELECT * FROM answers')
    .then(getRows)
    .catch(console.log)
}


function createNewAnswer(user, question, answer) {
    return db.query('SELECT id FROM questions WHERE question LIKE ($1)', [`${question}`])
    .then((result) => {
        db.query('INSERT INTO answers (user_id, question_id, answers) VALUES (($1), ($2), ($3))', [`${user}`, `${result.rows[0].id}`, `${answer}`])
        .then(getRows)
    })
    .catch(console.log) 
}


//Selects specific answers based on the user
function getAnswer(userId) {
    return db.query('SELECT answers FROM answers WHERE user_id=($1)', [`${userId}`])
    .then(getRows)
    .catch(console.log) 
}

function updateAnswer(answerId, newAnswer) {
    return db
    .query('UPDATE answers SET answers=($1) WHERE id=($2)', [`${newAnswer}`, `${answerId}`])
    .then(getRows)
    .catch(console.log) 
}

function deleteAnswer(answerId) {
    return db
    .query('DELETE FROM answers WHERE id=($1)', [`${answerId}`])
    .then(getRows)
    .catch(console.log)
}

module.exports = { 
getAllAnswers,
createNewAnswer,
getAnswer,
updateAnswer,
deleteAnswer
}