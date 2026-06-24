import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, Database, HardDrive, Network, Code, FileText } from "lucide-react";

export default function CoreSubjectsPractice() {
  const navigate = useNavigate();

  const subjects = [
  { name: "DBMS", route: "/practice/core/study/DBMS", progress: 75, completedTopics: 8, icon: Database },
  { name: "Operating Systems", route: "/practice/core/study/OS", progress: 50, completedTopics: 5, icon: HardDrive },
  { name: "Computer Networks", route: "/practice/core/study/CN", progress: 30, completedTopics: 3, icon: Network },
  { name: "OOP", route: "/practice/core/study/OOP", progress: 90, completedTopics: 10, icon: Code },
  { name: "SQL", route: "/practice/core/study/SQL", progress: 0, completedTopics: 0, icon: FileText }
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
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Core Subjects Preparation</h1>
        <p className="text-slate-400 mt-3 text-lg max-w-2xl leading-relaxed">
          Strengthen your foundational computer science knowledge with in-depth study and practice tests.
        </p>
      </header>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                  <subject.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md">
                  Core CS
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{subject.name}</h3>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-500">Mastery</span>
                  <span className="text-emerald-400">{subject.progress}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-600 to-green-600 rounded-full transition-all duration-1000"
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  {subject.completedTopics}/10 Topics Completed
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to={subject.route}
                className="flex items-center justify-center py-3 bg-slate-800 hover:bg-slate-750 text-slate-200 rounded-xl text-xs font-black uppercase tracking-widest transition-all border border-slate-700"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Study
              </Link>
              <Link
                to={`/practice/core/test/${encodeURIComponent(subject.name)}`}
                className="flex items-center justify-center py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20"
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