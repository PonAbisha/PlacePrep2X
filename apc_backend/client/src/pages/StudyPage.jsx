import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText, Lightbulb, CheckCircle, XCircle, ChevronLeft, ChevronRight, HelpCircle, Eye, LayoutGrid } from "lucide-react";
import { aptitudeStudyQuestions } from "../data/index.js"; 

export default function StudyPage() {
  const { topic, subject } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const title = topic || subject;
  const isAptitude = location.pathname.includes("aptitude");

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { qId: selectedOptionIndex }
  const questionsPerPage = 10;

  // Determine which data source to use
  const contentSource = isAptitude ? aptitudeStudyQuestions : {}; // Extend with core subject questions later

  const currentTopicQuestions = contentSource[title] || {}; // Use {} for object structure

  const hasPatterns =
    currentTopicQuestions?.patterns &&
    currentTopicQuestions.patterns.length > 0;

  // Initialize selectedPatternId based on the *current* state of hasPatterns
  // This runs only once on initial render
  const [selectedPatternId, setSelectedPatternId] = useState(() => {
    if (hasPatterns && currentTopicQuestions.patterns.length > 0) {
      return currentTopicQuestions.patterns[0].id;
    }
    return null;
  });

  // Progress tracker helper
  const getPatternProgress = (pattern) => {
    const totalCount = pattern.questions?.length || 0;
    if (totalCount === 0) return { solvedCount: 0, totalCount: 0, percentage: 0 };
    
    let solvedCount = 0;
    pattern.questions.forEach(q => {
      const key = `${pattern.id}_${q.id}`;
      if (selectedAnswers[key] !== undefined) {
        solvedCount++;
      }
    });
    const percentage = Math.round((solvedCount / totalCount) * 100);
    return { solvedCount, totalCount, percentage };
  };

  // Reset selectedAnswers only when topic changes
  useEffect(() => {
    setSelectedAnswers({});
  }, [title]);

  // This useEffect reacts to changes in patterns or topic,
  // ensuring selectedPatternId is always valid or null.
  useEffect(() => {
    if (hasPatterns && currentTopicQuestions.patterns.length > 0) {
      // If patterns exist and the currently selected pattern is no longer valid
      // or if no pattern is selected, default to the first one.
      const currentPatternExists = currentTopicQuestions.patterns.some(p => p.id === selectedPatternId);
      if (!currentPatternExists) {
        setSelectedPatternId(currentTopicQuestions.patterns[0].id);
      }
    } else if (!hasPatterns && selectedPatternId !== null) {
      // If there are no patterns, ensure selectedPatternId is null
      setSelectedPatternId(null);
    }
  }, [hasPatterns, currentTopicQuestions.patterns, selectedPatternId, title]); // Add title to dependencies to re-evaluate on topic change

  // Fix totalQuestions calculation to sum questions across patterns
  const totalQuestions = hasPatterns
    ? currentTopicQuestions.patterns.reduce(
        (sum, p) => sum + p.questions.length,
        0
      )
    : (currentTopicQuestions.length || 0); // Fallback for non-pattern topics

  // Fallback content for topics without specific data
  const defaultContent = {
    notes: `Comprehensive overview of ${title}. This section covers fundamental definitions, core principles, and basic properties required to master the topic. Understanding these basics is crucial before moving to complex problem-solving.`,
    formulas: null,
    interviewPoints: ["No specific interview points available for this topic yet."],
    questions: []
  };

  /*const displayContent = {
    notes: currentTopicNotes.notes || defaultContent.notes, // Use notes from aptitudeStudyNotes.js
    formulas: currentTopicNotes.formulas || defaultContent.formulas,
    interviewPoints: currentTopicNotes.interviewPoints || defaultContent.interviewPoints,
    questions: hasPatterns && selectedPatternId
      ? currentTopicQuestions.patterns.find(p => p.id === selectedPatternId)?.questions || []
      : (hasPatterns ? [] : currentTopicQuestions) // If no patterns, assume it's a direct array of questions
  };*/
  const displayContent = {
  notes: defaultContent.notes,
  formulas: defaultContent.formulas,
  interviewPoints: defaultContent.interviewPoints,
  questions: hasPatterns && selectedPatternId
    ? currentTopicQuestions.patterns.find(
        p => p.id === selectedPatternId
      )?.questions || []
    : (hasPatterns ? [] : currentTopicQuestions)
  };
  const currentNotes =
  hasPatterns && selectedPatternId
    ? currentTopicQuestions.patterns.find(
        p => p.id === selectedPatternId
      )?.notes
    : null;

  // Handle pagination
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = (displayContent.questions || []).slice(indexOfFirstQuestion, indexOfLastQuestion);

  const handleOptionClick = (questionId, optionIndex) => {
    const key = selectedPatternId ? `${selectedPatternId}_${questionId}` : `${questionId}`;
    if (selectedAnswers[key] !== undefined) return;
    setSelectedAnswers(prev => ({ ...prev, [key]: optionIndex }));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      {/* Header Section */}
      <header>
        <button
          onClick={() => navigate(isAptitude ? "/practice/aptitude" : "/practice/core")}
          className="group flex items-center text-slate-400 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to {isAptitude ? "Aptitude" : "Core Subjects"}
        </button>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">{title}</h1>
            <p className="text-slate-400 mt-2 text-lg">Detailed study module and practice bank</p>
          </div>
          
          <div className="w-full md:w-64 space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
              <span className="text-slate-500">Study Progress</span>
              <span className={isAptitude ? "text-indigo-400" : "text-emerald-400"}>
                {totalQuestions > 0 ? `${Object.keys(selectedAnswers).length}/${totalQuestions} Questions` : "0/0"}
              </span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r rounded-full transition-all duration-1000 ${
                  isAptitude ? "from-indigo-600 to-blue-600" : "from-emerald-600 to-green-600"
                }`}
                style={{ width: totalQuestions > 0 ? `${(Object.keys(selectedAnswers).length / totalQuestions) * 100}%` : "0%" }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Pattern Selector (if patterns exist) */}
      {hasPatterns && (
        <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <LayoutGrid className={`w-5 h-5 mr-3 ${isAptitude ? "text-indigo-500" : "text-emerald-500"}`} />
            Select Pattern
          </h2>
          <div className="flex flex-wrap gap-3">
            {currentTopicQuestions.patterns.map(pattern => {
              const { solvedCount, totalCount, percentage } = getPatternProgress(pattern);
              return (
                <button
                  key={pattern.id}
                  onClick={() => {
                    setSelectedPatternId(pattern.id);
                    setCurrentPage(1); // Reset pagination on pattern change
                  }}
                  className={`px-5 py-3 rounded-2xl text-left transition-all border flex flex-col gap-1 min-w-[200px] ${
                    selectedPatternId === pattern.id
                      ? (isAptitude ? "bg-indigo-600/10 border-indigo-500 text-white shadow-md shadow-indigo-500/10" : "bg-emerald-600/10 border-emerald-500 text-white shadow-md shadow-emerald-500/10")
                      : "bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-bold">{pattern.name}</span>
                  <span className={`text-xs ${selectedPatternId === pattern.id ? (isAptitude ? "text-indigo-400" : "text-emerald-400") : "text-slate-500"}`}>
                    {solvedCount}/{totalCount} solved • {percentage}%
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Notes & Points */}
        <div className="lg:col-span-2 space-y-8">
          {currentNotes && (
          <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">
              📘 Pattern Notes
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
                <h3 className="font-bold text-indigo-400 mb-2">
                  Concept
                </h3>
                <p className="text-slate-300">
                  {currentNotes.concept}
                </p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
                <h3 className="font-bold text-indigo-400 mb-2">
                  Formulas
                </h3>

                  <ul className="list-disc pl-6 text-slate-300">
                    {currentNotes.formula &&
                      Object.values(currentNotes.formula).map((formula, index) => (
                        <li key={index}>{formula}</li>
                      ))}
                  </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
                <h3 className="font-bold text-indigo-400 mb-2">
                  Shortcuts
                </h3>

                <ul className="list-disc pl-6 text-slate-300">
                  {currentNotes.shortcuts?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
                <h3 className="font-bold text-indigo-400 mb-2">
                  Solved Example
                </h3>

                <p className="text-slate-200 font-semibold">
                  {currentNotes.example?.question}
                </p>

                <p className="text-slate-400 mt-2">
                  {currentNotes.example?.solution}
                </p>
              </div>
              <div className="bg-slate-800/30 rounded-xl p-4 border border-slate-700">
              <h3 className="font-bold text-indigo-400 mb-2">
                 Key Takeaways
              </h3>

              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                {currentNotes.tips?.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
            </div>
          </section>

        )}
          {/* Practice Questions Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-xl font-bold text-white flex items-center">
                <HelpCircle className={`w-5 h-5 mr-3 ${isAptitude ? "text-indigo-500" : "text-emerald-500"}`} />
                Practice Questions
              </h2>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Questions {indexOfFirstQuestion + 1}–{Math.min(indexOfLastQuestion, totalQuestions)}
              </span>
            </div>

            <div className="space-y-6">              
              {currentQuestions.length === 0 && <p className="text-slate-400 text-center py-10">No questions available for this pattern yet.</p>}

              {currentQuestions.map((q) => {
                const questionKey = selectedPatternId ? `${selectedPatternId}_${q.id}` : `${q.id}`;
                return (
                  <div key={q.id} className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-colors">
                    <div className="flex items-start gap-4 mb-6">
                      <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black ${
                        isAptitude ? "bg-indigo-500/10 text-indigo-500" : "bg-emerald-500/10 text-emerald-500"
                      }`}>
                        {q.id}
                      </span>
                      <p className="text-slate-100 font-medium leading-relaxed">{q.text || q.question}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-12 mb-6">
                      {q.options.map((opt, idx) => {
                        const isSelected = selectedAnswers[questionKey] === idx;
                        const hasSelected = selectedAnswers[questionKey] !== undefined;
                        const isCorrect = idx === q.correctAnswerIndex;
                        
                        let optionClass = "bg-slate-800/40 border-slate-700/50 text-slate-300 hover:bg-slate-700/40 hover:border-slate-600 cursor-pointer";
                        let optionLabelClass = "text-slate-500";
                        
                        if (hasSelected) {
                          if (isCorrect) {
                            optionClass = "bg-emerald-500/15 border-emerald-500/80 text-emerald-200 font-medium";
                            optionLabelClass = "text-emerald-400";
                          } else if (isSelected) {
                            optionClass = "bg-rose-500/15 border-rose-500/80 text-rose-200 font-medium";
                            optionLabelClass = "text-rose-400";
                          } else {
                            optionClass = "bg-slate-800/20 border-slate-800/50 text-slate-500 opacity-60 cursor-not-allowed";
                            optionLabelClass = "text-slate-600";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            disabled={hasSelected}
                            onClick={() => handleOptionClick(q.id, idx)}
                            className={`w-full text-left p-4 rounded-2xl transition-all border text-sm focus:outline-none ${optionClass}`}
                          >
                            <span className={`mr-2 font-bold ${optionLabelClass}`}>{String.fromCharCode(65 + idx)}.</span> {opt}
                          </button>
                        );
                      })}
                    </div>

                    {selectedAnswers[questionKey] !== undefined && (
                      <div className="ml-12 mt-6 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 animate-in slide-in-from-top-2 duration-300">
                        {selectedAnswers[questionKey] === q.correctAnswerIndex ? (
                          <div className="flex items-center text-emerald-400 font-bold text-sm mb-3">
                            <CheckCircle className="w-4 h-4 mr-2" /> Correct!
                          </div>
                        ) : (
                          <div className="flex items-center text-rose-400 font-bold text-sm mb-3">
                            <XCircle className="w-4 h-4 mr-2" /> Incorrect. The correct answer is Option {String.fromCharCode(65 + q.correctAnswerIndex)}.
                          </div>
                        )}
                        <p className="text-slate-400 text-sm leading-relaxed">
                          <span className="text-slate-200 font-bold">Explanation:</span> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalQuestions > questionsPerPage && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-10">
                <button
                  disabled={currentPage === 1}
                  onClick={() => paginate(currentPage - 1)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: Math.ceil(totalQuestions / questionsPerPage) }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`min-w-[44px] h-[44px] rounded-xl text-xs font-black transition-all border ${
                      currentPage === i + 1
                        ? isAptitude 
                          ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                          : "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                        : "bg-slate-900 border-slate-800 text-slate-500 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {i * 10 + 1}–{Math.min((i + 1) * 10, totalQuestions)}
                  </button>
                ))}

                <button
                  disabled={currentPage === Math.ceil(totalQuestions / questionsPerPage)}
                  onClick={() => paginate(currentPage + 1)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Formulas & Interview Points */}
        <div className="space-y-8">
          {/* Formula Sheet (Conditional) */}
          {displayContent.formulas && (
            <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/5 blur-2xl rounded-full"></div>
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-5 h-5 mr-3 text-indigo-500" />
                Formula Sheet
              </h2>
              <div className="bg-slate-950/40 rounded-2xl p-6 border border-slate-800/50">
                <pre className="text-slate-300 font-mono text-sm leading-relaxed whitespace-pre-wrap text-left">
                  {displayContent.formulas}
                </pre>
              </div>
            </section>
          )}

          {/* Interview Points */}
          <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 blur-2xl rounded-full"></div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <Lightbulb className="w-5 h-5 mr-3 text-amber-500" />
              Interview Pointers
            </h2>
            <div className="space-y-4">
              {displayContent.interviewPoints.map((point, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
                  <p className="text-sm text-slate-400 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10">
              <p className="text-[11px] text-amber-500/80 font-black uppercase tracking-widest text-center">
                Pro Tip: Mastery of these points often differentiates candidates in final technical discussions.
              </p>
            </div>
          </section>

          <div className="p-10 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 border border-blue-500/20 rounded-3xl text-center space-y-4">
             <h3 className="text-white font-bold">Ready for a challenge?</h3>
             <p className="text-slate-400 text-xs leading-relaxed">Take a timed test to evaluate your speed and accuracy on this topic.</p>
             <button onClick={() => navigate(isAptitude ? `/practice/aptitude/test/${encodeURIComponent(title)}` : `/practice/core/test/${encodeURIComponent(title)}`)} className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">Take Timed Test</button>
          </div>
        </div>
      </div>
    </div>
  );
}