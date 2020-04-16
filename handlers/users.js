const model = require("../model/user-model");
const bcrypt = require("bcryptjs");

function createUser(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) => {
      model.addUser(username, hash).then((result) => {
        res.status(201).send(result);
      });
    })
    .catch(next);
}

module.exports = { createUser };
