// server/data/oops.js

module.exports = {
    easy: [
      { question: "What does OOPS stand for?", options: ["Object Oriented Programming", "Object Oriented Process", "Object Operational Process", "None"], answer: "Object Oriented Programming" },
      { question: "Which of the following is an object in OOPS?", options: ["Object", "Class", "Method", "All of the above"], answer: "All of the above" },
      { question: "In OOPS, what is inheritance?", options: ["Ability to define new classes based on existing classes", "Ability to perform multiple tasks", "Ability to copy objects", "None"], answer: "Ability to define new classes based on existing classes" },
      { question: "Which concept allows different objects to respond to the same method?", options: ["Polymorphism", "Abstraction", "Encapsulation", "Inheritance"], answer: "Polymorphism" },
      { question: "Which method is used to create an object?", options: ["Constructor", "Destructor", "Function", "Method"], answer: "Constructor" },
      { question: "Which is used to hide the internal details in OOPS?", options: ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"], answer: "Abstraction" },
      { question: "Which is true about a constructor?", options: ["It is used to initialize an object", "It can return values", "It is called explicitly", "None of the above"], answer: "It is used to initialize an object" },
      { question: "What is the principle of encapsulation?", options: ["Hiding the internal details of an object", "Using inheritance", "Using polymorphism", "All of the above"], answer: "Hiding the internal details of an object" },
      { question: "What is method overloading?", options: ["Defining multiple methods with the same name but different parameters", "Defining methods with the same name", "Overriding methods", "None"], answer: "Defining multiple methods with the same name but different parameters" },
      { question: "Which of the following is an example of abstraction?", options: ["Abstract classes", "Interfaces", "Access modifiers", "All of the above"], answer: "All of the above" }
    ],
    
    medium: [
      { question: "In OOPS, what is method overriding?", options: ["Changing the implementation of a method in the child class", "Overloading a method", "Inheritance", "None"], answer: "Changing the implementation of a method in the child class" },
      { question: "Which of these is not a type of polymorphism?", options: ["Compile-time polymorphism", "Run-time polymorphism", "Function overloading", "None"], answer: "None" },
      { question: "What is an abstract class?", options: ["A class that cannot be instantiated", "A class that can be instantiated", "A class with no constructor", "None"], answer: "A class that cannot be instantiated" },
      { question: "What does 'super' keyword do in inheritance?", options: ["Calls the parent class constructor", "Access parent class methods", "Both", "None"], answer: "Both" },
      { question: "Which of these is used to achieve inheritance?", options: ["Extends", "Implements", "Override", "None"], answer: "Extends" },
      { question: "What does encapsulation prevent?", options: ["External interference and misuse of the object’s internal state", "Polymorphism", "Inheritance", "None"], answer: "External interference and misuse of the object’s internal state" },
      { question: "Which of the following is an example of composition?", options: ["One class object inside another class", "Inheritance", "Abstraction", "All of the above"], answer: "One class object inside another class" },
      { question: "What is the major advantage of OOPS?", options: ["Reusability of code", "Faster processing", "Better performance", "None"], answer: "Reusability of code" },
      { question: "Which is an example of association in OOPS?", options: ["One object using another object", "Object creation", "Inheritance", "None"], answer: "One object using another object" },
      { question: "Which is not a feature of OOPS?", options: ["Encapsulation", "Abstraction", "Initialization", "Inheritance"], answer: "Initialization" }
    ],
    
    hard: [
      { question: "In polymorphism, which method is executed when both a base class and derived class method have the same name?", options: ["Base class method", "Derived class method", "Method in the derived class is invoked dynamically", "None"], answer: "Method in the derived class is invoked dynamically" },
      { question: "What is the difference between an abstract class and an interface?", options: ["An abstract class can have implementation, an interface cannot", "Abstract class can only have abstract methods", "An interface cannot be instantiated", "None"], answer: "An abstract class can have implementation, an interface cannot" },
      { question: "Which of the following is used for multiple inheritance?", options: ["Interfaces", "Abstract class", "Super keyword", "None"], answer: "Interfaces" },
      { question: "What is the time complexity of searching for an element in a binary tree?", options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"], answer: "O(log n)" },
      { question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to the current object", "Refers to the parent object", "Defines a new method", "None"], answer: "Refers to the current object" },
      { question: "Which of the following methods is not related to the Object class in Java?", options: ["getClass()", "wait()", "notify()", "print()"], answer: "print()" },
      { question: "What is method delegation in OOPS?", options: ["Passing method invocation from one object to another", "Overriding method", "Overloading method", "None"], answer: "Passing method invocation from one object to another" },
      { question: "What does the 'final' keyword represent in Java?", options: ["Used to define constants", "Prevent inheritance", "Prevent method overriding", "All of the above"], answer: "All of the above" },
      { question: "What is the purpose of object cloning?", options: ["Creates a duplicate of the object", "Copies an object", "Both", "None"], answer: "Creates a duplicate of the object" },
      { question: "What is the difference between shallow and deep cloning?", options: ["Shallow cloning copies references, deep cloning copies actual data", "Shallow cloning copies actual data, deep cloning copies references", "Both copy actual data", "None"], answer: "Shallow cloning copies references, deep cloning copies actual data" }
    ]
  };
  