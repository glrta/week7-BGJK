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


function login(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  model
    .getUser(username)
    .then((loginObject) => {
        return bcrypt.compare(password, loginObject.password);
      })
      .then((match) => {
        if (!match) {
          const error = new Error("Unauthorized access. Please try again.");
          error.status = 401;
          next(error);
        } else {
          const token = jwt.sign({ user: result.id }, SECRET, {
          expiresIn: "1h",
          });
          res.status(200).send({token: token});
        }
      })
      .catch(next);
}



module.exports = { createUser, login };
