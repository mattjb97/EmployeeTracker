USE employee_DB;

INSERT INTO department(department_name)
VALUES ('hr'),('IT'),('engineering');


INSERT INTO roles(title,salary,department_id)
VALUES ('manager',50000.00,1),('web dev',70000.00,2);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ('bob','smith', 6, NULL),('johnny', 'carson', 3, 12);
