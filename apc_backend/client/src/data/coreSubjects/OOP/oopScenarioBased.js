const oopScenarioBased = [
  {
    id: 1,
    question: "You are building an e-commerce checkout system. A junior developer makes the 'Wallet' class inherit directly from the 'User' class. Why is this a flawed design choice, and what should be done instead?",
    answer: "It violates the 'Liskov Substitution Principle' and mistakes an 'is-a' relationship for a 'has-a' relationship. A wallet is not a type of user. It should be refactored using Composition: the User class should hold a Wallet instance variable.",
    explanation: "Inheritance implies a Wallet can do everything a User can do (e.g., logging in). This tightly couples the code and introduces security vulnerabilities. Composition breaks this coupling, keeping the wallet completely encapsulated within the user profile."
  },
  {
    id: 2,
    question: "You are designing a notification module supporting Email and SMS. Your current code uses a massive switch-case inside a 'NotificationSender' class to determine the delivery mechanism. How do you refactor this to scale cleanly when WhatsApp notification support is added tomorrow?",
    answer: "You should abstract the behavior by creating a shared 'NotificationChannel' interface containing a send() signature. Then, implement this interface inside distinct EmailNotification, SMSNotification, and WhatsAppNotification classes.",
    explanation: "This leverages Runtime Polymorphism to satisfy the Open-Closed Principle (OCP). The NotificationSender class will accept a NotificationChannel interface reference instead of concrete classes, allowing you to plug in new channels without altering existing codebase logic."
  },
  {
    id: 3,
    question: "During a code review, you find an asset tracking application where an external module alters an item's 'depreciatedValue' field directly via 'asset.depreciatedValue = -100'. How do you patch this to protect the object's integrity?",
    answer: "You must enforce Encapsulation by changing the visibility of the 'depreciatedValue' variable to private, and exposing access solely through a setter method that contains strict validation logic.",
    explanation: "Direct field access leaves internal object states vulnerable to invalid values. A setter method (e.g., setDepreciatedValue) acts as a gateway broker, rejecting impossible values (like negative numbers) before they modify the object's internal state memory."
  },
  {
    id: 4,
    question: "A high-performance trading game duplicates player profiles instantly using a basic assignment 'Player p2 = p1'. Later, when p2 takes damage and loses health, p1's health drops identically. Diagnose the error and provide the solution.",
    answer: "A Shallow Copy error occurred. The statement copies the reference pointer, meaning both variables point to the exact same memory location on the Heap. You must implement a Deep Copy constructor or clone mechanism instead.",
    explanation: "Because both reference tokens point to the same object block, changes made via either pointer mutate the shared state. A Deep Copy allocates a completely separate memory block and duplicates all primitives and nested object references uniquely."
  },
  {
    id: 5,
    question: "You are developing a graphic design suite with a base class 'Shape' and subclasses like 'Circle' and 'Rectangle'. You instantiate an array of type Shape[] holding various subclasses. When iterating through to call 'draw()', how does the compiler ensure the correct subclass version executes?",
    answer: "The environment utilizes Runtime Polymorphism facilitated by a Virtual Table (V-Table). Each subclass instance holds a hidden pointer to its specific V-Table containing function pointers to its overridden draw() methods.",
    explanation: "Even though the reference variable is of the parent 'Shape' type, the runtime engine intercepts the function call, inspects the true underlying object's V-Table, and executes the precise overridden drawing code block for that specific shape."
  },
  {
    id: 6,
    question: "You are designing a corporate HR management system. A 'Manager' class inherits from an 'Employee' class. The Employee constructor requires an id and a name. What syntactic mistake must you avoid when writing the Manager constructor?",
    answer: "You must ensure that the Manager constructor explicitly invokes the parent Employee constructor using the 'super()' keyword (or base initialization) before executing its own subclass initialization assignments.",
    explanation: "A child class cannot construct itself without initializing its parent foundations first. The fields inherited from the parent must be bound in memory via the superclass constructor before the child specific logic can safely execute."
  },
  {
    id: 7,
    question: "You write an enterprise reporting microservice that uses a 'ConfigurationManager' class. You want to strictly guarantee that only one instance of this class exists across the entire runtime memory space to save resources. Which pattern do you use, and what is its main structure?",
    answer: "You should implement the Singleton Pattern. This requires making the class constructor private and providing a public static method (e.g., getInstance()) that returns a single, lazily initialized internal instance.",
    explanation: "A private constructor blocks external modules from executing 'new ConfigurationManager()'. The static broker method controls the lifecycle instantiation process, guaranteeing a single global access pathway."
  },
  {
    id: 8,
    question: "A multi-tenant cloud application needs to generate different database connectors (MySQL, PostgreSQL, MongoDB) depending on the configuration file read at startup. Which OOP pattern is ideal for decoupling this creation logic?",
    answer: "The Factory Method Pattern is ideal. You define an abstract creator method or a factory broker class that instantiates and returns a common database interface, keeping the selection logic hidden from the application code.",
    explanation: "The core business application layer only deals with a generic 'IDatabaseConnector' interface. The factory checks the configuration properties dynamically and instantiates the correct subclass driver without breaking the calling class architecture."
  },
  {
    id: 9,
    question: "In a banking application, you define a base class 'Account' with a method 'calculateInterest()'. A junior developer creates a 'CryptoWalletAccount' subclass and overrides the method to throw an 'UnsupportedOperationException'. What architectural principle does this violate?",
    answer: "This violates the Liskov Substitution Principle (LSP) from the SOLID design framework. Subclasses should extend the capabilities of a parent class, not break or reduce them.",
    explanation: "LSP states that any code utilizing a parent reference must function correctly if a child reference is passed instead. Throwing unexpected runtime crashes where interest math is expected forces calling loops to add defensive type checks, breaking the inheritance contract."
  },
  {
    id: 10,
    question: "You have a large 'SmartDevice' interface containing methods like 'print()', 'scan()', 'fax()', and 'staple()'. When building a basic 'HomePrinter' class, you are forced to write empty overrides or return null for fax() and staple(). How do you re-architect this?",
    answer: "You must apply the Interface Segregation Principle (ISP) by splitting the bloated interface into small, focused, specialized interfaces like Printer, Scanner, and FaxMachine.",
    explanation: "Clients should never be forced to depend on operational methods they do not utilize. Breaking the interfaces apart allows the HomePrinter class to cleanly implement only the Printer interface, avoiding dead code blocks."
  },
  {
    id: 11,
    question: "You are building a game engine. A 'Vehicle' class has a method 'accelerate()'. You pass a 'Car' object into a function that accepts a Vehicle *by value* (not by reference/pointer) in C++. Inside the function, calling accelerate() invokes the base Vehicle behavior instead of the Car behavior. What happened?",
    answer: "This is a classic case of 'Object Slicing'. Passing the object by value forces a copy constructor execution that strips away all Car-specific memory properties, reducing the object to its base Vehicle identity.",
    explanation: "When passed by value, the compiler allocates space matching only the base class. The extended subclass fields and its specific V-Table references are sliced off during the assignment. To preserve polymorphic behaviors, objects must be passed via pointers or references."
  },
  {
    id: 12,
    question: "Your software tracks shipping logistics. A 'Shipment' class calculates transit times based on an internal 'WeatherAPI' class. During unit testing, your tests keep failing because the live Weather API drops connections intermittently. How do you fix this dependency problem?",
    answer: "You must apply the Dependency Inversion Principle (DIP). Abstract the weather operations into an 'IWeatherProvider' interface, and use Dependency Injection to pass the provider into the Shipment constructor.",
    explanation: "Instead of the high-level Shipment class depending directly on a low-level concrete WeatherAPI class, both should bind to the interface contract. During testing, you can inject a reliable 'MockWeatherProvider' stub that simulates API data without hitting the internet network."
  },
  {
    id: 13,
    question: "You are coding a ride-sharing system. A 'Driver' class has a state property 'currentStatus' (Available, Busy, Offline). The driver's internal methods behave completely differently based on this status, resulting in convoluted, nested if-else statements across every method. What pattern fixes this?",
    answer: "The State Pattern should be implemented. You encapsulate each individual status behavior inside separate classes (AvailableState, BusyState, OfflineState) that implement a common 'DriverState' interface.",
    explanation: "The Driver class maintains an internal reference pointer to a DriverState object. When a driver's state shifts, the reference swaps to a different concrete state object, eliminating conditional statements by delegating behaviors to state-specific modules."
  },
  {
    id: 14,
    question: "You are implementing a document parser framework. You want to define a strict sequence of execution steps: openFile(), readData(), parseFormatting(), and closeFile(). Subclasses must handle the specific text-parsing calculations, but the execution sequence must remain unalterable. How do you build this?",
    answer: "You should use the Template Method Pattern. You create an abstract base class containing a final/non-virtual method that dictates the execution sequence, while marking the specific step methods as abstract for subclasses to implement.",
    explanation: "The structural skeleton of the algorithm is preserved in the base class template method. Subclasses can override the specific implementation blocks (like parseFormatting) without breaking the required overarching lifecycle pipeline."
  },
  {
    id: 15,
    question: "A legacy inventory application represents products using simple structures containing only data fields (getters/setters) but zero logic. All calculation routines sit in a massive 'InventoryService' file. What is this code smell called, and why does it clash with OOP?",
    answer: "This is an Anemic Domain Model. It clashes with OOP because it separates an object's data from the behaviors that manage that data, reducing objects to simple data transfer structures.",
    explanation: "Pure Object-Oriented design dictates that a domain object should encapsulate both its properties and its business logic together. An anemic model resembles procedural programming, increasing coupling across external service modules."
  },
  {
    id: 16,
    question: "You are designing an analytics pipeline where a 'DataStream' object continuously fetches statistics. Multiple dashboard panels need to read and display these updates automatically the moment they change. How do you wire this link cleanly?",
    answer: "Implement the Observer Pattern (Publish-Subscribe framework). The DataStream acts as the 'Subject' (Publisher) maintaining a registry list of 'Observer' panels (Subscribers) to loop through and update dynamically.",
    explanation: "When new analytics hit the stream, the subject triggers an internal notify() call that loops through the interface array of registered panels, broadcast-pushing data updates instantly without tight compilation coupling."
  },
  {
    id: 17,
    question: "A software utility needs to process textual user inputs. Sometimes it needs to remove special characters, sometimes it needs to convert text to uppercase, and sometimes it needs to encrypt the output string. The client wants to mix and match these filters dynamically at runtime. Which design pattern do you apply?",
    answer: "You should implement the Decorator Pattern. You create wrapper classes that implement the same core TextProcessor interface, allowing them to nest inside each other to add layers of execution on top of a core object.",
    explanation: "Instead of writing an explosion of unique combinations via static inheritance subclasses (e.g., EncryptedUppercaseProcessor), decorators allow you to wrap a base text string object with formatting skins dynamically at runtime based on real-time configurations."
  },
  {
    id: 18,
    question: "You are building a game where an object 'Monster' needs to initialize its properties inside a constructor. The monster can have an optional skin, optional weapon types, variable speed, custom sound tracks, and an optional companion pet. Your constructor signature is getting messy with dozens of parameters, many of which pass nulls. How do you refactor this?",
    answer: "You should apply the Builder Pattern. You create a separate 'MonsterBuilder' class that handles setting each optional attribute step-by-step using fluent chaining methods before invoking a final build() execution.",
    explanation: "This eliminates 'Telescoping Constructors' where developers write endless overloading mutations to handle parameter combinations. The Builder pattern makes object creation clear, highly readable, and step-driven."
  },
  {
    id: 19,
    question: "An application platform loads an asset processing utility. A developer creates a subclass 'SpecialProcessor' that overrides a public method from 'Processor'. However, they notice that if they pass arguments out of sequence, the compiler throws an error saying the method signatures don't match. Clarify what happened.",
    answer: "The developer accidentally caused Method Overloading instead of Method Overriding because they modified the parameter type sequence or argument count in the subclass method signature.",
    explanation: "Method overriding requires an exact signature match (same name, identical arguments, and compatible return type). Changing the parameters creates a completely new method block (Overloading), breaking the polymorphic path to the parent behavior."
  },
  {
    id: 20,
    question: "You are managing a large application. A global 'SystemState' class holds hundreds of shared runtime configurations as static fields. During deployment, parallel automated tests keep failing randomly with unpredictable state changes. What is the root cause?",
    answer: "The root cause is mutable global state caused by the excessive use of Static variables. Static fields belong to the class type across the entire global execution heap, meaning separate test threads are modifying the exact same data values simultaneously.",
    explanation: "Static components run counter to pure OOP object independence and encapsulation. Because they are shared across threads, they create race conditions during parallel processing. The state values should be refactored into instance-bound fields and injected dynamically per test context."
  }
];

export default oopScenarioBased;