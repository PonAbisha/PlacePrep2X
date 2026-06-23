
const dbmsSQLBasics = [
{
  id: 1,
  question: "What is SQL?",
  answer: "Structured Query Language.",
  explanation: "SQL is the standard language used to create, retrieve, update, and manage data in relational databases."
},
{
  id: 2,
  question: "Why is SQL used?",
  answer: "To interact with relational databases.",
  explanation: "SQL allows users to perform operations such as inserting, updating, deleting, and retrieving data."
},
{
  id: 3,
  question: "What is a SQL Query?",
  answer: "A command used to interact with a database.",
  explanation: "Queries are used to perform operations such as SELECT, INSERT, UPDATE, and DELETE."
},
{
  id: 4,
  question: "What is the SELECT statement?",
  answer: "A command used to retrieve data from a table.",
  explanation: "SELECT allows users to fetch specific columns or all records from a table."
},
{
  id: 5,
  question: "What is the WHERE clause?",
  answer: "A clause used to filter records.",
  explanation: "WHERE returns only rows that satisfy a given condition."
},
{
  id: 6,
  question: "What is the ORDER BY clause?",
  answer: "A clause used to sort records.",
  explanation: "ORDER BY sorts data in ascending or descending order."
},
{
  id: 7,
  question: "What is the GROUP BY clause?",
  answer: "A clause used to group similar rows.",
  explanation: "GROUP BY is commonly used with aggregate functions like COUNT and SUM."
},
{
  id: 8,
  question: "What is the HAVING clause?",
  answer: "A clause used to filter grouped records.",
  explanation: "HAVING works on groups created by GROUP BY, whereas WHERE works on rows."
},
{
  id: 9,
  question: "What is the INSERT statement?",
  answer: "A command used to add new records.",
  explanation: "INSERT INTO adds one or more rows into a table."
},
{
  id: 10,
  question: "What is the UPDATE statement?",
  answer: "A command used to modify existing records.",
  explanation: "UPDATE changes values in one or more rows of a table."
},
{
  id: 11,
  question: "What is the DELETE statement?",
  answer: "A command used to remove records.",
  explanation: "DELETE removes selected rows from a table while preserving its structure."
},
{
  id: 12,
  question: "What is the TRUNCATE statement?",
  answer: "A command used to remove all rows from a table.",
  explanation: "TRUNCATE is faster than DELETE because it removes all rows at once."
},
{
  id: 13,
  question: "What is the DROP statement?",
  answer: "A command used to delete a database object.",
  explanation: "DROP removes the entire table, database, or other object permanently."
},
{
  id: 14,
  question: "Difference between DELETE and TRUNCATE?",
  answer: "DELETE removes selected rows, while TRUNCATE removes all rows.",
  explanation: "DELETE can be rolled back and uses WHERE. TRUNCATE removes all records quickly."
},
{
  id: 15,
  question: "Difference between TRUNCATE and DROP?",
  answer: "TRUNCATE removes data, DROP removes the entire table.",
  explanation: "After DROP, the table structure no longer exists."
},
{
  id: 16,
  question: "What is a NULL value?",
  answer: "A value representing missing or unknown data.",
  explanation: "NULL is not zero or an empty string; it indicates absence of value."
},
{
  id: 17,
  question: "What is an Aggregate Function?",
  answer: "A function that performs calculations on multiple rows.",
  explanation: "Examples include COUNT(), SUM(), AVG(), MIN(), and MAX()."
},
{
  id: 18,
  question: "What is COUNT()?",
  answer: "An aggregate function that counts rows.",
  explanation: "COUNT() returns the number of records matching a condition."
},
{
  id: 19,
  question: "What is AVG()?",
  answer: "An aggregate function that calculates the average value.",
  explanation: "AVG() is commonly used for marks, salaries, and numerical data."
},
{
  id: 20,
  question: "What is DISTINCT?",
  answer: "A keyword used to remove duplicate values.",
  explanation: "DISTINCT returns only unique records from a query result."
}
];

export default dbmsSQLBasics;
