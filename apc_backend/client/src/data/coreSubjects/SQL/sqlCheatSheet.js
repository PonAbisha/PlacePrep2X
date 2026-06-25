const sqlCheatSheet = [
  {
    section: "Query Execution Lifecycle",
    topics: [
      {
        title: "Logical Query Processing Order",
        syntax: `
-- Written Syntax Order       -- Logical Processing Order
1. SELECT                     1. FROM & JOINs
2. FROM                       2. WHERE
3. JOIN / ON                  3. GROUP BY
4. WHERE                      4. HAVING
5. GROUP BY                   5. SELECT
6. HAVING                     6. DISTINCT
7. ORDER BY                   7. ORDER BY
8. LIMIT / OFFSET;            8. LIMIT / OFFSET;
`,
        explanation: "The database engine runs clauses in an execution sequence rather than their written layout. This explains why an alias created in the SELECT projection block cannot be read inside a WHERE clause."
      }
    ]
  },
  {
    section: "Data Definition Language (DDL)",
    topics: [
      {
        title: "ALTER TABLE - Add Column",
        syntax: `
ALTER TABLE students 
ADD COLUMN email VARCHAR(255);
`,
        explanation: "Appends a new structural attribute column to an existing table schema."
      },
      {
        title: "ALTER TABLE - Drop Column",
        syntax: `
ALTER TABLE students 
DROP COLUMN status_flag;
`,
        explanation: "Permanently deletes a column component and all its underlying saved records from the table physical disk storage blocks."
      },
      {
        title: "ALTER TABLE - Modify Data Type",
        syntax: `
-- MySQL / MariaDB            -- PostgreSQL
ALTER TABLE students          ALTER TABLE students 
MODIFY COLUMN name            ALTER COLUMN name 
VARCHAR(250);                 TYPE VARCHAR(250);
`,
        explanation: "Alters the internal storage layout or length parameter constraints of an existing table column."
      },
      {
        title: "DROP vs TRUNCATE vs DELETE",
        syntax: `
DROP TABLE logs;     -- Deletes structure, data, and metadata.
TRUNCATE TABLE logs; -- Drops data blocks instantly; keeps structure.
DELETE FROM logs;    -- Scans and removes rows line-by-line; logs actions.
`,
        explanation: "DROP deletes everything. TRUNCATE resets table pages with low system logging overhead. DELETE evaluates criteria row-by-row inside transactions."
      }
    ]
  },
  {
    section: "Advanced Data Filtering",
    topics: [
      {
        title: "LIKE String Wildcards",
        syntax: `
SELECT * FROM users WHERE name LIKE 'A%';  -- Starts with A
SELECT * FROM users WHERE name LIKE '%m';  -- Ends with m
SELECT * FROM users WHERE name LIKE '_a%'; -- 'a' in second index position
`,
        explanation: "Performs basic text character searches. The % character represents zero or more variable positions; the _ symbol dictates exactly one variable index location."
      },
      {
        title: "Handling NULL Comparisons",
        syntax: `
-- INCORRECT                  -- CORRECT
SELECT * FROM users           SELECT * FROM users 
WHERE phone = NULL;           WHERE phone IS NULL;
`,
        explanation: "Because SQL utilizes three-valued logic, explicit math operators (=, !=) always yield an UNKNOWN state when evaluating NULL. You must use IS NULL or IS NOT NULL checks instead."
      }
    ]
  },
  {
    section: "Built-In Control Flow & Logic",
    topics: [
      {
        title: "Simple CASE Expression",
        syntax: `
SELECT name,
       CASE status
            WHEN 1 THEN 'Active'
            WHEN 0 THEN 'Inactive'
            ELSE 'Unknown'
       END AS account_status
FROM users;
`,
        explanation: "Evaluates a single expression against a sequence of static values to branch output values inline."
      },
      {
        title: "Searched CASE Expression",
        syntax: `
SELECT name,
       CASE 
            WHEN score >= 90 THEN 'Tier A'
            WHEN score >= 75 THEN 'Tier B'
            ELSE 'Tier C'
       END AS performance_grade
FROM students;
`,
        explanation: "Evaluates completely independent Boolean conditions sequentially per row item, similar to standard if-else programming chains."
      },
      {
        title: "COALESCE Fallbacks",
        syntax: `
SELECT name, 
       COALESCE(alternate_phone, home_phone, 'No Contact') AS active_contact
FROM profiles;
`,
        explanation: "Evaluates arguments from left to right and project-returns the very first non-NULL attribute value encountered in the sequence array."
      },
      {
        title: "Zero-Division Shielding via NULLIF",
        syntax: `
SELECT product_id, 
       total_revenue / NULLIF(total_units_sold, 0) AS unit_price
FROM sales_ledger;
`,
        explanation: "Compares two arguments. If they match, it returns NULL. This prevents fatal divide-by-zero runtime application errors by changing zero denominators into safe null calculations."
      }
    ]
  },
  {
    section: "Set Operator Operations",
    topics: [
      {
        title: "UNION vs UNION ALL",
        syntax: `
-- Deduplicates data rows     -- Appends raw data streams directly
SELECT email FROM leads       SELECT email FROM leads
UNION                         UNION ALL
SELECT email FROM users;      SELECT email FROM users;
`,
        explanation: "UNION forces an explicit sorting pass to clear duplicate rows across query sets. UNION ALL skips this overhead, making it significantly faster."
      },
      {
        title: "INTERSECT",
        syntax: `
SELECT customer_id FROM active_subscribers
INTERSECT
SELECT customer_id FROM feedback_respondents;
`,
        explanation: "Returns only the unique record rows that appear in the result sets of both executing queries."
      },
      {
        title: "EXCEPT / MINUS",
        syntax: `
SELECT customer_id FROM active_subscribers
EXCEPT
SELECT customer_id FROM premium_tier_users;
`,
        explanation: "Performs mathematical set subtraction. It isolates unique rows from the first query block that are missing from the second result dataset."
      }
    ]
  },
  {
    section: "Analytical Window Functions",
    topics: [
      {
        title: "ROW_NUMBER vs RANK vs DENSE_RANK",
        syntax: `
SELECT item_id, price,
       ROW_NUMBER() OVER (ORDER BY price DESC) AS row_num,
       RANK()       OVER (ORDER BY price DESC) AS rnk,
       DENSE_RANK() OVER (ORDER BY price DESC) AS dns_rnk
FROM inventory;
-- Tied row output mapping metrics list:
-- Values: [100, 90, 90, 80]
-- row_num:  [1,   2,  3,  4]
-- rnk:      [1,   2,  2,  4] (Skips numbers due to tie gaps)
-- dns_rnk:  [1,   2,  2,  3] (Keeps sequential rank values tight)
`,
        explanation: "Generates ordered numeric tracking evaluations across data sets. RANK skips ahead if ties occur; DENSE_RANK maintains tight consecutive counters."
      },
      {
        title: "Running Sums via Explicit Framing",
        syntax: `
SELECT transaction_id, user_id, amount,
       SUM(amount) OVER (
           PARTITION BY user_id 
           ORDER BY transaction_date
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_balance
FROM ledger;
`,
        explanation: "Computes dynamic moving balances over time by setting a custom window frame that captures records from the first item up to the current row index."
      },
      {
        title: "LAG / LEAD Offset Queries",
        syntax: `
SELECT page_id, timestamp,
       LAG(page_id, 1)  OVER (PARTITION BY user_id ORDER BY timestamp) AS prev_page,
       LEAD(page_id, 1) OVER (PARTITION BY user_id ORDER BY timestamp) AS next_page
FROM clickstream_logs;
`,
        explanation: "Retrieves attributes from adjacent record frames without performing costly table self-joins. LAG checks preceding rows; LEAD targets subsequent rows."
      }
    ]
  },
  {
    section: "Programmatic Transformations",
    topics: [
      {
        title: "Manual Pivot Operations",
        syntax: `
SELECT manager_id,
       SUM(CASE WHEN quarter = 'Q1' THEN sales ELSE 0 END) AS q1_sales,
       SUM(CASE WHEN quarter = 'Q2' THEN sales ELSE 0 END) AS q2_sales,
       SUM(CASE WHEN quarter = 'Q3' THEN sales ELSE 0 END) AS q3_sales
FROM department_revenue
GROUP BY manager_id;
`,
        explanation: "Combines aggregation calls with conditional CASE statements to rotate vertical row attributes into clean, horizontal reporting columns."
      },
      {
        title: "Recursive CTE (Tree Hierarchies)",
        syntax: `
WITH RECURSIVE staff_chain AS (
    -- Anchor Member
    SELECT id, manager_id, name, 1 AS depth_level 
    FROM employees WHERE manager_id IS NULL
    UNION ALL
    -- Recursive Member
    SELECT e.id, e.manager_id, e.name, c.depth_level + 1
    FROM employees e
    INNER JOIN staff_chain c ON e.manager_id = c.id
)
SELECT * FROM staff_chain;
`,
        explanation: "An anchor statement establishes the tree root node (e.g., CEO), and a recursive branch continuously runs inner joins down the parent-child line until the entire graph is unpacked."
      }
    ]
  },
  {
    section: "Write Optimization Frameworks",
    topics: [
      {
        title: "Upsert Execution Frameworks",
        syntax: `
-- PostgreSQL Syntax Blueprint
INSERT INTO registry (id, app_token) VALUES (42, 'TOKEN_VAL')
ON CONFLICT (id) 
DO UPDATE SET app_token = EXCLUDED.app_token;

-- MySQL Syntax Blueprint
INSERT INTO registry (id, app_token) VALUES (42, 'TOKEN_VAL')
ON DUPLICATE KEY UPDATE app_token = VALUES(app_token);
`,
        explanation: "Attempts to append a new row record to a table. If a primary key conflict occurs, it intercepts the unique constraint block and runs an in-place update update loop instead."
      }
    ]
  }
];

export default sqlCheatSheet;