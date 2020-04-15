const db = require("../database/connection");

function getAllIcebreakers() {
  return db.query('SELECT * FROM icebreakers')
    .then((result) => {
        console.log(result.rows[0]);
       return result.rows[0];
    })
    .catch(console.log);
}

module.exports = { getAllIcebreakers }