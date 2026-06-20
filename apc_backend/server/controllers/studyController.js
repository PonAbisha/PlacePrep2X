import CoreStudyQuestion from "../models/CoreStudyQuestion.js";
import AptitudeStudyQuestion from "../models/AptitudeStudyQuestion.js";

export const getCoreQuestions = async (req, res, next) => {
  try {
    const { subject } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const questions = await CoreStudyQuestion.find({ subject })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: 1 });

    const total = await CoreStudyQuestion.countDocuments({ subject });

    res.json({
      questions,
      totalQuestions: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    next(err);
  }
};

export const getAptitudeQuestions = async (req, res, next) => {
  try {
    const { topic } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const questions = await AptitudeStudyQuestion.find({ topic })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: 1 });

    const total = await AptitudeStudyQuestion.countDocuments({ topic });

    res.json({
      questions,
      totalQuestions: total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    next(err);
  }
};