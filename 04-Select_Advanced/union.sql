(SELECT first_name, last_name, "(no manager)" as manager_name
FROM employees e where manager_id IS NULL)
  UNION
(SELECT first_name, last_name, 
        (SELECT CONCAT(first_name, " ", last_name) FROM employees 
		  WHERE employee_id = e.manager_id)
FROM employees e WHERE manager_id IS NOT NULL) 
ORDER BY manager_name;


(
SELECT first_name, last_name, 'employee' AS position
FROM employees 
WHERE (first_name, last_name) = ANY
(
	SELECT first_name, last_name
    FROM employees 
    WHERE employee_id != ANY(SELECT manager_id FROM employees)
)
ORDER BY salary DESC 
LIMIT 3
)
UNION
(
SELECT first_name, last_name, 'manager' AS position
FROM employees 
WHERE (first_name, last_name) = ANY
(
	SELECT first_name, last_name
    FROM employees 
    WHERE employee_id = ANY(SELECT manager_id FROM employees)
)
ORDER BY salary DESC 
LIMIT 3
);

(SELECT mountain_range, 
		(SELECT peak_name FROM peaks WHERE  m.id = ANY(SELECT mountain_id  FROM mountains_countries WHERE  country_code = 'BG')ORDER by elevation DESC LIMIT 1),
        (SELECT elevation FROM peaks WHERE  m.id = ANY(SELECT mountain_id  FROM mountains_countries WHERE  country_code = 'BG')ORDER by elevation DESC LIMIT 1)
FROM mountains m)
UNION
(SELECT mountain_range, "no",  "info"
 from mountains m  
 WHERE id IN (SELECT mountain_id FROM mountains_countries WHERE country_code = 'BG')
   AND NOT EXISTS (SELECT 1 FROM peaks WHERE mountain_id = m.id))
ORDER BY mountain_range;



(SELECT p.peak_name as name, "peak" AS type, p.elevation AS info FROM peaks p 
WHERE p.mountain_id IN 
  (SELECT mountain_id FROM mountains_countries WHERE country_code = 'BG'))

UNION

(SELECT r.river_name, "river", r.length FROM rivers r 
 WHERE id IN 
   (SELECT river_id FROM countries_rivers WHERE country_code = 'BG')) 

UNION 

(SELECT m.mountain_range, "mountain", 
       (SELECT elevation FROM peaks WHERE mountain_id = m.id ORDER by elevation DESC LIMIT 1) elevation
 from mountains m  
 WHERE id IN 
   (SELECT mountain_id FROM mountains_countries WHERE country_code = 'BG'))

ORDER BY name


