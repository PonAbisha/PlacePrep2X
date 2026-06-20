export const quizQuestions = {
  dbms: [
    {
      q: "Which normal form deals with multi-valued dependency?",
      options: ["2NF", "3NF", "BCNF", "4NF"],
      correct: 3,
    },
    {
      q: "What is the ACID property that ensures database transitions are either fully completed or not done at all?",
      options: ["Consistency", "Atomicity", "Isolation", "Durability"],
      correct: 1,
    },
    {
      q: "A conflict serializable schedule can be verified using which graph?",
      options: ["Precedence Graph", "Acyclic Graph", "Dependency Graph", "Bipartite Graph"],
      correct: 0,
    },
    {
      q: "What prevents Cascading Rollbacks in transaction processing?",
      options: ["Strict Schedules", "Serializable Schedules", "Recoverable Schedules", "Deadlock Schedules"],
      correct: 0,
    },
    {
      q: "Which index type uses a search tree structure to look up rows by key values?",
      options: ["Hash Index", "B-Tree Index", "Bitmap Index", "Spatial Index"],
      correct: 1,
    }
  ],
  os: [
    {
      q: "Which CPU scheduling algorithm can lead to the 'Starvation' problem?",
      options: ["Round Robin", "First-Come, First-Served", "Shortest Job First", "Priority Scheduling (without aging)"],
      correct: 3,
    },
    {
      q: "What is a 'Critical Section' in Operating Systems?",
      options: ["A piece of code that accesses shared resources", "A part of system kernel dealing with system bootup", "An error checking mechanism in kernel", "A specific hardware sector on disk drives"],
      correct: 0,
    },
    {
      q: "Belady's Anomaly occurs in which page replacement algorithm?",
      options: ["LRU", "FIFO", "Optimal", "LFU"],
      correct: 1,
    },
    {
      q: "What are the four necessary conditions for a deadlock to occur?",
      options: [
        "Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait",
        "Mutual Exclusion, Starvation, No Preemption, Deadlock Avoidance",
        "Paging, Segmentation, Mutual Exclusion, Deadlock Detection",
        "Hold & Wait, Semaphore, Spinlocks, Priority Inversion"
      ],
      correct: 0,
    },
    {
      q: "What is 'Thrashing' in OS memory management?",
      options: [
        "High CPU utilization and low page faults",
        "System spends more time swapping pages than executing processes",
        "Deleting temporary files to free disk sectors",
        "Terminating a process due to segmentation fault"
      ],
      correct: 1,
    }
  ],
  cn: [
    {
      q: "Which layer of the OSI model handles routing and logical addressing?",
      options: ["Data Link Layer", "Transport Layer", "Network Layer", "Session Layer"],
      correct: 2,
    },
    {
      q: "What is the primary difference between TCP and UDP?",
      options: [
        "TCP is connectionless and unreliable; UDP is connection-oriented and reliable",
        "TCP is connection-oriented and reliable; UDP is connectionless and unreliable",
        "TCP operates at Network layer; UDP operates at Transport layer",
        "TCP is faster than UDP"
      ],
      correct: 1,
    },
    {
      q: "Which protocol resolves a logical IP address to a physical MAC address?",
      options: ["DHCP", "DNS", "ARP", "ICMP"],
      correct: 2,
    },
    {
      q: "What is the size of an IPv6 address?",
      options: ["32 bits", "64 bits", "128 bits", "256 bits"],
      correct: 2,
    },
    {
      q: "What mechanism is used by TCP to handle congestion control?",
      options: ["Sliding Window & Slow Start", "Precedence Checking", "Three-Way Handshake", "Checksum Verification"],
      correct: 0,
    }
  ],
  oops: [
    {
      q: "Which OOPS concept allows a child class to provide a specific implementation of a method that is already defined in its parent class?",
      options: ["Method Overloading", "Method Overriding", "Encapsulation", "Abstraction"],
      correct: 1,
    },
    {
      q: "What type of inheritance is NOT directly supported in Java through classes?",
      options: ["Single Inheritance", "Multilevel Inheritance", "Multiple Inheritance", "Hierarchical Inheritance"],
      correct: 2,
    },
    {
      q: "What is a virtual function in C++?",
      options: [
        "A function that has no body",
        "A function declared in base class and overridden by subclass to enable dynamic polymorphism",
        "A static function used for utility tasks",
        "A function that is only compiled in development build mode"
      ],
      correct: 1,
    },
    {
      q: "Encapsulation is primarily concerned with what?",
      options: [
        "Inheriting behaviors from general classes",
        "Binding data members and methods together while hiding internal state details",
        "Overloading functions based on parameter types",
        "Generating class objects at runtime dynamically"
      ],
      correct: 1,
    },
    {
      q: "What is a constructor that creates a new object by copying data members of an existing object?",
      options: ["Default Constructor", "Parameterized Constructor", "Copy Constructor", "Virtual Constructor"],
      correct: 2,
    }
  ],
  sql: [
    {
      q: "Which SQL clause is used to filter records after aggregate functions are evaluated?",
      options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
      correct: 1,
    },
    {
      q: "What is the difference between INNER JOIN and LEFT JOIN?",
      options: [
        "INNER JOIN returns matching rows only; LEFT JOIN returns all rows from left table plus matching rows from right table",
        "LEFT JOIN returns matching rows only; INNER JOIN returns all rows from left table",
        "INNER JOIN is faster but returns null records",
        "There is no difference in relational output"
      ],
      correct: 0,
    },
    {
      q: "Which constraint uniquely identifies each record in a database table?",
      options: ["FOREIGN KEY", "UNIQUE KEY", "PRIMARY KEY", "NOT NULL"],
      correct: 2,
    },
    {
      q: "What is the purpose of the SQL transaction command 'ROLLBACK'?",
      options: [
        "Save all active changes permanently",
        "Undo changes made in the current transaction block",
        "Exit database connection safely",
        "Optimize table indexing structures"
      ],
      correct: 1,
    },
    {
      q: "Which aggregate function returns the count of unique values in a column?",
      options: ["COUNT(DISTINCT column_name)", "COUNT(ALL column_name)", "SUM(column_name)", "SELECT DISTINCT(COUNT)"],
      correct: 0,
    }
  ],
  aptitude: [
    {
      q: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: ["120 meters", "150 meters", "180 meters", "324 meters"],
      correct: 1, // 60 * 5/18 = 50/3 m/s. 50/3 * 9 = 150m
    },
    {
      q: "A person sells a watch at a profit of 20%. If he had bought it at 10% less and sold it for $30 less, he would have gained 20%. Find the Cost Price of the watch.",
      options: ["$250", "$300", "$200", "$150"],
      correct: 0,
    },
    {
      q: "A and B can complete a work in 15 days and 10 days respectively. They started working together, but A left after 2 days. In how many days will B complete the remaining work?",
      options: ["6 days", "8 days", "6.6 days", "5 days"],
      correct: 2, // A=1/15, B=1/10. Together = 1/6 per day. 2 days work = 1/3. Remaining = 2/3. B takes 2/3 / (1/10) = 20/3 = 6.6 days
    },
    {
      q: "In how many different ways can the letters of the word 'LEADING' be arranged in such a way that the vowels always come together?",
      options: ["360", "720", "1440", "5040"],
      correct: 1, // Vowels E,A,I together. Group is (EAI), L, D, N, G. 5 entities. 5! = 120. EAI can arrange in 3! = 6 ways. 120 * 6 = 720.
    },
    {
      q: "Two cards are drawn from a pack of 52 cards. What is the probability that both are Kings?",
      options: ["1/221", "2/221", "1/13", "4/663"],
      correct: 0, // (4/52) * (3/51) = (1/13) * (1/17) = 1/221
    }
  ],
  reasoning: [
    {
      q: "Point A is 10m North of Point B. Point C is 12m East of Point A. Point D is 5m South of Point C. In which direction is Point D with respect to Point B?",
      options: ["North-East", "North-West", "South-East", "South-West"],
      correct: 0,
    },
    {
      q: "If 'COULD' is written as 'BNTKC' and 'MARGIN' is written as 'LZQFHM', how will 'MOULDING' be written?",
      options: ["LNTKCHMF", "LNKTCHMF", "LNTKCHNE", "NITKHGMF"],
      correct: 0, // Shift each letter back by 1: M->L, O->N, U->T, L->K, D->C, I->H, N->M, G->F. LNTKCHMF
    },
    {
      q: "Six persons A, B, C, D, E, and F are sitting in a circle facing the center. B is between F and C; A is between E and D; F is to the left of D. Who is between A and F?",
      options: ["B", "C", "D", "E"],
      correct: 2,
    },
    {
      q: "In a family, A is the brother of B. C is the father of A. D is the brother of E. E is the daughter of B. Who is the uncle of D?",
      options: ["A", "B", "C", "Cannot be determined"],
      correct: 0, // D & E are siblings, children of B. A is B's brother. So A is maternal/paternal uncle of D.
    },
    {
      q: "Select the option that completes the series: 3, 12, 48, 192, ...",
      options: ["288", "384", "768", "1024"],
      correct: 2, // 3 * 4 = 12, 12 * 4 = 48... 192 * 4 = 768
    }
  ]
};
