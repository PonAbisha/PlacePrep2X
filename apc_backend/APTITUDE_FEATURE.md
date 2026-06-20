# Aptitude Feature Documentation

## Overview

The Aptitude feature allows users to practice with pre-loaded question banks organized by books and topics. The developer pre-uploads books with questions, and users can take tests, track progress, and view their accuracy.

## Key Differences from DSA

| Feature | DSA | Aptitude |
|---------|-----|----------|
| Question Source | User uploads/tracks | Developer pre-uploads books |
| Organization | Topics | Books → Topics → Questions |
| Test Mode | Track solved problems | Full test submission with answers |
| Scoring | Simple count | Accuracy percentage |
| Test History | Not tracked | Full attempt history |

## Architecture

### Models

#### AptitudeBook
Stores pre-defined books with topics and questions.

```javascript
{
  book_id: String,              // Unique ID (e.g., "quantitative_1")
  name: String,                 // Book name
  description: String,          // Book description
  author: String,               // Author name
  totalQuestions: Number,       // Total questions across all topics
  topics: [
    {
      topic_name: String,       // Topic name
      question_count: Number,   // Questions in topic
      questions: [
        {
          question_id: String,
          question_text: String,
          options: [String],
          correct_answer: Number, // Index of correct option (0-3)
          explanation: String,   // Explanation for answer
          difficulty: "Easy|Medium|Hard",
          category: String
        }
      ]
    }
  ],
  isActive: Boolean
}
```

#### AptitudeProgress
Tracks user's progress in each book/topic.

```javascript
{
  user_id: ObjectId,
  book_id: String,
  topic: String,
  solved: Number,               // Questions attempted
  total: Number,                // Total questions in topic
  correctAnswers: Number,       // Correct answers count
  completedQuestions: [String], // Question IDs attempted
  testAttempts: [
    {
      date: Date,
      score: Number,            // Percentage
      totalQuestions: Number,
      correctAnswers: Number,
      timeSpent: Number,        // In seconds
      questionsAnswered: [String]
    }
  ],
  accuracy: Number,             // Percentage
  lastAttemptDate: Date
}
```

## API Endpoints

### Public Endpoints (No Authentication)

#### Get All Available Books
```
GET /api/aptitude/books
```
Returns list of all active books with topics.

**Response:**
```json
{
  "books": [
    {
      "book_id": "quantitative_1",
      "name": "Quantitative Aptitude",
      "description": "...",
      "author": "...",
      "totalQuestions": 50,
      "topics": [
        {"topic_name": "Number System", "question_count": 10}
      ]
    }
  ]
}
```

#### Get Book Details
```
GET /api/aptitude/books/:bookId
```
Returns detailed information about a specific book.

---

### Protected Endpoints (Require Authentication)

#### Get User's Overall Progress
```
GET /api/aptitude/progress
```
Returns progress across all books and topics.

**Response:**
```json
{
  "progress": [
    {
      "book_id": "quantitative_1",
      "topic": "Number System",
      "solved": 5,
      "total": 10,
      "correctAnswers": 4,
      "accuracy": 80,
      "testAttempts": 2,
      "lastAttemptDate": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### Get Progress for Specific Book
```
GET /api/aptitude/progress/:bookId
```
Returns progress details for a specific book.

#### Get Overall Stats
```
GET /api/aptitude/stats
```
Returns aggregated aptitude statistics.

**Response:**
```json
{
  "stats": {
    "total_solved": 25,
    "total_correct": 20,
    "avg_accuracy": 80,
    "books_started": 2,
    "topics_covered": 5,
    "total_attempts": 10
  }
}
```

#### Get Topic Test Questions
```
GET /api/aptitude/test/:bookId/:topic?limit=10
```
Returns questions for a topic test (without correct answers).

**Query Parameters:**
- `limit` (optional): Limit number of questions

**Response:**
```json
{
  "book_id": "quantitative_1",
  "topic": "Number System",
  "totalQuestions": 10,
  "questions": [
    {
      "question_id": "qs1_1",
      "question_text": "What is the HCF of 12 and 18?",
      "options": ["2", "3", "6", "12"],
      "difficulty": "Easy",
      "category": "Number System"
    }
  ]
}
```

#### Submit Test
```
POST /api/aptitude/submit-test
```
Submit answers and record test attempt.

**Request Body:**
```json
{
  "bookId": "quantitative_1",
  "topic": "Number System",
  "answers": {
    "qs1_1": 2,
    "qs1_2": 0,
    "qs1_3": 2
  },
  "timeSpent": 300
}
```

**Response:**
```json
{
  "score": 85.5,
  "correctAnswers": 3,
  "totalQuestions": 3,
  "accuracy": 85.5,
  "message": "Test submitted successfully"
}
```

#### Get Test History
```
GET /api/aptitude/history/:bookId/:topic
```
Returns all test attempts for a specific topic.

**Response:**
```json
{
  "history": [
    {
      "date": "2024-01-15T10:30:00Z",
      "score": 80,
      "correctAnswers": 4,
      "totalQuestions": 5,
      "timeSpent": 300
    }
  ],
  "topic": "Number System",
  "book_id": "quantitative_1"
}
```

## How to Add Books

### Method 1: Using the Seeder Script

1. **Edit the seeder file** (`server/utils/aptitudeSeeder.js`):
   ```javascript
   const SAMPLE_BOOKS = [
     {
       book_id: "logical_1",
       name: "Logical Reasoning",
       description: "Problems in logical reasoning",
       author: "Author Name",
       topics: [
         {
           topic_name: "Analogies",
           question_count: 10,
           questions: [
             {
               question_id: "lr1_1",
               question_text: "Cat : Dog :: ?",
               options: ["Bird : Fish", "Cow : Bull", "Fish : Water", "Pen : Paper"],
               correct_answer: 0,
               explanation: "Explanation here",
               difficulty: "Easy",
               category: "Analogies"
             },
             // ... more questions
           ]
         }
       ]
     }
   ];
   ```

2. **Run the seeder**:
   ```bash
   cd server
   node utils/aptitudeSeeder.js
   ```

### Method 2: Programmatically

```javascript
import { addAptitudeBook } from "./utils/aptitudeSeeder.js";

const newBook = {
  book_id: "reasoning_1",
  name: "Analytical Reasoning",
  description: "...",
  author: "...",
  topics: [...]
};

await addAptitudeBook(newBook);
```

## Frontend Integration

### Example: Display Available Books

```javascript
// Fetch all books
const response = await fetch('/api/aptitude/books');
const { books } = await response.json();

// Display books
books.forEach(book => {
  console.log(`${book.name} - ${book.totalQuestions} questions`);
  book.topics.forEach(topic => {
    console.log(`  - ${topic.topic_name}: ${topic.question_count} questions`);
  });
});
```

### Example: Take a Test

```javascript
// 1. Get questions
const testResponse = await fetch('/api/aptitude/test/quantitative_1/Number System');
const { questions } = await testResponse.json();

// 2. User answers questions...

// 3. Submit test
const submitResponse = await fetch('/api/aptitude/submit-test', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    bookId: 'quantitative_1',
    topic: 'Number System',
    answers: {
      'qs1_1': 2,
      'qs1_2': 0,
      'qs1_3': 2
    },
    timeSpent: 300
  })
});

const result = await submitResponse.json();
console.log(`Score: ${result.score}%, Accuracy: ${result.accuracy}%`);
```

### Example: View Progress

```javascript
// Get overall progress
const progressResponse = await fetch('/api/aptitude/progress');
const { progress } = await progressResponse.json();

// Get stats
const statsResponse = await fetch('/api/aptitude/stats');
const { stats } = await statsResponse.json();

console.log(`Avg Accuracy: ${stats.avg_accuracy}%`);
console.log(`Books Started: ${stats.books_started}`);
```

## UI Components Suggested

1. **Books List** - Show all available books
2. **Book Details** - Topics within a book
3. **Topic Test** - Quiz interface
4. **Progress Dashboard** - Show accuracy and attempts
5. **Test History** - View previous attempts

## Sample Book Structure

```javascript
{
  book_id: "quantitative_1",
  name: "Quantitative Aptitude Basics",
  description: "Fundamental concepts and problems in quantitative aptitude",
  author: "R.S. Aggarwal",
  totalQuestions: 50,
  topics: [
    {
      topic_name: "Number System",
      question_count: 10,
      questions: [
        {
          question_id: "qs1_1",
          question_text: "What is the HCF of 12 and 18?",
          options: ["2", "3", "6", "12"],
          correct_answer: 2,
          explanation: "HCF (Highest Common Factor) of 12 and 18 is 6",
          difficulty: "Easy",
          category: "Number System"
        },
        // ... more questions
      ]
    },
    // ... more topics
  ]
}
```

## Notes

- **No User File Uploads**: Books are pre-populated by developers only
- **Automatic Accuracy Calculation**: Accuracy is calculated as `(correctAnswers / solved) * 100`
- **Test History**: All attempts are stored with timestamps and detailed scores
- **Question Security**: Correct answers are never sent in the test endpoint, only on submission
- **Scalability**: Each book can have multiple topics with many questions

