CREATE SCHEMA `test`;
CREATE TABLE `employees`
(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(10),
    `salary` DECIMAL,
    `department_id` INT,
    `office_id` INT,
    `job_title` VARCHAR(10)
);

INSERT INTO `employees` (`name`, `salary`, `department_id`, `office_id`, `job_title`)
VALUES ('Pesho', 1000, 1, 2, 'dev'),
	   ('Gosho', 5000, 1, 1, 'QA'),
	   ('Maria', 4000, 2, 3, 'QA'),
	   ('Ivan', 1500, 3, 4, 'Marketing'),
	   ('Stoyan', 3000, 2, 5, 'dev');
       
SELECT t.`department_id`, AVG(t.`salary`) AS 'AVG_SALARY'
FROM `employees` AS t
GROUP BY t.`department_id`
HAVING AVG_SALARY <= 3000;

SELECT t.`department_id`, t.`job_title`, SUM(t.`salary`) AS 'SUM_SALARY'
FROM `employees` AS t
GROUP BY t.`department_id`, t.`job_title`
ORDER BY t.`department_id`;

SELECT * FROM `employees`;

-- #1
SELECT COUNT(*) FROM `wizzard_deposits`;

-- #2
SELECT MAX(`magic_wand_size`) FROM `wizzard_deposits`;
SELECT `magic_wand_size` FROM `wizzard_deposits` ORDER BY magic_wand_size DESC LIMIT 1;

-- #3
SELECT `deposit_group`, MAX(`magic_wand_size`)  AS `max_size`
FROM `wizzard_deposits`
GROUP BY deposit_group
ORDER BY `max_size` DESC, `deposit_group`;

-- #4
SELECT `deposit_group`
FROM `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY AVG(`magic_wand_size`)
LIMIT 1;

-- #5
SELECT `deposit_group`, SUM(`deposit_amount`) AS `total_sum`
FROM `wizzard_deposits`
GROUP BY `deposit_group`
ORDER BY `total_sum`;

-- #6
SELECT `deposit_group`, SUM(`deposit_amount`) AS 'total_sum'
FROM `wizzard_deposits`
WHERE `magic_wand_creator` = "Ollivander family"
GROUP BY `deposit_group`
ORDER BY `total_sum`;

-- #7
SELECT `deposit_group`, SUM(`deposit_amount`) AS 'total_sum'
FROM `wizzard_deposits`
WHERE `magic_wand_creator` = "Ollivander family"
GROUP BY `deposit_group`
HAVING `total_sum` < 150000
ORDER BY `total_sum` DESC;

-- #8
SELECT `deposit_group`, `magic_wand_creator`, MIN(`deposit_charge`)
FROM `wizzard_deposits`
GROUP BY `deposit_group`, `magic_wand_creator`
ORDER BY `magic_wand_creator`, `deposit_group`;

-- #9
SELECT 
    (CASE
        WHEN `age` BETWEEN 0 AND 10 THEN '[0-10]'
        WHEN `age` BETWEEN 11 AND 20 THEN '[11-20]'
        WHEN `age` BETWEEN 21 AND 30 THEN '[21-30]'
        WHEN `age` BETWEEN 31 AND 40 THEN '[31-40]'
        WHEN `age` BETWEEN 41 AND 50 THEN '[41-50]'
        WHEN `age` BETWEEN 51 AND 60 THEN '[51-60]'
        ELSE '[61+]'
    END) AS 'age_group',
    COUNT(*) AS `wizzard_count`
FROM
    `wizzard_deposits`
GROUP BY `age_group`
ORDER BY `age_group`;

-- #10
SELECT left(`first_name`, 1) AS 'first_letter'
FROM `wizzard_deposits` 
WHERE `deposit_group` = "Troll Chest"
GROUP BY `first_letter`
ORDER BY `first_letter`;

-- #11
SELECT `deposit_group`, `is_deposit_expired`,  AVG(deposit_interest) AS 'avg_interest'
FROM `wizzard_deposits`
WHERE `deposit_start_date` > '1985-01-01'
GROUP BY `deposit_group`, `is_deposit_expired`
ORDER BY `deposit_group` DESC, `is_deposit_expired`;

-- #12
SELECT `department_id`, MIN(`salary`) AS 'min_salary'
FROM `employees`
WHERE `department_id` IN (2, 5, 7) AND YEAR(`hire_date`) >= 2000
GROUP BY `department_id`
ORDER BY `department_id`; 

-- #13
CREATE TABLE `hpe` AS 
SELECT * FROM `employees`
WHERE `salary` > 2000 AND `manager_id` != 42; 

UPDATE `hpe`
SET `salary` = `salary` + 5000
WHERE `department_id` = 1;

SELECT `department_id`, AVG(`salary`) AS 'avg_salary'
FROM `employees`
GROUP BY `department_id`
ORDER BY `department_id`;

-- #14
SELECT `department_id`, MAX(`salary`) AS 'max_salary'
FROM `employees`
GROUP BY `department_id`
HAVING `max_salary` NOT BETWEEN 30000 AND 70000
ORDER BY `department_id`;

-- #15
SELECT COUNT(`salary`) FROM `employees`
WHERE `manager_id` IS NULL; 

-- #16
SELECT e.`department_id`,
(SELECT DISTINCT `salary` FROM `employees` AS e2
WHERE e2.`department_id` = e.`department_id`
ORDER BY `salary` DESC
LIMIT 1 OFFSET 2) AS 'ths'
FROM `employees` e
GROUP BY `department_id` 
HAVING ths IS NOT NULL
ORDER BY `department_id`;


-- #17
SELECT `first_name`, `last_name`, `department_id`
FROM `employees` e
WHERE `salary` > (SELECT AVG(`salary`) FROM `employees` WHERE `department_id` = e.department_id)
ORDER BY `department_id`, `employee_id`
LIMIT 10;

-- #18
SELECT `department_id`, SUM(`salary`) AS 'total_salary'
FROM `employees`
GROUP BY `department_id`
ORDER BY `department_id`; 