import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { generateAITest, submitTestAttempt } from "../api";
import { 
  Timer, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Play, 
  ArrowLeft,
  Award,
  Loader2
} from "lucide-react";

function TestPage() {
  const { topic, subject } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const title = topic || subject;
  const isAptitude = location.pathname.includes("aptitude");
  const category = isAptitude ? "aptitude" : "core";

  // State
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { qIndex: optionIndex }
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [difficulty, setDifficulty] = useState("Medium");

  // Styles mapping to match branding
  const styles = isAptitude 
    ? {
        bg: "bg-indigo-600",
        hover: "hover:bg-indigo-500",
        text: "text-indigo-400",
        lightBg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        shadow: "shadow-indigo-600/20",
        ring: "ring-indigo-500/10",
        borderActive: "border-indigo-600",
        dot: "bg-indigo-500"
      }
    : {
        bg: "bg-emerald-600",
        hover: "hover:bg-emerald-500",
        text: "text-emerald-400",
        lightBg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        shadow: "shadow-emerald-600/20",
        ring: "ring-emerald-500/10",
        borderActive: "border-emerald-600",
        dot: "bg-emerald-500"
      };

  // Timer Logic
  useEffect(() => {
    let timer;
    if (isStarted && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && !isFinished) {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [isStarted, isFinished, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const startAssessment = async (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setLoading(true);
    try {
      const res = await generateAITest(category, title, selectedDifficulty);
      setQuestions(res.data.questions);
      setIsStarted(true);
    } catch (err) {
      console.error("Failed to generate AI test:", err);
      alert("AI generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelect = (optionIndex) => {
    setAnswers({ ...answers, [currentIndex]: optionIndex });
  };

  const calculateResults = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) score++;
    });
    return {
      score,
      accuracy: Math.round((score / (questions.length || 1)) * 100),
      total: questions.length
    };
  };

  const handleSubmit = async () => {
    setIsFinished(true);
    const { score, total } = calculateResults();
    
    const evaluations = questions.map((q, i) => ({
      question: q.question,
      selectedAnswer: answers[i],
      correctAnswer: q.correctAnswer,
      isCorrect: answers[i] === q.correctAnswer
    }));

    try {
      await submitTestAttempt(category, {
        category,
        topic: title,
        difficulty,
        score,
        total_qs: total,
        time_spent: 600 - timeLeft,
        evaluations
      });
    } catch (err) {
      console.error("Failed to save attempt:", err);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isStarted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center animate-in fade-in duration-500">
        <div className="max-w-md w-full glass-card p-10 rounded-3xl text-center space-y-8 border border-slate-800">
          <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center ${styles.lightBg} ${styles.text} shadow-xl`}>
            <Play className="w-10 h-10 fill-current" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-white">{title} Test</h1>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">10 Questions • 10 Minutes</p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-left space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">Guidelines:</p>
            <ul className="text-xs text-slate-400 space-y-2.5">
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${styles.dot} mt-1.5 flex-shrink-0`}></div>
                Questions are AI-generated for your specific topic.
              </li>
              <li className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${styles.dot} mt-1.5 flex-shrink-0`}></div>
                The timer will start immediately upon selection.
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <button
                key={level}
                disabled={loading}
                onClick={() => startAssessment(level)}
                className={`py-4 ${styles.bg} ${styles.hover} text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg ${styles.shadow} disabled:opacity-50 flex items-center justify-center`}
              >
                {loading && difficulty === level ? <Loader2 className="animate-spin w-4 h-4" /> : level}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const { score, accuracy, total } = calculateResults();
    return (
      <div className="space-y-10 animate-in fade-in duration-500 pb-20">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Test Results</h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Subject: {title}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-3xl border border-slate-800 flex items-center gap-6">
            <div className={`p-4 ${styles.lightBg} ${styles.text} rounded-2xl`}>
              <Award className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Final Score</p>
              <p className="text-3xl font-black text-white">{score} / {total}</p>
            </div>
          </div>
          <div className="glass-card p-8 rounded-3xl border border-slate-800 flex items-center gap-6">
            <div className="p-4 bg-blue-500/10 text-blue-500 rounded-2xl">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Accuracy</p>
              <p className="text-3xl font-black text-white">{accuracy}%</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-bold text-white px-2">Detailed Review</h2>
          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.correctAnswer;
            return (
              <div key={i} className="glass-card p-8 rounded-3xl border border-slate-800 space-y-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <span className="text-slate-500 font-black">0{i + 1}</span>
                    <p className="text-slate-100 font-medium leading-relaxed">{q.question}</p>
                  </div>
                  {isCorrect ? (
                    <CheckCircle className="text-emerald-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="text-red-500 flex-shrink-0" />
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-10">
                  {q.options.map((opt, idx) => {
                    const isSelected = answers[i] === idx;
                    const isCorrectOption = q.correctAnswer === idx;
                    let styleClass = "bg-slate-900/30 border-slate-800 text-slate-400";
                    if (isCorrectOption) styleClass = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold";
                    else if (isSelected) styleClass = "bg-red-500/10 border-red-500/30 text-red-400";
                    return (
                      <div key={idx} className={`p-4 rounded-2xl border text-sm flex items-center justify-between ${styleClass}`}>
                        <span>{String.fromCharCode(65 + idx)}. {opt}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="ml-10 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 space-y-2">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                    <AlertCircle size={14} /> Explanation
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500 pb-20">
      <header className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-extrabold text-white tracking-tight">{title} Assessment</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Question {currentIndex + 1} of {questions.length}</p>
        </div>
        <div className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl ${styles.lightBg} border ${styles.border} ${styles.text} font-mono font-bold text-lg`}>
          <Timer className="w-5 h-5" />
          {formatTime(timeLeft)}
        </div>
      </header>
      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r ${isAptitude ? "from-indigo-600 to-blue-600" : "from-emerald-600 to-green-600"} transition-all duration-300`} style={{ width: `${((currentIndex + 1) / (questions.length || 1)) * 100}%` }}></div>
      </div>
      <div className="glass-card p-10 rounded-3xl border border-slate-800 space-y-10">
        <h2 className="text-2xl font-bold text-white leading-tight">{currentQ?.question}</h2>
        <div className="grid grid-cols-1 gap-4">
          {currentQ?.options.map((option, idx) => {
            const isSelected = answers[currentIndex] === idx;
            return (
              <button key={idx} onClick={() => handleOptionSelect(idx)} className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center group ${isSelected ? `${styles.borderActive} ${styles.lightBg} text-white ring-4 ${styles.ring}` : "border-slate-800 hover:border-slate-700 bg-slate-900/30 text-slate-400 hover:text-slate-200"}`}>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 font-black text-xs transition-colors ${isSelected ? styles.bg : "bg-slate-800 text-slate-500 group-hover:bg-slate-700"}`}>{String.fromCharCode(65 + idx)}</span>
                <span className="font-semibold text-lg">{option}</span>
              </button>
            );
          })}
        </div>
      </div>
      <footer className="flex items-center justify-between px-2">
        <button onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))} disabled={currentIndex === 0} className="flex items-center gap-2 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed font-black text-xs uppercase tracking-widest transition-all"><ChevronLeft size={16} /> Previous</button>
        {currentIndex === questions.length - 1 ? (
          <button onClick={handleSubmit} className={`px-10 py-4 ${styles.bg} ${styles.hover} text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg ${styles.shadow} transition-all active:scale-95`}>Submit Test</button>
        ) : (
          <button onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))} className="flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">Next <ChevronRight size={16} /></button>
        )}
      </footer>
    </div>
  );
}

export default TestPage;