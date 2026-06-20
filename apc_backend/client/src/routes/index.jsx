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
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
