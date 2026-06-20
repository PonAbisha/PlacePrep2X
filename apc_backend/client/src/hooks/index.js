
import { useEffect, useState } from "react";
import api from "../api";

// Dashboard
export const useDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/analytics/overview")
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

  return data;
};

// DSA
export const useDSA = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/dsa")
      .then((res) => setData(res.data.progress))
      .catch(console.error);
  }, []);

  return data;
};

// Quiz Stats
export const useQuizStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    api.get("/quiz/stats")
      .then((res) => setStats(res.data.stats))
      .catch(console.error);
  }, []);

  return stats;
};