CREATE Database SchoolApplication;
USE SchoolApplication;

CREATE TABLE Directors (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  age INT(11) NOT NULL,
  email VARCHAR(50) NOT NULL,
  position VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE Students (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(70) NOT NULL,
  age INT(11) NOT NULL,
  email VARCHAR(50) NOT NULL,
  grade VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Grades (
  id INT(11) NOT NULL AUTO_INCREMENT,
  grade VARCHAR(50) NOT NULL,
  year INT(11) NOT NULL,
  graduationYear INT(11) NOT NULL,
  student_id INT(11) NOT NULL,
  FOREIGN KEY (student_id) REFERENCES Students(id),
  PRIMARY KEY (id)
);

CREATE TABLE Subjects (
  id INT(11) NOT NULL AUTO_INCREMENT,
  subject VARCHAR(30),
  instructor VARCHAR(30),
  teacher_id INT(11),
  FOREIGN KEY (teacher_id) REFERENCES Directors(id),
  PRIMARY KEY (id)
);

CREATE TABLE Exams (
  id INT(11) NOT NULL AUTO_INCREMENT,
  midterm VARCHAR(50),
  semifinal VARCHAR(50),
  final INT(50),
  student_id INT(11),
  FOREIGN KEY (student_id) REFERENCES Students(id),
  PRIMARY KEY (id)
);

CREATE TABLE Status (
  id INT(11) NOT NULL AUTO_INCREMENT,
  excellent INT(8),
  great INT(8),
  good INT(8),
  bad INT(8),
  failed INT(8),
  student_id INT(11),
  FOREIGN KEY (student_id) REFERENCES Students(id),
  PRIMARY KEY (id)
);

