const sqlAdvanced = [
  {
    id: 1,
    question: "When analyzing the output of an 'EXPLAIN ANALYZE' command, what is the core operational difference between a 'Hash Join', a 'Merge Join', and a 'Nested Loop Join'?",
    answer: "A Nested Loop Join outer-scans a table and matches it against an inner table row-by-row ($O(M \\times N)$), ideal for small, indexed datasets. A Hash Join builds an in-memory hash table of the smaller dataset to scan the larger table in a single linear pass ($O(M + N)$), ideal for unsorted large tables. A Merge Join pre-sorts both datasets by the join key and sweeps them concurrently ($O(M \\log M + N \\log N)$), which is highly efficient if indexes already match the sort criteria.",
    explanation: "If the optimizer forces a Nested Loop on two massive, unindexed tables, your query will hang. Spotting these choices in execution plans allows you to optimize index placements or adjust memory allocations like `work_mem` to favor high-speed Hash operations instead."
  },
  {
    id: 2,
    question: "What structural bottleneck occurs when an execution plan reveals a 'Key Lookup' (or Bookmarks Lookup), and how do you refactor the schema to eliminate it?",
    answer: "A Key Lookup occurs when a query utilizes a non-clustered index to filter records, but the index tree doesn't contain all the columns requested in the SELECT clause. The engine is forced to execute an expensive point-seek back to the clustered index on disk for every matched row. You eliminate it by creating a Covering Index using the 'INCLUDE' clause to attach the missing attributes to the non-clustered index.",
    explanation: "If a non-clustered index targets `email` but your query requests `SELECT name, age WHERE email = x`, the engine finds the row pointer via email, then hops to disk to pull name and age. Running `CREATE INDEX idx ON users(email) INCLUDE(name, age)` caches those fields directly in the index tree, reducing disk hops to zero."
  },
  {
    id: 3,
    question: "Explain the concept of 'Write-Ahead Logging' (WAL). Why does appending transaction mutations to a log file *before* updating data blocks guarantee durability without destroying write performance?",
    answer: "Updating production table pages on disk requires erratic, random disk I/O, which is incredibly slow. Instead, WAL logs structural mutations sequentially to an append-only log file in memory and flushes it to disk in a single fast, atomic pass during a COMMIT. The true table files are updated later in the background (checkpointing).",
    explanation: "If the server loses power unexpectedly, the main data files might be missing committed modifications. Upon reboot, the engine scans the sequential WAL logs on disk to replay and restore all committed transactions (Roll-Forward phase) and undo uncommitted partial transactions (Roll-Back phase)."
  },
  {
    id: 4,
    question: "What is the 'Phantom Read' concurrency anomaly at a lower database engine level, and what specific lock architecture do engines like InnoDB or SQL Server use to block it under the SERIALIZABLE isolation level?",
    answer: "A Phantom Read occurs when Transaction A reads a range of rows matching a search predicate, and Transaction B inserts a brand-new row into that same range before Transaction A commits. To block this, engines apply 'Gap Locking' or 'Next-Key Locking', which locks not only the existing records but also the empty index slots ('gaps') between those records.",
    explanation: "Standard row locks cannot protect against phantom reads because you cannot place a lock on a record that doesn't exist yet. By locking the index intervals, any concurrent attempt by Transaction B to run an `INSERT` statement into that range is forced to queue up until Transaction A releases its gap locks."
  },
  {
    id: 5,
    question: "What is the 'Write Skew' anomaly in Snapshot Isolation models, and why can it slip past a REPEATABLE READ isolation barrier?",
    answer: "Write Skew happens when two concurrent transactions read overlapping data states, evaluate a shared business rule, make independent modifications to *completely different* rows, and commit. Because they altered distinct records, standard row locks don't collide, allowing both transactions to commit and violate the global business constraint.",
    explanation: "Imagine a medical on-call system requiring at least one doctor active. Doctor A and Doctor B both run `SELECT COUNT(*) WHERE active = true` (returns 2). Both think they can leave. Transaction A sets Doctor A to inactive; Transaction B sets Doctor B to inactive. Both commit because no shared row was modified. This leaves 0 active doctors, breaking the business rule."
  },
  {
    id: 6,
    question: "How does the 'Lock Escalation' routine operate in enterprise relational engines, and what concurrency risk does it introduce to high-frequency systems?",
    answer: "Lock Escalation occurs when a single transaction acquires an excessive number of fine-grained row locks (typically passing a 5,000-lock threshold on a single table). To save system memory, the engine automatically converts those thousands of row locks into a single coarse Table Lock.",
    explanation: "While escalation prevents the server's lock manager memory from exhausting RAM resources, converting a table structure to an Exclusive (X) Table Lock instantly blocks all concurrent transactions attempting to read or write to completely unrelated rows in that table, causing sudden thread starvation."
  },
  {
    id: 7,
    question: "What is 'Parameter Sniffing' in cached execution optimization contexts, and when does it degrade query performance?",
    answer: "Parameter Sniffing occurs when a stored procedure compiles for the very first time. The optimizer inspects ('sniffs') the initial input parameters and selects an execution plan tailored specifically for that data distribution. It degrades performance if subsequent execution inputs require a completely different strategy.",
    explanation: "If the initial execution inputs match an uncommon ID, the compiler selects a fast Index Seek. If the next execution runs an ID that matches 95% of the table, using that cached Index Seek forces millions of single disk hops instead of a clean, fast Table Scan, causing the query to execute slowly until the cache is cleared."
  },
  {
    id: 8,
    question: "Explain the structural mechanics of a 'Covering Index Scan' vs an 'Index-Only Scan' inside database memory storage.",
    answer: "An Index-Only Scan reads records strictly out of an index structure without touching the main data table blocks. A Covering Index Scan is a variant where the engine still reads data out of the index, but because no high-selectivity search criteria exists, it is forced to scan the *entire* index structure from end to end instead of executing a pinpoint seek lookup.",
    explanation: "While an Index Scan is still faster than a full Table Scan (since index structures are much narrower and take up fewer pages in RAM), it still indicates an $O(N)$ scanning operation. If a query slows down, you likely need to reorder your composite index columns to convert that Scan into an $O(\log N)$ Index Seek."
  },
  {
    id: 9,
    question: "How does the 'Saga Pattern' maintain data consistency across distributed database systems where traditional Two-Phase Commit (2PC) protocols fail to scale?",
    answer: "The Saga Pattern abandons distributed acid locks entirely. It manages transactions as a series of local database updates across individual microservices. Each step updates its local database; if a later step fails, the Saga orchestrator coordinates a series of 'Compensating Transactions' to undo the changes in reverse order.",
    explanation: "Two-Phase Commit (2PC) forces all distributed nodes to lock their local rows until a global coordinator authorizes a commit. In high-scale systems, any network latency or node failure locks up your entire ecosystem. Sagas exchange strict consistency for high availability, utilizing eventual consistency models to resolve errors cleanly."
  },
  {
    id: 10,
    question: "What is 'Deadlock Priority' configuration, and how can engineers use it to control which transaction is terminated during a circular dependency lockup?",
    answer: "Deadlock Priority allows developers to assign a structural weight or importance value to specific transactions. When the database engine's deadlock monitor detects a circular lockup, it immediately skips transactions with high priority and terminates the thread running the lowest priority score, rolling back its changes.",
    explanation: "In enterprise architectures, you can assign overnight data synchronization operations a low deadlock priority score (`SET DEADLOCK_PRIORITY LOW`). This ensures that if a locking conflict occurs with a high-priority, real-time customer checkout transaction, the system automatically terminates the background sync script without impacting your users."
  },
  {
    id: 11,
    question: "Explain the performance optimization benefits of 'Table Partitioning' (Range, List, Hash), and how 'Partition Pruning' accelerates search lookups.",
    answer: "Table Partitioning splits a massive logical table into smaller, independent physical data segments on disk based on a specific boundary key. 'Partition Pruning' is an optimization where the query engine looks at the query filters, determines exactly which physical segments contain that data, and completely ignores the irrelevant partitions during execution.",
    explanation: "If a logs table tracking 1 billion rows is partitioned by month, a query searching for data in `2026-06` will use Partition Pruning to isolate and scan only that single month's physical file block. The optimizer completely bypasses the remaining 11 months of data, reducing disk I/O and accelerating query execution speeds."
  },
  {
    id: 12,
    question: "What is the structural cause of the 'Hotspotting Problem' in Sharded Databases, and how does selecting a high-cardinality shard key prevent it?",
    answer: "Hotspotting occurs when a poorly chosen shard key routes a high volume of concurrent data writes or queries to a single physical server instance, leaving adjacent database nodes completely idle. Selecting a high-cardinality key with uniform distribution ensures data writes are distributed evenly across your entire cluster infrastructure.",
    explanation: "If you shard an e-commerce platform using `order_date` as the shard key, 100% of today's incoming checkout transactions will hit the single server assigned to today's date, overloading its CPU. Sharding by a combined hash like `HASH(customer_id)` ensures traffic is scattered evenly across all available servers."
  },
  {
    id: 13,
    question: "How does 'Read Replication Lag' occur in asynchronous Master-Slave database environments, and what application architectural bug does it introduce?",
    answer: "Replication Lag happens when the Master node writes updates to its transaction log quickly, but the network latency or heavy CPU load on the Slave replica delays it from parsing and applying those updates. This introduces a 'Read-Your-Own-Writes' bug, where a user saves data and refreshes the page, only to see stale or missing information.",
    explanation: "If an app routes an `UPDATE` query to the Master node and immediately sends the subsequent `SELECT` query to a lagging Slave node, the user will think their save action failed. To fix this, you must adjust application routing logic to send critical read requests to the Master node for a few seconds immediately following any write operation."
  },
  {
    id: 14,
    question: "What is 'Connection Pooling Starvation', and how do you diagnose it when database CPU metrics look low but application API response latency spikes?",
    answer: "Connection Pooling Starvation occurs when all available database handlers in your application's connection pool are occupied, forcing incoming API threads to block and queue up waiting for a connection socket. It displays low database CPU metrics because queries aren't actually running; the bottleneck sits entirely in the application's connection layer.",
    explanation: "If your pool size is capped at 20 but an un-optimized API query holds a connection open for 5 seconds due to a slow network download, the pool quickly empties. Subsequent API requests bottleneck at the application gateway, showing high application latency while the database engine remains idle waiting for commands."
  },
  {
    id: 15,
    question: "What is the specific utility of an 'Index Fill Factor' setting, and how do you configure it for write-heavy vs read-heavy database architectures?",
    answer: "The Fill Factor determines how much empty space the engine leaves inside each B+Tree page block when building or rebuilding indexes. For read-heavy systems, you set it to 100% to maximize data density. For write-heavy systems, you lower it to 70–80% to leave buffer space for future row updates.",
    explanation: "If Fill Factor is 100%, inserting new rows forces immediate 'Page Splits' because pages have no empty slots. This causes disk fragmentation. Lowering the fill factor leaves empty slots inside pages, allowing new inserts to slide in smoothly without breaking the index structure."
  },
  {
    id: 16,
    question: "Explain the difference between 'Logical Backups' (pg_dump/mysqldump) and 'Physical Backups' (WAL Streaming/Snapshot copy) regarding recovery speed thresholds.",
    answer: "Logical backups parse data into text strings of raw SQL statements (`INSERT INTO...`). Restoring it requires rebuilding tables, running indexes, and validating constraints from scratch, which is incredibly slow. Physical backups copy the literal binary blocks and file directories directly, enabling near-instant restorations.",
    explanation: "For a 5TB production system, running a logical backup text file would take days to parse and execute. A physical backup simply streams the raw underlying binary files back into the database directory, allowing the database engine to spin up and recover operational status in a fraction of the time."
  },
  {
    id: 17,
    question: "What is 'Phantom Protection' in database lock architecture, and why is it omitted from standard MVCC engines like PostgreSQL under Read Committed modes?",
    answer: "Phantom Protection prevents new records from appearing inside an active range query. It is omitted under the `Read Committed` isolation level because the engine's design rules state that every single statement must read the freshest, real-time snapshot of committed data on disk.",
    explanation: "Under MVCC Read Committed isolation, each new query statement generates a fresh memory snapshot. If an adjacent thread inserts a new record and commits it, your next query statement inside that same transaction will naturally see that new row. If you require absolute phantom protection, you must upgrade the transaction block to `Serializable` mode."
  },
  {
    id: 18,
    question: "How does a 'Distributed Deadlock' differ from a local database deadlock condition, and why are traditional lock dependency graphs difficult to manage across shards?",
    answer: "A local deadlock occurs within a single server instance's memory space, where a single monitor thread can easily identify circular locks. A Distributed Deadlock occurs when circular dependency loops span across entirely separate physical servers and network networks, making it impossible for an individual node to detect the problem locally.",
    explanation: "Server 1 knows Transaction A is waiting for Server 2. Server 2 knows Transaction B is waiting for Server 1. Neither server can see the complete circular dependency graph on its own. Resolving distributed deadlocks requires a global orchestrator or strict execution timeout thresholds to terminate stale threads."
  },
  {
    id: 19,
    question: "What is the purpose of the 'VACUUM' (or Optimize/Purge) engine daemon in MVCC-based databases like PostgreSQL, and what risk occurs if it fails to execute over time?",
    answer: "Because MVCC doesn't overwrite data rows directly during updates or deletions, it leaves dead rows ('tuples') behind in memory. The VACUUM daemon sweeps the database to mark these dead rows as free space for future writes. If it fails to run, the system suffers from 'Table Bloat' and risks a 'Transaction ID Wraparound' crash.",
    explanation: "If dead tuples aren't purged, queries must scan through gigabytes of dead space, severely degrading performance. Worse, PostgreSQL tracks transactions using a 32-bit counter. If vacuuming fails to freeze old transaction IDs before the counter wraps around, the engine will force an emergency shutdown to prevent data corruption."
  },
  {
    id: 20,
    question: "Explain the concept of 'CQRS' (Command Query Responsibility Segregation) pattern in high-scale database system architecture.",
    answer: "CQRS completely separates modification commands (Inserts, Updates, Deletes) from read query operations into entirely separate application code models and distinct database infrastructures.",
    explanation: "By decoupling models, you can optimize your write database schema for transactional integrity (3NF relational database) while routing read operations to a separate, denormalized NoSQL cache or Elasticsearch engine. This eliminates concurrency locking bottlenecks between readers and writers, allowing both layers to scale independently."
  }
];

export default sqlAdvanced;