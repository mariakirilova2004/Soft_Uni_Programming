/*
CREATE PROC usp_Withdraw (@withdrawAmount DECIMAL(18,2), @accountIdINT)
AS
BEGIN TRANSACTION
	UPDATE Accounts SET Balance = Balance - @withdrawAmount
	WHERE Id = @accountId
	IF @@ROWCOUNT <> 1 -- Didn’t affect exactly one row
	BEGIN
		ROLLBACK
		THROW 50001, 'Invalid account!’, 1
		RETURN
	END
COMMIT


BEGIN TRANSACTION
DELETE FROM Employees WHERE EmployeeID > 12
ROLLBACK

CREATE TRIGGER tr_DeleteEmployees
ON Employees 
INSTEAD OF DELETE
AS
UPDATE Employees SET  [IsDeleted]= 1
WHERE EmployeeID IN (SELECT EmployeeID FROM deleted);
*/
CREATE TABLE Logs(
	LogId INT PRIMARY KEY IDENTITY,
	AccountId INT,
	CONSTRAINT fk_logs_accounts
	FOREIGN KEY(AccountId)
	REFERENCES Accounts(Id),
	OldSum MONEY,
	NewSum MONEY)
-- 1
CREATE TRIGGER tr_AccountBalanceChange ON Accounts FOR UPDATE
AS
BEGIN
  DECLARE @accountId int = (SELECT Id FROM inserted);
  DECLARE @oldBalance money = (SELECT Balance FROM deleted);
  DECLARE @newBalance money = (SELECT Balance FROM inserted);

  IF(@newBalance <> @oldBalance)
    INSERT INTO Logs VALUES (@accountId, @oldBalance, @newBalance);
END

CREATE TABLE NotificationEmails(
	Id INT PRIMARY KEY IDENTITY,
	Recipient INT,
	CONSTRAINT fk_NotificationEmails_Logs
	FOREIGN KEY(Recipient)
	REFERENCES Logs(LogId),
	[Subject] VARCHAR(30),
	[Body] VARCHAR(30));
-- 2
CREATE TRIGGER tr_NotificationEmailsNewEmail ON Logs FOR INSERT
AS
BEGIN
  DECLARE @emailRecipient int = (SELECT AccountId FROM inserted)
  DECLARE @emailSubject VARCHAR(30) = CONCAT('Balance change for account: ', (SELECT AccountId FROM inserted))
  DECLARE @emailBody VARCHAR(30) = CONCAT('On ', GETDATE(), 'your balance was changed from ', (SELECT OldSum FROM inserted), ' to ', (SELECT NewSum FROM inserted),'.')

  INSERT INTO [NotificationEmails](Recipient, Subject, Body)
  VALUES (@emailRecipient, @emailSubject, @emailBody);
END

-- 3
CREATE PROC usp_DepositMoney (@accountId int, @depositAmount money)
AS
BEGIN
  BEGIN TRANSACTION
  UPDATE Accounts
  SET Balance += @depositAmount
  WHERE (Id = @accountId)
  IF (@@ROWCOUNT <> 1) 
    BEGIN
      ROLLBACK;
      RAISERROR ('Invalid account!', 16, 1);
      RETURN;
    END
  COMMIT;
END

EXEC usp_DepositMoney 1, 10

-- 4
CREATE PROC usp_WithdrawMoney  (@accountId int, @depositAmount money)
AS
BEGIN
  BEGIN TRANSACTION
  UPDATE Accounts
  SET Balance -= @depositAmount
  WHERE (Id = @accountId)
  IF (@@ROWCOUNT <> 1) 
    BEGIN
      ROLLBACK;
      RAISERROR ('Invalid account!', 16, 1);
      RETURN;
    END
  COMMIT;
END

EXEC usp_WithdrawMoney 1, 10

-- 5
CREATE PROC usp_TransferMoney (@SenderId INT, @ReceiverId INT, @Amount MONEY)
AS
BEGIN
  BEGIN TRANSACTION
  EXEC usp_WithdrawMoney @SenderId, @Amount
  EXEC usp_DepositMoney @ReceiverId, @Amount
  IF (@@ROWCOUNT <> 0) 
    BEGIN
      ROLLBACK;
      RAISERROR ('Invalid account!', 16, 1);
      RETURN;
    END
  COMMIT;
END

EXEC usp_TransferMoney 1, 2, 12

-- 6
CREATE PROCEDURE usp_TransferMoney (@senderId int, @receiverId int, @transferAmount money)
AS
BEGIN 

  DECLARE @senderBalanceBefore money = (SELECT Balance FROM Accounts WHERE Id = @senderId);

  IF(@senderBalanceBefore IS NULL)
  BEGIN
    RAISERROR('Invalid sender account!', 16, 1);
    RETURN;

  END   

  DECLARE @receiverBalanceBefore money = (SELECT Balance FROM Accounts WHERE Id = @receiverId);  

  IF(@receiverBalanceBefore IS NULL)
  BEGIN
    RAISERROR('Invalid receiver account!', 16, 1);
    RETURN;
  END   

  IF(@senderId = @receiverId)
  BEGIN
    RAISERROR('Sender and receiver accounts must be different!', 16, 1);
    RETURN;
  END  

  IF(@transferAmount <= 0)
  BEGIN
    RAISERROR ('Transfer amount must be positive!', 16, 1); 
    RETURN;

  END 

  BEGIN TRANSACTION
  EXEC usp_WithdrawMoney @senderId, @transferAmount;
  EXEC usp_DepositMoney @receiverId, @transferAmount;

  DECLARE @senderBalanceAfter money = (SELECT Balance FROM Accounts WHERE Id = @senderId);
  DECLARE @receiverBalanceAfter money = (SELECT Balance FROM Accounts WHERE Id = @receiverId);  

  IF((@senderBalanceAfter <> @senderBalanceBefore - @transferAmount) OR 
     (@receiverBalanceAfter <> @receiverBalanceBefore + @transferAmount))
    BEGIN
      ROLLBACK;
      RAISERROR('Invalid account balances!', 16, 1);
      RETURN;
    END

  COMMIT;

END

-- 7
CREATE PROC usp_AssignProject(@emloyeeId INT, @projectID INT)
AS
BEGIN
  BEGIN TRANSACTION
  DECLARE @Projects INT = 0;
  INSERT INTO [EmployeesProjects]
  VALUES(@emloyeeId, @projectID)
  SET @Projects = (SELECT TOP(1) COUNT([ProjectID])
				   FROM [EmployeesProjects] 
				   WHERE [EmployeeID] = @emloyeeId)
  IF (@Projects > 3) 
    BEGIN
      ROLLBACK;
      RAISERROR ('The employee has too many projects!', 16, 1);
      RETURN;
    END
  COMMIT;
END

EXEC usp_AssignProject 1, 2

-- 8
CREATE TABLE Deleted_Employees(
	EmployeeId INT PRIMARY KEY IDENTITY, 
	FirstName VARCHAR(30), 
	LastName VARCHAR(30), 
	MiddleName VARCHAR(30),
	JobTitle VARCHAR(30),
	DepartmentId INT,
	CONSTRAINT fk_Deleted_Employees_Department
	FOREIGN KEY(DepartmentId)
	REFERENCES [Departments](DepartmentID),
	Salary MONEY)

CREATE TRIGGER tr_DeletedFromEmployees ON [Employees] FOR DELETE
AS
BEGIN
  INSERT INTO [Deleted_Employees](FirstName, LastName, MiddleName, JobTitle, DepartmentId, Salary)
  SELECT FirstName, LastName, MiddleName, JobTitle, DepartmentId, Salary FROM deleted
END
