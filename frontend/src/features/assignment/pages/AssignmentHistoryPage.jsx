import { useMemo, useState } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";

import AssignmentFilter from "../components/AssignmentFilter";

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
  // FLATTEN HISTORY
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

    return logs.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

  }, [assignments]);

  // ======================================================
  // FILTER
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
        !filters.user ||
        log.by.toLowerCase().includes(filters.user.toLowerCase());

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

      <div className="history-header">

        <h2>Assignment History</h2>

        <p>Lịch sử thay đổi & audit toàn hệ thống</p>

      </div>

      {/* FILTER */}
      <AssignmentFilter
        onFilterChange={setFilters}
      />

      {/* AUDIT LIST */}
      <div className="assignment-history-list">

        {filteredLogs.map((log, index) => (

          <div key={index} className="assignment-history-item">

            <div className="assignment-history-time">
              {new Date(log.timestamp).toLocaleString()}
            </div>

            <div className="assignment-history-content">

              <div className="assignment-history-title">
                {log.title}
              </div>

              <div className="assignment-history-action">
                Action: {log.action}
              </div>

              <div className="assignment-history-user">
                By: {log.by}
              </div>

              {log.reason && (
                <div className="assignment-history-reason">
                  Reason: {log.reason}
                </div>
              )}

            </div>

            <div className="assignment-history-status">
              {log.status}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}