DROP DATABASE IF EXISTS facebook;
CREATE DATABASE facebook;

\c facebook

CREATE TABLE people(
id SERIAL PRIMARY KEY,
first_name VARCHAR NOT NULL,
last_name VARCHAR NOT NULL,
birth_date DATE,
friends_count INTEGER,
city VARCHAR
);

INSERT INTO people (first_name, last_name)
VALUES ('Jim', 'Jones');

INSERT INTO people (first_name, last_name, friends_count)
VALUES ('Sue', 'Smith', 12);

INSERT INTO people (first_name, last_name, birth_date)
VALUES ('Jil', 'Nance', '2003-01-01');

INSERT INTO people (first_name, last_name, birth_date, friends_count)
VALUES ('Samantha', 'Jones', '1989-04-12', 230);

