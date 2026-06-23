
const dbmsJoins = [
{
  id: 1,
  question: "What is a JOIN in SQL?",
  answer: "A JOIN combines rows from two or more tables based on a related column.",
  explanation: "Joins are used to retrieve related data stored across multiple tables."
},
{
  id: 2,
  question: "Why are JOINs used?",
  answer: "To fetch related data from multiple tables.",
  explanation: "Since databases are normalized, related information is often stored in separate tables."
},
{
  id: 3,
  question: "What is an INNER JOIN?",
  answer: "A JOIN that returns only matching rows from both tables.",
  explanation: "Rows without matching values in both tables are excluded."
},
{
  id: 4,
  question: "What is a LEFT JOIN?",
  answer: "A JOIN that returns all rows from the left table and matching rows from the right table.",
  explanation: "If no match exists, NULL values are returned for the right table columns."
},
{
  id: 5,
  question: "What is a RIGHT JOIN?",
  answer: "A JOIN that returns all rows from the right table and matching rows from the left table.",
  explanation: "If no match exists, NULL values are returned for the left table columns."
},
{
  id: 6,
  question: "What is a FULL OUTER JOIN?",
  answer: "A JOIN that returns all matching and non-matching rows from both tables.",
  explanation: "Rows without matches are filled with NULL values."
},
{
  id: 7,
  question: "What is a CROSS JOIN?",
  answer: "A JOIN that returns the Cartesian product of two tables.",
  explanation: "Every row from the first table is combined with every row from the second table."
},
{
  id: 8,
  question: "What is a SELF JOIN?",
  answer: "A JOIN where a table is joined with itself.",
  explanation: "Used when relationships exist within the same table."
},
{
  id: 9,
  question: "What is an Equi Join?",
  answer: "A JOIN using the equality operator (=).",
  explanation: "Most INNER JOIN operations are Equi Joins."
},
{
  id: 10,
  question: "What is a Non-Equi Join?",
  answer: "A JOIN using operators other than '='.",
  explanation: "Examples include <, >, <=, >= and BETWEEN."
},
{
  id: 11,
  question: "What is the main difference between INNER JOIN and LEFT JOIN?",
  answer: "INNER JOIN returns only matching rows, LEFT JOIN returns all rows from the left table.",
  explanation: "LEFT JOIN includes unmatched rows from the left table."
},
{
  id: 12,
  question: "What is the main difference between LEFT JOIN and RIGHT JOIN?",
  answer: "LEFT JOIN keeps all rows from the left table, RIGHT JOIN keeps all rows from the right table.",
  explanation: "The preserved table changes depending on the join type."
},
{
  id: 13,
  question: "Can INNER JOIN return NULL values?",
  answer: "Generally no, unless NULL values exist in matching records.",
  explanation: "INNER JOIN only returns rows that satisfy the join condition."
},
{
  id: 14,
  question: "When should LEFT JOIN be used?",
  answer: "When all records from the left table are required.",
  explanation: "Useful for finding records that may not have corresponding matches."
},
{
  id: 15,
  question: "When should SELF JOIN be used?",
  answer: "When comparing rows within the same table.",
  explanation: "Example: Employee and Manager relationships in an employee table."
},
{
  id: 16,
  question: "What is a Cartesian Product?",
  answer: "The result of combining every row of one table with every row of another table.",
  explanation: "A CROSS JOIN produces a Cartesian Product."
},
{
  id: 17,
  question: "How many rows will a CROSS JOIN produce?",
  answer: "Rows in Table A × Rows in Table B.",
  explanation: "For example, 5 rows and 10 rows produce 50 results."
},
{
  id: 18,
  question: "How can you find records without matches in another table?",
  answer: "Using LEFT JOIN with a NULL condition.",
  explanation: "This is a common interview and real-world SQL problem."
},
{
  id: 19,
  question: "Which JOIN is most commonly used?",
  answer: "INNER JOIN.",
  explanation: "Most business queries require only matching records."
},
{
  id: 20,
  question: "Why are JOINs important in relational databases?",
  answer: "They connect related data stored in multiple tables.",
  explanation: "Without joins, retrieving meaningful information from normalized databases would be difficult."
}
];

export default dbmsJoins;
