
DROP TABLE IF EXISTS tenants;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS doormen;
DROP TABLE IF EXISTS buildings;

CREATE TABLE buildings(
id SERIAL PRIMARY KEY,
name VARCHAR,
address VARCHAR,
num_floors INT);

CREATE TABLE doormen(
id SERIAL PRIMARY KEY,
name VARCHAR,
experience INT,
shift VARCHAR,
building_id INT REFERENCES buildings);

CREATE TABLE apartments(
id SERIAL PRIMARY KEY NOT NULL,
floor INT NOT NULL,
name VARCHAR,
price INT,
sqft INT,
bedrooms INT,
bathrooms INT,
building_id INT REFERENCES buildings);

CREATE TABLE tenants(
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR NOT NULL,
age INT,
gender VARCHAR,
apartment_id INT REFERENCES apartments);
