import DSAProgress from "../models/DSA.js";

// ── GET /api/dsa ─────────────────────────────────────────────
// Returns all DSA topic progress for logged-in user
export const getDSAProgress = async (req, res, next) => {
  try {
    const progress = await DSAProgress.find({ user_id: req.user.id }).sort({ topic: 1 });
    const formattedProgress = progress.map((p) => ({
      ...p.toObject(),
      percentage: Math.round((p.solved / (p.total || 1)) * 100 * 10) / 10,
    }));

    res.json({ progress: formattedProgress });
  } catch (err) {
    next(err);
  }
};

// ── PATCH /api/dsa/:topic ─────────────────────────────────────
// Update solved count for a topic
export const updateDSATopic = async (req, res, next) => {
  try {
    const { topic } = req.params;
    const { solved, total, completedProblems } = req.body;

    if (solved === undefined && !Array.isArray(completedProblems)) {
      return res.status(400).json({ error: "Valid 'solved' count or completedProblems array required" });
    }

    const updatedSolved = Array.isArray(completedProblems)
      ? completedProblems.length
      : solved;

    const updatePayload = {
      solved: updatedSolved,
      total: total ?? 0,
    };

    if (Array.isArray(completedProblems)) {
      updatePayload.completedProblems = completedProblems;
    }

    const progress = await DSAProgress.findOneAndUpdate(
      { user_id: req.user.id, topic },
      updatePayload,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.json({ progress });
  } catch (err) {
    next(err);
  }
};

// ── GET /api/dsa/stats ────────────────────────────────────────
// Aggregated stats: total solved, weak topics, strong topics
export const getDSAStats = async (req, res, next) => {
  try {
    const progress = await DSAProgress.find({ user_id: req.user.id });

    const totalSolved = progress.reduce((sum, item) => sum + (item.solved || 0), 0);
    const totalProblems = progress.reduce((sum, item) => sum + (item.total || 0), 0);
    const strongTopics = progress.filter((item) => item.total > 0 && item.solved / item.total >= 0.8).length;
    const weakTopics = progress.filter((item) => item.total > 0 && item.solved / item.total < 0.5).length;
    const avgPercentage = progress.length
      ? Math.round(
          (progress.reduce((sum, item) => sum + (item.total ? item.solved / item.total : 0), 0) / progress.length) *
            100 *
            10
        ) / 10
      : 0;

    res.json({
      stats: {
        total_solved: totalSolved,
        total_problems: totalProblems,
        strong_topics: strongTopics,
        weak_topics: weakTopics,
        avg_percentage: avgPercentage,
      },
      activity: [],
    });
  } catch (err) {
    next(err);
  }
};
