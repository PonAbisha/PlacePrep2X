import { useState } from "react";
import { evaluateAnswer, saveInterviewSession } from "../api";
import {
  Mic,
  Award,
  Video,
  ChevronRight,
  BookOpen,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function InterviewSimulator() {
  const [sessionActive, setSessionActive] = useState(false);
  const [type, setType] = useState("technical"); // technical | hr
  const [questions, setQuestions] = useState([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answerInput, setAnswerInput] = useState("");
  const [evaluations, setEvaluations] = useState([]); // Array of { question, answer, score, verdict, strengths, improvements, model_answer }

  const [loading, setLoading] = useState(false);
  const [activeEvaluation, setActiveEvaluation] = useState(null); // Current question evaluation
  const [report, setReport] = useState(null); // Completed session data

  const mockQuestions = {
    technical: [
      "What is the difference between TCP and UDP, and when would you use each?",
      "Explain database normalization and its different normal forms.",
      "What is virtual memory and how does paging work?",
      "Explain inheritance and polymorphism with examples.",
      "What is the difference between a process and a thread?",
      "Explain deadlock. What are the necessary conditions?",
      "What is the difference between stack and heap memory?",
      "What is indexing in DBMS? Why is it used?",
      "Explain ACID properties in DBMS.",
      "What is the difference between SQL and NoSQL databases?",
      "Explain primary key and foreign key with examples.",
      "What is the difference between GET and POST requests?",
      "Explain the OSI model layer by layer.",
      "What is DNS and how does it work?",
      "What is a race condition? How can it be prevented?",
      "Explain the difference between abstract class and interface.",
      "What is recursion? Where should it be used?",
      "Explain time complexity with an example.",
      "What are joins in SQL? Explain INNER, LEFT, RIGHT and FULL JOIN.",
      "What is a REST API? What are its principles?"
    ],
    hr: [
    "Tell me about yourself.",
    "Why do you want to join our company?",
    "Why should we hire you?",
    "What are your greatest strengths?",
    "What is your biggest weakness and how are you improving it?",
    "Where do you see yourself in five years?",
    "Describe a challenging situation you faced and how you handled it.",
    "Tell me about a time you worked successfully in a team.",
    "Tell me about a time you had a conflict with a teammate.",
    "How do you handle pressure and deadlines?",
    "Describe a failure and what you learned from it.",
    "What motivates you to perform well?",
    "How do you prioritize multiple tasks?",
    "Are you willing to relocate? Why?",
    "What are your career goals?",
    "What do you know about our company?",
    "Tell me about a project you are most proud of.",
    "How do you keep yourself updated with new technologies?",
    "What would you do if you disagreed with your manager?",
    "Do you have any questions for us?"
  ],
  };

  const startSession = (selectedType) => {
    setType(selectedType);
    const shuffled = [...mockQuestions[selectedType]]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    setQuestions(shuffled);
    setCurrentQIndex(0);
    setAnswerInput("");
    setEvaluations([]);
    setActiveEvaluation(null);
    setReport(null);
    setSessionActive(true);
  };

  const handleSubmitAnswer = async () => {
    if (!answerInput.trim() || loading) return;

    setLoading(true);
    const activeQuestion = questions[currentQIndex];
    const candidateAnswer = answerInput.trim();

    try {
      const res = await evaluateAnswer({
        question: activeQuestion,
        answer: candidateAnswer,
        type: type,
      });

      const evalData = {
        question: activeQuestion,
        answer: candidateAnswer,
        ...res.data.evaluation,
      };

      setActiveEvaluation(evalData);
      setEvaluations([...evaluations, evalData]);
    } catch (err) {
      alert("Evaluation failed: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    setActiveEvaluation(null);
    setAnswerInput("");

    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      // Completed last question; compile session data
      setSessionActive(false);
      setLoading(true);
      try {
        const res = await saveInterviewSession({
          type: type,
          evaluations: evaluations,
        });
        setReport(res.data.session);
      } catch (err) {
        alert("Failed to save interview session metrics");
      } finally {
        setLoading(false);
      }
    }
  };

  const [showQuitModal, setShowQuitModal] = useState(false);

  const handleQuit = () => {
    setShowQuitModal(true);
  };

  const confirmQuit = () => {
    setSessionActive(false);
    setReport(null);
    setShowQuitModal(false);
  };

  const cancelQuit = () => {
    setShowQuitModal(false);
  };

  const getPerformance = (score) => {
    if (score >= 9) {
      return {
        label: "Excellent",
        color: "bg-emerald-500/20 text-emerald-400",
      };
    }

    if (score >= 7) {
      return {
        label: "Good",
        color: "bg-blue-500/20 text-blue-400",
      };
    }

    if (score >= 5) {
      return {
        label: "Average",
        color: "bg-yellow-500/20 text-yellow-400",
      };
    }

    return {
      label: "Needs Improvement",
      color: "bg-red-500/20 text-red-400",
    };
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Title */}
      {!sessionActive && !report && (
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            AI Interview Simulator
          </h1>
          <p className="text-slate-400 mt-1">
            Practice technical and HR mock interviews with instant AI-powered evaluation and personalized feedback.
          </p>
        </div>
      )}

      {/* CHOOSE INTERVIEW MODE PANELS */}
      {!sessionActive && !report && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-6 border border-slate-800/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="space-y-3">
              <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg w-fit">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Technical Round</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Covers data structures, systems, database internals, and networking logic. Ideal for software engineering, cloud architecture, and data engineering pathways.
              </p>
            </div>
            <button
              onClick={() => startSession("technical")}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-all"
            >
              Start Technical Mock
            </button>
          </div>

          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-6 border border-slate-800/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/10 rounded-full blur-3xl"></div>
            <div className="space-y-3">
              <div className="p-3 bg-violet-500/10 text-violet-500 rounded-lg w-fit">
                <Mic className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100">HR & Behavioral</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Covers communication skills, career alignment, problem solving methods, and situational behavioral questions. Ideal for general placement rounds.
              </p>
            </div>
            <button
              onClick={() => startSession("hr")}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-xl text-sm transition-all"
            >
              Start HR & Behavioral Mock
            </button>
          </div>
        </div>
      )}

      {/* SIMULATOR INTERACTIVE PANEL */}
      {sessionActive && (
        <div className="glass-card p-6 md:p-8 rounded-2xl space-y-6 relative border border-blue-500/10">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-slate-800">
            <span className="text-sm font-semibold capitalize text-blue-400">
              Mock {type} Interview
            </span>
            <button
              onClick={handleQuit}
              className="text-xs text-red-400 hover:text-red-350 bg-red-950/20 px-3 py-1.5 rounded-lg border border-red-900/30"
            >
              Quit Session
            </button>
          </div>

          {/* Question Text */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>Question {currentQIndex + 1} of {questions.length}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-200">
              "{questions[currentQIndex]}"
            </h2>
          </div>

          {/* Answer Box */}
          {!activeEvaluation && (
            <div className="space-y-4 pt-2">
              <textarea
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
                placeholder="Type or dictate your answer in detail here..."
                rows={6}
                disabled={loading}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />

              <button
                onClick={handleSubmitAnswer}
                disabled={loading || !answerInput.trim()}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-50 text-white font-semibold py-3 rounded-xl text-sm transition-all"
              >
                {loading ? "Evaluating Answer..." : "Submit Answer"}
              </button>
            </div>
          )}

          {/* Evaluation Results Card */}
          {activeEvaluation && (
            <div className="space-y-6 pt-4 border-t border-slate-800 animate-scaleIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900/50 border border-slate-850 rounded-xl space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400 font-medium">Evaluation Score</span>
                    <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                      activeEvaluation.score >= 8
                        ? "bg-emerald-950/20 text-emerald-400"
                        : activeEvaluation.score >= 5
                          ? "bg-yellow-950/20 text-yellow-400"
                          : "bg-red-950/20 text-red-400"
                    }`}>
                      {activeEvaluation.verdict}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-slate-100">{activeEvaluation.score} / 10</p>
                </div>

                <div className="p-4 bg-slate-900/50 border border-slate-850 rounded-xl space-y-2">
                  <h4 className="text-xs text-slate-400 font-medium flex items-center space-x-1">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Strengths</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{activeEvaluation.strengths}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-900/50 border border-slate-850 rounded-xl space-y-2">
                <h4 className="text-xs text-slate-400 font-medium flex items-center space-x-1">
                  <AlertCircle className="h-3.5 w-3.5 text-red-400" />
                  <span>Areas of Improvement</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{activeEvaluation.improvements}</p>
              </div>

              <div className="p-4 bg-slate-900/50 border border-slate-850 rounded-xl space-y-2">
                <h4 className="text-xs text-slate-400 font-medium flex items-center space-x-1">
                  <BookOpen className="h-3.5 w-3.5 text-blue-400" />
                  <span>Model Answer Advice</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic">"{activeEvaluation.model_answer}"</p>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>{currentQIndex === questions.length - 1 ? "Complete Interview" : "Next Question"}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* REPORT CARD DISPLAY */}
      {report && (
        <div className="max-w-2xl mx-auto glass-card p-6 md:p-8 rounded-2xl space-y-6 animate-scaleIn border border-blue-500/10">
          <div className="text-center space-y-4">
            <div className="inline-flex p-4 bg-blue-500/10 rounded-full text-blue-500">
              <Award className="h-10 w-10" />
            </div>

            <h2 className="text-2xl font-bold">Interview Completed!</h2>

            <div
              className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${
                getPerformance(report.avg_score).color
              }`}
            >
              {getPerformance(report.avg_score).label}
            </div>

            <p className="text-slate-400 text-xs">
            {report.avg_score >= 9
              ? "Outstanding performance! You are interview-ready."
              : report.avg_score >= 7
              ? "Great job! A little more practice will make you even stronger."
              : report.avg_score >= 5
              ? "Good effort! Keep practicing to improve your confidence."
              : "Keep learning and practicing. Every interview makes you better."}
          </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 bg-slate-900/60 rounded-xl border border-slate-850 text-center">
            <div>
              <h4 className="text-xs text-slate-400">Average Score</h4>
              <p className="text-2xl font-bold mt-0.5">{report.avg_score} / 10</p>
            </div>
            <div>
              <h4 className="text-xs text-slate-400">Total Questions</h4>
              <p className="text-2xl font-bold mt-0.5">{report.total_qs}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-300 text-sm">Detailed Evaluations</h3>
            <div className="space-y-3">
              {report.evaluations?.map((ev, idx) => (
                <div key={idx} className="p-4 bg-slate-900/40 border border-slate-850 rounded-xl space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xs font-semibold text-slate-200 truncate max-w-[400px]">
                      Q{idx + 1}: "{ev.question}"
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-bold">
                      {ev.score}/10
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">
                    Your Ans: "{ev.answer}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setReport(null)}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-all"
          >
            Start Another Mock
          </button>
        </div>
      )}
    </div>
  );
}
