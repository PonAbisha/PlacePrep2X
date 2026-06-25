const sqlFundamentals = [
  {
    id: 1,
    question: "What is the operational difference between DDL and DML statements in SQL?",
    answer: "DDL (Data Definition Language) handles the structure or schema of the database using commands like CREATE, ALTER, and DROP. DML (Data Manipulation Language) manages the raw data values inside those structures using commands like SELECT, INSERT, UPDATE, and DELETE.",
    explanation: "DDL modifications alter the database blueprint and are usually auto-committed instantly by the engine. DML updates alter the record rows themselves and can be safely rolled back within transactions."
  },
  {
    id: 2,
    question: "What purpose do DCL and TCL commands serve in database management?",
    answer: "DCL (Data Control Language) manages security permissions using GRANT and REVOKE. TCL (Data Control Language) manages transactional integrity states using COMMIT, ROLLBACK, and SAVEPOINT.",
    explanation: "DCL determines which system users or API profiles can access specific objects, while TCL ensures sequences of data modifications either succeed entirely or get undone completely to avoid partial updates."
  },
  {
    id: 3,
    question: "What is the structural difference between the WHERE clause and the HAVING clause?",
    answer: "The WHERE clause filters individual row records before any aggregation takes place. The HAVING clause filters grouped summary blocks after the GROUP BY execution stage has completed.",
    explanation: "Because WHERE executes before groups are computed, you cannot use aggregate functions like SUM() or COUNT() inside a WHERE clause. Having is designed explicitly to evaluate those aggregate results."
  },
  {
    id: 4,
    question: "Why does the use of SELECT * run counter to software engineering performance best practices?",
    answer: "SELECT * forces the engine to scan and return every column in a table, causing unnecessary disk I/O, inflating network transit payload sizes, and breaking application mapping if the schema changes.",
    explanation: "Explicitly declaring columns allows the optimization engine to utilize index-only scans, bypassing the physical data tables entirely when possible, which significantly accelerates query execution speeds."
  },
  {
    id: 5,
    question: "What is the practical value of the DISTINCT keyword, and what performance overhead does it introduce?",
    answer: "DISTINCT filters out duplicate records from your query output stream. Its performance overhead includes forcing the database engine to sort the data rows or build an internal hash table to identify and drop matches.",
    explanation: "If a query processes millions of records, adding DISTINCT will introduce high memory consumption and CPU sorting loops. Use it only when business logic dictates unique row collection values."
  },
  {
    id: 6,
    question: "How do the ORDER BY clause modifiers ASC and DESC handle NULL values across different database engines?",
    answer: "By default, standard SQL treats NULL values as the lowest possible value (PostgreSQL puts them last for DESC; MySQL and SQL Server treat them as lowest, putting them first in ASC orders).",
    explanation: "You can control this behavior explicitly in modern engines using the syntax 'ORDER BY column_name ASC NULLS LAST' or 'NULLS FIRST' to ensure uniform display results regardless of the platform."
  },
  {
    id: 7,
    question: "What is the functional difference between the LIMIT/OFFSET clauses and the TOP clause?",
    answer: "LIMIT and OFFSET are ANSI SQL standard clauses used at the end of a query for pagination (common in PostgreSQL and MySQL). TOP is a proprietary Microsoft T-SQL prefix used right after SELECT.",
    explanation: "While they achieve similar pagination goals, LIMIT/OFFSET is highly modular for web applications shifting through data pages, whereas TOP captures absolute rows or percentages from the front of the result stream."
  },
  {
    id: 8,
    question: "What does the wild card character % represent inside a LIKE pattern-matching condition versus the _ character?",
    answer: "The % wildcard represents zero, one, or multiple variable characters. The _ wildcard represents exactly one single variable character position.",
    explanation: "For example, LIKE 'A%' matches 'A', 'Apple', and 'Action'. Conversely, LIKE 'A_' matches exactly two-character strings starting with A, such as 'An' or 'At'."
  },
  {
    id: 9,
    question: "Why should the BETWEEN operator be applied with caution when filtering DateTime columns?",
    answer: "BETWEEN is inclusive. When applied to dates without a timestamp, it defaults to midnight ('00:00:00'), which can cause transactions that happen on the final day's afternoon to be excluded.",
    explanation: "If you query 'BETWEEN 2026-01-01 AND 2026-01-03', the engine evaluates it up to '2026-01-03 00:00:00'. A record saved at 2 PM on January 3rd will fail the check. Using explicit >= and < boundaries is safer."
  },
  {
    id: 10,
    question: "What is the purpose of the AS keyword, and where can its defined aliases be referenced inside a query layout?",
    answer: "The AS keyword creates an alias to temporarily rename a column or table expression. Column aliases can only be referenced safely in the ORDER BY clause, whereas table aliases can be used anywhere.",
    explanation: "Because of the engine's logical order of processing, the SELECT clause runs *after* WHERE and GROUP BY. Therefore, trying to use a column alias inside a WHERE filter triggers a compilation error."
  },
  {
    id: 11,
    question: "What is the mathematical and operational output of an INNER JOIN?",
    answer: "An INNER JOIN evaluates two tables and returns only the rows where there is a perfect match matching the intersection criteria specified in the ON clause.",
    explanation: "If a row in Table A has a foreign key pointer that does not exist in Table B's primary key index, that entire record row is dropped completely from the resulting query dataset output."
  },
  {
    id: 12,
    question: "How does a LEFT OUTER JOIN preserve dataset rows compared to an INNER JOIN?",
    answer: "A LEFT OUTER JOIN returns all records from the left (first) table, along with matching rows from the right table. If no match exists, the right table's columns are populated with NULL values.",
    explanation: "This is crucial for identifying missing mappings or orphaned dependencies. For instance, joining a Customers table left to an Orders table preserves customers even if they have never placed an order."
  },
  {
    id: 13,
    question: "What is a RIGHT OUTER JOIN, and why is its explicit use often discouraged in modern development teams?",
    answer: "A RIGHT OUTER JOIN preserves all rows from the right (second) table while filling unmatched left values with NULLs. It is discouraged because it can be rewritten as a LEFT JOIN, which is easier to read.",
    explanation: "Human engineers read western code from left to right. Code maintainability improves significantly when queries consistently push primary driving data structures to the left of the join workflow."
  },
  {
    id: 14,
    question: "What is a FULL OUTER JOIN, and what query result problem does it solve?",
    answer: "A FULL OUTER JOIN combines the mechanics of both Left and Right joins, returning all rows from both tables and matching data where possible, while padding gaps with NULL values.",
    explanation: "It solves the problem of consolidating two separate data tracking systems. It extracts a complete view of both entities, catching structural mismatches on either side within a single pass."
  },
  {
    id: 15,
    question: "What is a CROSS JOIN, and what risk does it introduce to large database environments?",
    answer: "A CROSS JOIN performs a Cartesian Product, matching every single row from the first table with every single row from the second table without any filtering criteria.",
    explanation: "If Table A contains 10,000 rows and Table B contains 10,000 rows, a CROSS JOIN will generate 100,000,000 output rows, which can easily exhaust temp storage space and lock up production resources."
  },
  {
    id: 16,
    question: "What is a SELF JOIN, and what architectural data structures require its use?",
    answer: "A SELF JOIN is a regular inner or outer join where a table is joined to itself. It is required to traverse hierarchical schemas stored within a single table.",
    explanation: "An example is an Employees table containing an 'employee_id' and a 'manager_id' column. To print a report showing every employee's name next to their manager's name, you must join the table to itself using distinct aliases."
  },
  {
    id: 17,
    question: "What is the structural difference between a PRIMARY KEY constraint and a UNIQUE constraint?",
    answer: "A PRIMARY KEY uniquely identifies each row record and strictly prohibits NULL values. A UNIQUE constraint also enforces unique values across a column but allows a NULL value to be saved.",
    explanation: "A table can contain only one Primary Key, which typically dictates the physical arrangement of data on disk (clustered index). You can apply multiple independent Unique constraints across other columns."
  },
  {
    id: 18,
    question: "How does a FOREIGN KEY constraint enforce Referential Integrity between collaborating tables?",
    answer: "A FOREIGN KEY restricts a column's values to only those values that already exist in the primary key column of a referenced parent table, preventing invalid data entry.",
    explanation: "This constraint blocks users from adding an order record mapped to a non-existent customer ID, keeping the links between your database tables accurate and reliable."
  },
  {
    id: 19,
    question: "What happens when an operation triggers an ON DELETE CASCADE policy on a foreign key relationship?",
    answer: "If a parent record row is deleted, the database engine automatically intercepts the action and deletes all child records mapped to that parent foreign key across the system.",
    explanation: "While highly efficient for clearing out nested records cleanly, it presents an operational risk. An accidental deletion of a single customer profile can instantly wipe out years of historical order records."
  },
  {
    id: 20,
    question: "What is a CHECK constraint, and at what layer of data validation should it be utilized?",
    answer: "A CHECK constraint enforces a specific boolean validation condition on data values before allowing an insert or update operation to succeed at the database engine hardware layer.",
    explanation: "Example syntax includes 'CHECK (price > 0)'. While application software can validate forms, putting CHECK rules directly on the database schema provides a final, un-bypassable line of defense for data integrity."
  },
  {
    id: 21,
    question: "What is the structural purpose of the GROUP BY clause, and what happens to non-aggregated columns in the SELECT list?",
    answer: "The GROUP BY clause consolidates rows sharing identical values in specified columns into summary data blocks. Any column in the SELECT list that is not part of the GROUP BY clause must be wrapped inside an aggregate function.",
    explanation: "If you omit an aggregate function for a non-grouped column, the database engine throws a compilation error because it cannot determine which individual row value to display for the unified summary group."
  },
  {
    id: 22,
    question: "How does the COUNT(*) function differ from COUNT(column_name) when evaluating tables containing NULL values?",
    answer: "COUNT(*) counts every single row record that matches the query filters, including rows that contain entirely NULL values. COUNT(column_name) evaluates only that specific column and completely ignores any rows where that column value is NULL.",
    explanation: "If a table contains 10 rows and 2 rows have a NULL value in the 'email' column, COUNT(*) evaluates to 10, whereas COUNT(email) evaluates to 8. This distinction is critical for precise data auditing."
  },
  {
    id: 23,
    question: "What is the computational difference between the UNION and UNION ALL set operators?",
    answer: "UNION combines the result sets of two queries and runs an implicit deduplication sort step to remove duplicate rows. UNION ALL combines the datasets exactly as they are, preserving all duplicate entries.",
    explanation: "Because UNION ALL skips the expensive memory sorting and hashing steps needed to discover duplicates, it runs significantly faster and consumes far fewer server resources than UNION."
  },
  {
    id: 24,
    question: "What structural constraints must be met to successfully execute a Set Operation (UNION, INTERSECT, EXCEPT)?",
    answer: "Both queries must return the exact same number of columns, and the corresponding columns must share compatible data types positioned in the exact same chronological order from left to right.",
    explanation: "The database engine maps rows positionally. If Query 1 returns an Integer and a String, Query 2 must return an Integer and a String in that identical layout, or the query compiler will reject the operation."
  },
  {
    id: 25,
    question: "What is the operational output of the INTERSECT operator, and how can it be mimicked using a join?",
    answer: "INTERSECT returns only the unique rows that are common to the result sets of both queries. It can be mimicked using an INNER JOIN that filters across all matching columns.",
    explanation: "INTERSECT is ideal for finding common overlaps across distinct data streams. However, an explicit INNER JOIN or an EXISTS subquery is often preferred by optimization engines due to better index utilization."
  },
  {
    id: 26,
    question: "What does the EXCEPT (or MINUS) operator calculate, and why does query order matter?",
    answer: "EXCEPT returns all unique rows from the first query's result set that do not exist in the second query's result set. Query order matters because A EXCEPT B yields a completely different dataset than B EXCEPT A.",
    explanation: "Think of it as mathematical set subtraction (A - B). If you want to find users who registered but never placed an order, you select all users EXCEPT those present in the order logs."
  },
  {
    id: 27,
    question: "How does using the IN operator with a subquery compare to using the EXISTS operator?",
    answer: "IN loads the entire list of values returned by the subquery into memory before scanning the outer query. EXISTS checks a boolean condition, stopping the subquery execution the moment it finds the first matching row on disk.",
    explanation: "For small static lists, IN is highly readable. However, when parsing millions of records across tables, EXISTS scales much better because it utilizes a 'semi-join' optimization that avoids loading large data arrays into RAM."
  },
  {
    id: 28,
    question: "Why should you avoid using the NOT IN operator if the subquery target column contains NULL values?",
    answer: "If a subquery returns even a single NULL value, a NOT IN condition evaluates to UNKNOWN for the entire dataset, causing the outer query to return zero records.",
    explanation: "This happens because SQL uses three-valued logic (True, False, Unknown). Compiling `col != NULL` always results in UNKNOWN. To safely execute negative exclusions against nullable columns, use NOT EXISTS instead."
  },
  {
    id: 29,
    question: "What is the operational difference between the ANY/SOME operators and the ALL operator when modifying conditional checks?",
    answer: "ANY (or SOME) evaluates to true if the condition matches at least one single value in the subquery array. ALL evaluates to true only if the condition matches every single value in the returned array.",
    explanation: "For example, `WHERE price > ANY (10, 20, 30)` satisfies any record higher than 10. `WHERE price > ALL (10, 20, 30)` strictly filters for records higher than 30."
  },
  {
    id: 30,
    question: "What is the practical value of a Subquery inside the SELECT clause, and what constraint must it satisfy?",
    answer: "A subquery in the SELECT clause computes a dynamic column value for each row of the outer query. It must be a scalar subquery, meaning it can return exactly one value (one row and one column) per execution.",
    explanation: "If the inner SELECT subquery returns multiple rows or columns, the engine throws a runtime error because a single cell location in an output row grid cannot hold a multi-dimensional array."
  },
  {
    id: 31,
    question: "What is the structural difference between a Non-Correlated Subquery and a Correlated Subquery?",
    answer: "A Non-Correlated subquery is completely independent and runs once, passing its static result to the outer query. A Correlated subquery references columns from the outer query, forcing it to re-evaluate for every single row processed.",
    explanation: "Non-correlated queries are efficient because they run once. Correlated subqueries can cause severe performance bottlenecks on large tables since they mimic a nested loop pattern across every row."
  },
  {
    id: 32,
    question: "What is a View, and does it occupy physical data storage blocks on disk?",
    answer: "A View is a virtual table defined by a saved SQL query blueprint. It does not store copies of data records on disk; instead, it executes its underlying query dynamically whenever it is referenced.",
    explanation: "Views provide excellent security boundaries and simplify complex query logic by abstracting intricate joins behind a clean, reusable interface. Only the metadata blueprint definition is saved to the disk dictionary."
  },
  {
    id: 33,
    question: "What is the operational purpose of the inline CASE expression in SQL statements?",
    answer: "The CASE expression adds conditional if-then-else procedural logic directly into declarative SQL statements, outputting specific values based on evaluated criteria.",
    explanation: "It can be structured as a Simple Case (matching a single column value) or a Searched Case (evaluating distinct boolean criteria per WHEN branch), allowing you to categorize data on the fly within SELECT or ORDER BY blocks."
  },
  {
    id: 34,
    question: "How do the wild cards inside an explicit regular expression check (REGEXP/RLIKE) differ from standard LIKE clauses?",
    answer: "LIKE only supports basic wildcard positioning (% and _). REGEXP provides robust pattern matching using advanced regular expression syntax markers like character classes, anchors, and quantifiers.",
    explanation: "While `LIKE '%123%'` searches for a simple character string anywhere in a field, `REGEXP '^[0-9]{3}$'` enforces a strict rule requiring the field to contain exactly three digits from start to finish."
  },
  {
    id: 35,
    question: "Why can't you safely use mathematical equality checks (= or !=) when filtering for NULL values?",
    answer: "NULL represents an unknown or missing data state, not a concrete value. In SQL's three-valued logic system, comparing anything to NULL using standard operators returns UNKNOWN rather than true or false.",
    explanation: "To reliably filter or discover null entries, you must use the explicit semantic operators `IS NULL` or `IS NOT NULL` to evaluate the record's structural allocation state."
  },
  {
    id: 36,
    question: "What is the practical value of the COALESCE function, and how does it evaluate its arguments?",
    answer: "COALESCE evaluates a list of arguments in sequence and returns the very first non-NULL value it encounters in that array.",
    explanation: "It is widely used to provide fallback default values for nullable fields. For instance, `COALESCE(alternate_phone, home_phone, 'No Contact Provided')` ensures a clean string output."
  },
  {
    id: 37,
    question: "How does the IFNULL (or ISNULL) function differ from the COALESCE function?",
    answer: "IFNULL/ISNULL is a database-specific function (MySQL/SQL Server) that accepts exactly two arguments, replacing a null value with a single fallback. COALESCE is an ANSI-standard function that handles an unlimited number of arguments.",
    explanation: "While `IFNULL(val, 0)` is efficient for simple null patches, using `COALESCE` is generally preferred because it keeps your code portable across different SQL database engines."
  },
  {
    id: 38,
    question: "What does the NULLIF function calculate, and what is a common architectural use case for it?",
    answer: "NULLIF compares two arguments. If they are equal, it returns NULL; if they are different, it returns the first argument.",
    explanation: "A common use case is preventing divide-by-zero crashes. By wrapping the denominator in a NULLIF call, like `total_revenue / NULLIF(total_clicks, 0)`, a zero value safely evaluates to NULL instead of crashing the system."
  },
  {
    id: 39,
    question: "What is the operational difference between the CONCAT function and the standard string concatenation operator (|| or +)?",
    answer: "The CONCAT function automatically coerces non-string data types and treats NULL values as empty strings. Standard operators like `+` or `||` will cause the entire output string to evaluate to NULL if even a single variable in the chain is null.",
    explanation: "Executing `'Hello ' || NULL` results in NULL in many standard databases. Using `CONCAT('Hello ', NULL)` safely bypasses this trap, outputting 'Hello ' by handling the missing data cleanly."
  },
  {
    id: 40,
    question: "What parameters does the SUBSTRING (or SUBSTR) function require, and how does string index counting differ from standard programming languages?",
    answer: "SUBSTRING requires a target string, a starting position index, and an optional length modifier. Unlike languages like JavaScript or Python where arrays start at index 0, SQL string indexes start at 1.",
    explanation: "Compiling `SUBSTRING('DATABASE', 1, 4)` extracts the first four characters, returning 'DATA'. Passing a starting index of 0 can lead to silent data clipping or empty string returns depending on the engine."
  },
  {
    id: 41,
    question: "What is the purpose of the INSTR (or POSITION) function in text processing tasks?",
    answer: "INSTR scans a target string for a specified substring and returns the starting integer index of its first occurrence. If the substring is not found, it returns 0.",
    explanation: "This is useful for parsing unstructured text fields dynamically, allowing you to isolate boundaries for other operations like extracting usernames out of raw email strings."
  },
  {
    id: 42,
    question: "Why are the TRIM, LTRIM, and RTRIM functions critical during data ingestion cleanups?",
    answer: "TRIM strips away invisible leading and trailing whitespace characters from string entries. LTRIM handles only the left margin, while RTRIM targets the right margin.",
    explanation: "Invisible spaces (like `' admin'`) can break string matching rules and authentication lookups. Running input strings through clean-up functions ensures uniform values before they hit your indexes."
  },
  {
    id: 43,
    question: "What is the functional difference between the CAST function and the CONVERT function?",
    answer: "CAST is an ANSI SQL standard function used to change data types. CONVERT is a proprietary function (specific to SQL Server) that provides an optional style parameter for advanced date formatting.",
    explanation: "Syntax looks like `CAST(expression AS data_type)`. For standard applications, stick to CAST to preserve cross-platform database compatibility; use CONVERT when dealing with legacy date-string translations."
  },
  {
    id: 44,
    question: "What trap can occur when utilizing the ROUND function on floating-point numbers vs Decimal data types?",
    answer: "Floating-point numbers (FLOAT/REAL) use approximate binary math, which can cause unexpected rounding errors due to precision limits. DECIMAL/NUMERIC types store exact values, ensuring highly accurate rounding calculations.",
    explanation: "For financial systems tracking money, always use the DECIMAL type. Rounding approximate floats can introduce tiny inaccuracies that skew final financial calculations under load."
  },
  {
    id: 45,
    question: "What is the operational output of the CEIL (CEILING) function versus the FLOOR function?",
    answer: "CEIL rounds a numeric value up to the next nearest integer. FLOOR rounds a numeric value down to the next lower integer.",
    explanation: "For example, evaluating `CEIL(4.1)` returns 5, whereas `FLOOR(4.9)` drops the decimal entirely to return 4. These functions are ideal for calculating structural application boundaries like pagination counts."
  },
  {
    id: 46,
    question: "How does the NOW() function handle time tracking differently than the CURDATE() function?",
    answer: "NOW() captures the current date along with a precision timestamp (date and time). CURDATE() returns only the current date block, normalizing the time portion to midnight.",
    explanation: "Use CURDATE() when group-filtering transactions by day to avoid timestamp conflicts. Use NOW() when logging fine-grained transactional audit trails to track precise event timelines."
  },
  {
    id: 47,
    question: "Why should you use the DATEADD (or INTERVAL) function instead of manual addition (+ 1) to modify date objects?",
    answer: "DATEADD automatically handles complex calendar rules like leap years, variable month lengths, and daylight saving shifts. Manual additions treat dates like simple integers, which can corrupt your data.",
    explanation: "Adding 1 manually to a date object representing '2026-02-28' might break if the system fails to calculate month limits. `DATEADD` or `INTERVAL 1 DAY` safely increments the calendar state without errors."
  },
  {
    id: 48,
    question: "What does the DATEDIFF function calculate, and why is parameter placement critical?",
    answer: "DATEDIFF calculates the temporal interval boundary difference between two date arguments. Parameter placement is critical because swapping the start and end dates switches the output between positive and negative numbers.",
    explanation: "Depending on your SQL dialect, the order of parameters varies. Passing dates in the wrong order can result in unexpected negative value flags across your application reporting streams."
  },
  {
    id: 49,
    question: "What is the purpose of the EXTRACT (or DATE_PART) function in analytical time-series reporting?",
    answer: "EXTRACT isolates a specific sub-component (such as YEAR, MONTH, DAY, HOUR, or WEEK) from a composite DateTime object as an independent integer value.",
    explanation: "This is essential for seasonal business trend tracking, allowing you to group years of historical sales records by month or week of the year to analyze historical performance metrics."
  },
  {
    id: 50,
    question: "What is the operational value of an Upsert configuration (INSERT ... ON DUPLICATE KEY UPDATE / MERGE)?",
    answer: "An Upsert attempts to insert a new row record into a table, but if a primary key or unique index conflict occurs, it gracefully catches the error and updates the existing row instead.",
    explanation: "This optimizes data sync pipelines by avoiding defensive pre-queries. It eliminates the need to run separate 'SELECT-then-INSERT-or-UPDATE' check loops, completing the operation in a single atomic database pass."
  }
];
export default sqlFundamentals;