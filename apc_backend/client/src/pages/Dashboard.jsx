import { useState, useEffect } from "react";
import { getAnalytics } from "../api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  Trophy,
  Activity,
  Flame,
  CheckCircle,
  TrendingUp,
  Brain,
  Code,
  Users,
} from "lucide-react";

// Register ChartJS plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await getAnalytics();
        setData(res.data);
      } catch (err) {
        console.error("Failed to load dashboard statistics:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Fallbacks if no data exists yet
  const summary = data?.summary || { total_quizzes: 0, total_interviews: 0, total_solved: 0, total_chats: 0 };
  const streak = data?.streak || 0;
  const readiness = data?.readiness || {
    overall_score: 0,
    coding_score: 0,
    aptitude_score: 0,
    core_cs_score: 0,
    interview_score: 0,
  };

  // Convert scores to numbers for safe rendering
  const overallVal = Math.round(parseFloat(readiness.overall_score || 0));
  const codingVal = Math.round(parseFloat(readiness.coding_score || 0));
  const aptVal = Math.round(parseFloat(readiness.aptitude_score || 0));
  const csVal = Math.round(parseFloat(readiness.core_cs_score || 0));
  const interviewVal = Math.round(parseFloat(readiness.interview_score || 0));

  // Activity Chart Options
  const activityDates = data?.activity?.map(a => {
    const d = new Date(a.activity_date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }) || [];

  const activityData = {
    labels: activityDates.length ? activityDates : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Study Minutes",
        data: data?.activity?.map(a => a.study_minutes) || [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(59, 130, 246, 0.45)",
        borderColor: "#3B82F6",
        borderWidth: 2,
        borderRadius: 6,
      },
      {
        label: "DSA Problems",
        data: data?.activity?.map(a => a.problems_solved * 10) || [0, 0, 0, 0, 0, 0, 0], // scale for visibility
        backgroundColor: "rgba(139, 92, 246, 0.45)",
        borderColor: "#8B5CF6",
        borderWidth: 2,
        borderRadius: 6,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#94A3B8", font: { family: "Inter" } },
      },
    },
    scales: {
      x: { grid: { color: "rgba(255,255,255,0.03)" }, ticks: { color: "#94A3B8" } },
      y: { grid: { color: "rgba(255,255,255,0.03)" }, ticks: { color: "#94A3B8" } },
    },
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Placement Analytics
        </h1>
        <p className="text-slate-400 mt-1">
          Monitor your preparation status, weak domains, and interactive learning progress.
        </p>
      </div>

      {/* Main Readiness Gauge Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placement Readiness Score Gauge */}
        <div className="lg:col-span-1 glass-card p-6 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-lg font-bold text-slate-300 mb-6 flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span>Readiness Score</span>
          </h2>

          <div className="relative flex items-center justify-center">
            {/* Circular Gauge SVG */}
            <svg className="w-40 h-40">
              <circle
                className="text-slate-800"
                strokeWidth="10"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="80"
                cy="80"
              />
              <circle
                className="text-blue-500 transition-all duration-1000 ease-out"
                strokeWidth="10"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * overallVal) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="70"
                cx="80"
                cy="80"
                transform="rotate(-90 80 80)"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-4xl font-extrabold tracking-tight Outfit">{overallVal}%</span>
              <p className="text-xs text-slate-400 mt-0.5">Ready for Drive</p>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-slate-400 max-w-[200px]">
            {overallVal >= 80 ? (
              <span className="text-emerald-400 font-semibold">Ready for Placement Drives!</span>
            ) : overallVal >= 60 ? (
              <span className="text-yellow-400 font-semibold">Good progress, keep practicing.</span>
            ) : (
              <span className="text-red-400 font-semibold">Requires regular practice.</span>
            )}
          </div>
        </div>

        {/* Categories breakdown */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl flex flex-col justify-between">
          <h2 className="text-lg font-bold text-slate-300 mb-6 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-indigo-500" />
            <span>Performance Breakdown</span>
          </h2>

          <div className="space-y-4">
            {/* Coding (DSA) */}
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-300 font-medium">Coding & DSA Skills</span>
                <span className="text-slate-400">{codingVal}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${codingVal}%` }}
                ></div>
              </div>
            </div>

            {/* Aptitude */}
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-300 font-medium">Quantitative Aptitude</span>
                <span className="text-slate-400">{aptVal}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-500 to-blue-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${aptVal}%` }}
                ></div>
              </div>
            </div>

            {/* Core CS subjects */}
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-300 font-medium">Core CS Subjects</span>
                <span className="text-slate-400">{csVal}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${csVal}%` }}
                ></div>
              </div>
            </div>

            {/* Mock Interviews */}
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-slate-300 font-medium">Mock Interview Evaluations</span>
                <span className="text-slate-400">{interviewVal}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${interviewVal}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aggregate Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-4 rounded-xl flex items-center space-x-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg">
            <Code className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs text-slate-400">Total Solved</h4>
            <p className="text-2xl font-bold">{summary.total_solved}</p>
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl flex items-center space-x-4">
          <div className="p-3 bg-violet-500/10 text-violet-500 rounded-lg">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs text-slate-400">Quizzes Taken</h4>
            <p className="text-2xl font-bold">{summary.total_quizzes}</p>
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl flex items-center space-x-4">
          <div className="p-3 bg-pink-500/10 text-pink-500 rounded-lg">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs text-slate-400">Mock Interviews</h4>
            <p className="text-2xl font-bold">{summary.total_interviews}</p>
          </div>
        </div>

        <div className="glass-card p-4 rounded-xl flex items-center space-x-4">
          <div className="p-3 bg-orange-500/10 text-orange-500 rounded-lg">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-xs text-slate-400">Daily Streak</h4>
            <p className="text-2xl font-bold text-orange-400">{streak} Days</p>
          </div>
        </div>
      </div>

      {/* Analytics Graph */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Graph */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl h-96 flex flex-col justify-between">
          <h2 className="text-lg font-bold text-slate-300 mb-4 flex items-center space-x-2">
            <Activity className="h-5 w-5 text-blue-500" />
            <span>Activity History</span>
          </h2>
          <div className="flex-1 min-h-0 relative">
            <Bar data={activityData} options={chartOptions} />
          </div>
        </div>

        {/* Weak Areas Summary */}
        <div className="lg:col-span-1 glass-card p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-300 mb-4 flex items-center space-x-2">
              <Brain className="h-5 w-5 text-red-400" />
              <span>Priority Targets</span>
            </h2>
            <p className="text-xs text-slate-400 mb-4">
              We identified these weak domains based on your past quiz answers. Consider starting a study session or taking a quiz.
            </p>

            <div className="space-y-3">
              {data?.subjectScores?.filter(s => parseFloat(s.avg_score) < 70).slice(0, 3).map((item) => (
                <div key={item.subject} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-semibold capitalize">{item.subject}</h4>
                    <p className="text-xs text-slate-400">{item.attempts} attempts recorded</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-red-950/30 text-red-400 border border-red-900/30 font-semibold">
                    {item.avg_score}% Avg
                  </span>
                </div>
              ))}
              {(!data?.subjectScores || data.subjectScores.filter(s => parseFloat(s.avg_score) < 70).length === 0) && (
                <div className="text-center py-6 text-slate-400 text-sm">
                  🎉 All subjects verified at stable levels!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
