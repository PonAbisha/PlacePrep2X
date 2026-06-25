const oopAdvanced = [
  {
    id: 1,
    question: "How does the Common Language Runtime (CLR) or Java Virtual Machine (JVM) handle object references under the hood during Garbage Collection compaction, and what happens to the underlying pointers?",
    answer: "During the compaction phase of Garbage Collection, the execution engine shifts live objects continuously to eliminate memory gaps. It stops application threads (Stop-The-World) and dynamically updates every reference pointer on the stack to point to the object's new address on the Heap.",
    explanation: "Managed references are not fixed pointers; they are handles managed by an abstraction layer. When the GC moves an object to optimize heap space, it rewrites the internal address registry tables seamlessly so application code execution continues without dereferencing errors or segmentation faults."
  },
  {
    id: 2,
    question: "Explain why a Virtual Destructor is structurally mandatory in C++ when deleting a derived subclass instance through a base class pointer variable.",
    answer: "Without a virtual destructor, deleting the object triggers Undefined Behavior, where the compiler executes *only* the base class destructor, leaving all subclass-specific resource allocations (like allocated memory or open file streams) unreleased.",
    explanation: "Declaring the base destructor as `virtual` forces the compiler to look up the object's V-Table at runtime. This ensures that the teardown process kicks off at the bottom of the inheritance hierarchy (the true leaf subclass) and cascades cleanly back up to the base class."
  },
  {
    id: 3,
    question: "What is the 'Covariant Return Type' rule in method overriding, and how does it relax traditional type-matching signature constraints?",
    answer: "Covariant return types allow an overriding method in a subclass to return a narrower, more specific type than the return type declared in the parent class method signature.",
    explanation: "For example, if `BaseFactory.create()` returns an `Animal` reference, `DogFactory.create()` can explicitly return a `Dog` reference. This is perfectly type-safe because a `Dog` *is an* `Animal`, allowing developers to bypass manual downcasting on the returned instance."
  },
  {
    id: 4,
    question: "What is the conceptual mechanism of Runtime Type Information (RTTI) or Reflection, and what performance tax does it impose on execution?",
    answer: "RTTI and Reflection look up an object's metadata at runtime, allowing code to dynamically query class names, properties, and methods. The performance tax includes high CPU overhead from string matching, metadata table lookups, and the complete bypass of compile-time optimizations like method inlining.",
    explanation: "Standard execution calls direct memory addresses resolved during compilation. Reflection forces the runtime to dynamically search through internal metadata dictionaries to find and bind methods on the fly, making it significantly slower than direct execution loops."
  },
  {
    id: 5,
    question: "How does the 'Double Dispatch' pattern solve the architectural limitation where polymorphism cannot resolve method arguments dynamically?",
    answer: "Standard languages support Single Dispatch, resolving methods polymorphically based solely on the host object's type, while treating argument parameters statically. Double Dispatch fixes this by having the argument accept the host object as a parameter, triggering a secondary polymorphic lookup.",
    explanation: "This is the structural foundation of the Visitor Design Pattern. By passing `this` into an argument's method (e.g., `element.accept(this)`), the runtime engine executes a two-step handshake that resolves the execution path based on the dynamic types of *both* collaborating objects."
  },
  {
    id: 6,
    question: "What is the performance implication of data padding and memory alignment rules on an array of custom Object structures inside CPU caches?",
    answer: "CPUs read memory in fixed chunks called cache lines (typically 64 bytes). If an object's data alignment forces fields to cross a cache line boundary, the CPU must execute two memory access cycles instead of one, causing 'cache line splitting' and degrading performance.",
    explanation: "To optimize cache locality, modern compilers insert invisible padding bytes inside objects to ensure primitives align with their natural boundaries. When designing high-frequency trading data arrays, grouping fields by decreasing memory footprint size minimizes this padding overhead."
  },
  {
    id: 7,
    question: "Explain the difference between structural typing (Duck Typing) and nominal typing, and how they alter compile-time constraint validation.",
    answer: "Nominal typing establishes compatibility strictly based on explicit class names and inheritance hierarchies (e.g., Java). Structural typing (Duck Typing) bases compatibility entirely on whether an object possesses the specific properties or methods requested, regardless of its class name.",
    explanation: "In nominal systems, a class must explicitly state `implements IService`. In structural systems (like TypeScript or Go), if an object matches the exact structural shape of an interface, the compiler accepts it automatically, providing high design flexibility at the cost of explicit intent verification."
  },
  {
    id: 8,
    question: "What is the 'Circle-Ellipse Dilemma' (Liskov Violation), and why does it prove that geometric relationships do not map directly to inheritance hierarchies?",
    answer: "Geometrically, a Circle is a specialized Ellipse. However, if a `Circle` class inherits from an `Ellipse` class, it inherits a `setDimensions(w, h)` method. Altering the width independently of the height breaks the Circle's structural invariant, violating the Liskov Substitution Principle.",
    explanation: "This classic dilemma demonstrates that inheritance maps *behavioral capabilities*, not mathematical attributes. Since a circle cannot fulfill the ellipse's contract of independent axis mutation, inheritance is the wrong design tool. They should instead share a read-only `Shape` interface."
  },
  {
    id: 9,
    question: "How does the 'Object Pool' pattern optimize memory pressure in real-time gaming engines, and what critical lifecycle hazard does it introduce?",
    answer: "The Object Pool pattern creates and manages a fixed collection of initialized objects at startup, reusing them instead of constantly instantiating and destroying objects. The critical hazard is 'State Pollution' or 'Dangling References'.",
    explanation: "Continuous instantiation triggers frequent Garbage Collection spikes, causing frame-rate drops. Pooling eliminates this. However, if an object is returned to the pool without resetting its internal state values, the next consumer reads stale data, leading to severe tracking bugs."
  },
  {
    id: 10,
    question: "What is the structural cause of 'Object-Relational Impedance Mismatch' when mapping OOP models to Relational Database schemas?",
    answer: "The mismatch happens because OOP is built on relational networks of identity pointers, encapsulation, and inheritance trees, whereas Relational Databases are built on flat, mathematical tables linked by scalar values (foreign keys) and set operations.",
    explanation: "Representing a class hierarchy (e.g., User, Employee, Manager) in SQL requires complex strategies like Single Table (lots of null columns) or Table-Per-Class (expensive multi-table JOINs), leading to a conflict between clean code and database performance."
  },
  {
    id: 11,
    question: "Explain the concept of 'Type Erasure' in Java Generics and contrast its performance implications with 'Reification' in C# Generics.",
    answer: "Java uses Type Erasure, stripping away all generic type parameters at compile-time and replacing them with raw `Object` boundaries and typecasts, which forces frequent memory boxing overhead. C# uses Reification, preserving type specifications down to the runtime machine code level.",
    explanation: "Because Java erases types, `List<Integer>` and `List<String>` share the exact same compiled byte class representation, preventing native primitive optimizations. C# reifies types, creating optimized, distinct native machine-code structures for primitive generic variants at execution time."
  },
  {
    id: 12,
    question: "What is a 'Mixin' or 'Trait' in languages that support them, and how do they differ from multi-interface inheritance models?",
    answer: "A Mixin/Trait is a modular architectural structure that bundles reusable method implementations *with* state variables, allowing classes to inject full operational features without becoming a formal child subclass.",
    explanation: "Standard interfaces only enforce signature contracts, forcing the host class to write the implementation block. Mixins provide pre-baked, pluggable behaviors (like a `Loggable` or `Serializable` trait), achieving multiple code reusability without the structural risks of the Diamond Problem."
  },
  {
    id: 13,
    question: "How does the 'Flyweight Pattern' utilize intrinsic vs. extrinsic state properties to structurally downsize an application's RAM footprint?",
    answer: "The Flyweight pattern splits object properties into two parts: Intrinsic states (immutable, shared values stored globally in a single object instance) and Extrinsic states (unique, context-dependent values passed into the flyweight dynamically during method execution).",
    explanation: "If displaying 10,000 tree models in a simulation game, storing the branch mesh texture coordinates inside every single tree object would exhaust RAM. Flyweight stores that data once as intrinsic state, while passing coordinates (extrinsic) into a shared renderer."
  },
  {
    id: 14,
    question: "What is an 'Abstract Factory' pattern, and how does it structurally enforce a higher level of abstraction than a standard Factory Method?",
    answer: "A Factory Method uses a single class routine to instantiate variations of a single product family. An Abstract Factory is an interface that acts as a factory-of-factories, grouping multiple independent factory operations together to build entire suites of related products.",
    explanation: "If creating UI theme suites, a Factory Method builds individual buttons. An Abstract Factory defines methods to build `createButton()`, `createScrollbar()`, and `createWindow()` simultaneously, ensuring that a DarkTheme application never accidentally creates a LightTheme scrollbar."
  },
  {
    id: 15,
    question: "Explain why the 'Law of Demeter' (Principle of Least Knowledge) protects systems from cascading code modifications, and provide a syntax example that violates it.",
    answer: "The Law of Demeter states that a module should only talk to its immediate neighbors, minimizing coupling across unrelated components. A clear violation is chain-linking methods like `customer.getWallet().getCard().charge()`.",
    explanation: "This chain couples the calling class to the exact internal structural anatomy of the Customer, Wallet, and Card modules. If the Wallet class removes the Card object later, the calling code breaks instantly. The correct approach encapsulates this into `customer.processPayment()`."
  },
  {
    id: 16,
    question: "What are 'Virtual Tables' (V-Tables) and 'Virtual Pointers' (V-Pointers), and what is their exact memory allocation overhead inside an individual object instance?",
    answer: "A V-Table is a static array of function pointers allocated once per class type definition. A V-Pointer is a hidden instance field added to every individual object to link it to its class V-Table. Its memory overhead is exactly 1 pointer size (8 bytes on a 64-bit OS) per object instance.",
    explanation: "While the V-Table structure itself doesn't balloon object size, adding 8 bytes of V-Pointer data to millions of tiny objects can lead to significant memory overhead. Additionally, dynamic dispatch forces a double-dereference memory latency penalty for every virtual call."
  },
  {
    id: 17,
    question: "What is the structural difference between 'Association', 'Aggregation', and 'Composition' relationships in Object-Oriented system blueprints?",
    answer: "Association is a loose, independent connection where objects have independent lifecycles (e.g., Teacher and Student). Aggregation represents a 'has-a' relationship where the child can outlive the parent (e.g., Department and Professor). Composition is a strict, exclusive ownership relationship where the child's lifecycle is bound completely to the parent (e.g., House and Room).",
    explanation: "In Composition, deleting the parent automatically triggers the destructor cascade for all its component parts. In Aggregation, if the parent container is deleted, the child references are preserved and can safely be reassigned elsewhere."
  },
  {
    id: 18,
    question: "How do 'Value Types' (Structs) and 'Reference Types' (Classes) diverge regarding heap pressure, copy mechanics, and thread safety?",
    answer: "Value types are allocated directly on the Stack, copied entirely by value during assignments, and are safer across threads because they lack shared references. Reference types live on the Heap, copy only their address pointer tokens, and create heap pressure by requiring active Garbage Collection sweeps.",
    explanation: "Passing reference types across threads creates the risk of race conditions because multiple components mutate the exact same heap memory address block. Value types bypass this by creating complete, isolated object duplicates on each thread's stack execution window."
  },
  {
    id: 19,
    question: "What is the 'Template Method Pattern', and how does it leverage Hollywood's 'Don't call us, we'll call you' principle to reverse class execution dependencies?",
    answer: "The Template Method defines the strict, invariant steps of an algorithm in a final base class method. It delegates specific execution variations to child subclasses by leaving individual step hooks abstract, thereby reversing control.",
    explanation: "In traditional coding, child components control execution flow by calling utility libraries. Here, the high-level base class controls the overarching pipeline framework entirely, calling down into the subclass hook methods only when needed."
  },
  {
    id: 20,
    question: "What is a 'Null Object Pattern', and how does it structurally improve codebases by eliminating defensive conditional logic blocks?",
    answer: "The Null Object pattern encapsulates the absence of an object by creating a concrete subclass that implements the required interface contract with empty or neutral behavioral overrides, completely replacing `null` pointer returns.",
    explanation: "Instead of returning `null` when an entity is missing and forcing calling modules to write defensive `if (object != null)` logic across the system, returning an instantiated NullObject allows client loops to invoke methods uniformly without risking a runtime `NullPointerException`."
  }
];

export default oopAdvanced;