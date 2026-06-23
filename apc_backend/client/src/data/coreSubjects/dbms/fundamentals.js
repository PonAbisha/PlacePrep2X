
const dbmsFundamentals = [
  {
    id: 1,
    question: "What is DBMS?",
    answer: "Database Management System",
    explanation:
      "A DBMS is software used to store, organize, retrieve, and manage data efficiently. Examples include MySQL, PostgreSQL, Oracle, and SQL Server."
  },
  {
    id: 2,
    question: "What is a database?",
    answer: "An organized collection of related data.",
    explanation:
      "A database stores information in a structured manner so that it can be easily accessed, managed, and updated."
  },
  {
    id: 3,
    question: "What is RDBMS?",
    answer: "Relational Database Management System.",
    explanation:
      "RDBMS stores data in tables and maintains relationships between tables using keys."
  },
  {
    id: 4,
    question: "Difference between DBMS and RDBMS?",
    answer:
      "RDBMS supports relationships between tables while DBMS may not.",
    explanation:
      "RDBMS uses tables, constraints, and keys to maintain data integrity and relationships."
  },
  {
    id: 5,
    question: "What is a table?",
    answer: "A collection of rows and columns.",
    explanation:
      "Tables are the primary storage structures in relational databases."
  },
  {
    id: 6,
    question: "What is a row (tuple)?",
    answer: "A single record in a table.",
    explanation:
      "Each row represents one instance of an entity and contains values for all columns."
  },
  {
    id: 7,
    question: "What is a column (attribute)?",
    answer: "A field representing a property of data.",
    explanation:
      "Columns define the type of information stored in a table."
  },
  {
    id: 8,
    question: "What is a Primary Key?",
    answer: "A unique identifier for each record.",
    explanation:
      "Primary keys uniquely identify rows and cannot contain NULL values."
  },
  {
    id: 9,
    question: "What is a Foreign Key?",
    answer: "A key that references another table's primary key.",
    explanation:
      "Foreign keys establish relationships between tables and maintain referential integrity."
  },
  {
    id: 10,
    question: "What is a Candidate Key?",
    answer: "A key capable of uniquely identifying a record.",
    explanation:
      "A table may have multiple candidate keys, but only one is selected as the primary key."
  },
  {
    id: 11,
    question: "What is a Super Key?",
    answer: "Any set of attributes that uniquely identifies a row.",
    explanation:
      "All candidate keys are super keys, but some super keys may contain extra attributes."
  },
  {
    id: 12,
    question: "What is an Alternate Key?",
    answer: "A candidate key not chosen as the primary key.",
    explanation:
      "Alternate keys still uniquely identify records and can be used when needed."
  },
  {
    id: 13,
    question: "What is a Composite Key?",
    answer: "A key formed using multiple columns.",
    explanation:
      "Composite keys are used when a single attribute cannot uniquely identify a record."
  },
  {
    id: 14,
    question: "Can a Primary Key contain NULL values?",
    answer: "No.",
    explanation:
      "Every record must have a unique and valid primary key value."
  },
  {
    id: 15,
    question: "What is a constraint?",
    answer: "A rule enforced on data in a table.",
    explanation:
      "Constraints ensure accuracy, consistency, and integrity of stored data."
  },
  {
    id: 16,
    question: "What is a NOT NULL constraint?",
    answer: "A constraint that prevents NULL values.",
    explanation:
      "It ensures that every row contains a value for the specified column."
  },
  {
    id: 17,
    question: "What is a UNIQUE constraint?",
    answer: "A constraint that prevents duplicate values.",
    explanation:
      "It ensures that all values in a column remain unique."
  },
  {
    id: 18,
    question: "What is a DEFAULT constraint?",
    answer: "A constraint that provides a default value.",
    explanation:
      "If no value is supplied during insertion, the default value is automatically used."
  },
  {
    id: 19,
    question: "What is metadata?",
    answer: "Data about data.",
    explanation:
      "Metadata describes database objects such as tables, columns, data types, and constraints."
  },
  {
    id: 20,
    question: "What is a schema?",
    answer: "The logical structure of a database.",
    explanation:
      "A schema defines tables, relationships, constraints, and other database objects."
  }
];

export default dbmsFundamentals;
