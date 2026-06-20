import { useState, useEffect } from "react";
import { getPlanner, generatePlanner, toggleTask } from "../api";
import {
  Calendar,
  CheckCircle,
  PlusCircle,
  RefreshCw,
  Clock,
  Sparkles,
} from "lucide-react";

export default function StudyPlanner() {
  const [planner, setPlanner] = useState([]);
  const [weekStart, setWeekStart] = useState("");
  const [loading, setLoading] = useState(true);
  const [regenerating, setRegenerating] = useState(false);

  async function loadPlanner() {
    try {
      const res = await getPlanner();
      setPlanner(res.data.plan || []);
      setWeekStart(res.data.week_start || "");
    } catch (err) {
      console.error("Failed to load study planner details:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPlanner();
  }, []);

  const handleToggleTask = async (taskId) => {
    try {
      await toggleTask(taskId);
      // Toggle locally
      setPlanner((prevPlan) =>
        prevPlan.map((day) => ({
          ...day,
          tasks: day.tasks.map((task) =>
            task.id === taskId ? { ...task, done: !task.done } : task
          ),
        }))
      );
    } catch (err) {
      alert("Failed to toggle task state");
    }
  };

  const handleRegenerate = async () => {
    if (!window.confirm("Are you sure you want to regenerate this week's study schedule? Your current tasks will be reset.")) return;
    setRegenerating(true);
    try {
      const res = await generatePlanner();
      setPlanner(res.data.plan || []);
      setWeekStart(res.data.week_start || "");
      alert("Study plan regenerated successfully based on your current performance!");
    } catch (err) {
      alert("Regeneration failed");
    } finally {
      setRegenerating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const allTasks = planner.flatMap((d) => d.tasks || []);
  const completedTasks = allTasks.filter((t) => t.done).length;
  const totalTasks = allTasks.length;
  const percentDone = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between justify-start gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Adaptive Study Planner
          </h1>
          <p className="text-slate-400 mt-1">
            Weekly preparation schedules customized to prioritize your weak CS and coding areas.
          </p>
        </div>

        <button
          onClick={handleRegenerate}
          disabled={regenerating}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-blue-500/10"
        >
          <RefreshCw className={`h-4 w-4 ${regenerating ? "animate-spin" : ""}`} />
          <span>{regenerating ? "Scheduling..." : "Regenerate Plan"}</span>
        </button>
      </div>

      {/* Week overview stats */}
      <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
            <Calendar className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Active Week Commencing</span>
            <h3 className="text-lg font-bold text-slate-200 mt-0.5">
              {new Date(weekStart).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
          </div>
        </div>

        {/* Progress percent */}
        <div className="w-full md:w-64 space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Weekly Tasks Status</span>
            <span>{completedTasks} / {totalTasks} Completed</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${percentDone}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Grid of days */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planner.map((dayPlan) => (
          <div
            key={dayPlan.day}
            className="glass-card p-5 rounded-2xl flex flex-col space-y-4 border border-slate-850"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-2 border-b border-slate-900">
              <h3 className="font-bold text-slate-200 text-sm flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>{dayPlan.day}</span>
              </h3>
              <span className="text-[10px] text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-900">
                {dayPlan.tasks?.filter((t) => t.done).length} / {dayPlan.tasks?.length} Done
              </span>
            </div>

            {/* Tasks list */}
            <div className="space-y-2.5 flex-1">
              {dayPlan.tasks?.map((task) => (
                <div
                  key={task.id}
                  onClick={() => handleToggleTask(task.id)}
                  className={`flex items-start space-x-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    task.done
                      ? "bg-slate-950/20 border-slate-900 text-slate-500 opacity-60"
                      : "bg-slate-900/40 border-slate-850 hover:bg-slate-900/60 text-slate-350"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => {}} // toggling is done by parent div onClick
                    className="h-4 w-4 rounded border-slate-700 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900 bg-slate-900 mt-0.5 cursor-pointer"
                  />
                  <div className="space-y-1">
                    <p className={`text-xs leading-relaxed ${task.done ? "line-through" : ""}`}>
                      {task.task_label}
                    </p>
                    <span className={`inline-block text-[9px] px-1.5 py-0.5 rounded font-semibold border ${
                      task.tag === "DSA"
                        ? "bg-blue-950/20 text-blue-400 border-blue-900/30"
                        : task.tag === "Aptitude"
                          ? "bg-teal-950/20 text-teal-400 border-teal-900/30"
                          : task.tag === "Core CS"
                            ? "bg-violet-950/20 text-violet-400 border-violet-900/30"
                            : "bg-purple-950/20 text-purple-400 border-purple-900/30"
                    }`}>
                      {task.tag}
                    </span>
                  </div>
                </div>
              ))}
              {(!dayPlan.tasks || dayPlan.tasks.length === 0) && (
                <div className="text-center py-6 text-slate-500 text-xs italic">
                  No tasks scheduled.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
