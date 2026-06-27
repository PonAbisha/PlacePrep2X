import { useState, useEffect } from "react";
import { analyzeResume, getResumeHistory } from "../api";
import {
  FileText,
  TrendingUp,
  Award,
  History,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  BookOpen,
} from "lucide-react";


export default function ResumeAnalyzer() {
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [activeAnalysis, setActiveAnalysis] = useState(null);

  async function loadHistory() {
    try {
      const res = await getResumeHistory();
      setHistory(res.data.history || []);
    } catch (err) {
      console.error("Failed to load resume history:", err);
    }
  }

  useEffect(() => {
    loadHistory();
  }, []);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!resumeFile || loading) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      const res = await analyzeResume(formData);
      setActiveAnalysis(res.data.analysis);
      await loadHistory(); // refresh sidebar
    } catch (err) {
      alert("Analysis failed: " + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const loadPreviousAnalysis = (h) => {
    setActiveAnalysis(h);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Resume ATS Analyzer
        </h1>
        <p className="text-slate-400 mt-1">
          Scan your resume text to get an ATS compatibility rating and identify missing skill keywords.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Input & Analysis view */}
        <div className="lg:col-span-2 space-y-6">
          {/* Paste Resume Input Form */}
          {!activeAnalysis && (
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h2 className="text-lg font-bold text-slate-300 flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <span>Upload Resume (PDF)</span>
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upload your PDF resume for AI-powered ATS analysis.
              </p>

              <form onSubmit={handleAnalyze} className="space-y-4">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                  disabled={loading}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-slate-300"
                />

                <button
                  type="submit"
                  disabled={loading || !resumeFile}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-50 text-white font-semibold py-3 rounded-xl text-sm transition-all"
                >
                  {loading ? "Analyzing ATS Match..." : "Analyze Resume"}
                </button>
              </form>
            </div>
          )}

          {/* Analysis Results View */}
          {activeAnalysis && (
            <div className="space-y-6 animate-scaleIn">
              {/* Back Button */}
              <button
                onClick={() => {
                  setActiveAnalysis(null);
                  setResumeFile(null);
                }}
                className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 border border-slate-800 px-3 py-1.5 rounded-lg bg-slate-900/40"
              >
                <span>← Analyze New Resume</span>
              </button>

              {/* Score Gauges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card p-5 rounded-xl text-center space-y-1">
                  <span className="text-xs text-slate-400 font-medium">ATS Match Score</span>
                  <p className="text-3xl font-extrabold text-blue-400 mt-1">
                    {activeAnalysis.ats_score}%
                  </p>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: `${activeAnalysis.ats_score}%` }}
                    ></div>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-xl text-center space-y-1">
                  <span className="text-xs text-slate-400 font-medium">Overall Score</span>
                  <p className="text-3xl font-extrabold text-indigo-400 mt-1">
                    {activeAnalysis.overall_score}%
                  </p>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
                    <div
                      className="bg-indigo-500 h-full"
                      style={{ width: `${activeAnalysis.overall_score}%` }}
                    ></div>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-xl text-center flex flex-col justify-center items-center">
                  <span className="text-xs text-slate-400 font-medium">Verdict</span>
                  <span className={`mt-2 text-xs px-2.5 py-1 rounded font-bold border ${
                    activeAnalysis.ats_score >= 80
                      ? "bg-emerald-950/20 text-emerald-400 border-emerald-900/30"
                      : activeAnalysis.ats_score >= 60
                        ? "bg-yellow-950/20 text-yellow-400 border-yellow-900/30"
                        : "bg-red-950/20 text-red-400 border-red-900/30"
                  }`}>
                    {activeAnalysis.verdict || "Review Required"}
                  </span>
                </div>
              </div>

              {/* Strengths & Gaps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-5 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>Strengths</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-350 list-disc list-inside leading-relaxed">
                    {activeAnalysis.strengths?.map((str, idx) => (
                      <li key={idx}>{str}</li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card p-5 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-1.5">
                    <AlertCircle className="h-4 w-4 text-red-400" />
                    <span>Gaps Identified</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-350 list-disc list-inside leading-relaxed">
                    {activeAnalysis.gaps?.map((gap, idx) => (
                      <li key={idx}>{gap}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Missing Skills keywords */}
              <div className="glass-card p-5 rounded-2xl space-y-4">
                <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-2">
                  <TrendingUp className="h-4.5 w-4.5 text-blue-500" />
                  <span>Missing Skill Keywords</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Ensure these technical competencies are added to your resume to pass typical placement filters.
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeAnalysis.missing_skills?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {(!activeAnalysis.missing_skills || activeAnalysis.missing_skills.length === 0) && (
                    <span className="text-xs text-slate-400 italic">None identified.</span>
                  )}
                </div>
              </div>

              {/* Recommendations list */}
              <div className="glass-card p-5 rounded-2xl space-y-3">
                <h3 className="text-sm font-bold text-slate-200 flex items-center space-x-1.5">
                  <BookOpen className="h-4 w-4 text-blue-400" />
                  <span>Improvement Recommendations</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-350 list-decimal list-inside leading-relaxed">
                  {activeAnalysis.recommendations?.map((rec, idx) => (
                    <li key={idx} className="pl-1">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar History list */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-lg font-bold text-slate-300 flex items-center space-x-2">
            <History className="h-5 w-5 text-slate-400" />
            <span>Analysis History</span>
          </h2>

          <div className="space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
            {history.map((h, i) => (
              <div
                key={h.id || i}
                onClick={() => loadPreviousAnalysis(h)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                  activeAnalysis?.id === h.id
                    ? "bg-slate-900 border-blue-500 text-blue-400 font-semibold"
                    : "bg-slate-900/40 border-slate-850 hover:bg-slate-900/60 text-slate-300"
                } flex justify-between items-center text-xs`}
              >
                <div className="overflow-hidden">
                  <h4 className="font-semibold truncate max-w-[120px]">Analysis Session</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    {new Date(h.createdAt || h.created_at).toLocaleDateString()}
                  </p>
                </div>
                <span className="font-bold text-slate-200">{h.ats_score}% ATS</span>
              </div>
            ))}
            {history.length === 0 && (
              <div className="text-center py-12 text-slate-450 text-sm">
                No past resume evaluations.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
