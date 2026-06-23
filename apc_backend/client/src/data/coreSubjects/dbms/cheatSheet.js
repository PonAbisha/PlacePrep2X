const dbmsCheatSheet = [
  {
    section: "Database Commands",
    topics: [
      {
        title: "Create Database",
        syntax: "CREATE DATABASE college;",
        explanation: "Creates a new database."
      },
      {
        title: "Use Database",
        syntax: "USE college;",
        explanation: "Selects the database for operations."
      }
    ]
  },

  {
    section: "Table Commands",
    topics: [
      {
        title: "Create Table",
        syntax: `
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`,
        explanation: "Creates a new table."
      }
    ]
  },
  {
  section: "Constraints",
  topics: [
    {
      title: "Primary Key",
      syntax: `
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`,
      explanation: "Uniquely identifies each row and cannot be NULL."
    },
    {
      title: "Foreign Key",
      syntax: `
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(customer_id)
);`,
      explanation: "Creates a relationship between two tables."
    },
    {
      title: "Unique Constraint",
      syntax: `
CREATE TABLE users (
  email VARCHAR(100) UNIQUE
);`,
      explanation: "Prevents duplicate values."
    },
    {
      title: "Not Null Constraint",
      syntax: `
CREATE TABLE employees (
  name VARCHAR(100) NOT NULL
);`,
      explanation: "Column must always contain a value."
    },
    {
      title: "Default Constraint",
      syntax: `
CREATE TABLE users (
  status VARCHAR(20)
  DEFAULT 'Active'
);`,
      explanation: "Assigns a default value if none is provided."
    },
    {
      title: "Check Constraint",
      syntax: `
CREATE TABLE students (
  age INT CHECK(age >= 18)
);`,
      explanation: "Ensures data satisfies a condition."
    }
]
},
{
  section: "CRUD Operations",
  topics: [
    {
      title: "INSERT",
      syntax: `
INSERT INTO students
(id, name, age)
VALUES
(1, 'Abisha', 20);
`,
      explanation: "Adds a new row into a table."
    },
    {
      title: "SELECT",
      syntax: `
SELECT * FROM students;
`,
      explanation: "Retrieves all rows from a table."
    },
    {
      title: "SELECT Specific Columns",
      syntax: `
SELECT name, age
FROM students;
`,
      explanation: "Retrieves only selected columns."
    },
    {
      title: "UPDATE",
      syntax: `
UPDATE students
SET age = 21
WHERE id = 1;
`,
      explanation: "Modifies existing records."
    },
    {
      title: "DELETE",
      syntax: `
DELETE FROM students
WHERE id = 1;
`,
      explanation: "Removes specific records."
    },
    {
      title: "TRUNCATE",
      syntax: `
TRUNCATE TABLE students;
`,
      explanation: "Removes all rows quickly but keeps the table structure."
    }
  ]
},
{
  section: "Filtering",
  topics: [
    {
      title: "WHERE",
      syntax: `
SELECT *
FROM students
WHERE age > 18;
`,
      explanation: "Filters rows based on a condition."
    },
    {
      title: "AND Operator",
      syntax: `
SELECT *
FROM students
WHERE age > 18
AND department = 'CSE';
`,
      explanation: "Both conditions must be true."
    },
    {
      title: "OR Operator",
      syntax: `
SELECT *
FROM students
WHERE department = 'CSE'
OR department = 'IT';
`,
      explanation: "At least one condition must be true."
    },
    {
      title: "LIKE",
      syntax: `
SELECT *
FROM students
WHERE name LIKE 'A%';
`,
      explanation: "Finds values matching a pattern. A% means starts with A."
    },
    {
      title: "IN",
      syntax: `
SELECT *
FROM students
WHERE department IN ('CSE','IT');
`,
      explanation: "Checks whether a value exists in a list."
    },
    {
      title: "BETWEEN",
      syntax: `
SELECT *
FROM students
WHERE age BETWEEN 18 AND 22;
`,
      explanation: "Selects values within a range."
    },
    {
      title: "IS NULL",
      syntax: `
SELECT *
FROM students
WHERE phone IS NULL;
`,
      explanation: "Finds records with NULL values."
    },
    {
      title: "ORDER BY",
      syntax: `
SELECT *
FROM students
ORDER BY age DESC;
`,
      explanation: "Sorts results in ascending or descending order."
    }
  ]
},
{
  section: "Aggregate Functions",
  topics: [
    {
      title: "COUNT",
      syntax: `
SELECT COUNT(*)
FROM students;
`,
      explanation: "Returns the total number of rows."
    },
    {
      title: "SUM",
      syntax: `
SELECT SUM(salary)
FROM employees;
`,
      explanation: "Returns the sum of all values."
    },
    {
      title: "AVG",
      syntax: `
SELECT AVG(salary)
FROM employees;
`,
      explanation: "Returns the average value."
    },
    {
      title: "MIN",
      syntax: `
SELECT MIN(salary)
FROM employees;
`,
      explanation: "Returns the smallest value."
    },
    {
      title: "MAX",
      syntax: `
SELECT MAX(salary)
FROM employees;
`,
      explanation: "Returns the largest value."
    },
    {
      title: "DISTINCT",
      syntax: `
SELECT DISTINCT department
FROM students;
`,
      explanation: "Returns only unique values."
    },
    {
      title: "COUNT DISTINCT",
      syntax: `
SELECT COUNT(DISTINCT department)
FROM students;
`,
      explanation: "Counts unique values only."
    }
  ]
},
{
  section: "GROUP BY & HAVING",
  topics: [
    {
      title: "GROUP BY",
      syntax: `
SELECT department,
COUNT(*)
FROM employees
GROUP BY department;
`,
      explanation: "Groups rows having the same value into summary rows."
    },
    {
      title: "GROUP BY with SUM",
      syntax: `
SELECT department,
SUM(salary)
FROM employees
GROUP BY department;
`,
      explanation: "Calculates the total salary for each department."
    },
    {
      title: "GROUP BY with AVG",
      syntax: `
SELECT department,
AVG(salary)
FROM employees
GROUP BY department;
`,
      explanation: "Calculates average salary department-wise."
    },
    {
      title: "HAVING",
      syntax: `
SELECT department,
COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
`,
      explanation: "Filters groups after grouping is performed."
    },
    {
      title: "WHERE vs HAVING",
      syntax: `
SELECT department,
AVG(salary)
FROM employees
WHERE salary > 30000
GROUP BY department
HAVING AVG(salary) > 50000;
`,
      explanation: "WHERE filters rows before grouping. HAVING filters groups after grouping."
    }
  ]
},
{
  section: "Joins",
  topics: [
    {
      title: "INNER JOIN",
      syntax: `
SELECT s.name, c.course_name
FROM students s
INNER JOIN courses c
ON s.course_id = c.id;
`,
      explanation: "Returns only matching rows from both tables."
    },
    {
      title: "LEFT JOIN",
      syntax: `
SELECT s.name, c.course_name
FROM students s
LEFT JOIN courses c
ON s.course_id = c.id;
`,
      explanation: "Returns all rows from the left table and matching rows from the right table."
    },
    {
      title: "RIGHT JOIN",
      syntax: `
SELECT s.name, c.course_name
FROM students s
RIGHT JOIN courses c
ON s.course_id = c.id;
`,
      explanation: "Returns all rows from the right table and matching rows from the left table."
    },
    {
      title: "FULL OUTER JOIN",
      syntax: `
SELECT s.name, c.course_name
FROM students s
FULL OUTER JOIN courses c
ON s.course_id = c.id;
`,
      explanation: "Returns all matching and non-matching rows from both tables."
    },
    {
      title: "CROSS JOIN",
      syntax: `
SELECT *
FROM students
CROSS JOIN courses;
`,
      explanation: "Returns the Cartesian product of both tables."
    },
    {
      title: "SELF JOIN",
      syntax: `
SELECT e1.name AS Employee,
e2.name AS Manager
FROM employees e1
JOIN employees e2
ON e1.manager_id = e2.id;
`,
      explanation: "Joins a table with itself."
    },
    {
      title: "Find Unmatched Records",
      syntax: `
SELECT s.*
FROM students s
LEFT JOIN courses c
ON s.course_id = c.id
WHERE c.id IS NULL;
`,
      explanation: "Finds records that do not have matching rows in another table."
    }
  ]
},
{
  section: "Subqueries",
  topics: [
    {
      title: "Basic Subquery",
      syntax: `
SELECT name
FROM students
WHERE marks >
(
  SELECT AVG(marks)
  FROM students
);
`,
      explanation: "Returns students whose marks are greater than the average marks."
    },
    {
      title: "Subquery with IN",
      syntax: `
SELECT *
FROM employees
WHERE department_id IN
(
  SELECT id
  FROM departments
  WHERE location = 'Chennai'
);
`,
      explanation: "Returns employees belonging to departments located in Chennai."
    },
    {
      title: "Subquery with EXISTS",
      syntax: `
SELECT *
FROM customers c
WHERE EXISTS
(
  SELECT 1
  FROM orders o
  WHERE o.customer_id = c.id
);
`,
      explanation: "Returns customers who have placed at least one order."
    },
    {
      title: "Correlated Subquery",
      syntax: `
SELECT name, salary
FROM employees e1
WHERE salary >
(
  SELECT AVG(salary)
  FROM employees e2
  WHERE e1.department_id = e2.department_id
);
`,
      explanation: "Executes the inner query for each row of the outer query."
    },
    {
      title: "Subquery in FROM",
      syntax: `
SELECT department,
avg_salary
FROM
(
  SELECT department,
         AVG(salary) AS avg_salary
  FROM employees
  GROUP BY department
) temp;
`,
      explanation: "Uses the result of one query as a temporary table."
    }
  ]
},
{
  section: "Views",
  topics: [
    {
      title: "Create View",
      syntax: `
CREATE VIEW student_view AS
SELECT id, name, department
FROM students;
`,
      explanation: "Creates a virtual table based on a query."
    },
    {
      title: "View Data",
      syntax: `
SELECT *
FROM student_view;
`,
      explanation: "Retrieves data from the view."
    },
    {
      title: "Create Complex View",
      syntax: `
CREATE VIEW department_summary AS
SELECT department,
COUNT(*) AS total_students
FROM students
GROUP BY department;
`,
      explanation: "Creates a view using aggregate functions."
    },
    {
      title: "Update View",
      syntax: `
CREATE OR REPLACE VIEW student_view AS
SELECT id, name, department, age
FROM students;
`,
      explanation: "Modifies an existing view."
    },
    {
      title: "Drop View",
      syntax: `
DROP VIEW student_view;
`,
      explanation: "Removes the view permanently."
    },
    {
      title: "Why Use Views?",
      syntax: `
-- No SQL syntax
`,
      explanation: "Views simplify complex queries, improve security, and provide data abstraction."
    }
  ]
},
{
  section: "Indexes",
  topics: [
    {
      title: "Create Index",
      syntax: `
CREATE INDEX idx_student_name
ON students(name);
`,
      explanation: "Creates an index on the name column to improve search performance."
    },
    {
      title: "Create Unique Index",
      syntax: `
CREATE UNIQUE INDEX idx_email
ON users(email);
`,
      explanation: "Ensures that indexed values remain unique."
    },
    {
      title: "Create Composite Index",
      syntax: `
CREATE INDEX idx_name_dept
ON employees(name, department);
`,
      explanation: "Creates an index using multiple columns."
    },
    {
      title: "View Indexes (MySQL)",
      syntax: `
SHOW INDEX
FROM students;
`,
      explanation: "Displays indexes available on a table."
    },
    {
      title: "Drop Index",
      syntax: `
DROP INDEX idx_student_name
ON students;
`,
      explanation: "Removes an index from the table."
    },
    {
      title: "When to Use Indexes?",
      syntax: `
-- No SQL syntax
`,
      explanation: "Use indexes on columns frequently used in WHERE, JOIN, ORDER BY, and GROUP BY clauses."
    },
    {
      title: "When NOT to Use Indexes?",
      syntax: `
-- No SQL syntax
`,
      explanation: "Avoid indexing very small tables or columns that change frequently."
    }
  ]
},
{
  section: "Transactions",
  topics: [
    {
      title: "Start Transaction",
      syntax: `
START TRANSACTION;
`,
      explanation: "Begins a new transaction."
    },
    {
      title: "COMMIT",
      syntax: `
COMMIT;
`,
      explanation: "Permanently saves all changes made during the transaction."
    },
    {
      title: "ROLLBACK",
      syntax: `
ROLLBACK;
`,
      explanation: "Undoes all changes made since the transaction started."
    },
    {
      title: "SAVEPOINT",
      syntax: `
SAVEPOINT sp1;
`,
      explanation: "Creates a checkpoint within a transaction."
    },
    {
      title: "Rollback to Savepoint",
      syntax: `
ROLLBACK TO sp1;
`,
      explanation: "Reverts changes made after the specified savepoint."
    },
    {
      title: "Transaction Example",
      syntax: `
START TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;
`,
      explanation: "A typical bank transfer transaction where money is debited from one account and credited to another."
    },
    {
      title: "ACID Properties",
      syntax: `
Atomicity
Consistency
Isolation
Durability
`,
      explanation: "ACID properties ensure reliable and consistent transaction processing."
    }
  ]
},
{
  section: "Stored Procedures",
  topics: [
    {
      title: "Create Stored Procedure",
      syntax: `
DELIMITER //

CREATE PROCEDURE GetStudents()
BEGIN
    SELECT * FROM students;
END //

DELIMITER ;
`,
      explanation: "Creates a reusable SQL procedure stored in the database."
    },
    {
      title: "Execute Stored Procedure",
      syntax: `
CALL GetStudents();
`,
      explanation: "Executes the stored procedure."
    },
    {
      title: "Stored Procedure with Parameter",
      syntax: `
DELIMITER //

CREATE PROCEDURE GetStudentById(
    IN studentId INT
)
BEGIN
    SELECT *
    FROM students
    WHERE id = studentId;
END //

DELIMITER ;
`,
      explanation: "Accepts input parameters and performs operations based on them."
    },
    {
      title: "Call Procedure with Parameter",
      syntax: `
CALL GetStudentById(1);
`,
      explanation: "Passes a value to the stored procedure."
    },
    {
      title: "Advantages of Stored Procedures",
      syntax: `
-- No SQL Syntax
`,
      explanation: "Improves performance, security, code reuse, and simplifies database logic."
    }
  ]
},
{
  section: "Triggers",
  topics: [
    {
      title: "Create BEFORE INSERT Trigger",
      syntax: `
CREATE TRIGGER before_student_insert
BEFORE INSERT
ON students
FOR EACH ROW
SET NEW.created_at = NOW();
`,
      explanation: "Executes automatically before a new row is inserted."
    },
    {
      title: "Create AFTER INSERT Trigger",
      syntax: `
CREATE TRIGGER after_student_insert
AFTER INSERT
ON students
FOR EACH ROW
INSERT INTO audit_log(message)
VALUES ('Student Added');
`,
      explanation: "Executes automatically after insertion."
    },
    {
      title: "Create BEFORE UPDATE Trigger",
      syntax: `
CREATE TRIGGER before_salary_update
BEFORE UPDATE
ON employees
FOR EACH ROW
SET NEW.updated_at = NOW();
`,
      explanation: "Runs before updating a row."
    },
    {
      title: "Create AFTER DELETE Trigger",
      syntax: `
CREATE TRIGGER after_employee_delete
AFTER DELETE
ON employees
FOR EACH ROW
INSERT INTO audit_log(message)
VALUES ('Employee Deleted');
`,
      explanation: "Runs after a row is deleted."
    },
    {
      title: "Why Use Triggers?",
      syntax: `
-- No SQL Syntax
`,
      explanation: "Used for auditing, logging, validation, and automatic updates."
    }
  ]
},
{
  section: "Normalization Summary",
  topics: [
    {
      title: "1NF",
      syntax: `
Rule:
No repeating groups
Atomic values only
`,
      explanation: "Each column should contain a single value and no repeating data."
    },
    {
      title: "2NF",
      syntax: `
Rule:
Must be in 1NF
No Partial Dependency
`,
      explanation: "Non-key attributes must depend on the entire primary key."
    },
    {
      title: "3NF",
      syntax: `
Rule:
Must be in 2NF
No Transitive Dependency
`,
      explanation: "Non-key attributes should depend only on the primary key."
    },
    {
      title: "BCNF",
      syntax: `
Rule:
Every Determinant
must be a Candidate Key
`,
      explanation: "A stricter version of 3NF that removes additional anomalies."
    },
    {
      title: "Functional Dependency",
      syntax: `
A → B
`,
      explanation: "If A determines B, then B depends on A."
    },
    {
      title: "Denormalization",
      syntax: `
-- No SQL Syntax
`,
      explanation: "Intentionally adds redundancy to improve read performance."
    },
    {
      title: "Normalization Goal",
      syntax: `
Reduce Redundancy
Improve Integrity
`,
      explanation: "Normalization minimizes duplicate data and improves consistency."
    }
  ]
}
];

export default dbmsCheatSheet;