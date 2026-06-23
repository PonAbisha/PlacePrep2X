import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import erModel from "../data/coreSubjects/dbms/ermodel";

export default function DBMSERModel() {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <button
          onClick={() => navigate("/practice/core/study/DBMS/questions")}
          className="group flex items-center text-slate-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          DBMS Questions
        </button>

        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          DBMS ER Model
        </h1>
      </header>

      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-lg">
        <p className="text-slate-400 text-sm">
          Total Questions: {erModel.length}
        </p>
      </div>

      {erModel.map((q) => (
        <div
          key={q.id}
          className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            {q.question}
          </h3>

          <button
            onClick={() =>
              setOpenId(openId === q.id ? null : q.id)
            }
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg"
          >
            {openId === q.id ? "Hide Answer" : "Show Answer"}
          </button>

          {openId === q.id && (
            <div className="mt-4 space-y-3">
              <div>
                <h4 className="text-emerald-400 font-semibold">
                  Answer
                </h4>
                <p className="text-slate-300">
                  {q.answer}
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 font-semibold">
                  Explanation
                </h4>
                <p className="text-slate-400">
                  {q.explanation}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}