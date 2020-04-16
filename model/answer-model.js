const db = require("../database/connection");

function getAllAnswers() {
    return db.query('SELECT * FROM answers')
    .then((result) => {
        return result.rows
    })
    .catch(console.log)
}

module.exports = { getAllAnswers }