-- ============================================================
-- AI Placement Coach - PostgreSQL Schema
-- Run this file to initialize the database:
--   psql -U postgres -d apc_db -f schema.sql
-- ============================================================

-- Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ────────────────────────────────────────────────────────────
-- USERS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name          VARCHAR(100) NOT NULL,
  email         VARCHAR(150) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  college       VARCHAR(200),
  branch        VARCHAR(100) DEFAULT 'CSE',
  year          SMALLINT DEFAULT 4,
  leetcode_username VARCHAR(80),
  avatar_url    TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- ────────────────────────────────────────────────────────────
-- REFRESH TOKENS (for JWT rotation)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token      TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user ON refresh_tokens(user_id);

-- ────────────────────────────────────────────────────────────
-- DSA PROGRESS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS dsa_progress (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  topic      VARCHAR(80) NOT NULL,
  solved     INT DEFAULT 0,
  total      INT DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, topic)
);

CREATE INDEX IF NOT EXISTS idx_dsa_user ON dsa_progress(user_id);

-- ────────────────────────────────────────────────────────────
-- QUIZ ATTEMPTS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subject     VARCHAR(80) NOT NULL,   -- dbms | os | cn | oops | sql | aptitude | reasoning
  score       SMALLINT NOT NULL,
  max_score   SMALLINT NOT NULL,
  time_taken  INT NOT NULL,           -- seconds
  answers     JSONB NOT NULL,         -- [{q_index, picked, correct}]
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quiz_user    ON quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_subject ON quiz_attempts(subject);
CREATE INDEX IF NOT EXISTS idx_quiz_date    ON quiz_attempts(created_at DESC);

-- ────────────────────────────────────────────────────────────
-- INTERVIEW SESSIONS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS interview_sessions (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type        VARCHAR(20) NOT NULL CHECK (type IN ('technical','hr')),
  avg_score   NUMERIC(4,1),
  total_qs    SMALLINT DEFAULT 0,
  evaluations JSONB,                  -- [{question, answer, score, verdict, strengths, improvements, model_answer}]
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_interview_user ON interview_sessions(user_id);

-- ────────────────────────────────────────────────────────────
-- STUDY PLANNER TASKS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS planner_tasks (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  week_start  DATE NOT NULL,          -- ISO week start (Monday)
  day_index   SMALLINT NOT NULL,      -- 0=Mon ... 5=Weekend
  task_label  TEXT NOT NULL,
  tag         VARCHAR(30) NOT NULL,
  done        BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_planner_user_week ON planner_tasks(user_id, week_start);

-- ────────────────────────────────────────────────────────────
-- RESUME ANALYSES
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS resume_analyses (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  resume_text      TEXT NOT NULL,
  overall_score    SMALLINT,
  ats_score        SMALLINT,
  verdict          VARCHAR(30),
  strengths        JSONB,
  gaps             JSONB,
  missing_skills   JSONB,
  recommendations  JSONB,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_resume_user ON resume_analyses(user_id);

-- ────────────────────────────────────────────────────────────
-- AI TUTOR CONVERSATIONS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tutor_conversations (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title       VARCHAR(200),           -- first user message (truncated)
  messages    JSONB NOT NULL DEFAULT '[]',
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_tutor_user ON tutor_conversations(user_id);

-- ────────────────────────────────────────────────────────────
-- DAILY ACTIVITY STREAKS
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS daily_activity (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  activity_date DATE NOT NULL,
  problems_solved INT DEFAULT 0,
  quizzes_taken   INT DEFAULT 0,
  study_minutes   INT DEFAULT 0,
  UNIQUE(user_id, activity_date)
);

CREATE INDEX IF NOT EXISTS idx_activity_user_date ON daily_activity(user_id, activity_date DESC);

-- ────────────────────────────────────────────────────────────
-- READINESS SCORES (snapshot per day)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS readiness_snapshots (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  snapshot_date    DATE NOT NULL,
  coding_score     NUMERIC(5,2) DEFAULT 0,
  aptitude_score   NUMERIC(5,2) DEFAULT 0,
  reasoning_score  NUMERIC(5,2) DEFAULT 0,
  core_cs_score    NUMERIC(5,2) DEFAULT 0,
  interview_score  NUMERIC(5,2) DEFAULT 0,
  overall_score    NUMERIC(5,2) DEFAULT 0,
  UNIQUE(user_id, snapshot_date)
);

CREATE INDEX IF NOT EXISTS idx_readiness_user_date ON readiness_snapshots(user_id, snapshot_date DESC);

-- ────────────────────────────────────────────────────────────
-- TRIGGER: auto-update updated_at
-- ────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER planner_updated_at
  BEFORE UPDATE ON planner_tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER tutor_updated_at
  BEFORE UPDATE ON tutor_conversations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
