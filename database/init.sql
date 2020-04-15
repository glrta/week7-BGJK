BEGIN;

DROP TABLE IF EXISTS users, icebreakers, answers;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    passphrase VARCHAR(255),
    token TEXT
);

CREATE TABLE icebreakers(
    id SERIAL PRIMARY KEY,
    question TEXT
);

CREATE TABLE answers(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    question_id INTEGER REFERENCES icebreakers(id),
    answers TEXT
);

INSERT INTO users
    (username, passphrase)
VALUES
    ('Tom', '$2a$10$3IAfxI7ekmnHqMv1T8a46O./avVNcq/YYk6SGkRwxEHsy9cQasuUy'),
    ('Chloe', '$2a$10$3IAfxI7ekmnHqMv1T8a46O./avVNcq/YYk6SGkRwxEHsy9cQasuUy'),
    ('Kat', '$2a$10$det9UYQkW9avEapZQHEti.hcEYC6s4t0YzpXW1C949xMXxQpi.RC2'),
    ('Roger', '$2a$10$Ii5o1InMg1gy4k9ylTTfiOyzDfOzKJ2n.6NuuxdgrPmx088X0DXna');

INSERT INTO icebreakers
    (question)
VALUES
    ('What book would you add to the school curiculum?');

INSERT INTO answers
    (user_id, question_id, answers)
VALUES
    (1, 1, 'Surveillance Capitalism')

COMMIT; 