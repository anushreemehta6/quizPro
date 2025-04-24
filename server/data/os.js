// server/data/os.js

module.exports = {
    easy: [
      { question: "What does OS stand for?", options: ["Open Source", "Operating System", "Online Service", "Order of Service"], answer: "Operating System" },
      { question: "Which of these is not an OS?", options: ["Windows", "Linux", "Oracle", "macOS"], answer: "Oracle" },
      { question: "What is the kernel of an OS?", options: ["User interface", "Core component", "Application layer", "File manager"], answer: "Core component" },
      { question: "Which OS uses a penguin as its mascot?", options: ["Windows", "macOS", "Linux", "Android"], answer: "Linux" },
      { question: "What does GUI stand for?", options: ["Graphical User Interface", "General User Interface", "Graphical Utility Interface", "Global User Interface"], answer: "Graphical User Interface" },
      { question: "Which OS is developed by Apple?", options: ["Ubuntu", "Windows", "macOS", "Android"], answer: "macOS" },
      { question: "What is multitasking in OS?", options: ["Running one task at a time", "Running multiple tasks concurrently", "Running no task", "Running tasks sequentially"], answer: "Running multiple tasks concurrently" },
      { question: "Which type of OS is real-time OS?", options: ["Single-user", "Multi-user", "Embedded", "Distributed"], answer: "Embedded" },
      { question: "What manages hardware resources in an OS?", options: ["Shell", "Kernel", "GUI", "Application"], answer: "Kernel" },
      { question: "Which command lists files in Linux terminal?", options: ["ls", "dir", "list", "show"], answer: "ls" }
    ],
  
    medium: [
      { question: "What is a process in OS?", options: ["A running program", "A file", "A directory", "A user"], answer: "A running program" },
      { question: "Which scheduling algorithm gives highest response time?", options: ["FCFS", "SJF", "Round Robin", "Priority"], answer: "FCFS" },
      { question: "What does paging do?", options: ["Divides memory into fixed-size pages", "Merges pages", "Deletes memory", "Encrypts pages"], answer: "Divides memory into fixed-size pages" },
      { question: "Which is a non-preemptive scheduling algorithm?", options: ["Round Robin", "Priority (preemptive)", "FCFS", "Shortest Remaining Time"], answer: "FCFS" },
      { question: "What is a context switch?", options: ["Switching user accounts", "Switching processes in CPU", "Switching files", "Switching disks"], answer: "Switching processes in CPU" },
      { question: "What is thrashing in OS?", options: ["Excessive paging", "High CPU usage", "Low memory use", "Disk clean-up"], answer: "Excessive paging" },
      { question: "Which structure tracks free and used memory?", options: ["File table", "Page table", "Memory map", "Swap space"], answer: "Page table" },
      { question: "What is VPN?", options: ["Virtual Private Network", "Video Protocol Network", "Virtual Public Network", "None"], answer: "Virtual Private Network" },
      { question: "Which OS component handles I/O operations?", options: ["Scheduler", "Memory manager", "Device driver", "File system"], answer: "Device driver" },
      { question: "What does SMP stand for?", options: ["Single Multiprocessor", "Symmetric Multiprocessing", "Simple Memory Protocol", "System Memory Page"], answer: "Symmetric Multiprocessing" }
    ],
  
    hard: [
      { question: "What is the purpose of a semaphore?", options: ["Mutual exclusion", "Memory allocation", "Scheduling", "I/O control"], answer: "Mutual exclusion" },
      { question: "Which algorithm is used for deadlock prevention?", options: ["Banker’s algorithm", "Round Robin", "FCFS", "SJF"], answer: "Banker’s algorithm" },
      { question: "What is demand paging?", options: ["Load pages when needed", "Load all pages at once", "Remove pages on demand", "Encrypt pages"], answer: "Load pages when needed" },
      { question: "Which file system does Linux commonly use?", options: ["NTFS", "EXT4", "HFS+", "FAT32"], answer: "EXT4" },
      { question: "What is the maximum number of processes in a deadlock cycle of n resources?", options: ["n", "2n", "n²", "n/2"], answer: "n" },
      { question: "What is copy-on-write?", options: ["Delay copying until modification", "Immediate copy", "Delete on write", "Encrypt on write"], answer: "Delay copying until modification" },
      { question: "What is the primary advantage of microkernel architecture?", options: ["Smaller kernel size", "Better performance", "Single address space", "None"], answer: "Smaller kernel size" },
      { question: "Which algorithm is used by Linux for CPU scheduling by default?", options: ["CFS (Completely Fair Scheduler)", "Round Robin", "Priority", "FCFS"], answer: "CFS (Completely Fair Scheduler)" },
      { question: "What is the role of the VFS in Linux?", options: ["Virtual File System interface", "Video File System", "Virtual Function Scheduler", "None"], answer: "Virtual File System interface" },
      { question: "Which cache coherence protocol is used in SMP systems?", options: ["MESI", "LRU", "FIFO", "FCFS"], answer: "MESI" }
    ]
  };
  