const osFundamentals = [
  {
    id: 1,
    question: "What is an Operating System?",
    answer: "An Operating System (OS) is system software that manages computer hardware and software resources and provides services for application programs.",
    explanation: "It acts as an interface between the user and the hardware, making the system easier to use."
  },

  {
    id: 2,
    question: "What are the main functions of an Operating System?",
    answer: "Process management, memory management, file management, device management, and security.",
    explanation: "The OS coordinates all system resources and ensures efficient execution of programs."
  },

  {
    id: 3,
    question: "What are the different types of Operating Systems?",
    answer: "Batch OS, Time-Sharing OS, Distributed OS, Network OS, Real-Time OS, and Multiprocessing OS.",
    explanation: "Different operating systems are designed to meet different computing requirements and environments."
  },

  {
    id: 4,
    question: "What is a Kernel?",
    answer: "The kernel is the core component of an Operating System that manages hardware resources and system operations.",
    explanation: "It acts as a bridge between applications and hardware and runs in privileged mode."
  },

  {
    id: 5,
    question: "What is a Shell?",
    answer: "A shell is a command-line interface that allows users to interact with the Operating System.",
    explanation: "It interprets user commands and passes them to the kernel for execution."
  },

  {
    id: 6,
    question: "What is a System Call?",
    answer: "A system call is a mechanism through which a user program requests services from the Operating System kernel.",
    explanation: "Examples include file operations, process creation, and memory allocation."
  },

  {
    id: 7,
    question: "What is the difference between User Mode and Kernel Mode?",
    answer: "User Mode has restricted access to hardware resources, while Kernel Mode has full access to system resources.",
    explanation: "This separation improves system security and stability."
  },

  {
    id: 8,
    question: "What is the Booting Process?",
    answer: "Booting is the process of starting a computer and loading the Operating System into memory.",
    explanation: "The BIOS/UEFI initializes hardware and loads the bootloader, which then loads the OS kernel."
  },

  {
    id: 9,
    question: "What is a Monolithic Kernel?",
    answer: "A monolithic kernel is a kernel architecture where all operating system services run in kernel space.",
    explanation: "It offers high performance but can be harder to maintain and debug."
  },

  {
    id: 10,
    question: "What is a Microkernel?",
    answer: "A microkernel contains only essential services such as process management and communication, while other services run in user space.",
    explanation: "It improves modularity, security, and reliability but may have slightly lower performance."
  },
  {
    id: 11,
    question: "What is a Process?",
    answer: "A process is a program in execution.",
    explanation: "While a program is a passive entity (like a file on a disk), a process is an active entity with a program counter specifying the next instruction to execute and a set of associated resources."
  },
  {
    id: 12,
    question: "What are the different Process States?",
    answer: "The primary process states are New, Ready, Running, Waiting (Blocked), and Terminated.",
    explanation: "New: The process is being created. Ready: The process is waiting to be assigned to a processor. Running: Instructions are being executed. Waiting: The process is waiting for some event (like I/O completion). Terminated: The process has finished execution."
  },
  {
    id: 13,
    question: "What is a Process Control Block (PCB)?",
    answer: "A PCB is a data structure maintained by the Operating System for every process to store its operational information.",
    explanation: "It contains crucial information such as the process state, program counter, CPU registers, CPU scheduling information, memory-management information, and accounting status."
  },
  {
    id: 14,
    question: "What is Context Switching?",
    answer: "Context switching is the process of storing the state of a CPU process so that it can be restored and execution resumed from the same point later.",
    explanation: "This allows multiple processes to share a single CPU and is a core feature of multitasking operating systems. It introduces overhead because the OS must save and load registers and memory maps."
  },
  {
    id: 15,
    question: "What is a Thread?",
    answer: "A thread is a basic unit of CPU utilization, often called a 'lightweight process'.",
    explanation: "It comprises a thread ID, a program counter, a register set, and a stack. It shares its code section, data section, and operating system resources (like open files) with other threads belonging to the same process."
  },
  {
    id: 16,
    question: "What are the different Types of Threads?",
    answer: "Threads are primarily categorized into User-Level Threads and Kernel-Level Threads.",
    explanation: "User-level threads are managed by a user-level threads library without direct kernel support. Kernel-level threads are supported and managed directly by the Operating System."
  },
  {
    id: 17,
    question: "What is the difference between a Process and a Thread?",
    answer: "A process is an independent execution unit with its own memory space, whereas a thread is a subset of a process that shares memory with other threads of the same process.",
    explanation: "Processes are heavyweight, require inter-process communication (IPC) to talk, and context switching takes longer. Threads are lightweight, can communicate directly via shared memory, and have faster context switching."
  },
  {
    id: 18,
    question: "What is Multithreading?",
    answer: "Multithreading is a CPU architecture/software feature that allows a single process to execute multiple threads concurrently.",
    explanation: "This improves application responsiveness, enables better resource sharing, increases utilization of multiprocessor architectures, and is highly economical compared to process creation."
  },
  {
    id: 19,
    question: "What is a Zombie Process?",
    answer: "A zombie process is a process that has completed execution but still has an entry in the process table.",
    explanation: "This happens when a child process terminates, but its parent process hasn't yet read its exit status via the wait() system call. It releases its memory but occupies a process ID (PID) slot."
  },
  {
    id: 20,
    question: "What is an Orphan Process?",
    answer: "An orphan process is a running process whose parent process has finished or terminated.",
    explanation: "In UNIX-like operating systems, orphan processes are automatically adopted by the 'init' process (PID 1) or 'systemd', which periodically calls wait() to clean up their exit statuses."
  },
  {
    id: 21,
    question: "What is CPU Scheduling?",
    answer: "CPU Scheduling is the process by which the operating system decides which process in the Ready Queue gets to use the CPU next.",
    explanation: "It is the basis of multi-programmed operating systems, ensuring maximum CPU utilization and efficient resource sharing."
  },
  {
    id: 22,
    question: "What is First-Come, First-Served (FCFS) Scheduling?",
    answer: "FCFS is a non-preemptive algorithm where the process that requests the CPU first is allocated the CPU first.",
    explanation: "It is managed using a FIFO queue. Its main drawback is the 'Convoy Effect', where short processes wait a long time behind a long process."
  },
  {
    id: 23,
    question: "What is Shortest Job First (SJF) Scheduling?",
    answer: "SJF is a scheduling algorithm that associates with each process the length of its next CPU burst, choosing the process with the shortest burst.",
    explanation: "SJF is optimal because it gives the minimum average waiting time for a given set of processes, but it is difficult to implement because predicting future CPU burst times is hard."
  },
  {
    id: 24,
    question: "What is Shortest Remaining Time First (SRTF)?",
    answer: "SRTF is the preemptive version of SJF scheduling.",
    explanation: "If a newly arrived process has a shorter remaining CPU burst time than the currently running process, the running process is preempted and the CPU is allocated to the new process."
  },
  {
    id: 25,
    question: "What is Priority Scheduling?",
    answer: "Priority Scheduling is an algorithm where a priority value is associated with each process, and the CPU is allocated to the process with the highest priority.",
    explanation: "It can be preemptive or non-preemptive. A major issue is 'indefinite blocking' or starvation, where low-priority processes may never execute."
  },
  {
    id: 26,
    question: "What is Round Robin (RR) Scheduling?",
    answer: "Round Robin is a preemptive scheduling algorithm designed for time-sharing systems, where each process is given a small fixed unit of CPU time called a time quantum.",
    explanation: "Processes are kept in a circular queue. If a process does not complete within its time quantum, it is preempted and put at the back of the queue."
  },
  {
    id: 27,
    question: "What is Turnaround Time in CPU Scheduling?",
    answer: "Turnaround Time is the total time interval from the time of submission of a process to the time of its completion.",
    explanation: "Formula: Turnaround Time = Completion Time - Arrival Time. It includes execution time and waiting time."
  },
  {
    id: 28,
    question: "What is Waiting Time in CPU Scheduling?",
    answer: "Waiting Time is the total amount of time a process spends waiting in the ready queue for CPU allocation.",
    explanation: "Formula: Waiting Time = Turnaround Time - Burst Time. It is a key metric used to measure the efficiency of scheduling algorithms."
  },
  {
    id: 29,
    question: "What is Response Time in CPU Scheduling?",
    answer: "Response Time is the time from the submission of a request until the first response is produced.",
    explanation: "Formula: Response Time = First Time CPU Allocated - Arrival Time. It is especially important in interactive or time-sharing systems."
  },
  {
    id: 30,
    question: "What is Starvation in CPU Scheduling?",
    answer: "Starvation (or indefinite blocking) is a situation where a process remains ready to run but is perpetually denied the CPU because higher-priority tasks keep arriving.",
    explanation: "It commonly occurs in SJF, SRTF, and Priority scheduling. It can be resolved using 'Aging', a technique that gradually increases the priority of processes based on their waiting time."
  },
  {
    id: 31,
    question: "What is a Critical Section?",
    answer: "A Critical Section is a code segment where shared resources (such as global variables, files, or memory) are accessed and modified by multiple processes or threads.",
    explanation: "To prevent data inconsistency, only one process should be allowed to execute in its critical section at any given time."
  },
  {
    id: 32,
    question: "What is a Race Condition?",
    answer: "A Race Condition is an undesirable situation where the final output of a program depends on the relative execution order or timing of multiple threads or processes.",
    explanation: "It occurs when concurrent threads access and manipulate the same data without proper synchronization mechanisms in place."
  },
  {
    id: 33,
    question: "What is a Mutex?",
    answer: "A Mutex (Mutual Exclusion) is a locking mechanism used to synchronize access to a resource, ensuring only one thread can acquire the lock at a time.",
    explanation: "It is an ownership-based mechanism. The thread that locks the mutex must be the exact same thread that unlocks it when it finishes."
  },
  {
    id: 34,
    question: "What is a Semaphore?",
    answer: "A Semaphore is an integer variable used for signaling among threads to solve synchronization problems, managed via atomic operations called wait() and signal().",
    explanation: "Unlike a mutex, a semaphore does not have a concept of ownership; any thread can signal a semaphore to wake up another waiting thread."
  },
  {
    id: 35,
    question: "What is a Binary Semaphore?",
    answer: "A Binary Semaphore is a type of semaphore whose integer value can only toggle between 0 and 1.",
    explanation: "It behaves similarly to a mutex but lacks ownership constraints, meaning one thread can lock it and another thread can unlock it."
  },
  {
    id: 36,
    question: "What is a Counting Semaphore?",
    answer: "A Counting Semaphore is a semaphore whose value can range over an unrestricted domain, representing the number of available instances of a resource.",
    explanation: "When a resource is acquired, the count decrements (wait). When a resource is released, the count increments (signal). If the count reaches 0, subsequent threads block until a resource is freed."
  },
  {
    id: 37,
    question: "What is a Deadlock?",
    answer: "A Deadlock is a state where a set of processes are blocked because each process is holding a resource and waiting for another resource held by some other process in the set.",
    explanation: "In this situation, none of the involved processes can ever make forward progress, causing a permanent system freeze for those tasks."
  },
  {
    id: 38,
    question: "What are the Necessary Conditions for Deadlock?",
    answer: "A deadlock can only occur if four conditions hold simultaneously: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.",
    explanation: "Mutual Exclusion: Resources cannot be shared. Hold and Wait: A process holds a resource while waiting for another. No Preemption: Resources cannot be forcibly taken. Circular Wait: A chain of processes exists where each waits for a resource held by the next."
  },
  {
    id: 39,
    question: "What is Deadlock Prevention?",
    answer: "Deadlock Prevention is a strategy that eliminates the possibility of a deadlock by designing the system constraints to violate at least one of the four necessary Coffman conditions.",
    explanation: "For example, forcing a process to request all required resources upfront breaks the 'Hold and Wait' condition, successfully preventing deadlocks from ever forming."
  },
  {
    id: 40,
    question: "What is Deadlock Avoidance?",
    answer: "Deadlock Avoidance is a dynamic strategy where the operating system evaluates resource requests in real-time, only granting them if the system remains in a safe state.",
    explanation: "It requires the OS to have prior knowledge of each process's maximum resource claims. A classic example of a deadlock avoidance algorithm is the Banker's Algorithm."
  },
  {
    id: 41,
    question: "What is Paging?",
    answer: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory by dividing physical memory into fixed-sized blocks called frames and logical memory into blocks of the same size called pages.",
    explanation: "The OS maps logical pages to physical frames using a Page Table, allowing a process's physical address space to be non-contiguous."
  },
  {
    id: 42,
    question: "What is Segmentation?",
    answer: "Segmentation is a memory management scheme that reflects the programmer's view of memory by dividing a program into logical, variable-length segments.",
    explanation: "Unlike fixed-size paging, segments represent logical units such as code, stack, heap, and global variables. Each segment has a name and a length."
  },
  {
    id: 43,
    question: "What is Virtual Memory?",
    answer: "Virtual Memory is a storage allocation scheme that maps logical memory addresses used by a application into physical addresses in computer memory, allowing execution of processes that are not completely in physical memory.",
    explanation: "It abstracts main memory into an extremely large, uniform array of storage, separating logical memory as viewed by the user from physical memory."
  },
  {
    id: 44,
    question: "What is Demand Paging?",
    answer: "Demand Paging is a technique used in virtual memory systems where a page is brought into physical memory only when it is actively requested during execution.",
    explanation: "Instead of loading the entire program into RAM at startup, pages are loaded 'on demand', which saves memory space and speeds up initial process loading."
  },
  {
    id: 45,
    question: "What is a Page Fault?",
    answer: "A Page Fault is a hardware interrupt raised by the Memory Management Unit (MMU) when a running program tries to access a memory page that is mapped in virtual space but not currently loaded in physical RAM.",
    explanation: "When it happens, the OS intercepts the interrupt, fetches the missing page from disk storage, updates the page table, and resumes the instruction."
  },
  {
    id: 46,
    question: "What is Thrashing?",
    answer: "Thrashing is a highly inefficient state where a system spends more time swapping pages in and out of disk storage than executing actual instructions.",
    explanation: "It happens when the total size of active pages (working set) across running processes exceeds the available physical RAM, causing continuous page faults."
  },
  {
    id: 47,
    question: "What is a Translation Lookaside Buffer (TLB)?",
    answer: "A TLB is a high-speed hardware cache integrated into the CPU's Memory Management Unit (MMU) that stores recent virtual-to-physical address translations.",
    explanation: "Looking up a page table in RAM adds memory latency. The TLB drastically speeds up operations by bypassing RAM lookups for cached translations (a TLB hit)."
  },
  {
    id: 48,
    question: "What is Fragmentation?",
    answer: "Fragmentation is an unwanted condition where memory space is rendered unusable or inefficiently used, leaving available slots wasted.",
    explanation: "It generally breaks down into two distinct sub-categories based on how memory is parsed and allocated: Internal Fragmentation and External Fragmentation."
  },
  {
    id: 49,
    question: "What is Internal Fragmentation?",
    answer: "Internal Fragmentation occurs when a process is allocated a fixed block of memory that is slightly larger than the requested size, leaving the leftover space within that allocated block wasted.",
    explanation: "Because the block is assigned exclusively to that process, the unused internal overhead cannot be used by other processes."
  },
  {
    id: 50,
    question: "What is External Fragmentation?",
    answer: "External Fragmentation occurs when there is enough total free memory space in the system to satisfy a process request, but the space is non-contiguous (scattered in small blocks throughout the system).",
    explanation: "As a result, a new process cannot be loaded because no single, continuous free block is large enough to fit it. It can be fixed using compaction."
  }
];

export default osFundamentals;