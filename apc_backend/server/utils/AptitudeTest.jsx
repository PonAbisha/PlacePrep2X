import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, CheckCircle } from "lucide-react";

const AptitudeTest = () => {
  const { bookId, topic, setNum, mode } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Using the updated backend API with set and mode query params
        const res = await axios.get(
          `/api/aptitude/test/${bookId}/${topic}?set=${setNum}&mode=${mode}`
        );
        setQuestions(res.data.questions);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching questions:", err);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [bookId, topic, setNum, mode]);

  const handleOptionSelect = (qId, optionIdx) => {
    if (submitted && mode === 'practice') return;
    setAnswers({ ...answers, [qId]: optionIdx });
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length) {
      if (!window.confirm("You haven't answered all questions. Submit anyway?")) return;
    }
    setSubmitted(true);
    try {
      await axios.post("/api/aptitude/submit-test", {
        bookId,
        topic,
        answers,
        setNum: parseInt(setNum)
      });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  if (loading) return <div className="p-12 text-center text-gray-500 font-medium">Loading Set {setNum}...</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 mb-8 gap-4">
        <div>
          <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 font-bold mb-2 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> All Sets
          </button>
          <h1 className="text-3xl font-black text-gray-900">{topic} - Set {setNum}</h1>
          <p className="text-gray-500 font-medium">{mode === 'view' ? 'Reviewing Solutions' : 'Practice Mode'}</p>
        </div>
        {mode === 'practice' && !submitted && (
           <button onClick={handleSubmit} className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 shadow-lg transition-all">
             Finish & Submit
           </button>
        )}
      </div>

      <div className="space-y-10">
        {questions.map((q, idx) => (
          <div key={q.question_id} className="border-l-4 border-blue-500 pl-6 py-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full">Q{idx + 1}</span>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{q.difficulty}</span>
            </div>
            <p className="text-xl font-bold text-gray-800 mb-8 leading-snug">{q.question_text}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {q.options.map((option, oIdx) => {
                const isSelected = answers[q.question_id] === oIdx;
                const isCorrect = q.correct_answer === oIdx;

                let btnClass = "text-left p-5 rounded-2xl border-2 font-semibold transition-all ";
                
                if (mode === 'view' && isCorrect) {
                  btnClass += "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm ";
                } else if (isSelected) {
                  btnClass += "border-blue-600 bg-blue-50 text-blue-700 shadow-md ";
                } else {
                  btnClass += "border-gray-100 hover:border-gray-200 text-gray-600 ";
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionSelect(q.question_id, oIdx)}
                    className={btnClass}
                    disabled={submitted && mode === 'practice'}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {(mode === 'view' || submitted) && (
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="font-black text-emerald-600 flex items-center text-lg mb-2">
                  <CheckCircle className="w-5 h-5 mr-2" /> Correct Answer: {q.options[q.correct_answer]}
                </p>
                <p className="text-gray-600 leading-relaxed font-medium">{q.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AptitudeTest;