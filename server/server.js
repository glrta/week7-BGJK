const express = require("express");
const auth = require("../middleware/auth");
const error = require("../middleware/error");
const logger = require("../middleware/logger");
const answers = require("../handlers/answers");
const questions = require("../handlers/questions");
const users = require("../handlers/users");

const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json()); //so that express knows to use JSON

//Routes for questions
server.get("/questions", questions.getAllQuestions);
server.get("/questions/:id", questions.getQuestion);
server.post("/questions", auth.verifyUser, questions.postNewQuestion);
server.put("/questions/:id", auth.verifyUser, questions.updateQuestion);
server.delete("/questions/:id", auth.verifyUser, questions.deleteQuestion);

//Routes for answers
server.get("/answers", answers.getAnswers);

server.get("/answers/:userId", answers.getUserAnswers);

server.post("/answers/:id",  auth.verifyUser, answers.createNewAnswer);

server.put("/answers/:id",  auth.verifyUser, answers.updateAnswer);

server.delete("/answers/:id",  auth.verifyUser, answers.deleteAnswer);

//Routes for users
server.post("/users", users.createUser);

server.use(error.errorHandler)

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
