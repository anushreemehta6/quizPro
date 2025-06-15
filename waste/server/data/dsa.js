// server/data/dsa.js

module.exports = {
    easy: [
      { question: "What is an array?", options: ["A collection of similar elements", "A collection of different elements", "A fixed-size list of elements", "None"], answer: "A collection of similar elements" },
      { question: "Which of these is a type of linked list?", options: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "All of the above"], answer: "All of the above" },
      { question: "What is the time complexity of accessing an element in an array?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" },
      { question: "Which of the following is a sorting algorithm?", options: ["Bubble Sort", "Quick Sort", "Merge Sort", "All of the above"], answer: "All of the above" },
      { question: "In a binary search tree, the left subtree of a node contains only nodes with values that are:", options: ["Greater than", "Less than", "Equal to", "None"], answer: "Less than" },
      { question: "What is the best case time complexity of QuickSort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
      { question: "What is a stack?", options: ["A linear data structure", "A non-linear data structure", "A tree-like structure", "None"], answer: "A linear data structure" },
      { question: "Which algorithm is used for finding the shortest path in a graph?", options: ["Dijkstra's Algorithm", "Prim's Algorithm", "Krushkal's Algorithm", "None"], answer: "Dijkstra's Algorithm" },
      { question: "What is the worst-case time complexity of Merge Sort?", options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"], answer: "O(n log n)" },
      { question: "What is the time complexity for insertion in a hash table?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(1)" }
    ],
    
    medium: [
      { question: "What is the space complexity of Merge Sort?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: "O(n)" },
      { question: "Which of these is a non-linear data structure?", options: ["Array", "Queue", "Stack", "Graph"], answer: "Graph" },
      { question: "Which of the following is a greedy algorithm?", options: ["Dijkstra's Algorithm", "Merge Sort", "Breadth First Search", "None"], answer: "Dijkstra's Algorithm" },
      { question: "What is the time complexity of searching in a binary search tree?", options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"], answer: "O(log n)" },
      { question: "What does a dynamic array do?", options: ["Resizes automatically when full", "Fixed in size", "Has no index", "None of the above"], answer: "Resizes automatically when full" },
      { question: "What is the worst-case time complexity of QuickSort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n^2)" },
      { question: "Which of the following can be used to implement a queue?", options: ["Array", "Linked List", "Both", "None"], answer: "Both" },
      { question: "Which algorithm is used for finding the Minimum Spanning Tree?", options: ["Prim's Algorithm", "Dijkstra's Algorithm", "Merge Sort", "None"], answer: "Prim's Algorithm" },
      { question: "What is the worst-case time complexity of Bubble Sort?", options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(n^2)" },
      { question: "What is a graph traversal algorithm?", options: ["DFS", "BFS", "Both", "None"], answer: "Both" }
    ],
  
    hard: [
      { question: "What is the time complexity of Depth First Search (DFS) for a graph?", options: ["O(V + E)", "O(V log E)", "O(E^2)", "O(V^2)"], answer: "O(V + E)" },
      { question: "What is the worst-case time complexity of QuickSort?", options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"], answer: "O(n^2)" },
      { question: "What is the time complexity of Prim’s Algorithm for finding Minimum Spanning Tree?", options: ["O(E log V)", "O(V^2)", "O(V log E)", "O(n)"], answer: "O(E log V)" },
      { question: "What is the time complexity of finding the shortest path in an unweighted graph using BFS?", options: ["O(V + E)", "O(n log n)", "O(n^2)", "O(log n)"], answer: "O(V + E)" },
      { question: "What is the space complexity of a binary heap?", options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], answer: "O(n)" },
      { question: "What is the difference between BFS and DFS in graph traversal?", options: ["DFS uses a stack, BFS uses a queue", "DFS uses a queue, BFS uses a stack", "Both use a stack", "None"], answer: "DFS uses a stack, BFS uses a queue" },
      { question: "What is the worst-case time complexity of Heap Sort?", options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
      { question: "What is the time complexity of finding the middle element of a linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], answer: "O(n)" },
      { question: "Which data structure is used in the implementation of a priority queue?", options: ["Heap", "Queue", "Array", "Linked List"], answer: "Heap" },
      { question: "What is the time complexity of deleting an element in a binary search tree?", options: ["O(log n)", "O(n)", "O(n^2)", "O(log n^2)"], answer: "O(log n)" }
    ]
  };
  