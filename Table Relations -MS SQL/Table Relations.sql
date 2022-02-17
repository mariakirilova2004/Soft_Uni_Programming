-- 1
CREATE DATABASE One_To_One;
CREATE TABLE Passports(
	PassportID INT IDENTITY,
	PassportNumber VARCHAR(8),
	CONSTRAINT PK_Passports 
	PRIMARY KEY(PassportID)
);
CREATE TABLE Persons(
	PersonId INT IDENTITY,
	FirstName VARCHAR(33),
	Salary FLOAT,
	PassportID INT UNIQUE,
	CONSTRAINT PK_Persons
	PRIMARY KEY(PersonId),
	CONSTRAINT FK_Persons_Passports
	FOREIGN KEY (PassportID)
	REFERENCES Passports(PassportID)
);

-- 2
CREATE DATABASE One_To_Many;
CREATE TABLE Manufacturers(
	ManufacturerID INT IDENTITY PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(20) NOT NULL,
	EstablishedOn DATETIME2
);

CREATE TABLE Models(
	ModelID INT IDENTITY PRIMARY KEY NOT NULL,
	[Name] NVARCHAR(20) NOT NULL,
	ManufacturerID INT NOT NULL,

	CONSTRAINT FK_Models_Manufacturers
	FOREIGN KEY (ManufacturerID)
	REFERENCES Manufacturers(ManufacturerID)
);

-- 3
CREATE DATABASE Many_To_Many;
CREATE TABLE Students(
	StudentID INT PRIMARY KEY IDENTITY,
	Name VARCHAR(33)
);
CREATE TABLE Exams(
	ExamID INT PRIMARY KEY IDENTITY,
	Name VARCHAR(33)
);
CREATE TABLE StudentsExams(
	StudentID INT,
	CONSTRAINT FK_StudentsExams_Students
	FOREIGN KEY(StudentID)
	REFERENCES Students(StudentID),
	ExamID INT,
	CONSTRAINT FK_StudentsExams_Exams
	FOREIGN KEY(ExamID)
	REFERENCES Exams(ExamID),
	CONSTRAINT PK_StudentsExams
	PRIMARY KEY(StudentID, ExamID)
);

-- 4
CREATE DATABASE Self_Referancing ;
CREATE TABLE Teachers(
	TeacherID INT IDENTITY PRIMARY KEY NOT NULL,
	Name VARCHAR(33),
	ManagerID INT,
	CONSTRAINT FK_Self_Referancing
	FOREIGN KEY(ManagerID)
	REFERENCES Teachers(TeacherID)
);

-- 5
CREATE DATABASE Online_Store;
CREATE TABLE ItemTypes(
	ItemTypeID INT PRIMARY KEY IDENTITY NOT NULL,
	Name VARCHAR(50)
);
CREATE TABLE Items(
	ItemID INT PRIMARY KEY IDENTITY NOT NULL,
	ItemTypeID INT,
	CONSTRAINT FK_ItemTypes_Items
	FOREIGN KEY (ItemTypeID)
	REFERENCES ItemTypes(ItemTypeID),
	Name VARCHAR(50)
);
CREATE TABLE Cities(
	CityID INT IDENTITY PRIMARY KEY NOT NULL,
	Name VARCHAR(50)
);
CREATE TABLE Customers(
	CustomerID INT IDENTITY PRIMARY KEY NOT NULL,
	Name VARCHAR(50),
	Birthday DATE,
	CityID INT,
	CONSTRAINT FK_Customers_Cities
	FOREIGN KEY (CityID)
	REFERENCES Cities(CityID)
);
CREATE TABLE Orders(
	OrderID INT PRIMARY KEY IDENTITY NOT NULL,
	CustomerID INT,
	CONSTRAINT FK_Orders_Customers
	FOREIGN KEY (CustomerID)
	REFERENCES Customers(CustomerID)
);
CREATE TABLE OrderItems(
	OrderID INT,
	CONSTRAINT FK_OrderItems_Orders
	FOREIGN KEY (OrderID)
	REFERENCES Orders(OrderID),
	ItemID INT,
	CONSTRAINT FK_OrderItems_Items
	FOREIGN KEY (ItemID)
	REFERENCES Items(ItemID),
	CONSTRAINT PK_OrderItems
	PRIMARY KEY(OrderID, ItemID)
);

-- 6
CREATE DATABASE University;
CREATE TABLE Subjects(
	SubjectID INT IDENTITY NOT NULL,
	SubjectName NVARCHAR(50) NOT NULL,

	CONSTRAINT PK_Subjects
	PRIMARY KEY(SubjectID)
)

CREATE TABLE Majors(
	MajorID INT IDENTITY NOT NULL,
	[Name] NVARCHAR(50) NOT NULL,

	CONSTRAINT PK_Majors
	PRIMARY KEY(MajorID)
)

CREATE TABLE Students(
	StudentID INT IDENTITY NOT NULL,
	StudentNumber NVARCHAR(50) NOT NULL,
	StudentName NVARCHAR(50) NOT NULL,
	MajorID INT NOT NULL,

	CONSTRAINT PK_Students
	PRIMARY KEY(StudentID),

	CONSTRAINT FK_Students_Majors
	FOREIGN KEY(MajorID)
	REFERENCES Majors(MajorID)
)

CREATE TABLE Payments(
	PaymentID INT IDENTITY NOT NULL,
	PaymentDate DATE NOT NULL,
	PaymentAmount MONEY NOT NULL,
	StudentID INT NOT NULL,

	CONSTRAINT PK_Payments
	PRIMARY KEY (PaymentID),

	CONSTRAINT FK_Payments_Students
	FOREIGN KEY (StudentID)
	REFERENCES Students(StudentID)
)

CREATE TABLE Agenda(
	StudentID INT NOT NULL,
	SubjectID INT NOT NULL,

	CONSTRAINT PK_Agenda
	PRIMARY KEY(StudentID, SubjectID),

	CONSTRAINT FK_Agenda_Students
	FOREIGN KEY(StudentID)
	REFERENCES Students(StudentID),

	CONSTRAINT FK_Agenda_Subjects
	FOREIGN KEY(SubjectID)
	REFERENCES Subjects(SubjectID)
)

-- 9
SELECT m.MountainRange, p.PeakName, p.Elevation
FROM Mountains AS m
JOIN Peaks AS p
ON p.MountainId = m.Id
WHERE m.MountainRange = 'Rila'
ORDER BY p.Elevation DESC;