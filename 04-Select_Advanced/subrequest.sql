SELECT first_name, last_name, salary
FROM employees
ORDER BY salary;

SELECT first_name, last_name, salary
FROM employees
WHERE salary <= 9900.0000*1.1
ORDER BY salary;

SELECT first_name, last_name, job_title
FROM employees
WHERE employee_id = ANY
(
	SELECT manager_id
    FROM employees
)
ORDER BY first_name, last_name;

SELECT first_name AS employee_id, last_name AS `employee_name`
FROM employees
WHERE address_id = ANY
(
	SELECT address_id
    FROM addresses
    WHERE town_id =
    (
		SELECT town_id
        FROM towns
        WHERE `name` = 'San Francisco'
    )
)
ORDER BY first_name;

