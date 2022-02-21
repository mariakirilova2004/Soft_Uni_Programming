-- 1
SELECT [FirstName], [LastName] From [Employees]
WHERE LEFT([FirstName], 2) = 'Sa';

--2
SELECT [FirstName], [LastName] FROM [Employees]
WHERE  LastName LIKE '%ei%';

-- 3
SELECT [FirstName] FROM [Employees]
WHERE [DepartmentID] IN (3, 10) 
AND YEAR([HireDate]) BETWEEN 1995 AND 2005;

-- 4
SELECT [FirstName], [LastName] FROM [Employees]
WHERE [JobTitle] NOT LIKE '%Engineer%';

-- 5
SELECT [Name] FROM [Towns] 
WHERE LEN([Name]) IN (5, 6)
ORDER BY [Name];

-- 6
-- M, K, B, E
SELECT [TownID], [Name] FROM [Towns]
WHERE LEFT([Name], 1) IN ('M', 'K', 'B', 'E')
ORDER BY [Name];

-- 7
-- R, B, D
SELECT [TownID], [Name] FROM [Towns]
WHERE LEFT([Name], 1) NOT IN ('R', 'B', 'D')
ORDER BY [Name];

-- 8
CREATE VIEW V_EmployeesHiredAfter2000 AS
SELECT FirstName, LastName FROM Employees
WHERE YEAR(HireDate) > 2000

-- 9
SELECT [FirstName], [LastName] FROM [Employees]
WHERE LEN([LastName]) = 5;

-- 10
SELECT EmployeeID, 
	   FirstName, 
	   LastName, 
	   Salary, DENSE_RANK() OVER (PARTITION BY Salary ORDER BY EmployeeId) AS Rank FROM Employees
WHERE Salary Between 10000 AND 50000
ORDER BY Salary DESC

-- 11
SELECT * FROM
(SELECT EmployeeID,	FirstName, LastName, Salary, 
		DENSE_RANK() OVER (PARTITION BY Salary ORDER BY EmployeeID) AS [RANK]
	FROM Employees
	WHERE Salary BETWEEN 10000 AND 50000) AS RANKED
	WHERE [RANK] = 2
	ORDER BY Salary DESC

-- 12
SELECT [CountryName], [IsoCode] FROM [Countries]
WHERE LEN([CountryName]) - LEN(REPLACE([CountryName], 'A', '')) >= 3
ORDER BY [IsoCode];

-- 13
SELECT p.PeakName, r.RiverName, CONCAT(LOWER(p.PeakName),SUBSTRING(LOWER(r.RiverName),2, LEN(r.RiverName))) AS Mix FROM Rivers AS r,Peaks AS p
WHERE RIGHT(p.PeakName, 1) = LEFT(r.RiverName, 1)
ORDER BY Mix

-- 14

SELECT TOP(50) [Name],FORMAT(Start, 'yyyy-MM-dd') AS [Start] FROM Games
WHERE YEAR(Start) BETWEEN 2011 AND 2012
ORDER BY [Start], [Name]

-- 15
SELECT Username, 
SUBSTRING(Email, CHARINDEX('@', Email, 1) + 1, LEN(Email))
AS [Email Provider] 
  FROM Users
ORDER BY [Email Provider], Username

-- 16
 SELECT [Username], [IpAddress] FROM [Users]
 WHERE [IpAddress] LIKE '___.1%.%.___'
 ORDER BY [Username];

 -- 17
SELECT [Name], 
	CASE
	   WHEN DATEPART(HOUR, [Start]) >= 0 AND DATEPART(HOUR, [Start]) < 12 THEN 'Morning'
	   WHEN DATEPART(HOUR, [Start]) >= 12 AND DATEPART(HOUR, [Start]) < 18 THEN 'Afternoon'
	   ELSE 'Evening'
	END AS 'Part of the Day',
	CASE
	   WHEN [Duration] <= 3 THEN 'Extra Short'
	   WHEN [Duration] >= 4 AND [Duration] <= 6 THEN 'Short'
	   WHEN [Duration] IS NULL THEN 'Extra Long'
	   ELSE 'Long'
	END AS 'Duration'
FROM [Games]
ORDER BY [Name], [Duration] ASC;

-- 18
SELECT [ProductName], 
	   [OrderDate],
	   DATEADD(DAY, 3, [OrderDate]) AS 'Pay Due',
	   DATEADD(Month, 1, [OrderDate]) 'Deliver Due'
FROM [Orders];

-- 19
SELECT [Name], 
	   DATEDIFF(DAY, SYSDATETIME(), [Birthdate]) AS 'Age in Years', 
	   DATEDIFF(MONTH, SYSDATETIME(), [Birthdate]) AS 'Age in Months',	  
	   DATEDIFF(DAY, SYSDATETIME(), [Birthdate]) AS 'Age in Days',	   
	   DATEDIFF(MINUTE, SYSDATETIME(), [Birthdate]) AS 'Age in Minutes'
FROM [People];
