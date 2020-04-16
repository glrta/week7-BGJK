BEGIN;

DROP TABLE IF EXISTS users, questions, answers;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE questions(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    question TEXT NOT NULL
);

CREATE TABLE answers(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    question_id INTEGER REFERENCES questions(id),
    answers TEXT NOT NULL
);

INSERT INTO users
    (username, password)
VALUES
    ('Gio', '$2a$10$3IAfxI7ekmnHqMv1T8a46O./avVNcq/YYk6SGkRwxEHsy9cQasuUy'),
    ('Camboi', '$2a$10$3IAfxI7ekmnHqMv1T8a46O./avVNcq/YYk6SGkRwxEHsy9cQasuUy'),
    ('lizzy', '$2a$10$det9UYQkW9avEapZQHEti.hcEYC6s4t0YzpXW1C949xMXxQpi.RC2'),
    ('Vatskan', '$2a$10$Ii5o1InMg1gy4k9ylTTfiOyzDfOzKJ2n.6NuuxdgrPmx088X0DXna');

INSERT INTO questions
    (question)
VALUES
    ('What book would you add to the school curiculum?');

INSERT INTO answers
    (user_id, question_id, answers)
VALUES
    (1, 1, 'Surveillance Capitalism');

COMMIT; 