import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ─── Automatically attach JWT token ──────────────────────────
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Auto-redirect on 401 ────────────────────────────────────
api.interceptors.response.use(
  (res) => res,
  (error) => {
    const requestPath = error.config?.url || "";
    const isAuthRequest = [
      "/auth/login",
      "/auth/register",
      "/auth/refresh",
    ].some((path) => requestPath.endsWith(path));

    if (error.response?.status === 401 && !isAuthRequest) {
      localStorage.removeItem("token");
      if (window.location.pathname !== "/auth") {
        window.location.assign("/auth");
      }
    }
    return Promise.reject(error);
  }
);

// ============================
// AUTH
// ============================
export const loginUser    = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);
export const getMe        = ()     => api.get("/auth/me");
export const updateMe     = (data) => api.patch("/auth/me", data);

// ============================
// DSA
// ============================
// Response: { progress: [] }
export const getDSAProgress  = ()              => api.get("/dsa");
// Response: { stats: {}, activity: [] }
export const getDSAStats     = ()              => api.get("/dsa/stats");
// Response: { topic: {} }
export const updateDSATopic  = (topic, data)   => api.patch(`/dsa/${encodeURIComponent(topic)}`, data);

// ============================
// INTERVIEW
// ============================
// Response: { evaluation: {} }
export const evaluateAnswer      = (data) => api.post("/interview/evaluate", data);
// Response: { session: {} }
export const saveInterviewSession = (data) => api.post("/interview/session", data);
// Response: { sessions: [] }
export const getInterviewSessions = ()     => api.get("/interview/sessions");
// Response: { stats: {} }
export const getInterviewStats    = ()     => api.get("/interview/stats");

// ============================
// AI TUTOR
// ============================
// Response: { message, conversationId }
export const chatWithTutor         = (data) => api.post("/tutor/chat", data);
// Response: { conversations: [] }
export const getTutorConversations = ()     => api.get("/tutor/conversations");
// Response: { conversation: {} }
export const getTutorConversation  = (id)  => api.get(`/tutor/conversations/${id}`);
// Response: { message }
export const deleteTutorConversation = (id) => api.delete(`/tutor/conversations/${id}`);

// ============================
// RESUME
// ============================
// Response: { analysis: {} }
export const analyzeResume       = (data) => api.post("/resume/analyze", data);
// Response: { history: [] }
export const getResumeHistory    = ()     => api.get("/resume/history");
// Response: { analysis: {} }
export const getResumeAnalysis   = (id)  => api.get(`/resume/${id}`);

// ============================
// PLANNER
// ============================
// Response: { week_start, plan: [] }
export const getPlanner      = ()       => api.get("/planner");
// Response: { week_start, plan: [] }
export const generatePlanner = ()       => api.post("/planner/generate");
// Response: { task: {} }
export const toggleTask      = (taskId) => api.patch(`/planner/${taskId}`);

// ============================
// PRACTICE CENTER
// ============================
export const generateAITest = (category, topic, difficulty) => 
  api.get(`/${category}/test/generate`, { params: { category, topic, difficulty } });

export const submitTestAttempt = (category, data) => 
  api.post(`/${category}/test/submit`, data);

// ============================
// ANALYTICS
// ============================
// Response: { readiness, trend, summary, streak, activity, subjectScores }
export const getAnalytics = () => api.get("/analytics/overview");

export default api;
