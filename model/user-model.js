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

//Gets a single user by id
function getUser(userId) {
  return db
    .query("SELECT * FROM users WHERE id=($1)", [userId])
    .then((result) => {
      return result.rows[0];
    });
}

//Gets a single user by username
function getUserByName(username) {
  return db
    .query("SELECT * FROM users WHERE username=($1)", [username])
    .then((result) => {
      return result.rows[0];
    });
}
//Gets all users
function getEveryUser() {
  return db.query("SELECT * from users").then((result) => {
    return result.rows;
  });
}
//INSERT INTO (username) VALUES (‘oli’) RETURNING id;

module.exports = { addUser, getUser, getEveryUser, getUserByName };
