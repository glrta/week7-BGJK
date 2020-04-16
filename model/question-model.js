const db = require("../database/connection");

function getAllIcebreakers() {
  return db.query('SELECT * FROM icebreakers')
    .then((result) => {
       return result.rows;
    })
    .catch(console.log);
}

module.exports = { getAllIcebreakers }