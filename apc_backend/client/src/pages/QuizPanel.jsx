import { useState, useEffect, useRef } from "react";
import {
  getQuizHistory,
  submitQuiz,
  getWeakAreas,
  getAptitudeBooks,
  getAptitudeTopicTest,
  submitAptitudeTest,
} from "../api";
import { quizQuestions } from "../content/quizQuestions";
import {
  BrainCircuit,
  Timer,
  ChevronRight,
  ChevronLeft,
  Award,
  History,
  AlertCircle,
  Play,
  RotateCcw,
} from "lucide-react";

export default function QuizPanel() {
  const [history, setHistory] = useState([]);
  const [weakAreas, setWeakAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("core"); // 'core' or 'aptitude'
  const [aptitudeBooks, setAptitudeBooks] = useState({});
  const [selectedAptCategory, setSelectedAptCategory] = useState("All");

  // Active quiz state
  const [activeSubject, setActiveSubject] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { qIndex: optionIndex }
  const [timer, setTimer] = useState(0);
  const [quizRunning, setQuizRunning] = useState(false);
  const [aptitudeBook, setAptitudeBook] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Results state
  const [quizResult, setQuizResult] = useState(null);
  const timerInterval = useRef(null);

  const subjects = [
    { id: "dbms", name: "DBMS", desc: "Transactions, normalization, indexes, schema structures" },
    { id: "os", name: "Operating Systems", desc: "Scheduling algorithms, virtual memory, deadlocks, semaphores" },
    { id: "cn", name: "Computer Networks", desc: "OSI layer modeling, TCP/UDP, ARP routing, socket controls" },
    { id: "oops", name: "Object-Oriented Programming", desc: "Polymorphic routing, encapsulation limits, virtual constructors" },
    { id: "sql", name: "SQL Queries", desc: "Aggregations, recursive joining filters, keys constraints" },
    { id: "aptitude", name: "Quantitative Aptitude", desc: "Percentages, Profit & Loss, Ratio & Proportion, Time & Work, Time Speed Distance, Probability, Number System, Averages" },
    { id: "reasoning", name: "Logical Reasoning", desc: "Syllogisms patterns, direction maps, circular arrangements" },
  ];

  async function loadQuizData() {
    setLoading(true);
    try {
      // Fetch history and weak areas filtered by the active tab type
      const [histRes, weakRes] = await Promise.all([
        getQuizHistory({ type: activeTab }),
        getWeakAreas({ type: activeTab })
      ]);
      setHistory(histRes.data.history || []);
      setWeakAreas(weakRes.data.weakAreas || []);

      if (activeTab === "aptitude") {
        const booksRes = await getAptitudeBooks();
        setAptitudeBooks(booksRes.data.categories || {});
      }
    } catch (err) {
      console.error("Failed to load quiz metadata:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadQuizData();
  }, [activeTab]);

  const startQuiz = async (subId) => {
    const qList = quizQuestions[subId] || [];
    setActiveSubject(subId);
    setQuestions(qList);
    setCurrentIndex(0);
    setAnswers({});
    setTimer(0);
    setQuizRunning(true);
    setQuizResult(null);

    // Start timer interval
    if (timerInterval.current) clearInterval(timerInterval.current);
    timerInterval.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
  };

  const startAptitudeBook = (book) => {
    setActiveSubject("aptitude");
    setAptitudeBook(book);
    setSelectedTopic(null);
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setTimer(0);
    setQuizRunning(false);
    setQuizResult(null);
  };

  const startAptitudeTopic = async (topicName) => {
    if (!aptitudeBook) return;

    setLoading(true);
    try {
      const res = await getAptitudeTopicTest(aptitudeBook.book_id, topicName);
      const qList = (res.data.questions || []).map((item) => ({
        question_id: item.question_id,
        q: item.question_text,
        options: item.options,
        correct: item.correct_answer,
      }));

      setSelectedTopic(topicName);
      setQuestions(qList);
      setCurrentIndex(0);
      setAnswers({});
      setTimer(0);
      setQuizRunning(true);
      setQuizResult(null);

      if (timerInterval.current) clearInterval(timerInterval.current);
      timerInterval.current = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    } catch (err) {
      console.error("Failed to load aptitude topic quiz:", err);
      alert("Unable to start the selected aptitude topic. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectOption = (optIdx) => {
    setAnswers({ ...answers, [currentIndex]: optIdx });
  };

  const prevQuestion = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const submitActiveQuiz = async () => {
    clearInterval(timerInterval.current);
    setQuizRunning(false);

    let score = 0;
    const formattedAnswers = questions.map((q, idx) => {
      const picked = answers[idx] !== undefined ? answers[idx] : -1;
      const correct = q.correct;
      if (picked === correct) score++;
      return {
        q_index: idx,
        picked,
        correct,
        question_id: q.question_id,
      };
    });

    const isAptitude = activeSubject === "aptitude" && aptitudeBook && selectedTopic;
    const payload = isAptitude
      ? {
          bookId: aptitudeBook.book_id,
          topic: selectedTopic,
          answers: formattedAnswers.reduce((acc, ans) => {
            if (ans.question_id !== undefined && ans.picked >= 0) {
              acc[ans.question_id] = ans.picked;
            }
            return acc;
          }, {}),
          timeSpent: timer,
        }
      : {
          subject: activeSubject,
          score,
          max_score: questions.length,
          time_taken: timer,
          answers: formattedAnswers,
        };

    setLoading(true);
    try {
      if (isAptitude) {
        await submitAptitudeTest(payload);
      } else {
        await submitQuiz(payload);
      }
      setQuizResult({
        score,
        total: questions.length,
        time: timer,
      });
      await loadQuizData(); // Refresh history
    } catch (err) {
      alert("Failed to submit quiz results");
    } finally {
      setLoading(false);
    }
  };

  const resetQuizPanel = () => {
    setQuizRunning(false);
    setActiveSubject(null);
    setAptitudeBook(null);
    setSelectedTopic(null);
    setQuestions([]);
    setQuizResult(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    resetQuizPanel(); // Ensure we go back to the domain selection view
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  if (loading && !quizRunning) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title */}
      {!quizRunning && !quizResult && (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Assessment Panel
          </h1>
          <p className="text-slate-400 mt-1">
            Test your CS fundamentals, aptitude speeds, and reasoning logic.
          </p>
        </div>
      )}

      {/* Tab Selection */}
      {!quizRunning && !quizResult && (
        <div className="flex border-b border-slate-800 mb-6">
          <button
            onClick={() => handleTabChange("core")}
            className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === "core"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            Core Quizzes
          </button>
          <button
            onClick={() => handleTabChange("aptitude")}
            className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all border-b-2 ${
              activeTab === "aptitude"
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            Aptitude Quizzes
          </button>
        </div>
      )}

      {/* QUIZ ACTIVE VIEW */}
      {quizRunning && questions.length > 0 && (
        <div className="max-w-3xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-6 relative border border-blue-500/10">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <span className="text-sm font-semibold capitalize text-blue-400">
              {activeSubject === "aptitude"
                ? `${selectedTopic || "Quantitative Aptitude"} Test Session`
                : `${activeSubject} Test Session`}
            </span>
            <div className="flex items-center space-x-2 text-slate-300 font-mono text-sm bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Timer className="h-4 w-4 text-slate-400" />
              <span>{formatTime(timer)}</span>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-between text-xs text-slate-400">
            <span>Question {currentIndex + 1} of {questions.length}</span>
            <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Text */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-200">
              {questions[currentIndex].q}
            </h2>

            {/* Options List */}
            <div className="space-y-2.5 pt-2">
              {questions[currentIndex].options.map((opt, optIdx) => {
                const isSelected = answers[currentIndex] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => selectOption(optIdx)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl text-sm border transition-all ${
                      isSelected
                        ? "bg-blue-600/15 border-blue-500 text-slate-100 font-semibold"
                        : "bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-750"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`h-5 w-5 rounded-full border flex items-center justify-center text-[10px] font-bold ${
                        isSelected ? "border-blue-400 text-blue-400 bg-blue-500/10" : "border-slate-700 text-slate-500"
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span>{opt}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center pt-6 border-t border-slate-800">
            <button
              onClick={prevQuestion}
              disabled={currentIndex === 0}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg border border-slate-800 text-xs text-slate-300 hover:bg-slate-900 disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={submitActiveQuiz}
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-6 py-2.5 rounded-lg"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:bg-slate-850"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* QUIZ RESULT PANEL */}
      {quizResult && (
        <div className="max-w-xl mx-auto glass-card p-6 md:p-8 rounded-2xl text-center space-y-6 animate-scaleIn border border-blue-500/10">
          <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-500">
            <Award className="h-10 w-10" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Quiz Submitted!</h2>
            <p className="text-slate-400 mt-1">Below are your performance scores.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 bg-slate-900/60 rounded-xl border border-slate-850">
            <div>
              <h4 className="text-xs text-slate-400">Score</h4>
              <p className="text-xl font-bold mt-0.5">{quizResult.score} / {quizResult.total}</p>
            </div>
            <div>
              <h4 className="text-xs text-slate-400">Accuracy</h4>
              <p className="text-xl font-bold mt-0.5">{Math.round((quizResult.score / quizResult.total) * 100)}%</p>
            </div>
            <div>
              <h4 className="text-xs text-slate-400">Time Taken</h4>
              <p className="text-xl font-bold mt-0.5">{formatTime(quizResult.time)}</p>
            </div>
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              onClick={() => startQuiz(activeSubject)}
              className="flex-1 flex items-center justify-center space-x-2 border border-slate-800 py-3 rounded-xl hover:bg-slate-900 text-sm"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Retry Quiz</span>
            </button>
            <button
              onClick={resetQuizPanel}
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* REGULAR PANEL VIEW */}
      {!quizRunning && !quizResult && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subjects Grid or Aptitude Topic Selector */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-300">
                {activeSubject === "aptitude" && aptitudeBook
                  ? "Choose an Aptitude Topic"
                  : "Choose a Domain"}
              </h2>
              {activeSubject === "aptitude" && aptitudeBook && (
                <button
                  onClick={resetQuizPanel}
                  className="text-xs text-slate-300 border border-slate-800 px-3 py-2 rounded-lg hover:bg-slate-900"
                >
                  Back to Domains
                </button>
              )}
            </div>

            {/* Aptitude Category Selector */}
            {!activeSubject && activeTab === "aptitude" && (
              <div className="flex flex-wrap gap-2 mb-6">
                {["All", "Quantitative", "Verbal", "Reasoning"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedAptCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      selectedAptCategory === cat
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {activeSubject === "aptitude" && aptitudeBook ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aptitudeBook.topics.map((topic) => (
                  <div
                    key={topic.topic_name}
                    className="glass-card p-5 rounded-xl border border-slate-800/60 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-slate-200 text-sm">{topic.topic_name}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900/70 text-slate-300 border border-slate-800/60">
                          {topic.question_count} Questions
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                        Practice questions from {aptitudeBook.name}.
                      </p>
                    </div>

                    <button
                      onClick={() => startAptitudeTopic(topic.topic_name)}
                      className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all"
                    >
                      <Play className="h-3 w-3" />
                      <span>Start Topic</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : activeTab === "aptitude" ? (
              <div className="space-y-10">
                {Object.entries(aptitudeBooks)
                  .filter(([category]) => 
                    selectedAptCategory === "All" || category.toLowerCase() === selectedAptCategory.toLowerCase()
                  )
                  .map(([category, books]) => (
                    <div key={category}>
                      <h2 className="text-xl font-extrabold text-gray-200 mb-6 flex items-center">
                        <span className="w-2 h-6 bg-blue-600 rounded mr-3"></span>
                        {category}
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {books.map(book => (
                          <div key={book.book_id} className="glass-card p-5 rounded-xl border border-slate-800/60 flex flex-col justify-between space-y-4">
                            <div>
                              <div className="flex justify-between items-start">
                                <h3 className="font-bold text-slate-200 text-sm">{book.name}</h3>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900/70 text-slate-300 border border-slate-800/60">
                                  {book.totalQuestions} Qs
                                </span>
                              </div>
                              <p className="text-xs text-slate-400 mt-2 line-clamp-2">{book.description}</p>
                            </div>
                            <button
                              onClick={() => startAptitudeBook(book)}
                              className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all"
                            >
                              <Play className="h-3 w-3" />
                              <span>Explore Topics</span>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                {Object.keys(aptitudeBooks).length === 0 && (
                   <div className="text-center py-12 text-slate-500 text-sm italic">
                     No aptitude modules found. Please ensure the seeder has been run.
                   </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subjects.filter(sub => !["aptitude", "reasoning"].includes(sub.id)).map((sub) => {
                  const isWeak = weakAreas.some((w) => w.subject === sub.id);
                  return (
                    <div key={sub.id} className="glass-card p-5 rounded-xl border border-slate-800/60 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-slate-200 text-sm">{sub.name}</h3>
                          {isWeak && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-red-950/20 text-red-400 border border-red-900/30 flex items-center space-x-1 font-semibold">
                              <AlertCircle className="h-2.5 w-2.5" />
                              <span>Weak Domain</span>
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">{sub.desc}</p>
                      </div>

                      <button
                        onClick={() => startQuiz(sub.id)}
                        className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all"
                      >
                        <Play className="h-3 w-3" />
                        <span>Start Quiz</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sidebar History log */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-lg font-bold text-slate-300 flex items-center space-x-2">
              <History className="h-5 w-5 text-slate-400" />
              <span>Quiz History</span>
            </h2>

            <div className="space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
              {history.map((h, i) => (
                <div key={h.id || i} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-850 flex justify-between items-center text-xs">
                  <div>
                    <h4 className="font-semibold capitalize text-slate-200">{h.subject}</h4>
                    <p className="text-slate-400 mt-0.5">Duration: {formatTime(h.time_taken)}</p>
                  </div>
                  <span className={`px-2 py-1 rounded font-bold ${
                    (h.score / h.max_score) >= 0.8
                      ? "bg-emerald-950/20 text-emerald-400 border border-emerald-900/30"
                      : (h.score / h.max_score) >= 0.6
                        ? "bg-yellow-950/20 text-yellow-400 border border-yellow-900/30"
                        : "bg-red-950/20 text-red-400 border border-red-900/30"
                  }`}>
                    {h.score} / {h.max_score}
                  </span>
                </div>
              ))}
              {history.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-sm">
                  No quizzes completed yet.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
