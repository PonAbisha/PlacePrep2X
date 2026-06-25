const oopConceptual = [
  {
    id: 1,
    question: "What is the conceptual difference between a Class and an Object, and how do they relate to system memory?",
    answer: "A Class is a compile-time blueprint or data type definition that occupies no physical RAM space. An Object is a runtime instance of that class that allocates actual memory blocks on the Heap to store its state variables.",
    explanation: "Think of a class as a house architectural schema (text on paper) and an object as the actual brick-and-mortar house built from it. The class defines metadata structures; objects hold live data values during execution."
  },
  {
    id: 2,
    question: "Why is Encapsulation often referred to as 'Data Hiding', and what structural benefit does it provide to a codebase?",
    answer: "Encapsulation bundles data properties and the methods that operate on them into a single class unit while restricting direct external access via access modifiers. This creates a secure boundary that prevents accidental data corruption.",
    explanation: "By making class variables private and exposing them only via public getters/setters, you decouple the internal representation of data from external use, allowing you to change the underlying implementation without breaking dependent code."
  },
  {
    id: 3,
    question: "What is the Abstraction principle, and how does it distinctively differ from Encapsulation?",
    answer: "Abstraction hides complex implementation details and only displays essential features to the outside world. Encapsulation focuses on the security/binding of data, while Abstraction focuses on hiding the operational complexity.",
    explanation: "Encapsulation is a mechanism (e.g., using private variables), whereas Abstraction is a design philosophy. For example, a car steering wheel is an abstraction hiding the steering rack mechanics; enclosing the engine under the hood is encapsulation."
  },
  {
    id: 4,
    question: "Why are Access Modifiers (Private, Protected, Public) critical in enforcing the safety of an Object's internal state?",
    answer: "Access modifiers dictate visibility thresholds. 'Private' completely isolates members to the host class; 'Protected' allows inheritance extensions but blocks public access; 'Public' opens members to the global execution scope.",
    explanation: "Without these boundaries, any external module could directly rewrite an object's internal variables (e.g., setting accountBalance to -500), bypassing the internal validation logic built into the class methods."
  },
  {
    id: 5,
    question: "What is a Constructor, and why shouldn't complex business logic or heavy I/O operations be executed inside it?",
    answer: "A Constructor is a special method called automatically during object instantiation to initialize properties. Heavy calculations or I/O operations shouldn't live here because it blocks thread allocation and makes unit testing incredibly difficult.",
    explanation: "Constructors should remain lightweight, predictable, and fast. If a constructor triggers a failing database call, the object initialization fails halfway, creating untraceable memory states and breaking object-creation predictability."
  },
  {
    id: 6,
    question: "What is the purpose of a Destructor or Finalizer, and how does its execution differ in managed vs. unmanaged languages?",
    answer: "A Destructor cleans up allocated resources before an object is removed from memory. In unmanaged languages (like C++), developers must invoke it manually. In managed environments (like Java/C#), the Garbage Collector triggers it automatically.",
    explanation: "Failing to clean up inside a destructor in unmanaged code causes memory leaks. In managed systems, while RAM is automatically reclaimed, manual cleanups (like closing open database connections or file streams) must still be handled explicitly."
  },
  {
    id: 7,
    question: "What does the 'this' keyword represent conceptually, and how does it resolve scope ambiguity within methods?",
    answer: "The 'this' keyword is an implicit reference pointer pointing directly to the current executing instance of an object.",
    explanation: "If a method parameter shares the exact same name as a class instance variable (e.g., `this.name = name`), appending `this` explicitly informs the compiler to target the object's instance variable rather than the local parameter."
  },
  {
    id: 8,
    question: "Why does the use of Static variables and methods break pure Object-Oriented paradigms?",
    answer: "Static members belong directly to the class definition rather than to individual object instances. This introduces global state characteristics that run counter to encapsulated object independence.",
    explanation: "Static variables persist across the entire application lifecycle and share state globally. This tightly couples classes together, hinders polymorphism, and creates hidden dependencies that make safe parallel execution difficult."
  },
  {
    id: 9,
    question: "What is a Shallow Copy versus a Deep Copy of an object, and what danger does a Shallow Copy introduce?",
    answer: "A Shallow Copy duplicates an object's top-level properties but copies references for nested objects. A Deep Copy creates an entirely independent duplicate, recursively copying all child nested objects down the chain.",
    explanation: "If you modify a nested property inside a shallow-copied object, the change will unintentionally alter the original object as well, because both structures still point to the exact same reference address in memory."
  },
  {
    id: 10,
    question: "Why is the use of 'Getters and Setters' preferred over making class fields public, even if no validation logic is present?",
    answer: "It maintains the open-closed principle, ensuring that if you need to add formatting, logging, or security validation to a field later, you can do so cleanly inside the getter/setter without breaking external calling code.",
    explanation: "If fields are public, external code binds directly to that property's specific data type. Using methods abstracts the access pathway, leaving you free to change a variable's internal type or structure down the road."
  },
  {
    id: 11,
    question: "What is the core purpose of Inheritance, and why can excessive inheritance hierarchies degrade system maintainability?",
    answer: "Inheritance promotes code reusability by allowing a child class to inherit states and behaviors from a parent class. However, deep hierarchies cause tight coupling, making the codebase rigid and brittle.",
    explanation: "This is known as the 'Fragile Base Class problem'. If a base class is modified to fix a bug, it can cause unpredictable runtime bugs or compilation errors down through dozens of derived child subclasses."
  },
  {
    id: 12,
    question: "What is Polymorphism, and how do Compile-time (Static) and Runtime (Dynamic) Polymorphism differ?",
    answer: "Polymorphism allows objects of different classes to be treated as instances of a common superclass. Compile-time polymorphism is achieved via method overloading, while runtime polymorphism relies on method overriding.",
    explanation: "Compile-time polymorphism resolves which method version to execute at compilation using signature matching. Runtime polymorphism resolves the method path dynamically at runtime using a virtual table (V-Table) lookup based on the true underlying object instance."
  },
  {
    id: 13,
    question: "Explain the difference between Method Overloading and Method Overriding.",
    answer: "Method Overloading happens within the same class when multiple methods share a name but use different parameters. Method Overriding happens when a child class redefines a parent class method using the exact same signature.",
    explanation: "Overloading provides compile-time variance for similar behaviors with different data inputs. Overriding alters or replaces inherited behavior at runtime, enabling polymorphic execution across subclass sets."
  },
  {
    id: 14,
    question: "Why do languages like Java and C# explicitly prohibit Multiple Inheritance of classes, and how do they resolve its design issues?",
    answer: "Multiple inheritance is banned to avoid the 'Diamond Problem', where ambiguities arise if a child class inherits conflicting implementations of the same method from two different parent paths.",
    explanation: "To solve this without sacrificing design flexibility, modern languages allow a class to inherit from only one base class but implement multiple Interfaces, which contain abstract signatures without state definitions."
  },
  {
    id: 15,
    question: "What is an Abstract Class, and how does it distinctively contrast with an Interface?",
    answer: "An abstract class is an incomplete class that can hold both abstract methods and full state data (variables/concrete methods). An interface is a pure behavioral contract that traditionally holds no state or concrete logic.",
    explanation: "Abstract classes define identity relationships ('is-a'), providing a shared foundation for closely related objects. Interfaces define operational capabilities ('can-do'), bridging completely unrelated classes under a shared action routine."
  },
  {
    id: 16,
    question: "What is Upcasting versus Downcasting in class hierarchies, and what critical risk does Downcasting introduce?",
    answer: "Upcasting casts a child reference to a parent reference type and is completely safe. Downcasting casts a parent reference back down to a child type, which introduces a severe type-safety crash risk if the underlying object isn't actually the targeted child type.",
    explanation: "Upcasting happens automatically (e.g., storing a Dog object inside an Animal variable). Downcasting requires explicit casting code. If the Animal variable actually holds a Cat, downcasting to a Dog triggers a runtime crash (e.g., `ClassCastException`)."
  },
  {
    id: 17,
    question: "What is the architectural purpose of a Virtual Method, and how does the compiler facilitate dynamic dispatch using a V-Table?",
    answer: "A Virtual Method explicitly signals that a function can be overridden by subclasses. The compiler builds a Virtual Table (V-Table) for each class, which acts as an index array of function pointers mapped to the correct overriding functions.",
    explanation: "When a virtual method is called on an upcast object reference, the program inspects the object's hidden V-Table pointer at runtime to resolve and jump to the correct overridden function block."
  },
  {
    id: 18,
    question: "Why should you avoid calling virtual methods inside a class constructor?",
    answer: "Calling a virtual method inside a constructor can lead to runtime crashes or uninitialized state bugs because the method can run against a child class instance that hasn't finished initializing yet.",
    explanation: "During base class execution, the child class properties do not exist yet. If the overridden virtual method tries to access child-specific fields, it reads uninitialized null or garbage memory values, breaking execution safety."
  },
  {
    id: 19,
    question: "What is the conceptual value of the 'Final' (or 'Sealed') keyword when applied to classes and methods?",
    answer: "The final/sealed keyword blocks a class from being inherited or a method from being overridden, protecting core logic from unintended modifications.",
    explanation: "This is crucial when writing secure API libraries (like Java's `String` class). Preventing subclassing ensures that malicious actors cannot override core security behaviors or bypass internal validation logic via inheritance."
  },
  {
    id: 20,
    question: "What is Object Slicing, and why does it occur when passing polymorphic objects by value instead of pointer/reference in languages like C++?",
    answer: "Object Slicing occurs when a child class object is assigned directly to a base class object by value, stripping away all child-specific attributes and methods.",
    explanation: "Because a base object has a smaller memory footprint, it can only hold base-level fields. The extended child data is sliced off during copy execution, destroying the object's polymorphic identity."
  },
  {
    id: 21,
    question: "Why is the architectural design guideline 'Composition over Inheritance' highly recommended in modern software engineering?",
    answer: "Composition builds complex behaviors by combining small, focused objects ('has-a') rather than relying on class hierarchies ('is-a'), reducing tight coupling and allowing relationships to change dynamically at runtime.",
    explanation: "Inheritance is static and determined at compile time. Composition lets you swap behaviors on the fly by injecting different dependency objects, making the system highly flexible and far easier to unit-test."
  },
  {
    id: 22,
    question: "What is the Single Responsibility Principle (SRP) in SOLID design, and how does it prevent code smell?",
    answer: "SRP states that a class should have exactly one reason to change, meaning it should focus entirely on a single, self-contained responsibility or functional requirement.",
    explanation: "If a single class handles database queries, business math, and JSON formatting, changes to any of those requirements risk breaking the others. Splitting these into separate classes isolates side effects."
  },
  {
    id: 23,
    question: "How does the Open-Closed Principle (OCP) guide developers to write code that scales without risking regressions?",
    answer: "OCP states that software entities should be open for extension but closed for modification. You should be able to add new features without altering existing, tested code.",
    explanation: "Instead of adding `if/else` branches to an existing class method to handle a new data type, you should abstract the behavior behind an interface and create a new subclass to implement the variation safely."
  },
  {
    id: 24,
    question: "What does the Liskov Substitution Principle (LSP) dictate regarding subclass behavior in an inheritance tree?",
    answer: "LSP states that objects of a superclass must be completely replaceable with objects of their subclasses without disrupting the correctness or behavior of the application.",
    explanation: "If a child subclass overrides a parent method but changes expected behavior (e.g., throwing an unsupported exception or narrowing preconditions), it violates LSP, forcing calling methods to add type-checks."
  },
  {
    id: 25,
    question: "What is the Core purpose of the Interface Segregation Principle (ISP), and how does it prevent bloated classes?",
    answer: "ISP states that clients should not be forced to depend on interfaces containing methods they do not use, advocating for small, highly specialized interfaces over single, bloated ones.",
    explanation: "Instead of creating a massive `Worker` interface with `build()` and `code()`, split them into `Builder` and `Coder` interfaces. This keeps implementing classes lean and avoids forcing them to write blank or dummy method overrides."
  },
  {
    id: 26,
    question: "How does Dependency Inversion Principle (DIP) alter the relationship between high-level policy modules and low-level detail modules?",
    answer: "DIP states that high-level modules should not depend directly on low-level modules; instead, both must depend on shared abstractions (like interfaces).",
    explanation: "If an OrderProcessor class depends directly on a MySQLConnection class, it is tightly coupled. Interposing an DBConnection interface allows you to swap to MongoDB without changing the core business logic."
  },
  {
    id: 27,
    question: "What is Delegation in OOP design, and how does it support encapsulation while avoiding deep inheritance trees?",
    answer: "Delegation is a pattern where an object handles a request by passing it along to an internal helper object that specializes in that specific capability.",
    explanation: "Instead of making a Window class inherit from a Rectangle class to get area math, the Window class holds an internal Rectangle instance variable and forwards area calls to it, avoiding inheritance coupling."
  },
  {
    id: 28,
    question: "What is the Singleton Pattern, and what architectural drawbacks make it widely controversial as an anti-pattern?",
    answer: "The Singleton Pattern ensures a class has only one global instance and provides a global access point to it. It is controversial because it introduces global state, hides dependencies, and complicates unit testing.",
    explanation: "Because Singletons are accessible globally, they create tight coupling across components. They also make parallel test execution unpredictable because multiple tests can modify the same instance state concurrently."
  },
  {
    id: 29,
    question: "What is the Factory Method Pattern, and how does it promote loose coupling between an application and object creation logic?",
    answer: "The Factory Method Pattern defines an interface for creating an object but lets subclasses decide which specific class to instantiate, keeping creation logic completely separate from application logic.",
    explanation: "The calling system only interacts with a shared interface, remaining unaware of the concrete subclasses being built behind the scenes. This allows you to add new product types without modifying the core business code."
  },
  {
    id: 30,
    question: "What is an Anemic Domain Model, and why is it considered a violation of pure Object-Oriented Programming principles?",
    answer: "An Anemic Domain Model features classes that hold state properties but lack any internal business logic or methods, relying instead on external service classes to manipulate their data.",
    explanation: "This separates data from behavior, degrading objects into simple data structures. Pure OOP dictates that data structures should encapsulate their own operational validation behaviors to protect their internal states."
  }
];
export default oopConceptual; // Export files mapped cleanly to your frontend dashboard routing