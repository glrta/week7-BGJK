const db = require("../database/connection");

function getRows(result){
    return result.rows
}

function getAll() {
  return db.query('SELECT * FROM questions')
    .then(getRows)
}

function get(id) {
    return db.query('SELECT question FROM questions WHERE questions.id = ($1)', [id])
    .then(getRows)
}

function getUserIdByQuestionId(questionId) {
  return db.query('SELECT user_id FROM questions WHERE questions.id = ($1)', [questionId])
  .then(getRows)
}

function post(newQuestionObj, userId) {
  const question = newQuestionObj.question; 
    return db.query('INSERT INTO questions(user_id, question) VALUES (($1), ($2))', [userId, question])

}

function put(questionId, question) {
  return db.query('UPDATE questions SET question = ($1) WHERE id = ($2)', [question, questionId])}

function del(id){
    return db.query('DELETE FROM questions WHERE questions.id = ($1)', [id])
}

module.exports = { getAll, post, del, put, get, getUserIdByQuestionId }
