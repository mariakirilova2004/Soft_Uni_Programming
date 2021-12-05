INSERT INTO towns (`name`)
VALUES('Sofia'),
	  ('Plovdiv'),
	  ('Varna'),
	  ('Burgas');

INSERT INTO departments(name, manager_id)
VALUES('Engineering', 1),
	('Sales', 3),
	('Marketing', 6),
	('Software Development', 6),
	('Quality Assurance', 41);

SELECT * FROM towns;
SELECT * FROM departments ;
SELECT * FROM employees;

SELECT name FROM towns;
SELECT name FROM departments ;
SELECT first_name, last_name, job_title, salary FROM employees;

UPDATE `employees`
SET `salary` = `salary` * 1.1
WHERE `employee_id`;

