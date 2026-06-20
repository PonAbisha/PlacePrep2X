// MongoDB imports will be added as needed
import { query } from "../config/db.js";

// ═══════════════════════════════════════════════════════════
// STUDY PLANNER
// ═══════════════════════════════════════════════════════════

const getCurrentWeekStart = () => {
  const d = new Date();
  const day = d.getDay(); // 0=Sun
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday
  const monday = new Date(d.setDate(diff));
  return monday.toISOString().split("T")[0];
};

// ── GET /api/planner ─────────────────────────────────────────
export const getPlanner = async (req, res, next) => {
  try {
    const week_start = req.query.week || getCurrentWeekStart();

    let { rows } = await query(
      `SELECT id, day_index, task_label, tag, done
       FROM planner_tasks
       WHERE user_id = $1 AND week_start = $2
       ORDER BY day_index, created_at`,
      [req.user.id, week_start]
    );

    // If no tasks exist for this week, generate via AI
    if (!rows.length) {
      rows = await generateWeeklyPlan(req.user.id, week_start);
    }

    // Group by day
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Weekend"];
    const grouped = days.map((day, i) => ({
      day,
      date: i === 0 ? "Today" : `Day ${i + 1}`,
      tasks: rows.filter((t) => t.day_index === i),
    }));

    res.json({ week_start, plan: grouped });
  } catch (err) {
    next(err);
  }
};

// ── PATCH /api/planner/:taskId ───────────────────────────────
export const toggleTask = async (req, res, next) => {
  try {
    const { rows } = await query(
      `UPDATE planner_tasks
       SET done = NOT done, updated_at = NOW()
       WHERE id = $1 AND user_id = $2
       RETURNING *`,
      [req.params.taskId, req.user.id]
    );
    if (!rows.length) return res.status(404).json({ error: "Task not found" });
    res.json({ task: rows[0] });
  } catch (err) {
    next(err);
  }
};

// ── POST /api/planner/generate ───────────────────────────────
// Force regenerate weekly plan via AI
export const generatePlan = async (req, res, next) => {
  try {
    const week_start = getCurrentWeekStart();

    // Delete old plan for this week
    await query(
      "DELETE FROM planner_tasks WHERE user_id = $1 AND week_start = $2",
      [req.user.id, week_start]
    );

    const tasks = await generateWeeklyPlan(req.user.id, week_start);
    const days  = ["Monday","Tuesday","Wednesday","Thursday","Friday","Weekend"];
    const grouped = days.map((day, i) => ({
      day,
      tasks: tasks.filter((t) => t.day_index === i),
    }));

    res.json({ week_start, plan: grouped });
  } catch (err) {
    next(err);
  }
};

// Helper: AI plan generator
const generateWeeklyPlan = async (userId, week_start) => {
  // Default AI-generated plan (fallback without API call for speed)
  const defaultPlan = [
    // Monday
    [{ label:"Solve 3 Array/String problems on LeetCode", tag:"DSA" },
     { label:"Revise Array sliding window techniques", tag:"Revision" },
     { label:"AI Mock Interview — Technical Round", tag:"Interview" }],
    // Tuesday
    [{ label:"2 Dynamic Programming problems (Beginner)", tag:"DSA" },
     { label:"Study Graph traversal algorithms", tag:"Revision" },
     { label:"AI Tutor: Clarify concept doubts", tag:"AI Tutor" }],
    // Wednesday
    [{ label:"3 Graph problems — BFS & DFS focus", tag:"DSA" },
     { label:"Solve Stack/Queue based problems", tag:"DSA" },
     { label:"Study Linked List manipulations", tag:"Revision" }],
    // Thursday
    [{ label:"Review Recursion and Backtracking", tag:"Revision" },
     { label:"2 Tree problems — BST operations", tag:"DSA" },
     { label:"HR Interview simulation", tag:"Interview" }],
    // Friday
    [{ label:"Practice Mock Technical Interview", tag:"Interview" },
     { label:"3 DP problems — Intermediate level", tag:"DSA" }],
    // Weekend
    [{ label:"Weekly revision — all weak topics", tag:"Revision" },
     { label:"Review AI performance report & plan next week", tag:"AI Tutor" }],
  ];

  const insertedRows = [];
  for (let dayIdx = 0; dayIdx < defaultPlan.length; dayIdx++) {
    for (const task of defaultPlan[dayIdx]) {
      const { rows } = await query(
        `INSERT INTO planner_tasks (user_id, week_start, day_index, task_label, tag)
         VALUES ($1, $2, $3, $4, $5)
         ON CONFLICT DO NOTHING
         RETURNING id, day_index, task_label, tag, done`,
        [userId, week_start, dayIdx, task.label, task.tag]
      );
      if (rows.length) insertedRows.push(rows[0]);
    }
  }
  return insertedRows;
};
