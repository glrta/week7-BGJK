const db = require("../database/connection");

function addUser(username, hashedPassword) {
  return db
    .query(
      "INSERT INTO users(username, password) VALUES (($1), ($2)) RETURNING id",
      [
        username,
        hashedPassword, //get rid of comma when not on Lizzy's computer
      ]
    )
    .then((result) => result.rows[0].id)
    .catch(console.log);
}

function getUser(userId) {
  return db
    .query("SELECT * FROM users WHERE id=($1)", [userId])
    .then((result) => {
      return result.rows[0];
    });
}
//INSERT INTO (username) VALUES (‘oli’) RETURNING id;

module.exports = { addUser, getUser };
