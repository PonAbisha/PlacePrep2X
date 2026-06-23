
const dbmsIndexing = [
{
  id: 1,
  question: "What is an Index in DBMS?",
  answer: "A data structure that improves data retrieval speed.",
  explanation: "Indexes help the database find rows quickly without scanning the entire table."
},
{
  id: 2,
  question: "Why is Indexing used?",
  answer: "To improve query performance.",
  explanation: "Indexing reduces the amount of data the database must scan during searches."
},
{
  id: 3,
  question: "How does an Index work?",
  answer: "It stores references to table rows in a structured format.",
  explanation: "Instead of scanning every row, the database uses the index to locate data efficiently."
},
{
  id: 4,
  question: "What is a Clustered Index?",
  answer: "An index that determines the physical order of data in a table.",
  explanation: "Since data can only be physically ordered one way, a table can have only one clustered index."
},
{
  id: 5,
  question: "What is a Non-Clustered Index?",
  answer: "A separate structure that stores indexed values and row references.",
  explanation: "Multiple non-clustered indexes can exist on a table."
},
{
  id: 6,
  question: "Difference between Clustered and Non-Clustered Index?",
  answer: "Clustered changes physical storage order, Non-Clustered does not.",
  explanation: "Clustered indexes store data rows in order, while non-clustered indexes store pointers to rows."
},
{
  id: 7,
  question: "How many Clustered Indexes can a table have?",
  answer: "Only one.",
  explanation: "A table can only have one physical ordering of rows."
},
{
  id: 8,
  question: "How many Non-Clustered Indexes can a table have?",
  answer: "Multiple.",
  explanation: "Databases allow several non-clustered indexes depending on requirements."
},
{
  id: 9,
  question: "What is a Unique Index?",
  answer: "An index that does not allow duplicate values.",
  explanation: "It ensures that all indexed values remain unique."
},
{
  id: 10,
  question: "What is a Composite Index?",
  answer: "An index created on multiple columns.",
  explanation: "Composite indexes improve performance when queries use multiple columns together."
},
{
  id: 11,
  question: "What is a Primary Index?",
  answer: "An index created on the primary key.",
  explanation: "It helps locate records quickly using the primary key."
},
{
  id: 12,
  question: "What is a Secondary Index?",
  answer: "An index created on non-primary key columns.",
  explanation: "Secondary indexes improve searches on frequently queried fields."
},
{
  id: 13,
  question: "What is a B-Tree Index?",
  answer: "A balanced tree data structure used for indexing.",
  explanation: "Most modern databases use B-Trees because they provide efficient searching, insertion, and deletion."
},
{
  id: 14,
  question: "Why are B-Tree Indexes popular?",
  answer: "Because they provide fast lookups and balanced performance.",
  explanation: "B-Trees maintain sorted data and minimize disk access operations."
},
{
  id: 15,
  question: "What is Full Table Scan?",
  answer: "Reading every row in a table to find data.",
  explanation: "Without an index, the database may need to scan all rows."
},
{
  id: 16,
  question: "Can indexing improve every query?",
  answer: "No.",
  explanation: "Indexes help read operations but can slow down inserts, updates, and deletes."
},
{
  id: 17,
  question: "What are the advantages of Indexing?",
  answer: "Faster data retrieval and improved query performance.",
  explanation: "Indexes significantly reduce search time for large datasets."
},
{
  id: 18,
  question: "What are the disadvantages of Indexing?",
  answer: "Extra storage and slower write operations.",
  explanation: "Maintaining indexes requires additional memory and processing."
},
{
  id: 19,
  question: "When should indexing be avoided?",
  answer: "On very small tables or frequently updated columns.",
  explanation: "The overhead may outweigh the performance benefits."
},
{
  id: 20,
  question: "What is Query Optimization?",
  answer: "The process of improving query execution efficiency.",
  explanation: "Indexes are one of the most important tools used in query optimization."
}
];

export default dbmsIndexing;