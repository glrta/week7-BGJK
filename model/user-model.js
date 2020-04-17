const db = require("../database/connection");

function resultRowsZero(result){
  return result.rows[0];
}
function resultRows(result){
  return result.rows;
}

//Adds user to db and returns newly created user obj
function addUser(username, hashedPassword) {
  return db
    .query(
      "INSERT INTO users(username, password) VALUES (($1), ($2)) RETURNING *",
      [
        username,
        hashedPassword
      ]
    )
    .then(resultRowsZero)
}

//Gets a single user by id
function getUser(userId) {
  return db
    .query("SELECT * FROM users WHERE id=($1)", [userId])
    .then(resultRowsZero);
}

//Gets a single user by username
function getUserByName(username) {
  return db
    .query("SELECT * FROM users WHERE username=($1)", [username])
    .then(resultRowsZero);
}

//Gets all users
function getEveryUser() {
  return db.query("SELECT * from users").then(resultRows);
}

module.exports = { addUser, getUser, getEveryUser, getUserByName };
