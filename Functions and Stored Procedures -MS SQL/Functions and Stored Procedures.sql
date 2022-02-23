-- 1
CREATE PROCEDURE usp_GetEmployeesSalaryAbove35000 
AS
SELECT [FirstName], [LastName] FROM [Employees]
WHERE [Salary] > 35000;

EXEC usp_GetEmployeesSalaryAbove35000;

-- 2
CREATE PROCEDURE usp_GetEmployeesSalaryAboveNumber @Number DECIMAL(18, 4) 
AS
SELECT [FirstName], [LastName] FROM [Employees]
WHERE [Salary] >= @Number;

EXEC usp_GetEmployeesSalaryAboveNumber 48100;

-- 3
CREATE PROCEDURE usp_GetTownsStartingWith @String VARCHAR(10) 
AS
SELECT [Name] FROM [Towns]
WHERE LEFT([Name], LEN(@String)) = @String;

EXEC usp_GetTownsStartingWith 'b';

-- 4
CREATE PROCEDURE usp_GetEmployeesFromTown @Town VARCHAR(30) 
AS
SELECT e.[FirstName], e.[LastName]
FROM [Employees] AS e
JOIN [Addresses] AS a
ON a.AddressID = e.[AddressID]
JOIN [Towns] AS t
ON t.[TownID] = a.[TownID]
WHERE t.[Name] = @Town;

EXEC usp_GetEmployeesFromTown 'Sofia';

-- 6
CREATE FUNCTION ufn_GetSalaryLevel(@salary DECIMAL(18,4))   
RETURNS VARCHAR(10)   
AS 
BEGIN  
    DECLARE @ret VARCHAR(10); 
     IF (@salary < 30000)   
        SET @ret = 'Low';  
	IF (@salary >= 30000 AND @salary <= 50000)   
        SET @ret = 'Average'; 
	IF (@salary > 50000)   
        SET @ret = 'High'; 
    RETURN @ret;  
END; 

SELECT dbo.ufn_GetSalaryLevel(125500) AS 'Salary Level';

-- 6
CREATE PROCEDURE usp_EmployeesBySalaryLevel @LevelOfSalary VARCHAR(30) 
AS
SELECT e.[FirstName], e.[LastName]
FROM [Employees] AS e
WHERE dbo.ufn_GetSalaryLevel(e.[Salary]) = @LevelOfSalary;

EXEC usp_EmployeesBySalaryLevel 'High';

-- 7
CREATE FUNCTION ufn_IsWordComprised(@setOfLetters NVARCHAR(200), @word NVARCHAR(50))
RETURNS INT
AS
BEGIN
	DECLARE @count INT = 1;
	DECLARE @letter NVARCHAR;

	WHILE @count <= LEN(@word)
	BEGIN
		
		SET @letter = SUBSTRING(@word, @count, 1)

		IF @setOfLetters NOT LIKE '%' + @letter + '%'
			RETURN 0

		SET @count += 1;
	END;

	RETURN 1
END

SELECT dbo.ufn_IsWordComprised('oistmiahf', 'Sofia') AS 'Result';

-- 8
CREATE PROC usp_DeleteEmployeesFromDepartment (@departmentId INT)
AS
BEGIN
	DELETE FROM EmployeesProjects
	WHERE EmployeeID IN (
		SELECT EmployeeID
		  FROM Employees
		 WHERE DepartmentID = @departmentId
	)

	UPDATE Employees
	   SET ManagerID = NULL
	 WHERE ManagerID IN ( 
		SELECT EmployeeID
		  FROM Employees
		 WHERE DepartmentID = @departmentId)

	ALTER TABLE Departments
	ALTER COLUMN ManagerId INT

	UPDATE Departments
	   SET ManagerID = NULL
	 WHERE DepartmentID = @departmentId

	 DELETE FROM Employees
	 WHERE DepartmentID = @departmentId

	 DELETE FROM Departments
	 WHERE DepartmentID = @departmentId

	 SELECT COUNT(*)
	   FROM Employees
       WHERE DepartmentID = @departmentId
END

EXEC usp_DeleteEmployeesFromDepartment 3;

-- 9
CREATE PROC usp_GetHoldersFullName
AS
SELECT CONCAT([FirstName], ' ', [LastName]) AS 'Full Name'
FROM [AccountHolders];
EXEC usp_GetHoldersFullName;

-- 10
CREATE PROC usp_GetHoldersWithBalanceHigherThan (@amount MONEY)
AS
BEGIN
	SELECT FirstName AS [First Name], LastName AS [Last Name] FROM dbo.AccountHolders AS ah
	JOIN dbo.Accounts AS a ON a.AccountHolderId = ah.Id
	GROUP BY ah.FirstName, ah.LastName
	HAVING SUM(a.Balance) > @amount
	ORDER BY FirstName, LastName
END

-- 11
CREATE FUNCTION ufn_CalculateFutureValue (@sum DECIMAL, @yearly FLOAT, @numberOfYears INT)
RETURNS DECIMAL(18, 4)
AS
BEGIN
	DECLARE @futureValue DECIMAL(18,4);

	SET @futureValue = @sum * (POWER((1 + @yearlyInterestedRate), @numberOfYears))

	RETURN ROUND(@futureValue,4)
END

SELECT dbo.ufn_CalculateFutureValue(1000, 0.1, 5) AS 'OUTPUT';

-- 12
CREATE PROC usp_CalculateFutureValueForAccount(@accountId INT, @interestRate FLOAT) 
AS
BEGIN
	SELECT a.Id, ah.FirstName, ah.LastName, a.Balance AS [Current Balance], dbo.ufn_CalculateFutureValue(a.Balance, @interestRate, 5) AS [Balance in 5 years] FROM AccountHolders AS ah
	JOIN Accounts AS a ON ah.Id = a.AccountHolderId
	WHERE a.Id = @accountId
END

-- 13
CREATE FUNCTION ufn_CashInUsersGames(@name NVARCHAR(50))
RETURNS MONEY
AS
BEGIN
	DECLARE @result MONEY;

	SET @result = (SELECT SUM(s.Cash) AS [SumCash] FROM
	(SELECT us.Cash, ROW_NUMBER() OVER (ORDER BY us.Id DESC) AS [Row] FROM UsersGames AS us
	JOIN Games As g ON g.Id = us.GameId
	WHERE g.Name = @name) AS s
	GROUP BY s.[Row]
	HAVING s.[Row] % 2 = 1)

	RETURN @result
END

