
const dbmsScenarioBased = [
{
  id: 1,
  question: "A college wants to store Students and Courses. A student can enroll in multiple courses and a course can have multiple students. How would you design the database?",
  answer: "Use three tables: Students, Courses, and Enrollments.",
  explanation: "This is a Many-to-Many relationship. The Enrollments table acts as a junction table containing StudentID and CourseID."
},
{
  id: 2,
  question: "An e-commerce website stores customer details in multiple tables, causing duplicate information. Which DBMS concept should be applied?",
  answer: "Normalization.",
  explanation: "Normalization reduces redundancy and improves consistency by organizing data into related tables."
},
{
  id: 3,
  question: "A banking transaction deducts money from one account but fails to add it to another account. Which ACID property is violated?",
  answer: "Atomicity.",
  explanation: "Either all operations should succeed or none should. Partial execution violates Atomicity."
},
{
  id: 4,
  question: "A company wants to quickly search employees using EmployeeID. What should be used?",
  answer: "Indexing.",
  explanation: "Creating an index on EmployeeID improves search performance significantly."
},
{
  id: 5,
  question: "Two users try to update the same record simultaneously. Which DBMS concept handles this?",
  answer: "Concurrency Control.",
  explanation: "Concurrency control mechanisms prevent data inconsistency during simultaneous transactions."
},
{
  id: 6,
  question: "A library system stores BookID, Title, Author, and Publisher in a single table with repeated publisher information. What issue exists?",
  answer: "Data Redundancy.",
  explanation: "Repeated data increases storage and maintenance costs and may lead to inconsistencies."
},
{
  id: 7,
  question: "An HR application needs to find employees who do not belong to any department. Which SQL operation can help?",
  answer: "LEFT JOIN with NULL filtering.",
  explanation: "A LEFT JOIN followed by WHERE DepartmentID IS NULL identifies unmatched records."
},
{
  id: 8,
  question: "A reporting system performs thousands of read operations but very few updates. What design approach may improve performance?",
  answer: "Denormalization.",
  explanation: "Denormalization reduces joins and improves read performance in reporting systems."
},
{
  id: 9,
  question: "A company wants every employee record to have a department assigned. Which participation constraint applies?",
  answer: "Total Participation.",
  explanation: "Every employee must participate in the Employee-Department relationship."
},
{
  id: 10,
  question: "An online shopping platform stores Orders and Customers. Which key should connect the tables?",
  answer: "Foreign Key.",
  explanation: "CustomerID in Orders references CustomerID in Customers."
},
{
  id: 11,
  question: "A user accidentally deletes important records. Which DBMS feature can help restore data?",
  answer: "Backup and Recovery.",
  explanation: "Backup mechanisms allow databases to recover lost or corrupted data."
},
{
  id: 12,
  question: "An application frequently searches products by ProductName. Which optimization technique should be used?",
  answer: "Indexing.",
  explanation: "Creating an index on ProductName improves search performance."
},
{
  id: 13,
  question: "A table contains customer age, and another column stores customer category derived from age. What type of attribute is customer category?",
  answer: "Derived Attribute.",
  explanation: "The category is calculated using another attribute rather than stored independently."
},
{
  id: 14,
  question: "An employee table contains ManagerID that references EmployeeID in the same table. Which JOIN is commonly used here?",
  answer: "SELF JOIN.",
  explanation: "Self Join helps retrieve employee-manager relationships from the same table."
},
{
  id: 15,
  question: "A database query takes too long because it scans every row in a table. What is happening?",
  answer: "Full Table Scan.",
  explanation: "Without an appropriate index, the database must examine every row."
},
{
  id: 16,
  question: "A company wants to prevent duplicate email addresses for users. Which constraint should be used?",
  answer: "UNIQUE Constraint.",
  explanation: "A UNIQUE constraint ensures no duplicate values are inserted."
},
{
  id: 17,
  question: "A transaction has completed successfully and changes must be permanently saved. Which command is used?",
  answer: "COMMIT.",
  explanation: "COMMIT permanently stores transaction changes in the database."
},
{
  id: 18,
  question: "An organization wants to track which student attends which classes. What type of relationship exists?",
  answer: "Many-to-Many Relationship.",
  explanation: "A student can attend many classes and a class can contain many students."
},
{
  id: 19,
  question: "A database stores customer addresses as a single field. Which database design improvement can be made?",
  answer: "Use Composite Attributes.",
  explanation: "Address can be divided into Street, City, State, and ZIP Code for better organization."
},
{
  id: 20,
  question: "A food delivery application suddenly crashes after payment but before order confirmation. Which DBMS property ensures the database remains consistent?",
  answer: "ACID Properties.",
  explanation: "ACID guarantees that incomplete transactions do not leave the database in an inconsistent state."
}
];

export default dbmsScenarioBased;