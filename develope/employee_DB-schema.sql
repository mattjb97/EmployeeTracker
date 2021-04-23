DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT PRIMARY KEY NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE roles (
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL() NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE employee (
    id INT PRIMARY KEY NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id)
)