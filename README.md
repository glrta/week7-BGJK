# week7-BGJK

## Project brief

To build a REST API that delivers FAC19 icebreakers(?), inspired by the morning check-ins and afternoon checkouts. We thought it would be a great idea to buld something on this.

## Running tests
No tests as of Thursday 5pm

---

## What our API does

API allows users to access a database of icebreaker questions and answers. Users will be able to add their own questions and answers.

### User stories
- As a FAC19 student I want to be able to see all the icebreakers and everyone's answers so that I can add my own.
- As a FAC19 mentor I want to see what icebreakers and questions have already been asked so I don't duplicate.

---

## How to set up the project
### Instructions to set up database
- Start Posgres by typingon your terminal: `psql`
- `CREATE USER myuser WITH PASSWORD 'mypassword'`
- then `ALTER USER myuser WITH SUPERUSER`
- then `CREATE DATABASE mydatabase WITH OWNER myuser`
- then connext to the database you created: `\c mydatabase`
- and finally: `\i database/init.sql`


### Instructions to install Node and run the server
1. Type `npm install` in the terminal to install all the dependencies associated with this project
2. Once you have installed node, enter `npm run dev` to kickstart the server
---

## API functions
- List all questions in the database and the answers
- Allows user to sign up/login to add questions and answers
- Also gives the option of deleting and editing questions/answers
- Can specifically pull all answers associated with a question
- Can specifically pull all answers associated with a question from a specific user
---

## Acceptance Criteria

- [x] An Express server that only returns JSON
- [x] A Postgres database to store the data
- [x] Endpoints for creating, reading, updating & deleting resources
- [ ] Token-based authentication so only the owner of a resource can change it
- [x] Correct headers and response metadata
- [ ] Error-handling to make it easy to use the API to build something
- [ ] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

---

## What we learned

- 418 http error code
- Arrays are still JSON
- Utilising the unique keyword in our database schema to prevent multiple users with the same username

---

## What we struggled with
- Uderstanding the concept of a REST API (project without a client side)

## Contributors

lizzy-j <lizzyhj@hotmail.com>
Giovanna <to.gio@pm.me>
CampbellDocherty <campbellsofitsidocherty@gmail.com>
vatskan <vatskan@gmail.com>
