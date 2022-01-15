-- #1
CREATE DATABASE `upr_one_to_one`;
CREATE TABLE `people`
(
	`person_id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(20),
    `salary` DECIMAL(10, 2),
    `passport_id` INT,
    CONSTRAINT fk_people_passports
    FOREIGN KEY (`passport_id`)
    REFERENCES `passports`(`passport_id`)
);
CREATE TABLE `passports`
(
	`passport_id` INT PRIMARY KEY AUTO_INCREMENT,
    `passport_number` VARCHAR(20) UNIQUE
);

ALTER TABLE `passports` AUTO_INCREMENT = 101; 
INSERT INTO `passports`(`passport_number`)
VALUES
("N34FG21B"),
("K65LO4R7"),
("ZE657QP2");

INSERT INTO `people` (`first_name`, `salary`, `passport_id`)
VALUES
("Roberto", 43300.00, 102),
("Tom", 56100.00, 103),
("Yana", 60200.00, 101);

-- #2
CREATE DATABASE `upr_one_to_many`;
CREATE TABLE `manufacturers`
(
	`manufacturer_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30),
    `established_od` DATE
);

CREATE TABLE `models`
(
	`model_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30),
    `manifacturer_id` INT
);

ALTER TABLE `models`
ADD CONSTRAINT fk_models_manufacturers
FOREIGN KEY (`manifacturer_id`)
REFERENCES `manufacturers`(`manufacturer_id`);

INSERT INTO `manufacturers`(`name`, `established_od`)
VALUES('BMW', '1916-01-03'),
	  ('Tesla', '2003-01-01'),
	  ('Lada', '1966-01-05');
      
/*101	X1	1
102	i6	1
103	Model S	2
104	Model X	2
105	Model 3	2
106	Nova	3*/

ALTER TABLE `models` AUTO_INCREMENT = 101;

INSERT INTO `models`(`name`, `manifacturer_id`)
VALUES('i6', '1'),
      ('Model S', '2'),
      ('Model X', '2'),
      ('Model 3', '2'),
      ('Nova', '3');
      
-- #3
CREATE DATABASE `upr_many_to_many`;
CREATE TABLE `students`
(
	`student_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20)
);

INSERT INTO `students`(`name`)
VALUES ('Mila'),
	   ('Toni'),
	   ('Ron');
       
CREATE TABLE `exams`
(
	`exam_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20)
) AUTO_INCREMENT = 101;

INSERT INTO `exams`(`name`)
VALUES ('Spring MVC'),
	   ('Neo4j'),
	   ('Oracle 11g');

CREATE TABLE `students_exams`
(
		`student_id` INT,
		`exam_id` INT,
        CONSTRAINT pk_students_exams
        PRIMARY KEY(`student_id`, `exam_id`),
        CONSTRAINT fk_students_exams_students
        FOREIGN KEY(`student_id`)
        REFERENCES `students`(`student_id`),
        CONSTRAINT fk_students_exams_exams
        FOREIGN KEY (`exam_id`)
        REFERENCES `exams`(`exam_id`)
);

INSERT INTO `students_exams`
VALUES (1, 101),
	   (1, 102),
	   (2, 101),
	   (3, 103),
	   (2, 102),
	   (2, 103);
       
-- #4
CREATE DATABASE `self_referencing`;

CREATE TABLE `teachers`
(
	`teacher_id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(30),
    `manager_id` INT,
    CONSTRAINT fk_teachers_teachers
    FOREIGN KEY (`manager_id`)
    REFERENCES `teachers`(`teacher_id`)
) AUTO_INCREMENT = 101;

INSERT INTO `teachers`(`name`, `manager_id`)
VALUES ('John', NULL),
	   ('Maya', 106),
	   ('Silvia', 106),
	   ('Ted', 105),
	   ('Mark', 101),
	   ('Greta', 101);
       
-- #5
CREATE DATABASE `online_store`;

CREATE TABLE `item_types`
(
	`item_type` INT(11) PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50)
);

CREATE TABLE `items`
(
	`item_id` INT(11) PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50),
    `item_type_id` INT(11),
    CONSTRAINT fk_items_items_types
    FOREIGN KEY (`item_type_id`)
    REFERENCES `item_types`(`item_type`)
);

CREATE TABLE `cities`
(
	`city_id` INT(11) PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(50)
);

CREATE TABLE `customers`
(
	`customer_id` INT(11) PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50),
    `birthday` DATE,
    `city_id` INT(11),
    CONSTRAINT fk_customers_cities
    FOREIGN KEY (`city_id`)
    REFERENCES `cities`(`city_id`)
);

CREATE TABLE `orders`
(
	`order_id` INT(11) PRIMARY KEY AUTO_INCREMENT,
    `customer_id` INT(11)    
);

ALTER TABLE `orders`
ADD CONSTRAINT fk_orders_customers
FOREIGN KEY (`customer_id`)
REFERENCES `customers`(`customer_id`);

CREATE TABLE `order_items`
(
	`order_id` INT(11),
    CONSTRAINT fk_order_items_orders
    FOREIGN KEY (`order_id`)
    REFERENCES `orders`(`order_id`),
	`item_id` INT(11),
    CONSTRAINT fk_order_items_items
    FOREIGN KEY (`item_id`)
	REFERENCES `items`(`item_id`)
);

-- #9
SELECT m.`mountain_range`, p.`peak_name`, p.`elevation` AS 'peak_elevation'
FROM peaks AS p
JOIN mountains AS m
ON p.`mountain_id` = m.`id`
WHERE m.`mountain_range` = "Rila"
ORDER BY `peak_elevation` DESC;
