-- 1
SELECT TOP(5) e.[EmployeeID], 
	   e.[JobTitle], 
	   a.[AddressID],
	   a.[AddressText]
FROM [Employees] AS e
JOIN [Addresses] AS a
ON e.[AddressID] = a.[AddressID]
ORDER BY a.[AddressID];

-- 2
SELECT TOP(50) e.[FirstName], 
			   e.[LastName],
			   t.[Name] AS 'Town', 
			   a.[AddressText]
FROM [Employees] AS e
JOIN [Addresses] AS a
ON a.[AddressID] = e.[AddressID]
JOIN [Towns] AS t
ON a.[TownID] = t.[TownID]
ORDER BY [FirstName], [LastName];

-- 3
SELECT e.[EmployeeID], 
	   e.[FirstName],
	   e.[LastName], 
	   d.[Name]
FROM [Employees] AS e
JOIN [Departments] AS d
ON d.[DepartmentID] = e.[DepartmentID]
WHERE d.[Name] = 'Sales'
ORDER BY [EmployeeID];

-- 4
SELECT TOP(5) e.[EmployeeID],
	   e.[FirstName],
	   e.[Salary],
	   d.[Name]
FROM [Employees] AS e
JOIN [Departments] AS d
ON d.[DepartmentID] = e.[DepartmentID]
WHERE e.[Salary] > 15000
ORDER BY e.[DepartmentID];

-- 5
SELECT TOP(3) e.[EmployeeID], e.[FirstName]
FROM [Employees] AS e
LEFT JOIN [EmployeesProjects] AS ep
ON e.[EmployeeID] = ep.[EmployeeID]
WHERE ep.ProjectID IS NULL
ORDER BY [EmployeeID];

-- 6
SELECT
	e.FirstName, e. LastName, e.HireDate, d.[Name]
FROM Employees AS e
LEFT JOIN Departments AS d ON e.DepartmentID = d.DepartmentID
WHERE YEAR(e.HireDate) >= 1999 AND MONTH(e.HireDate) >= 1 AND DAY(e.HireDate) >= 1 AND d.[Name] IN ('Sales', 'Finance')
ORDER BY e.EmployeeID

-- 7
SELECT TOP(5) e.[EmployeeID], 
       e.[FirstName],
	   p.[Name] AS 'ProjectName'
FROM [Employees] AS e
JOIN [EmployeesProjects] AS ep
ON e.[EmployeeID] = ep.[EmployeeID]
JOIN [Projects] AS p
ON p.[ProjectID] = ep.[ProjectID]
WHERE p.[StartDate] > '2002-08-13'
 	  AND p.[EndDate] IS NULL
ORDER BY e.[EmployeeID];

-- 8
SELECT TOP(5) e.[EmployeeID], 
       e.[FirstName],
	   CASE
	   WHEN p.[StartDate] >= '2005' THEN NULL
	   ELSE p.[Name]
	   END AS 'ProjectName'
FROM [Employees] AS e
JOIN [EmployeesProjects] AS ep
ON e.[EmployeeID] = ep.[EmployeeID]
JOIN [Projects] AS p
ON p.[ProjectID] = ep.[ProjectID]
WHERE e.[EmployeeID] = 24;

-- 9
SELECT e.[EmployeeID],
	   e.[FirstName],
	   e.[ManagerID],
	   m.[FirstName] AS 'ManagerName'
FROM [Employees] AS e
JOIN [Employees] AS m
ON e.[ManagerID] = m.[EmployeeID]
WHERE e.[ManagerID] IN (3, 7)
ORDER BY [EmployeeID];

-- 10
SELECT TOP(50) e.[EmployeeID],
	   CONCAT(e.[FirstName], ' ', e.[LastName]) AS 'EmployeeName',
	   CONCAT(m.[FirstName], ' ', m.[LastName]) AS 'ManagerName',
	   d.[Name] AS 'DepartmentName'
FROM [Employees] AS e
JOIN [Employees] AS m
ON e.[ManagerID] = m.[EmployeeID]
JOIN [Departments] AS d
ON e.[DepartmentID] = d.[DepartmentID]
ORDER BY [EmployeeID];

-- 11
SELECT MIN(new.[AVGsalary]) AS MinAverageSalary
FROM 
(SELECT AVG([Salary]) AS 'AVGsalary' FROM [Employees] AS e
GROUP BY e.[DepartmentID]) AS new;

-- 12
SELECT c.[CountryCode],
	   m.[MountainRange],
	   p.[PeakName],
	   p.[Elevation]
FROM [Countries] AS c
JOIN [MountainsCountries] AS mc
ON c.[CountryCode] = mc.[CountryCode]
JOIN [Peaks] AS p
ON p.[MountainId] = mc.[MountainId]
JOIN [Mountains] AS m
ON m.[Id] = mc.[MountainId]
WHERE p.[Elevation] > 2835
	  AND c.[CountryCode] = 'BG'
ORDER BY p.[Elevation] DESC;

-- 13
SELECT c.[CountryCode],
	   COUNT(m.[MountainRange])
FROM [Countries] AS c
JOIN [MountainsCountries] AS mc
ON c.[CountryCode] = mc.[CountryCode]
JOIN [Mountains] AS m
ON m.[Id] = mc.[MountainId]
WHERE c.[CountryCode] IN ('BG', 'RU', 'US')
GROUP BY c.[CountryCode];

-- 14
SELECT TOP(5)
*
FROM
(SELECT 
	c.CountryName, r.RiverName
FROM Countries AS c
LEFT JOIN CountriesRivers AS cr ON cr.CountryCode = c.CountryCode
LEFT JOIN Rivers AS r ON cr.RiverId = r.Id
WHERE c.ContinentCode = 'AF') AS cr
ORDER BY cr.CountryName

-- 15
SELECT
	c.ContinentCode,
	c.CurrencyCode, 
	c.[Currency Usage]
	FROM 
	(SELECT ContinentCode, CurrencyCode,  COUNT(CurrencyCode) AS [Currency Usage], DENSE_RANK() OVER (PARTITION BY ContinentCode ORDER BY COUNT(CurrencyCode) DESC)
                AS [Rank] FROM Countries
	GROUP BY CurrencyCode, ContinentCode
	) AS c
WHERE c.Rank = 1 AND c.[Currency Usage] != 1
ORDER BY ContinentCode

-- 16
SELECT COUNT(c.CountryCode) AS [Count] FROM Countries AS c
LEFT JOIN MountainsCountries AS mc ON mc.CountryCode = c.CountryCode
WHERE MountainId IS NULL

-- 17
SELECT TOP(5) c.[CountryName],
	   MAX(p.[Elevation]) AS [HighestPeakElevation],
	   MAX(r.[Length]) AS [LongestRiverLength]
FROM [Countries] AS c
JOIN [MountainsCountries] AS mc
ON c.[CountryCode] = mc.[CountryCode]
JOIN [Peaks] AS p
ON p.[MountainId] = mc.[MountainId]
JOIN [CountriesRivers] AS cr
ON c.[CountryCode] = cr.[CountryCode]
JOIN [Rivers] AS r
ON r.[Id] = cr.[RiverId]
GROUP BY c.[CountryName]
ORDER BY [HighestPeakElevation] DESC, [LongestRiverLength] DESC, [CountryName];

-- 18
SELECT TOP(5)
	    k.CountryName AS Country,
	    ISNULL(k.PeakName, '(no highest peak)') AS [Highest Peak Name],
	    ISNULL(k.[Highest Peak Elevation], 0) AS [Highest Peak Elevation],
	    ISNULL(k.Mountain, '(no mountain)') AS [Mountain]
	FROM (SELECT c.CountryName, MAX(p.Elevation) AS [Highest Peak Elevation], m.MountainRange AS [Mountain],
	 DENSE_RANK() OVER (PARTITION BY c.CountryName ORDER BY MAX(p.Elevation) DESC) AS [Rank], p.PeakName
	FROM Countries c
		LEFT JOIN MountainsCountries mc ON c.CountryCode = mc.CountryCode
		LEFT JOIN Mountains m ON mc.MountainId = m.Id
		LEFT JOIN Peaks p ON m.Id = p.MountainId
	GROUP BY c.CountryName, m.MountainRange, p.PeakName) AS k
	WHERE k.Rank = 1
 ORDER BY Country, [Highest Peak Name]

