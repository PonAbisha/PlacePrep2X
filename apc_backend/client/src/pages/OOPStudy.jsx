import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function OOPStudy() {
  const navigate = useNavigate();

  const studyOptions = [
    { name: "Questions", icon: BookOpen, path: "/practice/core/study/OOP/questions" }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <button
          onClick={() => navigate("/practice/core")}
          className="group flex items-center text-slate-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Core Subjects
        </button>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Object-Oriented Programming</h1>
        <p className="text-slate-400 mt-3 text-lg max-w-2xl leading-relaxed">
          Master Object-Oriented Programming concepts including classes, objects, inheritance, polymorphism, and encapsulation.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {studyOptions.map((option) => {
          return (
            <button
              key={option.name}
              type="button"
              onClick={() => navigate(option.path)}
              className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg text-left"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500">
                  <option.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 bg-slate-800 text-slate-400 rounded-md">
                  OOP Study
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{option.name}</h3>
              <p className="text-slate-400 text-sm">Explore {option.name.toLowerCase()} for OOP.</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
