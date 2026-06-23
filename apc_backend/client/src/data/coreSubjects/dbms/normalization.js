const dbmsNormalization = [
{
  id: 1,
  question: "What is Normalization?",
  answer: "The process of organizing data to reduce redundancy and improve consistency.",
  explanation: "Normalization divides large tables into smaller related tables and removes duplicate data."
},
{
  id: 2,
  question: "Why is Normalization needed?",
  answer: "To reduce redundancy and avoid anomalies.",
  explanation: "It improves data integrity and makes database maintenance easier."
},
{
  id: 3,
  question: "What are the different Normal Forms?",
  answer: "1NF, 2NF, 3NF, BCNF, 4NF and 5NF.",
  explanation: "Each normal form removes a specific type of redundancy."
},
{
  id: 4,
  question: "What is 1NF?",
  answer: "First Normal Form.",
  explanation: "A table is in 1NF if all attributes contain atomic values and there are no repeating groups."
},
{
  id: 5,
  question: "What is an atomic value?",
  answer: "A value that cannot be divided further.",
  explanation: "For example, storing one phone number per column instead of multiple numbers in one field."
},
{
  id: 6,
  question: "What is 2NF?",
  answer: "Second Normal Form.",
  explanation: "A table is in 2NF if it is in 1NF and has no partial dependency."
},
{
  id: 7,
  question: "What is Partial Dependency?",
  answer: "When a non-key attribute depends on only part of a composite key.",
  explanation: "Partial dependency violates 2NF."
},
{
  id: 8,
  question: "What is 3NF?",
  answer: "Third Normal Form.",
  explanation: "A table is in 3NF if it is in 2NF and has no transitive dependency."
},
{
  id: 9,
  question: "What is Transitive Dependency?",
  answer: "When a non-key attribute depends on another non-key attribute.",
  explanation: "This creates unnecessary redundancy."
},
{
  id: 10,
  question: "What is BCNF?",
  answer: "Boyce-Codd Normal Form.",
  explanation: "A stronger version of 3NF where every determinant must be a candidate key."
},
{
  id: 11,
  question: "How is BCNF different from 3NF?",
  answer: "BCNF is stricter than 3NF.",
  explanation: "A table can satisfy 3NF but still violate BCNF."
},
{
  id: 12,
  question: "What is Functional Dependency?",
  answer: "A relationship where one attribute determines another.",
  explanation: "If A determines B, then A → B."
},
{
  id: 13,
  question: "What is a Determinant?",
  answer: "The attribute on the left side of a functional dependency.",
  explanation: "In A → B, A is the determinant."
},
{
  id: 14,
  question: "What are Insertion Anomalies?",
  answer: "Problems inserting data due to poor design.",
  explanation: "A record cannot be inserted without unnecessary information."
},
{
  id: 15,
  question: "What are Update Anomalies?",
  answer: "Problems caused by updating duplicate data.",
  explanation: "Changes must be made in multiple places."
},
{
  id: 16,
  question: "What are Deletion Anomalies?",
  answer: "Loss of important information when deleting records.",
  explanation: "Deleting one row may remove unrelated data."
},
{
  id: 17,
  question: "What is Denormalization?",
  answer: "Adding redundancy intentionally for performance.",
  explanation: "Used when read performance is more important than storage efficiency."
},
{
  id: 18,
  question: "Does Normalization improve performance?",
  answer: "Not always.",
  explanation: "Normalization improves consistency but may increase joins."
},
{
  id: 19,
  question: "When should Denormalization be used?",
  answer: "In read-heavy systems.",
  explanation: "Data warehouses and reporting systems commonly use denormalization."
},
{
  id: 20,
  question: "What is the main goal of Normalization?",
  answer: "To minimize redundancy and improve data integrity.",
  explanation: "It ensures efficient storage and consistent data management."
}
];

export default dbmsNormalization;