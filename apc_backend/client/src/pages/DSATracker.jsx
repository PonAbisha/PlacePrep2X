import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getDSAProgress, updateDSATopic, updateMe } from "../api";
import {
  Code2,
  TrendingUp,
  Award,
  ChevronRight,
  RefreshCw,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { STRIVER_DSA_TOPICS } from "../data/striverTopics";

export default function DSATracker() {
  const { user, checkAuth } = useAuth();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(user?.leetcode_username || "");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");
  const [updatingUsername, setUpdatingUsername] = useState(false);
  const [expandedTopics, setExpandedTopics] = useState({});

  async function loadProgress() {
    try {
      const res = await getDSAProgress();
      const apiTopics = res.data.progress || [];
      const progressByTopic = apiTopics.reduce((map, item) => {
        map[item.topic] = item;
        return map;
      }, {});

      const mergedTopics = STRIVER_DSA_TOPICS.map((sheetTopic) => {
        const progress = progressByTopic[sheetTopic.topic];
        const completedProblems = progress?.completedProblems || [];
        return {
          topic: sheetTopic.topic,
          total: sheetTopic.total,
          description: sheetTopic.description,
          problems: sheetTopic.problems,
          problemGroups: sheetTopic.groups || [{ title: null, problems: sheetTopic.problems }],
          completedProblems,
          solved: completedProblems.length || progress?.solved || 0,
          id: progress?.id || progress?._id || sheetTopic.topic,
        };
      });

      const otherTopics = apiTopics.filter(
        (item) => !STRIVER_DSA_TOPICS.some((sheetTopic) => sheetTopic.topic === item.topic)
      );

      setTopics([...mergedTopics, ...otherTopics]);
    } catch (err) {
      console.error("Failed to load DSA progress:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProgress();
  }, []);

  useEffect(() => {
    if (user?.leetcode_username) {
      setUsername(user.leetcode_username);
    }
  }, [user?.leetcode_username]);

  const toggleTopicExpanded = (topicName) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicName]: !prev[topicName],
    }));
  };

  const handleToggleProblem = async (topicName, problem) => {
    const topic = topics.find((t) => t.topic === topicName);
    if (!topic) return;

    const completedProblems = topic.completedProblems || [];
    const nextCompleted = completedProblems.includes(problem)
      ? completedProblems.filter((item) => item !== problem)
      : [...completedProblems, problem];

    try {
      const res = await updateDSATopic(topicName, {
        completedProblems: nextCompleted,
        total: topic.total,
      });

      const updated = res.data.progress;
      setTopics((prev) =>
        prev.map((t) =>
          t.topic === topicName
            ? {
                ...t,
                completedProblems: updated.completedProblems || nextCompleted,
                solved: (updated.completedProblems || nextCompleted).length,
              }
            : t
        )
      );
    } catch (err) {
      alert("Failed to update topic checklist");
    }
  };

  const LEETCODE_SLUG_OVERRIDES = {
    "Count Bits": "counting-bits",
  };

  const getLeetCodeLink = (problem) => {
    const normalized = (problem || "")
      .replace(/\(.*?\)/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    const slug = LEETCODE_SLUG_OVERRIDES[problem] || normalized;
    return `https://leetcode.com/problems/${slug}/`;
  };

  const handleSaveUsername = async (e) => {
    e.preventDefault();
    setFeedbackMessage("");
    setFeedbackType("success");
    setUpdatingUsername(true);
    try {
      await updateMe({ leetcode_username: username });
      await checkAuth();
      setFeedbackMessage(`LeetCode profile linked successfully as "${username}".`);
      setFeedbackType("success");
    } catch (err) {
      const message = err.response?.data?.error || err.message || "Unable to save LeetCode profile.";
      setFeedbackMessage(`Failed to save LeetCode profile: ${message}`);
      setFeedbackType("error");
    } finally {
      setUpdatingUsername(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const totalSolved = topics.reduce((acc, t) => acc + (t.solved || 0), 0);
  const totalProblems = topics.reduce((acc, t) => acc + (t.total || 0), 0);
  const totalPercent = totalProblems ? Math.round((totalSolved / totalProblems) * 100) : 0;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between justify-start gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Technical Prep Tracker
          </h1>
          <p className="text-slate-400 mt-1">
            Link your LeetCode stats and track your Striver A-Z DSA progress across core topics.
          </p>
        </div>
      </div>

      {/* LeetCode Sync Widget & Summary Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LeetCode Connection */}
        <div className="lg:col-span-1 glass-card p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div>
            <h2 className="text-lg font-bold text-slate-300 mb-2 flex items-center space-x-2">
              <Code2 className="h-5 w-5 text-orange-500" />
              <span>LeetCode Integration</span>
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Enter your LeetCode username to display active progress metrics directly on your dashboard.
            </p>

            <form onSubmit={handleSaveUsername} className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="LeetCode Username"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                disabled={updatingUsername}
                className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-orange-800 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
              >
                {updatingUsername ? "Linking Profile..." : "Sync Profile"}
              </button>
            </form>
            {feedbackMessage && (
              <p
                className={`mt-4 text-sm ${
                  feedbackType === "success" ? "text-emerald-300" : "text-red-300"
                }`}
              >
                {feedbackMessage}
              </p>
            )}
          </div>

          {user?.leetcode_username && (
            <div className="mt-6 flex items-center space-x-2 text-xs text-emerald-400 font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Linked to username: "{user.leetcode_username}"</span>
            </div>
          )}
        </div>

        {/* Aggregate DSA Progress Gauge */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-300 mb-4 flex items-center space-x-2">
              <Award className="h-5 w-5 text-blue-500" />
              <span>DSA Mastery Summary</span>
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Your overall completion metrics across Striver A-Z topics. Use the panels below to log completed problems.
            </p>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-300">Overall Completed</span>
              <span className="text-sm font-semibold">{totalSolved} / {totalProblems} Problems</span>
            </div>
            <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden mb-6">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${totalPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
              <h4 className="text-xs text-slate-400">Mastery Level</h4>
              <p className="text-lg font-bold text-blue-400 mt-1">
                {totalPercent >= 80 ? "Advanced" : totalPercent >= 50 ? "Intermediate" : "Beginner"}
              </p>
            </div>
            <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
              <h4 className="text-xs text-slate-400">Total Progress</h4>
              <p className="text-lg font-bold text-slate-200 mt-1">{totalPercent}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* List of DSA Topics */}
      <div className="space-y-3">
        {topics.map((t) => {
          const percent = t.total ? Math.round((t.solved / t.total) * 100) : 0;
          return (
            <div
              key={t.id || t.topic}
              className="rounded-2xl border border-slate-800/70 bg-slate-950/70"
            >
              <button
                type="button"
                onClick={() => toggleTopicExpanded(t.topic)}
                className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-slate-900 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ChevronRight
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      expandedTopics[t.topic] ? "rotate-90" : "rotate-0"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{t.topic}</p>
                    <div className="mt-2 h-2 w-full max-w-xs rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-blue-500 transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-slate-200">{t.solved} / {t.total}</span>
                  <span className="text-[11px] text-slate-400">{percent}%</span>
                </div>
              </button>

              {expandedTopics[t.topic] && (
                <div className="px-5 pb-4 pt-2 border-t border-slate-800">
                  <div className="space-y-4">
                    {t.problemGroups.map((group) => (
                      <div key={group.title || "all"} className="rounded-2xl border border-slate-800 bg-slate-950/95 p-4">
                        {group.title && (
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
                            {group.title}
                          </p>
                        )}
                        <div className="space-y-2">
                          {group.problems.map((problem) => (
                            <label
                              key={problem}
                              className="flex items-center gap-3 rounded-2xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-slate-100"
                            >
                              <input
                                type="checkbox"
                                checked={(t.completedProblems || []).includes(problem)}
                                onChange={() => handleToggleProblem(t.topic, problem)}
                                className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500"
                              />
                              <div className="flex items-center gap-2 w-full">
                                <a
                                  href={getLeetCodeLink(problem)}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="truncate text-slate-100 hover:text-blue-300"
                                >
                                  {problem}
                                </a>
                                <ExternalLink className="h-4 w-4 text-slate-400" />
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
