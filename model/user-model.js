const db = require("../database/connection");

function addUser(username, hashedPassword) {
  return db
    .query("INSERT INTO users(username, password) VALUES (($1), ($2))", [
      username,
      hashedPassword, //get rid of comma when not on Lizzy's computer
    ])
    .catch(console.log);
}

module.exports = { addUser };
