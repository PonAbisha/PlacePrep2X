import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, HelpCircle } from "lucide-react";

export default function DbmsDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      name: "Questions",
      description: "Explore various DBMS topics and practice questions.",
      icon: BookOpen,
      link: "/practice/core/dbms/questions",
    },
    {
      name: "Cheat Sheet",
      description: "Quick reference guide for essential DBMS concepts.",
      icon: FileText,
      link: "/practice/core/dbms/cheat-sheet",
    },
    {
      name: "Interview Questions",
      description: "Prepare for DBMS interviews with common questions and answers.",
      icon: HelpCircle,
      link: "/practice/core/dbms/interview-questions",
    },
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
        <h1 className="text-4xl font-extrabold text-white tracking-tight">DBMS Study Dashboard</h1>
        <p className="text-slate-400 mt-3 text-lg max-w-2xl leading-relaxed">
          Your central hub for all things Database Management Systems. Choose a path to begin your study.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.name}
            to={card.link}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 hover:bg-slate-900/60 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                  <card.icon className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
              <p className="text-slate-400 text-sm">{card.description}</p>
            </div>
            <div className="mt-8">
              <span className="text-blue-400 flex items-center text-sm font-bold uppercase tracking-widest">
                Explore
                <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}