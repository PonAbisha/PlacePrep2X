import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, Target } from "lucide-react";

export default function AptitudePractice() {
  const navigate = useNavigate();

  const topics = [
    { name: "Percentages", progress: 65, solved: 65 },
    { name: "Profit & Loss", progress: 40, solved: 40 },
    { name: "Ratio & Proportion", progress: 80, solved: 80 },
    { name: "Time & Work", progress: 25, solved: 25 },
    { name: "Time Speed Distance", progress: 0, solved: 0 },
    { name: "Probability", progress: 10, solved: 10 },
    { name: "Number System", progress: 90, solved: 90 },
    { name: "Data Interpretation", progress: 0, solved: 0 },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Header section with back navigation */}
      <header>
        <button
          onClick={() => navigate("/practice")}
          className="group flex items-center text-slate-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Practice Center
        </button>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Aptitude Preparation</h1>
        <p className="text-slate-400 mt-3 text-lg max-w-2xl leading-relaxed">
          Master quantitative and logical concepts with targeted study materials and timed assessments.
        </p>
      </header>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.name}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md">
                  Aptitude
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{topic.name}</h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-500">Mastery</span>
                  <span className="text-indigo-400">{topic.progress}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full transition-all duration-1000"
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {topic.solved}/100 Questions Studied
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to={`/practice/aptitude/study/${encodeURIComponent(topic.name)}`}
                className="flex items-center justify-center py-3 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-slate-700"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Study
              </Link>
              <Link
                to={`/practice/aptitude/test/${encodeURIComponent(topic.name)}`}
                className="flex items-center justify-center py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-indigo-600/20"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}