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
}

module.exports = { getAllAnswers,
createNewAnswer
}