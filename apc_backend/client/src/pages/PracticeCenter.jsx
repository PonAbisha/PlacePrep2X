import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, BrainCircuit, ArrowRight } from "lucide-react";

export default function PracticeCenter() {
  const cards = [
    {
      title: "Core Subjects",
      description: "Master fundamental CS concepts like DBMS, Operating Systems, Computer Networks, and OOPS for technical rounds.",
      icon: BookOpen,
      href: "/practice/core",
      stats: "5 Subjects • 250+ Questions"
    },
    {
      title: "Aptitude",
      description: "Hone your problem-solving skills with Quantitative, Logical Reasoning, and Verbal Ability practice sets.",
      icon: BrainCircuit,
      href: "/practice/aptitude",
      stats: "3 Categories • 500+ Questions"
    }
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Practice Center</h1>
        <p className="text-slate-400 mt-3 text-lg max-w-2xl leading-relaxed">
          Focused training modules to strengthen your technical and analytical foundations for placement success.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-10 h-10" />
                </div>
                <span className="px-4 py-1.5 bg-slate-800 text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">
                  {card.stats}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">{card.title}</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 flex-grow">
                {card.description}
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-500">Mastery Progress</span>
                  <span className="text-blue-400">0%</span>
                </div>
                <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 w-0 rounded-full transition-all duration-1000"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>

              <Link
                to={card.href}
                className="flex items-center justify-center space-x-3 w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-lg transition-all shadow-lg shadow-blue-600/20 group-hover:shadow-blue-600/40 active:scale-[0.98]"
              >
                <span>Open Module</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
            
            {/* Ambient background decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}