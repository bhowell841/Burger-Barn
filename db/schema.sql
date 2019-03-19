DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USe burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(250) NOT NULL,
    devoured: BOOLEAN default false,
    PRIMARY KEY (id)
);

