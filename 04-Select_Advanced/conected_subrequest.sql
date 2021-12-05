SELECT job_title, salary
FROM employees e
WHERE salary = 
(
	SELECT salary
    FROM employees
    WHERE department_id = e.department_id
    ORDER BY salary DESC
    LIMIT 1
)
ORDER BY salary DESC,
job_title ASC;

SELECT first_name, last_name, salary, department_id AS `department` 
FROM employees e
WHERE salary =
(
	SELECT salary
    FROM employees
    WHERE department_id = e.department_id
    ORDER BY salary 
    LIMIT 1
)
ORDER BY salary,
first_name ,
last_name;

SELECT first_name, last_name
FROM employees e
WHERE EXISTS
(
	SELECT first_name, last_name
    FROM employees 
    WHERE manager_id = e.employee_id 
    AND middle_name = e.middle_name
)
ORDER BY first_name, last_name;

SELECT first_name, last_name
FROM employees e
WHERE salary < ANY
(
	SELECT salary
    FROM employees
    WHERE e.salary < salary 
    AND e.employee_id = manager_id
);

SELECT first_name, last_name
FROM employees e
WHERE
(
	SELECT COUNT(first_name)
    FROM employees
    WHERE e.employee_id = manager_id
)
= 5;

SELECT mountain_range,
						(SELECT peak_name FROM peaks WHERE mountain_id = m.id ORDER by elevation DESC LIMIT 1) peak_name,
						(SELECT elevation FROM peaks WHERE mountain_id = m.id ORDER by elevation DESC LIMIT 1) elevation
FROM mountains m
 WHERE id IN (SELECT mountain_id FROM mountains_countries WHERE country_code = 'BG')
 ORDER BY elevation DESC;
 
SELECT mountain_range from mountains m  
 WHERE id IN (SELECT mountain_id FROM mountains_countries WHERE country_code = 'BG')
   AND NOT EXISTS (SELECT 1 FROM peaks WHERE mountain_id = m.id)