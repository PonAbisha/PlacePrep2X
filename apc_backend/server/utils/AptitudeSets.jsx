import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookOpen, PlayCircle } from "lucide-react";

const AptitudeSets = () => {
  const { bookId, topic } = useParams();
  const navigate = useNavigate();

  // The backend now provides 100 questions, divided into 10 sets of 10
  const sets = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-2">{topic}</h1>
          <p className="text-lg text-gray-600">Complete Question Bank: 100 Specialized Problems</p>
          <div className="mt-4 flex justify-center gap-4">
             <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">10 Practice Sets</span>
             <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">Solutions Included</span>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sets.map((num) => (
            <div key={num} className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {num}
                </div>
                <span className="text-xs font-bold text-gray-400">10 Qs</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-6">Question Set {num}</h3>

              <div className="space-y-3">
                <button
                  onClick={() => navigate(`/aptitude/test/${bookId}/${topic}/${num}/practice`)}
                  className="w-full flex items-center justify-center bg-blue-600 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
                >
                  <PlayCircle className="w-4 h-4 mr-2" /> Practice
                </button>
                <button
                  onClick={() => navigate(`/aptitude/test/${bookId}/${topic}/${num}/view`)}
                  className="w-full flex items-center justify-center bg-gray-50 text-gray-600 py-2.5 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <BookOpen className="w-4 h-4 mr-2" /> View Solutions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AptitudeSets;