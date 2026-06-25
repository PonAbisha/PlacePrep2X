const oopFundamentals = [
{
id: 1,
question: "What is Object-Oriented Programming (OOP)?",
answer: "OOP is a programming paradigm based on objects that contain data and methods.",
explanation: "It helps organize software using real-world concepts such as objects, classes, and inheritance."
},
{
id: 2,
question: "What is a Class?",
answer: "A class is a blueprint or template for creating objects.",
explanation: "It defines the properties and behaviors that objects of that class will have."
},
{
id: 3,
question: "What is an Object?",
answer: "An object is an instance of a class.",
explanation: "It contains actual values for the attributes defined in the class."
},
{
id: 4,
question: "What are the four pillars of OOP?",
answer: "Encapsulation, Abstraction, Inheritance, and Polymorphism.",
explanation: "These four concepts form the foundation of object-oriented programming."
},
{
id: 5,
question: "What is Encapsulation?",
answer: "Encapsulation is the bundling of data and methods into a single unit while restricting direct access to internal data.",
explanation: "It improves security and data integrity through access modifiers."
},
{
id: 6,
question: "What is Abstraction?",
answer: "Abstraction hides implementation details and shows only essential features.",
explanation: "It reduces complexity and improves maintainability."
},
{
id: 7,
question: "What is Inheritance?",
answer: "Inheritance allows one class to acquire properties and methods from another class.",
explanation: "It promotes code reuse and hierarchical relationships."
},
{
id: 8,
question: "What is Polymorphism?",
answer: "Polymorphism allows the same interface to be used for different implementations.",
explanation: "It enables flexibility and extensibility in software design."
},
{
id: 9,
question: "What is a Constructor?",
answer: "A constructor is a special method used to initialize objects.",
explanation: "It is automatically called when an object is created."
},
{
id: 10,
question: "What is a Destructor?",
answer: "A destructor is a special method used to release resources when an object is destroyed.",
explanation: "It helps clean up memory and resources before object removal."
},
{
id: 11,
question: "What are Access Modifiers in OOP?",
answer: "Access Modifiers control the visibility and accessibility of class members.",
explanation: "Common access modifiers are Public, Private, and Protected."
},
{
id: 12,
question: "What is a Public Access Modifier?",
answer: "Public members can be accessed from anywhere in the program.",
explanation: "There are no access restrictions on public members."
},
{
id: 13,
question: "What is a Private Access Modifier?",
answer: "Private members can only be accessed within the same class.",
explanation: "It provides data hiding and improves encapsulation."
},
{
id: 14,
question: "What is a Protected Access Modifier?",
answer: "Protected members can be accessed within the same class and its derived classes.",
explanation: "It is commonly used in inheritance relationships."
},
{
id: 15,
question: "What is Method Overloading?",
answer: "Method Overloading allows multiple methods with the same name but different parameter lists.",
explanation: "It is an example of compile-time polymorphism."
},
{
id: 16,
question: "What is Method Overriding?",
answer: "Method Overriding allows a derived class to provide its own implementation of a method already defined in the base class.",
explanation: "It is an example of runtime polymorphism."
},
{
id: 17,
question: "What are Static Members?",
answer: "Static members belong to the class rather than individual objects.",
explanation: "They are shared among all instances of the class."
},
{
id: 18,
question: "What is the 'this' Keyword?",
answer: "The 'this' keyword refers to the current object of a class.",
explanation: "It is used to access instance variables and methods of the current object."
},
{
id: 19,
question: "What is the 'super' Keyword?",
answer: "The 'super' keyword refers to the immediate parent class object.",
explanation: "It is used to access parent class methods, constructors, and variables."
},
{
id: 20,
question: "What is Association in OOP?",
answer: "Association is a relationship where two independent objects interact with each other.",
explanation: "For example, a Teacher and Student can be associated without depending on each other's existence."
},
{
    id: 21,
    question: "What is Aggregation in object-oriented design?",
    answer: "Aggregation is a loose, directional 'has-a' relationship between two classes where the child object can exist independently of the parent container.",
    explanation: "It represents a weak dependency. For example, a Department 'has-a' Professor; if the Department is deleted from system memory, the Professor object remains intact and alive elsewhere in the application."
  },
  {
    id: 22,
    question: "What is Composition, and how does it contrast with Aggregation?",
    answer: "Composition is a strict, exclusive 'has-a' relationship where the child object's lifecycle is bound completely to its parent container; it cannot exist independently.",
    explanation: "It represents a strong dependency. For example, a House 'has-a' Room. If the House object is deleted or destroyed, all its component Room objects are automatically wiped from memory along with it."
  },
  {
    id: 23,
    question: "What are the different Inheritance Types supported across modern object-oriented programming architectures?",
    answer: "Inheritance types classify how structural classes derive behaviors from base components, and include Single, Multilevel, Hierarchical, Multiple, and Hybrid styles.",
    explanation: "While languages vary in their native compiler support for specific types (like Multiple inheritance), the underlying conceptual variants define how code reuse trees are shaped."
  },
  {
    id: 24,
    question: "What is Single Inheritance?",
    answer: "Single Inheritance is a class tree structure where a subclass is derived from exactly one immediate superclass base.",
    explanation: "It is the simplest, cleanest form of inheritance. For example, class Car extends class Vehicle. It avoids code ambiguity and is universally supported by almost all object-oriented languages."
  },
  {
    id: 25,
    question: "What is Multiple Inheritance, and why do many languages restrict its class implementation?",
    answer: "Multiple Inheritance allows a subclass to derive properties and methods from more than one immediate parent class simultaneously.",
    explanation: "Languages like Java and C# block this at the class level to avoid the 'Diamond Problem', where method name collisions create compilation ambiguity. Instead, they require using multiple Interfaces to achieve similar outcomes safely."
  },
  {
    id: 26,
    question: "What is Multilevel Inheritance?",
    answer: "Multilevel Inheritance is a linear chain structure where a child class extends a parent class, which in turn extends another grandfather class.",
    explanation: "For example, class SportsCar extends class Car, which extends class Vehicle. The class at the bottom of the chain inherits all accumulated states and methods from every ancestor up the lineage line."
  },
  {
    id: 27,
    question: "What is Hierarchical Inheritance?",
    answer: "Hierarchical Inheritance is a branching structure where multiple independent subclasses all derive features from a single, shared parent class.",
    explanation: "For example, both class Car and class Truck inherit independently from class Vehicle. This organizes variations of a common category under a single root foundation cleanly."
  },
  {
    id: 28,
    question: "What is Hybrid Inheritance?",
    answer: "Hybrid Inheritance is an advanced combination of two or more standard inheritance patterns (e.g., mixing Multilevel and Hierarchical types) inside a single system design.",
    explanation: "Because it often forms complex loops or diamond paths, implementing it cleanly requires a mix of single class inheritance combined with multiple interface implementations to prevent compiler conflicts."
  },
  {
    id: 29,
    question: "What is Compile-Time Polymorphism, and how is it processed under the hood?",
    answer: "Compile-Time Polymorphism (Static Binding) resolves method execution pathways during compilation by evaluating method signatures, primarily through Method Overloading or Operator Overloading.",
    explanation: "Because the compiler checks the arguments and links the execution directly to specific memory addresses before runtime, it executes incredibly fast with no runtime overhead."
  },
  {
    id: 30,
    question: "What is Run-Time Polymorphism, and what mechanism facilitates it?",
    answer: "Run-Time Polymorphism (Dynamic Binding) resolves method execution paths dynamically at runtime based on the actual underlying object instance type, achieved via Method Overriding.",
    explanation: "When an overridden method is called on an upcast reference, the execution engine uses a Virtual Table (V-Table) pointer lookup to find and dispatch the correct subclass method block dynamically."
  },
  {
id: 31,
question: "What is Aggregation in OOP?",
answer: "Aggregation is a 'has-a' relationship where one object contains another object, but both can exist independently.",
explanation: "For example, a Department can have Professors, but Professors can exist without a specific Department."
},
{
id: 32,
question: "What is Composition in OOP?",
answer: "Composition is a strong 'has-a' relationship where the contained object cannot exist independently of the container object.",
explanation: "For example, a House contains Rooms. If the House is destroyed, the Rooms cease to exist."
},
{
id: 33,
question: "What are the different types of Inheritance?",
answer: "Single, Multiple, Multilevel, Hierarchical, and Hybrid Inheritance.",
explanation: "These inheritance types define different ways classes can derive properties and behaviors from other classes."
},
{
id: 34,
question: "What is Single Inheritance?",
answer: "Single Inheritance occurs when one child class inherits from one parent class.",
explanation: "It is the simplest form of inheritance."
},
{
id: 35,
question: "What is Multiple Inheritance?",
answer: "Multiple Inheritance occurs when a class inherits from more than one parent class.",
explanation: "Languages like C++ support it directly, while Java achieves it through interfaces."
},
{
id: 36,
question: "What is Multilevel Inheritance?",
answer: "Multilevel Inheritance occurs when a class inherits from a derived class.",
explanation: "It forms a chain of inheritance such as A → B → C."
},
{
id: 37,
question: "What is Hierarchical Inheritance?",
answer: "Hierarchical Inheritance occurs when multiple child classes inherit from a single parent class.",
explanation: "It allows common functionality to be shared among multiple subclasses."
},
{
id: 38,
question: "What is Hybrid Inheritance?",
answer: "Hybrid Inheritance is a combination of two or more inheritance types.",
explanation: "It combines features of single, multiple, multilevel, or hierarchical inheritance."
},
{
id: 39,
question: "What is Compile-Time Polymorphism?",
answer: "Compile-Time Polymorphism is achieved through method overloading and operator overloading.",
explanation: "The method to be executed is determined during compilation."
},
{
id: 40,
question: "What is Run-Time Polymorphism?",
answer: "Run-Time Polymorphism is achieved through method overriding.",
explanation: "The method to be executed is determined during program execution."
},
{
id: 41,
question: "What is an Abstract Class?",
answer: "An Abstract Class is a class that cannot be instantiated and may contain abstract methods.",
explanation: "It serves as a blueprint for derived classes."
},
{
id: 42,
question: "What is an Abstract Method?",
answer: "An Abstract Method is a method declared without an implementation.",
explanation: "Derived classes must provide its implementation."
},
{
id: 43,
question: "What is an Interface?",
answer: "An Interface is a contract that defines methods that implementing classes must provide.",
explanation: "It supports abstraction and multiple inheritance-like behavior."
},
{
id: 44,
question: "What is the difference between an Abstract Class and an Interface?",
answer: "An Abstract Class can have implemented and abstract methods, while an Interface mainly defines method contracts.",
explanation: "Interfaces focus on behavior, whereas abstract classes can provide partial implementation."
},
{
id: 45,
question: "What is Dynamic Binding?",
answer: "Dynamic Binding is the process of resolving method calls at runtime.",
explanation: "It enables runtime polymorphism through method overriding."
},
{
id: 46,
question: "What is Static Binding?",
answer: "Static Binding resolves method calls during compilation.",
explanation: "Method overloading is an example of static binding."
},
{
id: 47,
question: "What is Object Cloning?",
answer: "Object Cloning is the process of creating an exact copy of an existing object.",
explanation: "It is useful when creating duplicates without manually copying each field."
},
{
id: 48,
question: "What is a Copy Constructor?",
answer: "A Copy Constructor creates a new object by copying another object's values.",
explanation: "It is commonly used in C++ for object duplication."
},
{
id: 49,
question: "What is Message Passing in OOP?",
answer: "Message Passing is the communication between objects through method calls.",
explanation: "Objects interact by sending requests and receiving responses."
},
{
id: 50,
question: "What are the advantages of OOP?",
answer: "Code reusability, modularity, scalability, maintainability, and security.",
explanation: "OOP simplifies software development by organizing programs into reusable objects and classes."
}
];

export default oopFundamentals;
