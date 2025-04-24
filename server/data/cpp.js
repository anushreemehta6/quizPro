// server/data/cpp.js

module.exports = {
    easy: [
      { question: "What is a class in C++?", options: ["A blueprint for creating objects", "A method", "A variable", "None"], answer: "A blueprint for creating objects" },
      { question: "Which of the following is used to create an object in C++?", options: ["new", "malloc", "constructor", "None"], answer: "constructor" },
      { question: "Which operator is used to access members of a class?", options: ["->", ".", "#", "&"], answer: "." },
      { question: "What is the default access modifier for class members in C++?", options: ["public", "private", "protected", "None"], answer: "private" },
      { question: "What is a destructor?", options: ["A function that is automatically called when an object is destroyed", "A function that initializes an object", "A function that handles exceptions", "None"], answer: "A function that is automatically called when an object is destroyed" },
      { question: "What is polymorphism in C++?", options: ["Ability to take multiple forms", "Ability to inherit methods", "Ability to overload functions", "None"], answer: "Ability to take multiple forms" },
      { question: "Which of the following is a valid C++ data type?", options: ["int", "double", "char", "All of the above"], answer: "All of the above" },
      { question: "What is the use of 'this' pointer in C++?", options: ["Points to the current object", "Points to the parent class", "Points to the previous object", "None"], answer: "Points to the current object" },
      { question: "What is the purpose of the 'new' operator in C++?", options: ["Allocates memory dynamically", "Creates a new variable", "Creates an object", "None"], answer: "Allocates memory dynamically" },
      { question: "Which function is used to read input in C++?", options: ["scanf", "cin", "input", "read"], answer: "cin" }
    ],
  
    medium: [
      { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(log n^2)"], answer: "O(log n)" },
      { question: "Which of the following is used to handle exceptions in C++?", options: ["try-catch", "try-except", "throw", "None"], answer: "try-catch" },
      { question: "What is the function of the 'virtual' keyword?", options: ["It defines a virtual function", "It makes a function static", "It allows for function overloading", "None"], answer: "It defines a virtual function" },
      { question: "What does 'const' keyword do in C++?", options: ["Defines a constant variable", "Creates a constant pointer", "Both", "None"], answer: "Both" },
      { question: "Which of these containers is not part of the C++ STL?", options: ["map", "unordered_map", "vector", "linked_list"], answer: "linked_list" },
      { question: "What is the purpose of the 'friend' keyword?", options: ["Grants access to private members of a class", "Defines a constant variable", "Declares a function", "None"], answer: "Grants access to private members of a class" },
      { question: "Which operator is used to allocate memory dynamically?", options: ["new", "malloc", "malloc()", "None"], answer: "new" },
      { question: "What is the default value of a pointer?", options: ["nullptr", "NULL", "0", "None"], answer: "nullptr" },
      { question: "What is a pure virtual function?", options: ["A function that has no implementation", "A function that is overridden in derived classes", "A function that handles exceptions", "None"], answer: "A function that has no implementation" },
      { question: "What is the output of 'cout << 5 / 2;' in C++?", options: ["2", "2.5", "3", "None"], answer: "2" }
    ],
  
    hard: [
      { question: "What is the difference between 'new' and 'malloc' in C++?", options: ["new initializes variables, malloc does not", "malloc initializes variables, new does not", "new is faster than malloc", "None"], answer: "new initializes variables, malloc does not" },
      { question: "What is the time complexity of heap sort?", options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"], answer: "O(n log n)" },
      { question: "What does 'RAII' stand for in C++?", options: ["Resource Acquisition Is Initialization", "Random Access Input Interface", "Recurrent Asynchronous Iterative Integration", "None"], answer: "Resource Acquisition Is Initialization" },
      { question: "What is the difference between 'static' and 'const' variables in C++?", options: ["Static variables retain their value between function calls, const variables are read-only", "Both behave the same", "Static variables are read-only, const variables retain their value", "None"], answer: "Static variables retain their value between function calls, const variables are read-only" },
      { question: "What is a 'lambda' function in C++?", options: ["A function that does not have a name", "A function defined inside another function", "A function defined outside the class", "None"], answer: "A function that does not have a name" },
      { question: "What is 'slicing' in C++?", options: ["Copying an object of a derived class into an object of a base class", "Copying an object of a base class into an object of a derived class", "None", "Both"], answer: "Copying an object of a derived class into an object of a base class" },
      { question: "What does the 'delete' keyword do in C++?", options: ["Deallocates memory allocated by 'new'", "Deallocates memory allocated by 'malloc'", "Deletes an object", "None"], answer: "Deallocates memory allocated by 'new'" },
      { question: "What is the purpose of the 'typeid' operator?", options: ["Used to get the type of an object", "Used to define a new type", "Used to compare two types", "None"], answer: "Used to get the type of an object" },
      { question: "What is a 'virtual destructor'?", options: ["A destructor that can be overridden in derived classes", "A destructor that is always called", "A constructor in disguise", "None"], answer: "A destructor that can be overridden in derived classes" },
      { question: "What is the difference between 'new' and 'new[]' in C++?", options: ["new is used for single object allocation, new[] is used for array allocation", "new is for arrays, new[] is for objects", "Both work the same", "None"], answer: "new is used for single object allocation, new[] is used for array allocation" }
    ]
  };
  