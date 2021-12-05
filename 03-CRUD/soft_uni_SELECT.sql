SELECT * FROM soft_uni.departments;
SELECT name FROM soft_uni.departments;
SELECT first_name, last_name, salary FROM soft_uni.employees;
SELECT first_name, middle_name, salary FROM soft_uni.employees;
SELECT CONCAT(first_name, '.',last_name, "@softuni.bg") AS `full_ email_address` FROM soft_uni.employees;
SELECT DISTINCT salary FROM soft_uni.employees WHERE salary;
SELECT * FROM soft_uni.employees WHERE `job_title` = `Stocker`;
SELECT first_name, last_name, job_title FROM soft_uni.employees WHERE `salary` BETWEEN 20000 AND 30000;
SELECT CONCAT(first_name, ' ', middle_name, ' ', last_name) AS `full_name` FROM soft_uni.employees WHERE `salary` IN (25000, 14000, 12500, 23600);
SELECT first_name, last_name FROM soft_uni.employees WHERE `manager_id` = null;


