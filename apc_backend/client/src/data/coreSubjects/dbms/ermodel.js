const dbmsERModel = [
  {
    id: 1,
    question: "What is an Entity?",
    answer: "A real-world object or concept represented in a database.",
    explanation:
      "Entities represent objects such as Student, Employee, Customer, or Product about which data is stored."
  },
  {
    id: 2,
    question: "What is an Attribute?",
    answer: "A property or characteristic of an entity.",
    explanation:
      "Attributes describe entities. For example, Student may have attributes like RollNo, Name, and Department."
  },
  {
    id: 3,
    question: "What is an ER Model?",
    answer: "Entity Relationship Model.",
    explanation:
      "The ER Model is a conceptual design used to represent entities, attributes, and relationships in a database."
  },
  {
    id: 4,
    question: "What is an ER Diagram?",
    answer: "A graphical representation of entities and relationships.",
    explanation:
      "ER Diagrams help visualize database structure before implementation."
  },
  {
    id: 5,
    question: "What is a Relationship?",
    answer: "An association between two or more entities.",
    explanation:
      "Relationships describe how entities interact with each other, such as Students enrolling in Courses."
  },
  {
    id: 6,
    question: "What is a Strong Entity?",
    answer: "An entity that has its own primary key.",
    explanation:
      "Strong entities can exist independently without relying on another entity."
  },
  {
    id: 7,
    question: "What is a Weak Entity?",
    answer: "An entity that depends on another entity for identification.",
    explanation:
      "Weak entities do not have a complete primary key and depend on a strong entity."
  },
  {
    id: 8,
    question: "What is Cardinality?",
    answer: "The number of entity instances involved in a relationship.",
    explanation:
      "Cardinality defines how many records of one entity can be associated with another."
  },
  {
    id: 9,
    question: "What are the common types of Cardinality?",
    answer: "One-to-One, One-to-Many, Many-to-One, and Many-to-Many.",
    explanation:
      "These define the relationship mapping between entities."
  },
  {
    id: 10,
    question: "What is a One-to-One Relationship?",
    answer: "One entity instance is associated with exactly one entity instance.",
    explanation:
      "Example: A Person can have only one Passport."
  },
  {
    id: 11,
    question: "What is a One-to-Many Relationship?",
    answer: "One entity instance can be associated with multiple instances of another entity.",
    explanation:
      "Example: One Department can have many Employees."
  },
  {
    id: 12,
    question: "What is a Many-to-One Relationship?",
    answer: "Many entity instances are associated with one entity instance.",
    explanation:
      "Example: Many Students belong to one Department."
  },
  {
    id: 13,
    question: "What is a Many-to-Many Relationship?",
    answer: "Multiple entity instances are associated with multiple instances of another entity.",
    explanation:
      "Example: Students can enroll in many Courses and Courses can have many Students."
  },
  {
    id: 14,
    question: "What is Participation Constraint?",
    answer: "A rule that determines whether entity participation in a relationship is mandatory.",
    explanation:
      "Participation can be total or partial depending on business requirements."
  },
  {
    id: 15,
    question: "What is Total Participation?",
    answer: "Every entity instance must participate in the relationship.",
    explanation:
      "Example: Every employee must belong to a department."
  },
  {
    id: 16,
    question: "What is Partial Participation?",
    answer: "Participation in a relationship is optional.",
    explanation:
      "Some entity instances may not participate in the relationship."
  },
  {
    id: 17,
    question: "What is a Derived Attribute?",
    answer: "An attribute whose value is calculated from other attributes.",
    explanation:
      "Example: Age can be derived from Date of Birth."
  },
  {
    id: 18,
    question: "What is a Multivalued Attribute?",
    answer: "An attribute that can hold multiple values.",
    explanation:
      "Example: A person's phone numbers."
  },
  {
    id: 19,
    question: "What is a Composite Attribute?",
    answer: "An attribute that can be divided into smaller attributes.",
    explanation:
      "Example: Address can be divided into Street, City, State, and PIN Code."
  },
  {
    id: 20,
    question: "Why is the ER Model important?",
    answer: "It helps design databases efficiently before implementation.",
    explanation:
      "The ER Model provides a clear understanding of entities, relationships, and constraints, reducing design errors."
  }
];

export default dbmsERModel;

