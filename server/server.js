const express = require('express');
const auth = require('../middleware/auth');
const error = require('../middleware/error');
const logger = require('../middleware/logger');
const answers = require('../handlers/answers');
const questions = require('../handlers/questions');
const users = require('../handlers/users');



const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json());  //so that express knows to use JSON

//Routes for questions
server.get("/questions", questions.getAllQuestions);
server.get("/questions/:id", questions.getQuestion);
server.post("/questions", questions.postNewQuestion);
server.put("/questions/:id", questions.updateQuestion);
server.delete("/questions/:id", questions.deleteQuestion);

//Routes for answers
server.get("/answers", answers.getAnswers);

server.get("/answers/:userId", answers.getUserAnswers);

server.post("/answers/:id", answers.createNewAnswer);

server.put("/answers/:id", answers.updateAnswer);

server.delete("/answers/:id", answers.deleteAnswer);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));