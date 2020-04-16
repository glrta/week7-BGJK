const model = require("../model/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;

function createUser(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) => {
      model
        .addUser(username, hash)
        .then((userId) => {
          return model.getUser(userId);
        })
        .then((result) => {
          const token = jwt.sign({ user: result.id }, SECRET, {
            expiresIn: "1h",
          });
          result.token = token;
          res.status(201).send(result);
        });
    })
    .catch(next);
}

module.exports = { createUser };
