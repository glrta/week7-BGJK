# FAC19 week 7 project

At [Founders and Coders](https://www.foundersandcoders.com/about/) coding bootcamp we are tasked every week with a different project. A MVP is built in 1.5 days by 4 developers that follow the Agile methodology.

__Week 7 topic__: REST API

See [week 7 schedule](https://founders-and-coders.gitbook.io/coursebook/week-7/schedule).

---


# week7-BGJK

## Project brief

To build a REST API that delivers FAC19 icebreakers(?), inspired by the morning check-ins and afternoon checkouts. We thought it would be a great idea to build something on this.

## What our API does

API allows users to access a database of icebreaker questions and answers. Users will be able to add their own questions and answers.

### User stories
- As a FAC19 student I want to be able to see all the icebreakers and everyone's answers so that I can add my own.
- As a FAC19 mentor I want to see what icebreakers and questions have already been asked so I don't duplicate.

---

## How to set up the project
### Instructions to install Node and run the server
1. Clone this repo
2. Type `npm install` in the terminal to install all the dependencies associated with this project
3. Once you have installed node, enter `npm run dev` to kickstart the server

### Instructions to set up database

- Start Posgres by typing on your terminal: `psql`
- `CREATE USER myuser WITH PASSWORD 'mypassword'`
- then `ALTER USER myuser WITH SUPERUSER`
- then `CREATE DATABASE mydatabase WITH OWNER myuser`
- then connect to the database you created: `\c mydatabase`
- and finally initialise the database: `\i database/init.sql`
- Create a `.env` file in the root folder to save your credential details as follow:
  ```
  PGDATABASE=mydatabase
  PGUSER=myuser
  PGPASSWORD=mypassword
  JWT_SECRET=a_string 
  ```

---

## Running tests
No tests as of Thursday 5pm

---

## API functions

### Users
- Method `POST` `/users`: allows user to sign up 
  ```
  {
    "username":"your_username",
    "password":"your_password"
  }
  ```
- Method `POST` `/login`: allows user to login and creates token
  ```
  {
    "username":"your_username",
    "password":"your_password"
  }
  ```
- Method `GET` `/users`: lists all users

### Questions
- Method `GET` `/questions`: lists all questions in the database
- Method `GET` `/question/:id`: gets specific question
- Method `POST` `/questions`: allows logged in users to create new question
  ```
  {
    "question":"your_new_question"
  }
  ```
- Method `PUT` `/questions/:id`: allows logged in users to edit their questions
   ```
  {
    "question":"your_edited_question"
  }
- Method `DEL` `/questions/:id`: allows logged in users to delete their questions

### Answers
- Method `GET` `/answers`: lists all answers, with question ID and users ID
- Method `GET` `/answers/:userId`: lists user's answers 
- Method `POST` `/answers/:id`: allows logged in users to add answers (id referes to the question id)
  ```
  {
    "answer": "your_new_answer"
  }
  ```
- Method `PUT` `/answers/:id`: allows logged in users to edit their answers
  ```
  {
    "answer": "your_edited_answer"
  }
  ```
- Method `DEL` `/answers/:id`: allows logged in users to delete their answers

---

## Acceptance Criteria

- [x] An Express server that only returns JSON
- [x] A Postgres database to store the data
- [x] Endpoints for creating, reading, updating & deleting resources
- [x] Token-based authentication so only the owner of a resource can change it
- [x] Correct headers and response metadata
- [x] Error-handling to make it easy to use the API to build something
- [ ] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

---

## What we learned

- 418 http error code: 'I'm a teapot'
- Arrays are still JSON
- Utilising the UNIQUE keyword in our database schema to prevent multiple users with the same username

---

## What we struggled with
- Understanding the concept of a REST API (project without a client side)
- Deploy database to Heroku
- Time to write tests

## Contributors

- [Lizzy-j](https://github.com/Lizzy-j)
- [Giovanna](https://github.com/glrta)
- [CampbellDocherty](https://github.com/CampbellDocherty)
- [Vatskan](https://github.com/VatsKan)
