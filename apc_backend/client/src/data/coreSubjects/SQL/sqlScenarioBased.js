const sqlScenarioBased = [
  {
    id: 1,
    question: "Scenario: You are auditing a financial ledger table 'transactions(id, user_id, amount, created_at)'. You need to write a query that displays every transaction record alongside a running total of all expenses calculated per unique user over time. How do you construct this?",
    answer: "SELECT id, user_id, amount, created_at, SUM(amount) OVER (PARTITION BY user_id ORDER BY created_at ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM transactions;",
    explanation: "This uses an Analytical Window Function. The 'PARTITION BY' clause isolates the calculation scope to each individual user, 'ORDER BY' establishes the timeline stream, and 'ROWS BETWEEN' defines a moving frame calculating from the first record up to the current row index."
  },
  {
    id: 2,
    question: "Scenario: An HR analytics system needs to identify top performance tiers. Write a query to find the 3rd highest salary from an 'employees(id, name, department_id, salary)' table without using proprietary dialect structures like TOP or LIMIT.",
    answer: "SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) WHERE rnk = 3 GROUP BY salary;",
    explanation: "Using an inline subquery with DENSE_RANK() assigns consecutive ranks to unique salaries. Filtering where rnk = 3 extracts the precise matching tier. DENSE_RANK is mandatory here over ROW_NUMBER because if multiple employees tie for the top salaries, it prevents missing the true 3rd highest tier value."
  },
  {
    id: 3,
    question: "Scenario: A streaming media platform logs user sessions in a 'watch_history(session_id, user_id, video_id, timestamp)' table. You need to write a query to extract the exact video_id that each user watched immediately prior to their currently logged video row. How do you write this?",
    answer: "SELECT user_id, video_id AS current_video, LAG(video_id, 1) OVER (PARTITION BY user_id ORDER BY timestamp) AS previous_video FROM watch_history;",
    explanation: "The LAG() window function looks backward into a dataset array. By partitioning data by user_id and sorting sequentially by timestamp, LAG(video_id, 1) retrieves the attributes of the preceding record row relative to the current position."
  },
  {
    id: 4,
    question: "Scenario: You are designing a dashboard widget that tracks real-time sales velocity. You need to compare each order's value against the absolute highest order value placed within that same department on that same calendar day. How do you construct the query?",
    answer: "SELECT order_id, department_id, order_value, MAX(order_value) OVER (PARTITION BY department_id, CAST(created_at AS DATE)) AS peak_department_sale FROM orders;",
    explanation: "By declaring multiple partition columns (`department_id` and the casted date string), the window function isolates its evaluation pool to a specific subset, matching each row against the maximum value computed inside that focused group."
  },
  {
    id: 5,
    question: "Scenario: A ride-sharing application tracks driver coordinate telemetry inside a 'location_logs(driver_id, latitude, longitude, captured_at)' table. You need to write a query that isolates duplicate, consecutive location entries where a driver's coordinates did not change from their last logged position.",
    answer: "WITH ranked_logs AS (SELECT driver_id, latitude, longitude, LAG(latitude) OVER (PARTITION BY driver_id ORDER BY captured_at) AS prev_lat, LAG(longitude) OVER (PARTITION BY driver_id ORDER BY captured_at) AS prev_lng FROM location_logs) SELECT driver_id FROM ranked_logs WHERE latitude = prev_lat AND longitude = prev_lng;",
    explanation: "This pattern isolates sequential repetitions. A Common Table Expression (CTE) reads the previous row values using LAG(). The outer query then evaluates the fields; if the current coordinates match the previous ones, it flags a redundant stationary event."
  },
  {
    id: 6,
    question: "Scenario: A SaaS metrics dashboard needs to calculate Month-over-Month (MoM) growth rates from an aggregated 'monthly_revenue(year_month, total_mrr)' data table. How do you structure the query to calculate the percentage delta change?",
    answer: "SELECT year_month, total_mrr, LAG(total_mrr) OVER (ORDER BY year_month) AS prev_mrr, ((total_mrr - LAG(total_mrr) OVER (ORDER BY year_month)) / LAG(total_mrr) OVER (ORDER BY year_month)) * 100 AS mom_growth_percentage FROM monthly_revenue;",
    explanation: "This combines analytical windows with standard arithmetic math. LAG() retrieves the preceding month's MRR value, allowing you to run the standard percentage change calculation `((Current - Previous) / Previous) * 100` inline."
  },
  {
    id: 7,
    question: "Scenario: You are parsing an inventory tracking log. You want to assign an incremental, unique sequential identifier line number to every row item processed, but the line count sequence must reset back to 1 every time the query hits a new 'warehouse_location_id' group block. Which function do you use?",
    answer: "SELECT item_id, warehouse_location_id, ROW_NUMBER() OVER (PARTITION BY warehouse_location_id ORDER BY item_id) AS warehouse_line_item_id FROM inventory_logs;",
    explanation: "ROW_NUMBER() generates a sequential integer line series starting at 1. Appending `PARTITION BY warehouse_location_id` guarantees that the counter automatically resets back to 1 the moment the engine transitions to processing a new warehouse location."
  },
  {
    id: 8,
    question: "Scenario: A gaming app features a global high-score board. If two players share the exact same point score, they should receive the same leader board position ranking. However, the subsequent player's rank number must skip ahead to account for the tie (e.g., 1, 2, 2, 4). How do you write the query?",
    answer: "SELECT player_id, score, RANK() OVER (ORDER BY score DESC) AS leaderboard_position FROM scoreboard;",
    explanation: "The standard RANK() window function creates gaps in the ranking sequence if ties are encountered. If you want to avoid skipping numbers after a tie (e.g., 1, 2, 2, 3), you would use DENSE_RANK() instead."
  },
  {
    id: 9,
    question: "Scenario: You need to extract the top 10% highest-value purchasing accounts from a 'customers(customer_id, life_time_spend)' dataset. How can you segment this using analytical windows?",
    answer: "SELECT customer_id, life_time_spend FROM (SELECT customer_id, life_time_spend, NTILE(10) OVER (ORDER BY life_time_spend DESC) AS percentile_bucket FROM customers) WHERE percentile_bucket = 1;",
    explanation: "The NTILE(N) function divides an ordered dataset into N equal-sized buckets. By sorting by `life_time_spend DESC` and declaring `NTILE(10)`, the top 10% of spenders are grouped into bucket number 1, which the outer query isolates."
  },
  {
    id: 10,
    question: "Scenario: You are calculating standard running averages for an IoT temperature node. Write a query to compute a 3-point moving average temperature, taking the current reading value, the immediate preceding value, and the immediate following value into account for each log row.",
    answer: "SELECT log_id, temperature, AVG(temperature) OVER (ORDER BY timestamp ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS moving_avg_temp FROM sensor_readings;",
    explanation: "By redefining the frame boundaries using `ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING`, you instruct the analytical engine to construct a rolling 3-row window centered on the current row to calculate localized averages."
  },
  {
    id: 11,
    question: "Scenario: You need to generate an organizational chart lookup utility. The 'employees' table contains an 'employee_id' and a 'manager_id' column mapping corporate hierarchies. Write a query template to display the reporting lineage chain from the CEO down to every worker node.",
    answer: "WITH RECURSIVE org_hierarchy AS (SELECT employee_id, manager_id, CAST(name AS CHAR(200)) AS path FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.employee_id, e.manager_id, CONCAT(h.path, ' -> ', e.name) FROM employees e INNER JOIN org_hierarchy h ON e.manager_id = h.employee_id) SELECT * FROM org_hierarchy;",
    explanation: "This uses a Recursive Common Table Expression (CTE). The anchor query isolates the root node (the CEO, where manager_id IS NULL). The recursive query then loops through child records, joining the employees table to the mounting CTE results to build a string tracking the reporting chain."
  },
  {
    id: 12,
    question: "Scenario: Due to an API integration bug, duplicate customer rows were written to an unindexed heap table 'users(user_id, email, created_at)'. You need to purge all duplicate entries, keeping only the single oldest record row per unique email address. How do you execute this deduplication clean up?",
    answer: "DELETE FROM users WHERE id NOT IN (SELECT min_id FROM (SELECT MIN(id) AS min_id FROM users GROUP BY email) AS temp_hold);",
    explanation: "The inner subquery groups data by the unique identifier (email) and isolates the lowest incremental system ID (the oldest record). The outer delete operation then sweeps the table and purges any row ID that isn't preserved in that safe collection list."
  },
  {
    id: 13,
    question: "Scenario: You are designing a security audit utility. You have a 'login_attempts(user_id, status, attempted_at)' table. You need to write a query that identifies 'compromised accounts', defined as any user ID that logs 3 or more consecutive 'FAILED' status attempts sequentially.",
    answer: "WITH failure_tracking AS (SELECT user_id, status, LEAD(status, 1) OVER (PARTITION BY user_id ORDER BY attempted_at) AS next_status, LEAD(status, 2) OVER (PARTITION BY user_id ORDER BY attempted_at) AS after_next_status FROM login_attempts) SELECT DISTINCT user_id FROM failure_tracking WHERE status = 'FAILED' AND next_status = 'FAILED' AND after_next_status = 'FAILED';",
    explanation: "This uses the LEAD() window function to peek into subsequent rows. By projecting the statuses of the next two chronological login attempts onto the current row, you can evaluate a sequence of 3 consecutive failures inside a single conditional row check."
  },
  {
    id: 14,
    question: "Scenario: An e-commerce shipment pipeline uses an sequential system ID key. A manager suspects some automated record entry inserts skipped values. Write a query to discover missing sequence identifier numbers (gaps) inside an 'orders(order_sequence_id)' column spanning from 1 to 100000.",
    answer: "WITH RECURSIVE sequence_generator AS (SELECT 1 AS seq_val UNION ALL SELECT seq_val + 1 FROM sequence_generator WHERE seq_val < 100000) SELECT s.seq_val FROM sequence_generator s LEFT JOIN orders o ON s.seq_val = o.order_sequence_id WHERE o.order_sequence_id IS NULL;",
    explanation: "This implements a 'Gaps and Islands' solution strategy. First, a recursive CTE acts as a virtual numbers generator to build a perfect continuous sequence chain. A LEFT JOIN then maps this chain to the production table; any values that show up as NULL highlight an omitted sequence gap."
  },
  {
    id: 15,
    question: "Scenario: You are building a metrics pipeline for an airport scheduling display. A table tracks 'flights(flight_id, destination, scheduled_time)'. You need to output a single text string field for each destination that concatenates all scheduled flight numbers into a comma-separated list (e.g., 'London: LH102, BA404, VS11'). Which function pattern do you use?",
    answer: "SELECT destination, GROUP_CONCAT(flight_id ORDER BY scheduled_time SEPARATOR ', ') AS flight_list FROM flights GROUP BY destination;",
    explanation: "GROUP_CONCAT() (or STRING_AGG() in PostgreSQL / LISTAGG in Oracle) is a specialized string aggregation tool. It condenses multiple row attributes within a group into a single structured text string, delimited by a custom separator token."
  },
  {
    id: 16,
    question: "Scenario: A hospital tracking application logs patient heart rates in a 'vitals(patient_id, reading, recorded_at)' table. You need to identify instances where a patient's heart rate spiked by more than 30 beats per minute compared to the reading taken immediately before it. How do you target this?",
    answer: "WITH dynamic_deltas AS (SELECT patient_id, reading, LAG(reading) OVER (PARTITION BY patient_id ORDER BY recorded_at) AS previous_reading FROM vitals) SELECT patient_id FROM dynamic_deltas WHERE (reading - previous_reading) > 30;",
    explanation: "This leverages a CTE combined with the LAG() window function. First, the previous heart rate reading is pulled onto the current row. The outer query then calculates the numeric delta difference between the two readings to filter for spikes higher than 30 BPM."
  },
  {
    id: 17,
    question: "Scenario: You are building a content management system. A table 'articles(id, title, tags_json)' uses a JSON array column to store metadata strings (e.g., `['tech', 'oss', 'cloud']`). Write a query to extract each individual tag value out of the JSON array into its own standalone row record.",
    answer: "SELECT id, title, jt.tag FROM articles, JSON_TABLE(tags_json, '$[*]' COLUMNS(tag VARCHAR(50) PATH '$')) AS jt;",
    explanation: "Modern database management engines provide explicit JSON transformation functions. JSON_TABLE() parses structured JSON text arrays and flattens them into virtual relational columns, allowing you to run standard filters across array values."
  },
  {
    id: 18,
    question: "Scenario: A logistics system records vehicle deployments inside a 'trips(car_id, destination, distance)' table. You need to write a query that generates an incremental calculation of overall average travel distances. The row output must show each trip's distance alongside the cumulative average calculated up to that point. How do you structure this?",
    answer: "SELECT car_id, destination, distance, AVG(distance) OVER (ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS cumulative_average_distance FROM trips;",
    explanation: "Using the AVG() function over an unbound frame boundary calculates a cumulative average. As the engine moves down the sorted row list, it factors each new trip into the running sum and updates the average dynamically."
  },
  {
    id: 19,
    question: "Scenario: You are optimizing an inventory warehouse system. A table tracking orders contains nullable columns: 'express_delivery_date', 'standard_delivery_date', and 'pickup_date'. Write a query to extract the very first non-null date value available for each row to establish a unified 'actual_fulfillment_date' column.",
    answer: "SELECT order_id, COALESCE(express_delivery_date, standard_delivery_date, pickup_date) AS actual_fulfillment_date FROM order_shipments;",
    explanation: "COALESCE handles null-fallback selection tasks efficiently. It scans arguments from left to right and returns the first non-null value it encounters, making it perfect for consolidating multiple alternative date pipelines into a single fallback target field."
  },
  {
    id: 20,
    question: "Scenario: A financial reporting app processes a 'sales(salesperson_id, product_category, revenue)' table. You need to write a query that transposes this dataset, converting rows of product category metrics into distinct horizontal column headings (e.g., transforming rows into columns for 'Electronics', 'Apparel', etc.). How do you build this conditional pivot lookup?",
    answer: "SELECT salesperson_id, SUM(CASE WHEN product_category = 'Electronics' THEN revenue ELSE 0 END) AS electronics_revenue, SUM(CASE WHEN product_category = 'Apparel' THEN revenue ELSE 0 END) AS apparel_revenue FROM sales GROUP BY salesperson_id;",
    explanation: "This pattern implements a manual conditional pivot using a combination of SUM() and CASE WHEN. The inline CASE statement filters values by category on the fly, and the outer SUM() condenses these values per salesperson into a clean, horizontal summary table layout."
  }
];
export default sqlScenarioBased;