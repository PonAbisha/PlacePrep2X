import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import dbmsCheatSheet from "../data/coreSubjects/dbms/cheatSheet";

export default function DBMSCheatSheet() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header>
        <button
          onClick={() => navigate("/practice/core/study/DBMS")}
          className="group flex items-center text-slate-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          DBMS Study
        </button>

        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          DBMS Cheat Sheet
        </h1>

        <p className="text-slate-400 mt-3">
          Total Sections: {dbmsCheatSheet.length}
        </p>
      </header>

      <div className="space-y-4">
        {dbmsCheatSheet.map((section, index) => (
          <div
            key={index}
            className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenSection(
                  openSection === index ? null : index
                )
              }
              className="w-full p-6 text-left flex justify-between items-center"
            >
              <h2 className="text-xl font-bold text-white">
                {section.section}
              </h2>

              <span className="text-emerald-400 text-xl">
                {openSection === index ? "-" : "+"}
              </span>
            </button>

            {openSection === index && (
              <div className="p-6 pt-0 space-y-6">
                {section.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="bg-slate-800/40 rounded-2xl p-5"
                  >
                    <h3 className="text-lg font-bold text-emerald-400 mb-3">
                      {topic.title}
                    </h3>

                    <pre className="bg-black/40 text-slate-200 p-4 rounded-xl overflow-x-auto text-sm whitespace-pre-wrap">
                      {topic.syntax}
                    </pre>

                    <p className="text-slate-400 mt-3">
                      {topic.explanation}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}