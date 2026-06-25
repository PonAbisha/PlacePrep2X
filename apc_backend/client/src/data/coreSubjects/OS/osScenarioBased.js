const osScenarioBased = [
  {
    id: 1,
    question: "A system's CPU utilization is near 99%, but disk throughput is extremely low and processes are executing smoothly. What is likely happening, and how do you optimize it?",
    answer: "The system is CPU-bound, meaning the running processes are performing heavy computations (e.g., encryption, video rendering) rather than I/O tasks. You can optimize this by upgrading the CPU, utilizing multi-threading, or optimizing the algorithm's time complexity.",
    explanation: "High CPU utilization without disk activity means the bottleneck is purely computational. Adding more RAM or faster storage won't help; code-level optimization or vertical CPU scaling is required."
  },
  {
    id: 2,
    question: "A system's CPU utilization is near 1%, but the disk activity indicator is constantly at 100%, and the system is completely unresponsive. Diagnose the problem.",
    answer: "The system is experiencing 'Thrashing'. This happens when the total working set size of active processes exceeds the available physical RAM, forcing the OS to spend all its time swapping pages in and out of disk rather than executing actual instructions.",
    explanation: "Because the CPU is constantly waiting for the slow disk I/O operations to complete page swaps, its utilization drops close to zero while the disk is maxed out. Solutions include killing some processes or adding more RAM."
  },
  {
    id: 3,
    question: "You run a program that spawns thousands of short-lived child processes without calling wait() or waitpid() in the parent. What resource will you exhaust first, and what will be the symptom?",
    answer: "You will exhaust the Operating System's Process ID (PID) space by creating 'Zombie Processes'. The symptom will be that the system cannot spawn any new processes, throwing an 'out of resources' or 'fork failed' error, even if RAM and CPU usage are low.",
    explanation: "Even though zombie processes free their memory footprint, they retain their entries in the kernel's process table so the parent can read their exit status. If the table fills up, no new PIDs can be allocated."
  },
  {
    id: 4,
    question: "An embedded system with low RAM runs fine initially, but after a few days, it throws an Out-Of-Memory (OOM) error despite the fact that no process is leaking memory and total allocated bytes are within limits. What happened?",
    answer: "The system is suffering from severe External Fragmentation. Memory has been allocated and deallocated in variable chunks over time, leaving plenty of total free memory, but scattered in tiny, non-contiguous blocks.",
    explanation: "When a new process or thread requests a contiguous block of memory for its stack or heap, the allocation fails because no single free block is large enough to satisfy the request, triggering the OOM error."
  },
  {
    id: 5,
    question: "A banking application updates user balances concurrently. Thread A reads $100 and prepares to add $50. Thread B reads $100 and prepares to subtract $20. Thread A writes $150, then Thread B writes $80. What went wrong and how do you fix it?",
    answer: "A Race Condition occurred because the critical section updating the balance was not synchronized. Thread B overwrote Thread A's valid update, causing data corruption (the balance should be $130, but ended up as $80).",
    explanation: "To fix this, the balance update code must be wrapped in a mutual exclusion lock (Mutex) or a semaphore, ensuring that only one thread can execute the Read-Modify-Write sequence at any given time."
  },
  {
    id: 6,
    question: "A high-priority real-time audio thread suddenly starts stuttering because it is waiting for a low-priority logging thread to release a file lock, while a medium-priority video thread keeps running uninterrupted. What is this phenomenon?",
    answer: "This is 'Priority Inversion'. The medium-priority thread is indirectly preventing the high-priority thread from running by preempting the low-priority thread that holds the required resource.",
    explanation: "The medium thread doesn't need the lock, but because its priority is higher than the log thread, it hogs the CPU. The log thread can't finish and release the lock, leaving the audio thread starved. This is solved using the Priority Inheritance Protocol."
  },
  {
    id: 7,
    question: "Process P1 holds Resource R1 and requests R2. Process P2 holds Resource R2 and requests R1. Both processes stop executing entirely but don't crash. How do you recover the system without rebooting?",
    answer: "The system is in a Deadlock. To recover without a total reboot, you must either forcibly terminate (kill) one of the deadlocked processes to break the dependency cycle, or abortively preempt one of the resources.",
    explanation: "Because the processes are stuck in a 'Circular Wait' condition, they can never make forward progress on their own. Killing one process releases its held resources, allowing the remaining process to complete."
  },
  {
    id: 8,
    question: "You change a configuration on your server, altering the Round Robin time quantum from 20ms to 0.1ms. What impact will this have on user experience and system throughput?",
    answer: "The user experience (responsiveness) might feel highly interactive initially, but overall system throughput will collapse drastically due to extreme context-switching overhead.",
    explanation: "At 0.1ms, the CPU spends a massive percentage of its cycles saving and restoring process states (registers, caches, MMU maps) in the kernel rather than executing actual user application logic."
  },
  {
    id: 9,
    question: "You are designing an application for an interactive video game where multiple tasks share a large data map. Would you choose to implement these tasks as multiple processes or multiple threads? Why?",
    answer: "You should choose multiple threads. Threads share the same address space, enabling rapid data sharing without the high overhead of Inter-Process Communication (IPC) or heavy context-switching delays.",
    explanation: "In a fast-paced game, components like rendering, audio, and physics engines must access the global game state simultaneously. Processes would require complex, slow shared-memory mappings or message pipelines."
  },
  {
    id: 10,
    question: "A web server handles incoming requests by spinning up a new thread for every single user connection. During a sudden marketing flash sale, the server crashes completely. What went wrong and how do you fix it?",
    answer: "The server suffered from resource exhaustion due to unbounded thread creation. Each thread requires dedicated stack space and scheduling overhead. The fix is to implement a 'Thread Pool' pattern with a request queue.",
    explanation: "When thousands of users hit the site at once, the OS spent all its RAM on thread stacks and hit a limit. A thread pool caps the max concurrent threads to match CPU capabilities and safely queues the rest."
  },
  {
    id: 11,
    question: "An application keeps crashing with a 'Segmentation Fault' error during execution. As an engineer, what does this tell you about the application's behavior at the hardware level?",
    answer: "A Segmentation Fault means the application attempted to access a memory address space that it does not own or does not have permission to access (e.g., writing to read-only memory, or dereferencing a null pointer).",
    explanation: "The Memory Management Unit (MMU) detects this illegal access by comparing the logical address with the process's page table/segments and raises a hardware trap, causing the OS to instantly terminate the rogue program."
  },
  {
    id: 12,
    question: "You notice that sequentially reading a 1GB file takes significantly longer right after a system boot than it does when you read the exact same file a second time immediately after. Why?",
    answer: "The second read is faster due to the Operating System's 'Page Cache' (Buffer Cache). The first read fetches data from the slow physical storage disk, while the second read pulls it instantly from fast RAM cache.",
    explanation: "Modern OSs utilize unused RAM to store recently read disk blocks. If an application requests that data again, the OS intercepts the request and handles it via memory, bypassing physical disk I/O entirely."
  },
  {
    id: 13,
    question: "You are writing firmware for a heart pacemaker. Would you choose a Hard Real-Time OS or a Soft Real-Time OS? Explain why.",
    answer: "You must choose a Hard Real-Time OS. In hard real-time systems, missing a task completion deadline constitutes a catastrophic total system failure, which in this case means the patient could die.",
    explanation: "Soft real-time systems (like video streaming) try to meet deadlines but can tolerate occasional delays. Hard real-time systems guarantee strict deterministic execution boundaries where deadlines can never be missed under any circumstance."
  },
  {
    id: 14,
    question: "A developer writes code using a Binary Semaphore to enforce mutual exclusion but accidentally calls signal() twice at the end of a critical section. What security or operational risk does this introduce?",
    answer: "It breaks mutual exclusion, allowing two processes to enter the critical section at the same time, which completely ruins data integrity and opens up potential race conditions.",
    explanation: "A binary semaphore does not enforce ownership. Calling signal() twice increments or maintains the value at 1. If another thread comes along, it can bypass the wait() check even if the original thread enters the section again, corrupting the safety lock."
  },
  {
    id: 15,
    question: "You run a process on a server that allocates a massive 10GB array at startup. However, monitoring tools show the process is only using 15MB of physical RAM. Is this a bug? Why or why not?",
    answer: "No, this is not a bug; it is the standard behavior of 'Demand Paging' combined with Virtual Memory allocation.",
    explanation: "When the application allocates memory, the OS grants a virtual address space but does not assign physical RAM frames until the application actually reads or writes to those specific memory addresses, triggering page faults to load them on demand."
  },
  {
    id: 16,
    question: "Your team is deploying an analytics application that performs sequential scans across massive databases. A senior engineer suggests choosing a FIFO page replacement algorithm over LRU for this specific workload. Why?",
    answer: "This avoids a phenomenon called 'LRU Cache Pollution' or 'Sequential Scan Resistance'. For data that is read strictly once sequentially, LRU behaves terribly because it evicts useful, frequently-used pages to hold data that will never be looked at again.",
    explanation: "If a file is larger than the total RAM cache, LRU will steadily kick out all warm application pages to load the sequential stream. In this specific scenario, a simple FIFO or MRU (Most Recently Used) structure is more practical."
  },
  {
    id: 17,
    question: "A process terminates abruptly due to an unhandled exception. How does the Operating System clean up resources to ensure that other running applications are not affected?",
    answer: "The OS kernel intercepts the termination, closes all file descriptors held by that process, reclaims all physical memory frames mapped to its page tables, removes its PID from the process table, and frees any unshared semaphores.",
    explanation: "Because the OS strictly isolates address spaces, a crash within a user process space is safely self-contained. The kernel acts as the ultimate garbage collector for hardware allocations once the process lifecycle ends."
  },
  {
    id: 18,
    question: "A server is configured with a high-priority batch processing job and several low-priority interactive user shell sessions. Users report that typing commands feels extremely laggy when the batch job runs. How do you resolve this using scheduling adjustments?",
    answer: "You should decrease the CPU priority level (increase the 'nice' value) of the batch job, or move the interactive sessions to a scheduling queue optimized for Round Robin/interactivity rather than burst throughput.",
    explanation: "Batch processing jobs are CPU-bound and consume their full quantum, starving interactive tasks. Lowering the batch job's priority or using multi-level feedback queues ensures interactive tasks get instant scheduling access for quick, small bursts (like keystrokes)."
  },
  {
    id: 19,
    question: "While debugging a system, you find that a process has been in the 'Ready' state for over 3 hours without ever transitioning to 'Running'. What is this problem, and how does an OS prevent it dynamically?",
    answer: "The process is suffering from 'Starvation' (Indefinite Blocking). The OS prevents this dynamically by utilizing a technique called 'Aging'.",
    explanation: "Aging works by gradually increasing the priority level of a process the longer it remains waiting in the Ready Queue. Eventually, its priority becomes high enough to beat out newly arrived tasks, ensuring it gets execution time."
  },
  {
    id: 20,
    question: "Why can't a user-space application directly print a string to a physical hardware printer without involving a System Call?",
    answer: "Direct hardware access from user space is blocked by the CPU's hardware ring protection (User Mode). A system call is required to switch the execution mode safely to Kernel Mode so the OS can securely interact with the printer driver.",
    explanation: "If applications could write directly to hardware controllers without an intermediary kernel broker, multiple programs would corrupt each other's print outputs, or access restricted data streams, violating fundamental system security."
  }
];

export default osScenarioBased;