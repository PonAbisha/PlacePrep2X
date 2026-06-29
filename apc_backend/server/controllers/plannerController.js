// MongoDB imports will be added as needed
import Planner from "../models/Planner.js";
import { generateWeeklyPlanAI } from "../services/plannerService.js";

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

    let planner = await Planner.findOne({
      user_id: req.user.id,
      week_start,
    });

    if (!planner) {
      await generateWeeklyPlan(req.user.id, week_start);

      planner = await Planner.findOne({
        user_id: req.user.id,
        week_start,
      });
    }

    const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekend",
  ];

  const grouped = days.map((day) => ({
    day,
    tasks: planner.tasks.filter((task) => task.day === day),
  }));

  res.json({
    week_start,
    plan: grouped,
  });
  } catch (err) {
    next(err);
  }
};

// ── PATCH /api/planner/:taskId ───────────────────────────────
export const toggleTask = async (req, res, next) => {
  try {
    const planner = await Planner.findOne({
      user_id: req.user.id,
      "tasks._id": req.params.taskId,
    });

    if (!planner) {
      return res.status(404).json({ error: "Task not found" });
    }

    const task = planner.tasks.id(req.params.taskId);

    task.done = !task.done;

    await planner.save();

    res.json({ task });
  } catch (err) {
    next(err);
  }
};

// ── POST /api/planner/generate ───────────────────────────────
// Force regenerate weekly plan via AI
export const generatePlan = async (req, res, next) => {
  try {
    const week_start = getCurrentWeekStart();

    // Delete old planner
    await Planner.findOneAndDelete({
      user_id: req.user.id,
      week_start,
    });

    // Generate new planner
    await generateWeeklyPlan(req.user.id, week_start);

    const planner = await Planner.findOne({
      user_id: req.user.id,
      week_start,
    });

    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Weekend",
    ];

    const grouped = days.map((day) => ({
      day,
      tasks: planner.tasks.filter((t) => t.day === day),
    }));

    res.json({
      week_start,
      plan: grouped,
    });
  } catch (err) {
    next(err);
  }
};
// Helper: AI plan generator
const generateWeeklyPlan = async (userId, week_start) => {
  const aiPlan = await generateWeeklyPlanAI();

  const planner = await Planner.create({
    user_id: userId,
    week_start,
    tasks: aiPlan.tasks.map((task) => ({
      day: task.day,
      label: task.label,
      tag: task.tag,
      done: false,
    })),
  });

  return planner.tasks;
};