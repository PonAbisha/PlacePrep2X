const osAdvanced = [
  {
    id: 1,
    question: "What is the Banker's Algorithm?",
    answer: "Banker's Algorithm is a deadlock avoidance algorithm that determines whether granting a resource request will leave the system in a safe state.",
    explanation: "It simulates resource allocation before granting requests and prevents the system from entering an unsafe state."
  },
  {
    id: 2,
    question: "What is a Safe State in Deadlock Avoidance?",
    answer: "A safe state is a state where all processes can complete their execution without causing deadlock.",
    explanation: "There exists at least one safe sequence of process execution."
  },
  {
    id: 3,
    question: "What is the difference between Deadlock Prevention and Deadlock Avoidance?",
    answer: "Deadlock Prevention eliminates at least one necessary condition for deadlock, while Deadlock Avoidance dynamically checks resource allocation before granting requests.",
    explanation: "Prevention is restrictive, whereas avoidance is flexible but requires additional computation."
  },
  {
    id: 4,
    question: "What is Thrashing?",
    answer: "Thrashing occurs when the system spends more time swapping pages than executing processes.",
    explanation: "It is caused by excessive page faults due to insufficient memory allocation."
  },
  {
    id: 5,
    question: "What is Working Set Model?",
    answer: "The Working Set Model keeps track of pages actively used by a process within a time window.",
    explanation: "It helps reduce thrashing by ensuring active pages remain in memory."
  },
  {
    id: 6,
    question: "What is Translation Lookaside Buffer (TLB)?",
    answer: "TLB is a small high-speed cache used to store recent virtual-to-physical address translations.",
    explanation: "It reduces address translation time and improves memory access performance."
  },
  {
    id: 7,
    question: "What is TLB Hit and TLB Miss?",
    answer: "A TLB Hit occurs when the required page mapping is found in the TLB. A TLB Miss occurs when it is not found.",
    explanation: "TLB hits improve performance while misses require page table lookup."
  },
  {
    id: 8,
    question: "What is Copy-On-Write (COW)?",
    answer: "Copy-On-Write delays copying memory pages until a process attempts to modify them.",
    explanation: "It improves memory efficiency, especially during process creation using fork()."
  },
  {
    id: 9,
    question: "What is Demand Paging?",
    answer: "Demand Paging loads pages into memory only when they are actually needed.",
    explanation: "It reduces memory usage and startup time."
  },
  {
    id: 10,
    question: "What is Page Fault Handling?",
    answer: "Page Fault Handling is the process of loading a missing page from disk into memory when accessed by a process.",
    explanation: "The OS pauses the process, loads the page, updates page tables, and resumes execution."
  },
  {
  id: 11,
  question: "What is the FIFO Page Replacement Algorithm?",
  answer: "FIFO (First In First Out) replaces the page that has been in memory the longest.",
  explanation: "The oldest page loaded into memory is removed first, regardless of how frequently it is used."
},
{
  id: 12,
  question: "What is the LRU Page Replacement Algorithm?",
  answer: "LRU (Least Recently Used) replaces the page that has not been used for the longest period of time.",
  explanation: "It assumes that pages used recently are more likely to be used again soon."
},
{
  id: 13,
  question: "What is the Optimal Page Replacement Algorithm?",
  answer: "The Optimal algorithm replaces the page that will not be used for the longest time in the future.",
  explanation: "It produces the minimum possible page faults but cannot be implemented perfectly because future references are unknown."
},
{
  id: 14,
  question: "What is Multilevel Queue Scheduling?",
  answer: "Multilevel Queue Scheduling divides processes into multiple queues based on priority or process type.",
  explanation: "Each queue has its own scheduling algorithm, and higher-priority queues are serviced first."
},
{
  id: 15,
  question: "What is Multilevel Feedback Queue Scheduling?",
  answer: "Multilevel Feedback Queue Scheduling allows processes to move between queues based on their behavior and CPU usage.",
  explanation: "It adapts dynamically and helps balance responsiveness and fairness."
},
{
  id: 16,
  question: "What is Real-Time Scheduling?",
  answer: "Real-Time Scheduling ensures tasks are completed within specified timing constraints or deadlines.",
  explanation: "It is used in systems where missing deadlines can lead to serious consequences, such as medical devices or aircraft systems."
},
{
  id: 17,
  question: "What is Rate Monotonic Scheduling (RMS)?",
  answer: "RMS is a fixed-priority scheduling algorithm where tasks with shorter periods receive higher priorities.",
  explanation: "It is commonly used in hard real-time systems and provides predictable scheduling behavior."
},
{
  id: 18,
  question: "What is Earliest Deadline First (EDF) Scheduling?",
  answer: "EDF is a dynamic scheduling algorithm that assigns the highest priority to the task with the nearest deadline.",
  explanation: "It generally achieves better CPU utilization than fixed-priority algorithms."
},
{
  id: 19,
  question: "What is NUMA Architecture?",
  answer: "NUMA (Non-Uniform Memory Access) is a memory architecture where memory access time depends on the memory's location relative to the processor.",
  explanation: "Processors access local memory faster than remote memory, improving scalability in multiprocessor systems."
},
{
  id: 20,
  question: "What are Memory-Mapped Files?",
  answer: "Memory-Mapped Files allow files on disk to be mapped directly into a process's virtual address space.",
  explanation: "This enables applications to access file data as if it were memory, improving I/O performance."
}
];

export default osAdvanced;