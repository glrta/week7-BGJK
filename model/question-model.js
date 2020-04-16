const db = require("../database/connection");

function getRows(result){
    return result.rows
}

function getAll() {
  return db.query('SELECT * FROM questions')
    .then(getRows)
    .catch(console.log);
}

function get(id) {
    return db.query('SELECT question FROM questions WHERE questions.id = ($1)', [id])
    .then(getRows)
    .catch(console.log);
}

function post(newQuestionObj) {
  const question = newQuestionObj.question; 
    return db.query('INSERT INTO questions(question) VALUES ($1)', [question])
      .catch(console.log);
}

function put(questionId, question) {
  return db.query('UPDATE questions SET question = ($1) WHERE id = ($2)', [question, questionId])
    .catch(console.log)
}

function del(id){
    return db.query('DELETE FROM questions WHERE questions.id = ($1)', [id])
    .catch(console.log);
}

module.exports = { getAll, post, del, put, get }
