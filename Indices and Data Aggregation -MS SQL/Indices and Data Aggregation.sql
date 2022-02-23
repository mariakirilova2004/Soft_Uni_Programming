-- 1
SELECT COUNT(*) 
FROM [WizzardDeposits];

-- 2
SELECT MAX([MagicWandSize])
FROM [WizzardDeposits];

-- 3
SELECT [DepositGroup], MAX([MagicWandSize])
FROM [WizzardDeposits]
GROUP BY [DepositGroup];

-- 4
SELECT TOP(2) [DepositGroup]
FROM (SELECT s.[DepositGroup] AS [DepositGroup],
			 AVG(s.[MagicWandSize]) AS [avg]
	  FROM [WizzardDeposits] AS s 
	  GROUP BY [DepositGroup]) AS sub
ORDER BY sub.[avg];

-- 5
SELECT [DepositGroup], SUM([DepositAmount]) AS 'TotalSum'
FROM [WizzardDeposits] AS wd
GROUP BY [DepositGroup];

-- 6
SELECT [DepositGroup], SUM([DepositAmount]) AS 'TotalSum'
FROM [WizzardDeposits] AS wd
WHERE [MagicWandCreator] = 'Ollivander family'
GROUP BY [DepositGroup];

-- 7
SELECT [DepositGroup], SUM([DepositAmount]) AS 'TotalSum'
FROM [WizzardDeposits] AS wd
WHERE [MagicWandCreator] = 'Ollivander family'
GROUP BY [DepositGroup]
HAVING SUM([DepositAmount]) < 150000
ORDER BY SUM([DepositAmount]) DESC;

-- 8
SELECT [DepositGroup], [MagicWandCreator], MIN([DepositCharge])
FROM [WizzardDeposits] AS wd
GROUP BY [DepositGroup], [MagicWandCreator]
ORDER BY [MagicWandCreator], [DepositGroup];

-- 9
SELECT t.[AgeGroup], COUNT(t.Id)
FROM (SELECT CASE
			 WHEN [Age] >= 0 AND [Age] <= 10 THEN '[0-10]'
			 WHEN [Age] >= 11 AND [Age] <= 20 THEN '[11-20]'
			 WHEN [Age] >= 21 AND [Age] <= 30 THEN '[21-30]'
			 WHEN [Age] >= 31 AND [Age] <= 40 THEN '[31-40]'
			 WHEN [Age] >= 41 AND [Age] <= 50 THEN '[41-50]'
			 WHEN [Age] >= 51 AND [Age] <= 60 THEN '[51-60]'
			 ELSE '[61+]'
			 END AS [AgeGroup],
			 Id
	  FROM [WizzardDeposits]) AS t
GROUP BY t.[AgeGroup];

-- 10
SELECT DISTINCT LEFT([FirstName], 1) AS [FirstLetter]
FROM [WizzardDeposits] AS wd
WHERE [DepositGroup] = 'Troll Chest'
ORDER BY [FirstLetter];

-- 11
SELECT [DepositGroup], [IsDepositExpired], AVG([DepositInterest])
FROM [WizzardDeposits] AS wd
WHERE [DepositStartDate] > '1985'
GROUP BY [IsDepositExpired], [DepositGroup]
ORDER BY [DepositGroup] DESC, [IsDepositExpired];

-- 12
SELECT SUM([Difference])
FROM (SELECT SUM(wd1.[DepositAmount]) - SUM(wd2.[DepositAmount]) AS [Difference]
	  FROM [WizzardDeposits] AS wd1
	  JOIN [WizzardDeposits] AS wd2
	  ON wd1.[Id] + 1 = wd2.[Id]) AS s;

-- 13
SELECT [DepartmentID], SUM([Salary]) AS 'TotalSalary'
FROM [Employees] AS e
GROUP BY [DepartmentID]
ORDER BY [DepartmentID];

-- 14
SELECT [DepartmentID], MIN([Salary]) AS 'MinimumSalary'
FROM [Employees] AS e
WHERE [HireDate] > '2000'
GROUP BY [DepartmentID]
HAVING [DepartmentID] IN (2, 5, 7)
ORDER BY [DepartmentID];

-- 15
SELECT *
  INTO EmployeesAverageSalaries
  FROM Employees
 WHERE Salary > 30000

DELETE FROM EmployeesAverageSalaries
WHERE ManagerID = 42

UPDATE EmployeesAverageSalaries
SET Salary = Salary + 5000
WHERE DepartmentID = 1

SELECT DepartmentID, AVG(Salary) FROM EmployeesAverageSalaries
GROUP BY DepartmentID;

-- 16
SELECT [DepartmentID], MAX([Salary]) AS 'MaxSalary'
FROM [Employees]
GROUP BY [DepartmentID]
HAVING MAX([Salary]) < 30000 OR MAX([Salary]) > 70000;

-- 17
SELECT COUNT(*)
FROM [Employees]
WHERE [ManagerID] IS NULL;

-- 18
SELECT DISTINCT [DepartmentID], [Salary] AS 'ThirdHighestSalary'
FROM (SELECT [DepartmentID], 
			 [Salary], 
			 DENSE_RANK() OVER   
			 (PARTITION BY [DepartmentID] ORDER BY [Salary] DESC) AS Rank
	  FROM [Employees] AS b) AS s
WHERE s.Rank = 3;

-- 19
SELECT TOP(10) f.[FirstName], f.[LastName], f.[DepartmentID]
FROM [Employees] AS f
JOIN (SELECT [DepartmentID], AVG(Salary) AS AVGSalary
	  FROM [Employees]
	  GROUP BY [DepartmentID]) AS g
ON g.[DepartmentID] = f.[DepartmentID]
WHERE g.[AVGSalary] < f.[Salary]
ORDER BY [DepartmentID];


