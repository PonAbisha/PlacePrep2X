import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function SQLQuestions() {
  const navigate = useNavigate();

  const sections = [
  {
    name: "Fundamentals",
    route: "/practice/core/study/SQL/questions/fundamentals",
    description: "Review core SQL concepts..."
  },
  {
    name: "Conceptual",
    route: "/practice/core/study/SQL/questions/conceptual",
    description: "Practice entity, relationship..."
  },
{
name: "Scenario Based",
route: "/practice/core/study/SQL/questions/scenariobased",
description: "Apply SQL concepts to real-world cases."
},
{
name: "Advanced",
route: "/practice/core/study/SQL/questions/advanced",
description: "Review optimization, locking, and recovery."
}
];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <button
          onClick={() => navigate("/practice/core/study/SQL")}
          className="group flex items-center text-slate-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          SQL Study
        </button>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">SQL Questions</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {sections.map((section) => (
          <button
            key={section.name}
            type="button"
            onClick={() => navigate(section.route)}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg text-left"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md">
                SQL
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-2">{section.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{section.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}