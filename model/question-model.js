const db = require("../database/connection");

function getAllIcebreakers() {
  return db.query('SELECT * FROM icebreakers')
    .then((result) => {
       return result.rows;
    })
    .catch(console.log);
}

function getQuestionId(question) {
  return db.query('SELECT id FROM icebreakers WHERE question LIKE ($1)', [`${question}`])
  .then((result) => {
    return result.rows[0].id
  })
}

module.exports = { getAllIcebreakers, getQuestionId }