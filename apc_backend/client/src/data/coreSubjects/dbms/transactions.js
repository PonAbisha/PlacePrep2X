const dbmsTransactions = [
{
  id: 1,
  question: "What is a Transaction in DBMS?",
  answer: "A logical unit of work performed on a database.",
  explanation: "A transaction consists of one or more operations that must either complete successfully together or fail together."
},
{
  id: 2,
  question: "Why are transactions important?",
  answer: "They maintain data consistency and integrity.",
  explanation: "Transactions ensure that the database remains in a valid state even when failures occur."
},
{
  id: 3,
  question: "What are ACID Properties?",
  answer: "Atomicity, Consistency, Isolation, and Durability.",
  explanation: "ACID properties guarantee reliable processing of database transactions."
},
{
  id: 4,
  question: "What is Atomicity?",
  answer: "All operations in a transaction occur completely or not at all.",
  explanation: "If one operation fails, the entire transaction is rolled back."
},
{
  id: 5,
  question: "What is Consistency?",
  answer: "A transaction brings the database from one valid state to another.",
  explanation: "Database rules and constraints must remain satisfied after execution."
},
{
  id: 6,
  question: "What is Isolation?",
  answer: "Transactions execute independently of one another.",
  explanation: "Concurrent transactions should not interfere with each other."
},
{
  id: 7,
  question: "What is Durability?",
  answer: "Committed data remains permanent even after system failure.",
  explanation: "Once a transaction is committed, its changes are permanently stored."
},
{
  id: 8,
  question: "What is COMMIT?",
  answer: "A command that permanently saves transaction changes.",
  explanation: "After COMMIT, changes become visible to other users."
},
{
  id: 9,
  question: "What is ROLLBACK?",
  answer: "A command that undoes transaction changes.",
  explanation: "ROLLBACK restores the database to its previous consistent state."
},
{
  id: 10,
  question: "What is SAVEPOINT?",
  answer: "A marker inside a transaction.",
  explanation: "SAVEPOINT allows rolling back to a specific point without undoing the entire transaction."
},
{
  id: 11,
  question: "What is Transaction State?",
  answer: "The current stage of a transaction.",
  explanation: "Common states include Active, Partially Committed, Failed, Aborted, and Committed."
},
{
  id: 12,
  question: "What is an Active State?",
  answer: "The transaction is currently executing.",
  explanation: "Database operations are being performed during this stage."
},
{
  id: 13,
  question: "What is a Committed State?",
  answer: "The transaction has completed successfully.",
  explanation: "All changes are permanently stored in the database."
},
{
  id: 14,
  question: "What is an Aborted State?",
  answer: "The transaction has been rolled back.",
  explanation: "Changes made by the transaction are discarded."
},
{
  id: 15,
  question: "What is Concurrency Control?",
  answer: "A mechanism for managing simultaneous transactions.",
  explanation: "It ensures database consistency when multiple users access data at the same time."
},
{
  id: 16,
  question: "What is a Deadlock?",
  answer: "A situation where transactions wait indefinitely for each other.",
  explanation: "Deadlocks occur when each transaction holds a resource needed by another."
},
{
  id: 17,
  question: "What is a Lock in DBMS?",
  answer: "A mechanism used to control concurrent access to data.",
  explanation: "Locks prevent multiple transactions from modifying the same data simultaneously."
},
{
  id: 18,
  question: "What is Shared Lock?",
  answer: "A lock that allows multiple transactions to read data.",
  explanation: "Shared locks prevent modification but allow concurrent reads."
},
{
  id: 19,
  question: "What is Exclusive Lock?",
  answer: "A lock that allows a transaction to modify data.",
  explanation: "No other transaction can read or write the locked data."
},
{
  id: 20,
  question: "What is Two-Phase Locking (2PL)?",
  answer: "A protocol used to ensure serializability.",
  explanation: "Transactions first acquire locks (growing phase) and then release locks (shrinking phase)."
}
];

export default dbmsTransactions;

