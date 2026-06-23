import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Layout from "../components/Layout";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import DSATracker from "../pages/DSATracker";
import AITutor from "../pages/AITutor";
import InterviewSimulator from "../pages/InterviewSimulator";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";
import StudyPlanner from "../pages/StudyPlanner";
import PracticeCenter from "../pages/PracticeCenter";
import AptitudePractice from "../pages/AptitudePractice";
import CoreSubjectsPractice from "../pages/CoreSubjectsPractice";
import StudyPage from "../pages/StudyPage";
import TestPage from "../pages/TestPage";
import DBMSStudy from "../pages/DBMSStudy";
import DBMSQuestions from "../pages/DBMSQuestions";
import DBMSFundamentals from "../pages/DBMSFundamentals";
import DBMSERModel from "../pages/DBMSERModel";
import DBMSNormalization from "../pages/DBMSNormalization";
import DBMSTransactions from "../pages/DBMSTransactions";
import DBMSSQLBasics from "../pages/DBMSSQLBasics";
import DBMSJoins from "../pages/DBMSJoins";
import DBMSIndexing from "../pages/DBMSIndexing";
import DBMSScenarioBased from "../pages/DBMSScenarioBased";
import DBMSAdvanced from "../pages/DBMSAdvanced";
import DBMSCheatSheet from "../pages/DBMSCheatSheet";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070b13] flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <div className="absolute font-semibold text-xs text-blue-400">APC</div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Layout>{children}</Layout>;
}

export default function AppRoutes() {
  const { user, loading } = useAuth();

  return (
    <Routes>
      {/* Auth page */}
      <Route
        path="/auth"
        element={!loading && user ? <Navigate to="/dashboard" replace /> : <Auth />}
      />

      {/* Protected dashboard & tool pages */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice"
        element={
          <ProtectedRoute>
            <PracticeCenter />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core"
        element={
          <ProtectedRoute>
            <CoreSubjectsPractice />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core-subjects"
        element={
          <ProtectedRoute>
            <Navigate to="/practice/core" replace />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/DBMS"
        element={
          <ProtectedRoute>
            <DBMSStudy />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/DBMS/questions"
        element={
          <ProtectedRoute>
            <DBMSQuestions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/DBMS/questions/ermodel"
        element={
          <ProtectedRoute>
            <DBMSERModel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/DBMS/questions/normalization"
        element={
          <ProtectedRoute>
            <DBMSNormalization />
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice/core/study/DBMS/questions/transactions"
        element={
          <ProtectedRoute>
            <DBMSTransactions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice/core/study/DBMS/questions/sqlbasics"
        element={
          <ProtectedRoute>
            <DBMSSQLBasics />
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice/core/study/DBMS/questions/joins"
        element={
          <ProtectedRoute>
            <DBMSJoins />
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice/core/study/DBMS/questions/indexing"
        element={
          <ProtectedRoute>
            <DBMSIndexing />
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice/core/study/DBMS/questions/scenariobased"
        element={
          <ProtectedRoute>
            <DBMSScenarioBased />
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice/core/study/DBMS/questions/advanced"
        element={
          <ProtectedRoute>
            <DBMSAdvanced />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/DBMS/cheat-sheet"
        element={
          <ProtectedRoute>
            <DBMSCheatSheet />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/DBMS/interview-questions"
        element={
          <ProtectedRoute>
            <DBMSQuestions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/DBMS/questions/fundamentals"
        element={
          <ProtectedRoute>
            <DBMSFundamentals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/aptitude"
        element={
          <ProtectedRoute>
            <AptitudePractice />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/study/:subject"
        element={
          <ProtectedRoute>
            <StudyPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/aptitude/study/:topic"
        element={
          <ProtectedRoute>
            <StudyPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/core/test/:subject"
        element={
          <ProtectedRoute>
            <TestPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/practice/aptitude/test/:topic"
        element={
          <ProtectedRoute>
            <TestPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dsa"
        element={
          <ProtectedRoute>
            <DSATracker />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tutor"
        element={
          <ProtectedRoute>
            <AITutor />
          </ProtectedRoute>
        }
      />
      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <InterviewSimulator />
          </ProtectedRoute>
        }
      />
      <Route
        path="/resume"
        element={
          <ProtectedRoute>
            <ResumeAnalyzer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/planner"
        element={
          <ProtectedRoute>
            <StudyPlanner />
          </ProtectedRoute>
        }
      />

      {/* Fallback routes */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="*" element={<Navigate to="/practice" replace />} />
    </Routes>
  );
}
