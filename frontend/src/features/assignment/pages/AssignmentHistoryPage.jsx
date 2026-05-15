import { useMemo, useState } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import { ASSIGNMENT_STATUS } from "../data/mockAssignments";
import "../styles/assignment.css";
// ======================================================
// HISTORY / AUDIT LOG PAGE
// ======================================================

export default function AssignmentHistoryPage() {

  const { assignments } = useAssignmentWorkflow();

  const [filters, setFilters] = useState({
    keyword: "",
    status: "",
    user: "",
  });

  // ======================================================
  // FLATTEN HISTORY (AUDIT STREAM)
// ======================================================

  const auditLogs = useMemo(() => {

    const logs = [];

    assignments.forEach(a => {

      if (!a.history) return;

      a.history.forEach(h => {

        logs.push({
          assignmentId: a.id,
          title: a.title,
          status: a.status,
          action: h.action,
          by: h.by,
          timestamp: h.timestamp,
          reason: h.reason || "",
        });

      });

    });

    // sort newest first
    return logs.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

  }, [assignments]);

  // ======================================================
  // FILTER LOGS
  // ======================================================

  const filteredLogs = useMemo(() => {

    return auditLogs.filter(log => {

      const matchKeyword =
        !filters.keyword ||
        log.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        log.action.toLowerCase().includes(filters.keyword.toLowerCase());

      const matchStatus =
        !filters.status || log.status === filters.status;

      const matchUser =
        !filters.user || log.by === filters.user;

      return (
        matchKeyword &&
        matchStatus &&
        matchUser
      );

    });

  }, [auditLogs, filters]);

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <div className="assignment-history">

      {/* HEADER */}
      <div className="history-header">

        <h2>Assignment History</h2>

        <p>Lịch sử thay đổi & audit toàn hệ thống</p>


      {/* FILTER BAR */}
      <div className="history-filters">

        <input
          placeholder="Search action / task..."
          value={filters.keyword}
          onChange={(e) =>
            setFilters({ ...filters, keyword: e.target.value })
          }
        />

        <select
          value={filters.status}
          onChange={(e) =>
            setFilters({ ...filters, status: e.target.value })
          }
        >
          <option value="">All Status</option>

          {Object.values(ASSIGNMENT_STATUS).map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          placeholder="User"
          value={filters.user}
          onChange={(e) =>
            setFilters({ ...filters, user: e.target.value })
          }
        />

      </div>

      {/* AUDIT LIST */}
      <div className="history-list">

        {filteredLogs.map((log, index) => (

          <div key={index} className="history-item">

            {/* LEFT: TIMESTAMP */}
            <div className="history-time">
              {new Date(log.timestamp).toLocaleString()}
            </div>

            {/* CENTER: CONTENT */}
            <div className="history-content">

              <div className="history-title">
                {log.title}
              </div>

              <div className="history-action">
                Action: {log.action}
              </div>

              <div className="history-user">
                By: {log.by}
              </div>

              {log.reason && (
                <div className="history-reason">
                  Reason: {log.reason}
                </div>
              )}

            </div>

            {/* RIGHT: STATUS */}
            <div className="history-status">
              {log.status}
            </div>

          </div>

        ))}

      </div>
        </div>
    </div>
  );
}