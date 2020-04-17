const db = require("../database/connection");

//for use in .then (to return meaningful array from dbquery)
function getRows(result){
    return result.rows
}

function getRowsZero(result){
  return result.rows[0]
}

function getAllQuestions() {
  return db.query('SELECT * FROM questions')
    .then(getRows)
}

function getQuestionByQuestionId(id) {
    return db.query('SELECT question FROM questions WHERE questions.id = ($1)', [id])
    .then(getRows)
}

function getUserIdByQuestionId(questionId) {
  return db.query('SELECT user_id FROM questions WHERE questions.id = ($1)', [questionId])
  .then(getRows)
}

function post(newQuestionObj, userId) {
  const question = newQuestionObj.question; 
    return db.query('INSERT INTO questions(user_id, question) VALUES (($1), ($2)) RETURNING *', [userId, question])
      .then(getRowsZero)
}

function put(questionId, question) {
  return db.query('UPDATE questions SET question = ($1) WHERE id = ($2) RETURNING *', [question, questionId])
    .then(getRowsZero)
}

function del(id){
    return db.query('DELETE FROM questions WHERE questions.id = ($1)', [id])
}

module.exports = { getAllQuestions, post, del, put,  getQuestionByQuestionId, getUserIdByQuestionId }
