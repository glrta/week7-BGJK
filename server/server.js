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

server.get("/questions", questions.getAllQuestions);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));