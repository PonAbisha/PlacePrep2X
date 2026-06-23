const dbmsAdvanced = [
{
  id: 1,
  question: "What is Serializability?",
  answer: "The property that ensures concurrent transactions produce the same result as serial execution.",
  explanation: "Serializability is the primary correctness criterion for concurrent transaction execution."
},
{
  id: 2,
  question: "Why is Serializability important?",
  answer: "It ensures data consistency in concurrent environments.",
  explanation: "Without serializability, concurrent transactions may lead to incorrect database states."
},
{
  id: 3,
  question: "What is Two-Phase Locking (2PL)?",
  answer: "A locking protocol that ensures serializability.",
  explanation: "Transactions first acquire locks (growing phase) and then release them (shrinking phase)."
},
{
  id: 4,
  question: "What is Strict Two-Phase Locking?",
  answer: "A variant of 2PL where locks are released only after commit or rollback.",
  explanation: "Strict 2PL prevents cascading rollbacks and improves recoverability."
},
{
  id: 5,
  question: "What is MVCC?",
  answer: "Multi-Version Concurrency Control.",
  explanation: "MVCC allows multiple versions of data to exist, enabling concurrent reads and writes without heavy locking."
},
{
  id: 6,
  question: "What are Dirty Reads?",
  answer: "Reading uncommitted data from another transaction.",
  explanation: "If the transaction rolls back, the read data becomes invalid."
},
{
  id: 7,
  question: "What is a Non-Repeatable Read?",
  answer: "A row returns different values when read multiple times.",
  explanation: "This occurs when another transaction modifies the row between reads."
},
{
  id: 8,
  question: "What is a Phantom Read?",
  answer: "New rows appear when a query is executed again.",
  explanation: "Another transaction inserts records that satisfy the query condition."
},
{
  id: 9,
  question: "What is an Isolation Level?",
  answer: "A setting that controls transaction visibility.",
  explanation: "Isolation levels balance consistency and performance."
},
{
  id: 10,
  question: "What are the common Isolation Levels?",
  answer: "Read Uncommitted, Read Committed, Repeatable Read, Serializable.",
  explanation: "Higher isolation provides stronger consistency but may reduce performance."
},
{
  id: 11,
  question: "What is Database Replication?",
  answer: "Copying data from one database server to another.",
  explanation: "Replication improves availability, fault tolerance, and read performance."
},
{
  id: 12,
  question: "What is Database Sharding?",
  answer: "Splitting data across multiple database servers.",
  explanation: "Sharding improves scalability by distributing data horizontally."
},
{
  id: 13,
  question: "What is Horizontal Partitioning?",
  answer: "Dividing rows across multiple tables or servers.",
  explanation: "Each partition contains a subset of rows."
},
{
  id: 14,
  question: "What is Vertical Partitioning?",
  answer: "Dividing columns across multiple tables.",
  explanation: "Each partition contains a subset of columns."
},
{
  id: 15,
  question: "What is Query Optimization?",
  answer: "The process of improving query execution efficiency.",
  explanation: "The optimizer chooses the most efficient execution plan."
},
{
  id: 16,
  question: "What is an Execution Plan?",
  answer: "A roadmap showing how a query will be executed.",
  explanation: "Execution plans help identify performance bottlenecks."
},
{
  id: 17,
  question: "What is a B+ Tree?",
  answer: "A balanced tree structure used for indexing.",
  explanation: "Most database indexes are implemented using B+ Trees because of efficient searching."
},
{
  id: 18,
  question: "What is a Hash Index?",
  answer: "An index based on hash functions.",
  explanation: "Hash indexes are very efficient for equality searches but not for range queries."
},
{
  id: 19,
  question: "What is the CAP Theorem?",
  answer: "Consistency, Availability, and Partition Tolerance.",
  explanation: "A distributed system can fully guarantee only two of these three properties at the same time."
},
{
  id: 20,
  question: "What is a Distributed Database?",
  answer: "A database whose data is stored across multiple locations.",
  explanation: "Distributed databases improve scalability, availability, and fault tolerance."
}
];

export default dbmsAdvanced;
