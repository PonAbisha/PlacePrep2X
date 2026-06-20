# AI Placement Coach – Personalized Placement Preparation Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

AI Placement Coach is a comprehensive, data-driven placement preparation platform designed to help students systematically prepare for technical interviews, aptitude tests, reasoning rounds, and core computer science subjects. By combining performance analytics, adaptive learning, and local/cloud-based AI guidance, the platform transforms traditional placement prep into a personalized learning experience.

---

## 🚀 Key Features

### 1. Technical Preparation & LeetCode Integration
* **LeetCode Profile Syncing:** Link your LeetCode username to automatically monitor solved problems, submissions, and active streaks.
* **DSA Topic Tracking:** Keep a close eye on your progress across key topics such as Arrays, Strings, Trees, Graphs, Dynamic Programming, and Backtracking.
* **Visual Progress Reports:** Interactive charts showing your coding activity and domain-wise performance.

### 2. Aptitude & Reasoning Prep
* **Topic-Wise Quizzes:** Covers Quantitative Aptitude (Percentages, Profit & Loss, Time & Work, Probability, Data Interpretation) and Logical Reasoning (Blood Relations, Seating Arrangements, Coding-Decoding, Syllogisms).
* **Detailed Explanations:** Get instant feedback and step-by-step problem-solving guides for incorrect answers.

### 3. Core Subject Mastery
* **Dedicated Learning Modules:** Focused study and testing modules for DBMS, Operating Systems, Computer Networks, Object-Oriented Programming, and SQL.
* **Mastery Levels:** Track subject competency with dynamic progress ratings that adapt to your quiz scores.

### 4. Interactive AI Tutor (24/7 Doubt Solver)
* **Context-Aware Assistance:** Chat with an AI Tutor trained to explain complex DSA, CS, and aptitude concepts with practical examples.
* **Persistent Conversations:** Automatically saves your historical chat sessions, letting you resume prior topics at any time.

### 5. AI Interview Simulator
* **Mock Technical & HR Rounds:** Simulate realistic interviews with custom feedback on your answers.
* **AI Evaluation Metric:** Receives ratings, strengths, gaps, and suggested model answers for every question.

### 6. Resume Analyzer & ATS Optimizer
* **Resume Parsing:** Evaluates uploaded resumes to calculate an ATS score and overall placement verdict.
* **Gap & Skill Mapping:** Identifies missing keywords and suggests placement-focused additions to align your resume with job descriptions.

### 7. AI Performance Analyzer & Placement Readiness Score
* **Placement Readiness Score:** A composite index calculated from your Coding Skills, Aptitude Scores, CS Knowledge, and Interview Performance.
* **Weak Area Spotter:** Automatically identifies weak topics and outputs targeted recommendations.
* **Adaptive Study Planner:** Dynamically schedules daily and weekly practice plans based on your readiness metrics.

---

## 🛠️ Architecture & System Flow

The system follows a modern full-stack decoupled architecture. The frontend communicates with the REST API backend using Axios, utilizing secure JWT tokens for stateless authentication.

```mermaid
graph TD
    User([Student/User]) <--> React[React SPA Frontend]
    React <--> |HTTPS + JWT Bearer| Express[Express API Gateway]
    Express <--> |SQL Queries| Postgres[(PostgreSQL DB)]
    Express <--> |Fetch / Parse| LeetCode[LeetCode API]
    Express <--> |REST API Calls| Claude[Claude Sonnet / Ollama Local LLM]
```

---

## 📊 Database Schema Design

The application utilizes a PostgreSQL relational database. Key tables include:

| Table Name | Description | Key Columns |
| :--- | :--- | :--- |
| `users` | Stores student profiles, credentials, and LeetCode details | `id`, `name`, `email`, `password_hash`, `leetcode_username` |
| `dsa_progress` | Track domain-specific solved and total problems | `id`, `user_id`, `topic`, `solved`, `total` |
| `quiz_attempts` | Stores scores, timing, and JSON answers for CS & Aptitude tests | `id`, `user_id`, `subject`, `score`, `max_score`, `answers` |
| `interview_sessions`| Holds evaluation metrics, scores, and AI feedback from mock rounds | `id`, `user_id`, `type`, `avg_score`, `evaluations` |
| `planner_tasks` | Stores tasks dynamically generated for the weekly study planner | `id`, `user_id`, `week_start`, `task_label`, `done` |
| `resume_analyses` | Tracks ATS scores, keyword gaps, and feedback | `id`, `user_id`, `resume_text`, `ats_score`, `gaps` |
| `tutor_conversations`| Contains serialized chat histories with the AI tutor | `id`, `user_id`, `title`, `messages` |
| `daily_activity` | Tracks daily active streaks and minutes studied | `id`, `user_id`, `activity_date`, `problems_solved` |
| `readiness_snapshots`| Daily snapshot scores across all preparation categories | `id`, `user_id`, `overall_score`, `coding_score` |

---

## ⚙️ Getting Started

### Prerequisites
* **Node.js** (v18+ recommended)
* **PostgreSQL** (v14+ recommended)
* **Anthropic API Key** (or an **Ollama** local setup with `qwen2.5-coder` or similar running on `http://localhost:11434`)

### Backend Configuration
1. Navigate to the backend directory:
   ```bash
   cd apc_backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment file. Create a `server/.env` file with the following variables:
   ```env
   PORT=5000
   NODE_ENV=development
   DATABASE_URL=postgresql://your_db_user:your_db_password@localhost:5432/apc_db
   JWT_SECRET=your_jwt_access_secret
   JWT_REFRESH_SECRET=your_jwt_refresh_secret
   CLIENT_URL=http://localhost:3000
   
   # For Cloud-based AI:
   ANTHROPIC_API_KEY=your_anthropic_api_key
   
   # Or for Local AI (Ollama):
   # OLLAMA_HOST=http://127.0.0.1:11434
   ```
4. Initialize the PostgreSQL database:
   ```bash
   psql -U postgres -d apc_db -f server/config/schema.sql
   ```
5. Run the server in development mode:
   ```bash
   npm run dev
   ```

### Frontend Configuration
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

---

## 📡 API Endpoints

### 🔐 Authentication
* `POST /api/auth/register` - Register a new account (seeds initial DSA tracking data)
* `POST /api/auth/login` - Authenticate user and receive access & refresh tokens
* `POST /api/auth/refresh` - Rotate expired access tokens via refresh token rotation
* `POST /api/auth/logout` - Invalidate active session and clear token records
* `GET /api/auth/me` - Fetch profile details of the logged-in student

### 📈 DSA & Analytics
* `GET /api/dsa` - Get topic-wise solved problems and total benchmarks
* `GET /api/dsa/stats` - Fetch aggregate stats (solved vs total, completion percentages)
* `PATCH /api/dsa/:topic` - Update solved problem count for a specific DSA area

### ✍️ Quizzes
* `POST /api/quiz/submit` - Record a new quiz attempt, calculate score, and parse answers
* `GET /api/quiz/history` - Retrieve details of past quiz submissions
* `GET /api/quiz/stats` - Fetch overall and subject-wise quiz averages
* `GET /api/quiz/weak-areas` - Analyze historical quiz data to extract topics scoring below 60%

### 🎙️ Mock Interviews & Resume Analysis
* `POST /api/interview/evaluate` - Stream interview question and evaluate user audio/text response
* `POST /api/interview/session` - Log a completed mock interview session with ratings
* `POST /api/resume/analyze` - Scan resume content and retrieve ATS & skill gap reports

### 🗓️ AI Tutor & Planner
* `POST /api/tutor/chat` - Message the AI tutor and receive contextual explanations
* `POST /api/planner/generate` - Generate/refresh the dynamic study schedule for the current week
* `GET /api/analytics/overview` - Fetch composite placement readiness score and progress trends

---

## 📂 Project Structure

```
apc_backend/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── api/            # API client (Axios interceptor & functions)
│   │   ├── content/        # Static content / quiz questions
│   │   ├── hooks/          # Custom react hooks
│   │   ├── pages/          # Auth, Dashboard, Quiz, Interview modules
│   │   ├── App.jsx         # Core router and provider setup
│   │   └── main.jsx        # Application mount point
│   └── index.html
└── server/                 # Express Backend
    ├── config/             # DB client configuration & Schema
    ├── controllers/        # Business logic for all modules
    ├── middleware/         # Auth verification, rate limiting, error handlers
    ├── models/             # Database queries & data models
    ├── routes/             # API routing endpoints
    ├── services/           # External API & AI integration services
    └── index.js            # Server entry point
```
