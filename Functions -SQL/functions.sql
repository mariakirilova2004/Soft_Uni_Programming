SELECT `first_name`, `last_name`
FROM `employees`
WHERE SUBSTRING(`first_name`, 1, 2) = 'Sa'
ORDER BY `employee_id`;

SELECT `first_name`, `last_name`
FROM `employees`
WHERE `last_name` LIKE '%ei%'
ORDER BY `employee_id`;

SELECT `first_name`
FROM `employees`
WHERE `department_id` IN (3, 10)
AND YEAR(`hire_date`) BETWEEN 1995 AND 2005;

SELECT `first_name`, `last_name`, `job_title`
FROM `employees`
WHERE LOWER(`job_title`) NOT LIKE '%engineer%'
ORDER BY `employee_id`;

SELECT `name`
FROM `towns`
WHERE CHAR_LENGTH(`name`) IN (5, 6)
ORDER BY `name`;

SELECT `town_id`, `name`
FROM `towns`
WHERE LEFT(`name`, 1) IN ('M', 'K', 'B', 'E')
ORDER BY `name`;

SELECT `town_id`, `name`
FROM `towns`
WHERE LEFT(`name`, 1) NOT IN ('D', 'B', 'R')
ORDER BY `name`;

CREATE VIEW `v_employees_hired_after_2000` AS
SELECT `first_name`, `last_name`, `job_title`
FROM `employees`
WHERE YEAR(`hire_date`) > 2000;

SELECT `first_name`, `last_name`, `job_title`
FROM `employees`
WHERE char_length(`last_name`) = 5;

SELECT `country_name`, `iso_code`
FROM `countries`
WHERE `country_name` LIKE '%A%A%A%'
ORDER BY `country_name`;

SELECT 
    `peak_name`,
    `river_name`,
    LOWER(CONCAT(`peak_name`, SUBSTRING(`river_name`, 2))) AS 'mix'
FROM
    `peaks`,
    `rivers`
WHERE
    RIGHT(`peak_name`, 1) = LOWER(LEFT(`river_name`, 1))
ORDER BY `mix`;

SELECT `name`, date_format(`start`, '%Y-%M-%D')
FROM `games`
WHERE YEAR(`start`) BETWEEN 2011 AND 2012
ORDER BY `start`, `name` ASC
LIMIT 50;

SELECT `user_name`, substring(`email`, locate('@', `email`) + 1) AS `email_provider`
FROM `users`
ORDER BY `email_provider`;

SELECT `user_name`, `ip_address`
FROM `users`
WHERE `ip_address` LIKE '___.1%.%.___'
ORDER BY `user_name`;

SELECT `name`,
(
	CASE
		WHEN HOUR(`games`.`start`) BETWEEN 0 AND 11 THEN 'Morning'
		WHEN HOUR(`games`.`start`) BETWEEN 12 AND 17 THEN 'Afternoon'
		ELSE 'Evening'
	END
) AS 'part_of_the_day',
(
	CASE 
		WHEN `duration` < 4 THEN 'Extra Short'
		WHEN `duration` < 7 THEN 'Short'
		WHEN `duration` < 11 THEN 'Long'
        ELSE 'Extra long'
	END
) AS 'duration'
FROM `games`;

SELECT `product_name`,
`order_date`,
DATE_ADD(`order_date`, INTERVAL 1 DAY) AS `pay_due`,
DATE_ADD(`order_date`, INTERVAL 1 MONTH) AS `deliver_due`
FROM `orders`;

