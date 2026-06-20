import mongoose from "mongoose";
import InterviewSession from "../models/Interview.js";
import DSAProgress from "../models/DSA.js";
import TestAttempt from "../models/TestAttempt.js";

export const getAnalyticsOverview = async (req, res, next) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.user.id);
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 13);
    fourteenDaysAgo.setHours(0, 0, 0, 0);

    // Readiness trend — last 14 days
    const trend = await mongoose.connection.db.collection('readiness_snapshots')
      .find({ user_id: userId, snapshot_date: { $gte: fourteenDaysAgo } })
      .sort({ snapshot_date: 1 })
      .toArray();

    // Current readiness
    const current = await mongoose.connection.db.collection('readiness_snapshots')
      .find({ user_id: userId })
      .sort({ snapshot_date: -1 })
      .limit(1)
      .toArray();

    // Total quizzes / problems
    const [interviewCount, dsaStats, tutorCount] = await Promise.all([
      InterviewSession.countDocuments({ user_id: userId }),
      DSAProgress.aggregate([
        { $match: { user_id: userId } },
        { $group: { _id: null, total: { $sum: "$solved" } } }
      ]),
      mongoose.connection.db.collection('tutor_conversations').countDocuments({ user_id: userId })
    ]);

    // Weak Areas Calculation
    const weakAreasData = await TestAttempt.aggregate([
      { $match: { user_id: userId } },
      {
        $group: {
          _id: "$topic",
          avg_score: { $avg: { $multiply: [{ $divide: ["$score", "$total_qs"] }, 100] } },
          category: { $first: "$category" }
        }
      },
      { $match: { avg_score: { $lt: 60 } } },
      { $sort: { avg_score: 1 } },
      { $limit: 5 }
    ]);

    const weakAreas = weakAreasData.map(item => ({
      topic: item._id,
      score: Math.round(item.avg_score),
      category: item.category
    }));

    // Streak calculation
    const activities = await mongoose.connection.db.collection('daily_activity')
      .find({ user_id: userId, activity_date: { $lte: new Date() } })
      .sort({ activity_date: -1 })
      .toArray();
    
    let streak = 0;
    if (activities.length > 0) {
      let currentCheck = new Date();
      currentCheck.setHours(0, 0, 0, 0);
      
      for (const act of activities) {
        const actDate = new Date(act.activity_date);
        actDate.setHours(0, 0, 0, 0);
        
        const diff = (currentCheck - actDate) / (1000 * 60 * 60 * 24);
        if (diff <= 1) {
          streak++;
          currentCheck = actDate;
        } else {
          break;
        }
      }
    }

    // Activity last 14 days
    const activity = await mongoose.connection.db.collection('daily_activity')
      .find({ user_id: userId, activity_date: { $gte: fourteenDaysAgo } })
      .sort({ activity_date: 1 })
      .toArray();

    res.json({
      readiness: current[0] || { readiness_score: 0, snapshot_date: new Date(), interview_readiness: 0, dsa_readiness: 0, coding_readiness: 0 },
      trend,
      summary: {
        quizzes: 0,
        interviews: interviewCount,
        dsa_problems: dsaStats[0]?.total || 0,
        tutor_chats: tutorCount
      },
      streak,
      activity,
      weakAreas,
      coreCSQuizzes: [],
      generalAptitudeQuizzes: [],
      aptitudeBooksProgress: [],
      aptitudeSummary: {
        total_solved: 0,
        topics_covered: 0
      }
    });
  } catch (err) {
    next(err);
  }
};
