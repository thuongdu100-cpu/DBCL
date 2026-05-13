import { useEffect, useMemo, useState, useCallback } from "react";
import { reportsService } from "../services/reportsService";

export default function useReports() {

  // =========================
  // STATE
  // =========================
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    keyword: "",
    type: "all",
  });

  // =========================
  // FETCH LAYER
  // =========================
  const fetchReports = useCallback(async () => {

    try {
      setLoading(true);
      setError(null);

      const data = await reportsService.getAllReports();

      setReports(Array.isArray(data) ? data : []);

    } catch (err) {

      setError(err);
      setReports([]);

    } finally {
      setLoading(false);
    }

  }, []);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  // =========================
  // FILTER ENGINE (PURE)
  // =========================
  const filteredReports = useMemo(() => {

    const safeReports = Array.isArray(reports) ? reports : [];

    const keyword = (filters?.keyword || "").toLowerCase();
    const type = filters?.type || "all";

    return safeReports.filter((item) => {

      if (!item) return false;

      const matchType =
        type === "all" || item.type === type;

      const matchKeyword =
        (item.title || "")
          .toLowerCase()
          .includes(keyword);

      return matchType && matchKeyword;
    });

  }, [reports, filters]);

  // =========================
  // API ACTIONS (READY FOR FUTURE)
  // =========================
  const refresh = useCallback(() => {
    fetchReports();
  }, [fetchReports]);

  // =========================
  // RETURN API
  // =========================
  return {
    // state
    loading,
    error,

    // data
    reports,
    filteredReports,

    // filter
    filters,
    setFilters,

    // actions
    refresh,
  };
}