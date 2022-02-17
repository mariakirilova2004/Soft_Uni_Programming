CREATE DATABASE [Minions]

USE [Minions]
-- 1
CREATE TABLE [Minions](
	[Id] INT NOT NULL,
	[Name] NVARCHAR(50) NOT NULL,
	[Age] INT
);

-- 2
CREATE TABLE [Towns](
	[Id] INT PRIMARY KEY,
	[Name] VARCHAR(33)
);

ALTER TABLE[Minions]
ADD CONSTRAINT  PK_MinionsId PRIMARY KEY(Id);

-- 3
ALTER TABLE[Minions]
ADD [TownId] INT,
CONSTRAINT FK_Minions_Towns
FOREIGN KEY([TownId])
REFERENCES [Towns]([Id]);

-- 4
INSERT INTO Towns
VALUES(1, 'Sofia'),
	  (2, 'Plovdiv'),
	  (3, 'Varna');

INSERT INTO [Minions]
VALUES(1, 'Kevin', 22, 1),
	  (2, 'Bob', 15, 3),
	  (3, 'Steward', NULL, 2);

-- 5
DELETE FROM [Minions];

-- 6
DROP TABLE [Minions];
DROP TABLE [Towns];

-- 7
CREATE TABLE [People](
	[Id] INT PRIMARY KEY IDENTITY,
	[Name] NVARCHAR(200) NOT NULL,
	[Picture] VARBINARY,
	[Height] DECIMAL(3, 2),
	[Weight] DECIMAL(3, 2),
	[Gender] CHAR(1) NOT NULL,
	[BirthDate] DATE NOT NULL,
	[Biography] NVARCHAR(MAX)
);

INSERT INTO [People] (Name,Gender,Birthdate,Biography)
VALUES ('Pesho', 'm', '1998-10-10', 'asdkasdk'),
		('Gosho', 'm', '2000-08-08', 'asdkasdafdfsdk'),
		('Stanka', 'f', '2007-10-12', 'asdksdfsdfasdk'),
		('Ivanjsa', 'f', '1998-10-10', 'asdasddkasdk'),
		('ponka', 'f', '1998-10-10', 'asdkasdk');

-- 8
USE [Minions]
CREATE TABLE [Users](
	[Id] INT IDENTITY,
	[Username] VARCHAR(30) UNIQUE NOT NULL,
	[Password] VARCHAR(26) NOT NULL,
	[ProfilePicture] VARBINARY,
	[LastLoginTime] DATETIME,
	[IsDeleted] BIT,
	CONSTRAINT PK_Users PRIMARY KEY(Id),
);

INSERT INTO [Users]([Username], [Password])
VALUES ('Gosho', 378025),
	   ('Pesho', 378025),	  
	   ('Stamo', 378025),
	   ('Hristo', 378025),	  
	   ('Navcho', 378025);

-- 9
ALTER TABLE [Users]
DROP CONSTRAINT PK_Users;
ALTER TABLE [Users]
ADD CONSTRAINT PK_ID_USERNAME PRIMARY KEY (Id,Username);

-- 10
ALTER TABLE Users
ADD CONSTRAINT CH_Pass_Length CHECK (DATALENGTH(Password) >= 5)

-- 11
ALTER TABLE [Users]
ADD CONSTRAINT df_LastLoginTime DEFAULT SYSDATETIME() FOR LastLoginTime;

-- 12
ALTER TABLE Users
DROP CONSTRAINT PK_ID_USERNAME
ALTER TABLE Users
ADD CONSTRAINT PK_ID_USERNAME PRIMARY KEY(Id)
ALTER TABLE Users
ADD CONSTRAINT CH_USERNAME_LENGTH CHECK(DATALENGTH(Id) >= 3)

-- 13
CREATE DATABASE [Movies];
USE [Movies];
CREATE TABLE [Directors](
	Id INT PRIMARY KEY IDENTITY,
	DirectorName VARCHAR(30),
	Notes VARCHAR(50)
);
CREATE TABLE [Genres](
	Id INT PRIMARY KEY IDENTITY,
	GenreName VARCHAR(20),
	Notes VARCHAR(50)
);
CREATE TABLE [Categories](
	Id INT PRIMARY KEY IDENTITY,
	CategoryName VARCHAR(20),
	Notes VARCHAR(50)
);
CREATE TABLE [Movies](
	Id INT IDENTITY,
	Title VARCHAR(20),
	DirectroId INT,
	CopyrightYear DATE,
	[Length] FLOAT,
	GenreId INT,
	CategoryId INT,
	Rating INT,
	Notes VARCHAR(30),
	CONSTRAINT Id_Movies 
	PRIMARY KEY(Id),
	CONSTRAINT Id_Director 
	FOREIGN KEY (DirectroId)
	REFERENCES [Directors](Id),
	CONSTRAINT Id_Genre 
	FOREIGN KEY (GenreId)
	REFERENCES [Genres](Id),
	CONSTRAINT Id_Category
	FOREIGN KEY (CategoryId)
	REFERENCES [Categories](Id),
);

INSERT INTO [Directors](DirectorName, Notes)
VALUES('Gosho', 'shjlkfsgjf'),
	  ('Pesho', 'shjlkfsgjf'),	 
	  ('Stamo', 'shjlkfsgjf'),	
	  ('Kolio', 'shjlkfsgjf'),	  
	  ('Zazo', 'shjlkfsgjf');

INSERT INTO [Categories](CategoryName, Notes)
VALUES('Cook', 'shjlkfsgjf'),
	  ('Show', 'shjlkfsgjf'),	 
	  ('Science', 'shjlkfsgjf'),	
	  ('Products', 'shjlkfsgjf'),	  
	  ('Sport', 'shjlkfsgjf');

INSERT INTO Genres(GenreName, Notes)
VALUES('Sci-Fi', 'shjlkfsgjf'),
	  ('Fantasy', 'shjlkfsgjf'),	 
	  ('Romantic', 'shjlkfsgjf'),	
	  ('Funny', 'shjlkfsgjf'),	  
	  ('True Story', 'shjlkfsgjf');

INSERT INTO [Movies](Title, DirectroId)
VALUES('Gosho', 1),
	  ('Pesho', 2),	 
	  ('Stamo', 3),	
	  ('Kolio', 4),	  
	  ('Zazo', 5);

-- 14
CREATE DATABASE [CarRental];
USE [CarRental];
CREATE TABLE [Categories](
	Id INT IDENTITY,
	CategoryName VARCHAR(40),
	DailyRate INT,
	WeeklyRate INT,
	MothlyRate INT,
	WeekenRate INT
	CONSTRAINT PK_Categories PRIMARY KEY(Id)
);
CREATE TABLE [Cars](
	Id INT IDENTITY,
	CONSTRAINT PK_Cars PRIMARY KEY(Id),
	PlateNumber INT,
	Manifacturer VARCHAR(30),
	Model VARCHAR(30),
	CarYear DATETIME,
	CategoryId INT,
	CONSTRAINT FK_Cars_Categories
	FOREIGN KEY (CategoryId)
	REFERENCES [Categories](Id),
	Doors INT,
	Picture VARBINARY,
	Condition VARCHAR(30),
	Available BIT
);

CREATE TABLE [Employees](
	Id INT IDENTITY,
	CONSTRAINT PK_Employees PRIMARY KEY(Id),
	FirstName VARCHAR(30),
	LastName VARCHAR(30),
	Title VARCHAR(30),
	Notes VARCHAR(50)
);

CREATE TABLE [Customers](
	Id INT IDENTITY,
	CONSTRAINT PK_Customers PRIMARY KEY(Id),
	DriverLicenceNumber INT,
	FullName VARCHAR(30),
	[Address] VARCHAR(30),
	City VARCHAR(30),
	ZIPCode VARCHAR(20),
	Notes VARCHAR(50)
);

CREATE TABLE RentalOrders(
	Id INT IDENTITY,
	CONSTRAINT PK_RentalOrders PRIMARY KEY(Id),
	EmployeeId INT,
	CONSTRAINT FK_RentalOrders_Employees
	FOREIGN KEY (EmployeeId)
	REFERENCES [Employees](Id),
	CustomerId INT,
	CONSTRAINT FK_RentalOrders_Customers
	FOREIGN KEY (CustomerId)
	REFERENCES Customers(Id),
	CarId INT,
	CONSTRAINT FK_RentalOrders_Cars
	FOREIGN KEY (CarId)
	REFERENCES Cars (Id),
	TankLevel INT,
	KilometrageStart INT,
	KilometrageEnd INT,
	TotalKilometrage INT,
	StartDate DATE,
	EndDate DATE,
	TotalDays INT,
	RateApplied INT,
	TaxRate INT,
	OrderStatus VARCHAR(30),
	Notes VARCHAR(50)
);
INSERT INTO [Categories](CategoryName, DailyRate)
VALUES('Food', 3),
	  ('Science', 4),	 
	  ('HouseWork', 1);
INSERT INTO Cars(PlateNumber, Model)
VALUES(73487, 'X'),
	  (54554, 'Y'),	 
	  (13324, 'Z');
INSERT INTO Employees(FirstName)
VALUES('Gosho'),
	  ('Stamat'),	 
	  ('Pesho');
INSERT INTO Customers(FullName)
VALUES('Gosho'),
	  ('Stamat'),	 
	  ('Pesho');
INSERT INTO RentalOrders(EmployeeId, CustomerId, CarId)
VALUES(2, 1, 3),
	  (3, 2, 1),	 
	  (1, 3, 2);

-- 15

CREATE DATABASE [Hotel];
USE [Hotel];
CREATE TABLE [Employees](
	Id INT IDENTITY,
	CONSTRAINT PK_Employees PRIMARY KEY(Id),
	FirstName VARCHAR(33),
	LastName VARCHAR(33),
	Title VARCHAR(33),
	Notes VARCHAR(33)
);
CREATE TABLE [Customers](
	AccountNumber INT,
	FirstName VARCHAR(33),
	LastName VARCHAR(33),
	PhoneNumber INT,
	EmergencyName VARCHAR(50),
	EmergencyNumber INT,
	Notes VARCHAR(50)
);
CREATE TABLE [RoomStatus](
	RoomStatus VARCHAR(33),
	Notes VARCHAR(50),
	CONSTRAINT PK_RoomStatus PRIMARY KEY(RoomStatus)
);
CREATE TABLE [RoomTypes](
	RoomType VARCHAR(33),
	Notes VARCHAR(50),
	CONSTRAINT PK_RoomTypes PRIMARY KEY(RoomType)
);
CREATE TABLE [BedTypes](
	BedType VARCHAR(33),
	Notes VARCHAR(50),
	CONSTRAINT PK_BedTypes PRIMARY KEY(BedType)
);
CREATE TABLE [Rooms](
    RoomNumber INT,
	RoomType VARCHAR(33),
	CONSTRAINT FK_Rooms_RoomTypes
	FOREIGN KEY(RoomType)
	REFERENCES RoomTypes(RoomType),
	BedType VARCHAR(33),
	CONSTRAINT FK_Rooms_BedTypes
	FOREIGN KEY(BedType)
	REFERENCES BedTypes(BedType),
	Rate INT,
	RoomStatus VARCHAR(33),
	CONSTRAINT FK_Rooms_RoomStatus
	FOREIGN KEY(RoomStatus)
	REFERENCES RoomStatus(RoomStatus),
	Notes VARCHAR(50),
	CONSTRAINT PK_RoomNumber PRIMARY KEY(RoomNumber)
);

INSERT INTO [Employees](FirstName)
VALUES('Pesho'),
	  ('Stamo'),	  
	  ('Gosho');
INSERT INTO [Customers](FirstName)
VALUES('Pesho'),
	  ('Stamo'),	  
	  ('Gosho');
INSERT INTO [RoomStatus](RoomStatus)
VALUES('Available'),
	  ('Not Available'),	  
	  ('Not Present');
INSERT INTO [RoomTypes](RoomType)
VALUES('Single'),
	  ('Double'),	  
	  ('Penthouse');
INSERT INTO [BedTypes](BedType)
VALUES('Single'),
	  ('Double'),	  
	  ('Double-Decker');
INSERT INTO [Rooms](RoomNumber, RoomType)
VALUES(100, 'Single'),
	  (1001, 'Double'),	  
	  (10001, 'Penthouse');


-- 16
CREATE DATABASE SoftUni
USE [SoftUni];
CREATE TABLE Towns(
	Id INT IDENTITY(1,1),
	Name NVARCHAR(20) NOT NULL,

	CONSTRAINT PK_ID_Towns PRIMARY KEY(Id)
)

CREATE TABLE Addresses(
	Id INT IDENTITY(1,1),
	AddressText NVARCHAR(80) NOT NULL,
	TownId INT NOT NULL,

	CONSTRAINT PK_ID_Addresses PRIMARY KEY(Id),
	CONSTRAINT FK_TownID FOREIGN KEY(TownId) REFERENCES Towns(Id)
)

CREATE TABLE Departments(
	Id INT IDENTITY(1,1),
	Name NVARCHAR(50) NOT NULL,

	CONSTRAINT PK_ID_Departments PRIMARY KEY(Id)
)

CREATE TABLE Employees(
	Id INT IDENTITY(1,1),
	FirstName NVARCHAR(15) NOT NULL,
	MiddleName NVARCHAR(15) NOT NULL,
	LastName NVARCHAR(15) NOT NULL,
	JobTitle NVARCHAR(30) NOT NULL,
	DepartmentId INT NOT NULL,
	HireDate DATETIME2,
	Salary DECIMAL(18,2),
	AddressId INT

	CONSTRAINT PK_ID_Employees PRIMARY KEY(Id)
	CONSTRAINT FK_DepartmentId FOREIGN KEY(DepartmentId) REFERENCES Departments(Id),
	CONSTRAINT FK_AddressId FOREIGN KEY(AddressId) REFERENCES Addresses(Id),
)

-- 17
BACKUP DATABASE SoftUni
 TO DISK = 'C:\Maria\SoftUni Programming\Advanced\C# DB\Database_Intriduction -MS SQL\softuni-backup.bak'
    WITH FORMAT;

-- 18
INSERT INTO Towns
VALUES ('Sofia'), ('Plovid'), ('Varna'), ('Burgas');

INSERT INTO Departments
VALUES ('Engineering'), ('Sales'), ('Marketing'), ('Software Development'), ('Quality Assurance');

INSERT INTO Employees
VALUES		('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '02/01/2013', 3500.00, NULL),
			('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '03/02/2004', 4000.00, NULL),
			('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '08/28/2016', 525.25, NULL),
			('Georgi', 'Teziev', 'Ivanov', 'CEO', 2, '12/09/2007', 3000.00, NULL),
			('Koko', 'Pan', 'Pan', 'Intern', 3, '08/29/2016', 599.88, NULL);

-- 19
SELECT * FROM [Towns];
SELECT * FROM [Departments];
SELECT * FROM [Employees];

-- 20
SELECT * FROM [Towns] AS t
ORDER BY t.[Name];
SELECT * FROM [Departments] AS d
ORDER BY d.[Name];
SELECT * FROM [Employees] AS e
ORDER BY e.[Salary] DESC;

--21
SELECT [Name] FROM [Towns] AS t
ORDER BY t.[Name];
SELECT [Name] FROM [Departments] AS d
ORDER BY d.[Name];
SELECT FirstName, LastName, JobTitle, Salary FROM [Employees] AS e
ORDER BY e.[Salary] DESC;

--22
UPDATE [Employees]
SET [Salary] += [Salary] * 0.1;
SELECT [Salary] FROM [Employees];

-- 23
UPDATE [Payments]
SET [TaxRate] -= [TaxRate] * 0.03;
SELECT [TaxRate] FROM [Payments];

-- 24
DELETE FROM [Occupancies];
