import { useMemo } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import { ASSIGNMENT_STATUS } from "../data/mockAssignments";
import "../styles/assignment.css";
// ======================================================
// DASHBOARD ANALYTICS PAGE
// ======================================================

export default function AssignmentDashboardPage() {

  const { assignments } = useAssignmentWorkflow();

  // ======================================================
  // STATUS DISTRIBUTION
  // ======================================================

  const statusStats = useMemo(() => {

    return {
      assigned: assignments.filter(a =>
        a.status === ASSIGNMENT_STATUS.ASSIGNED
      ).length,

      inProgress: assignments.filter(a =>
        a.status === ASSIGNMENT_STATUS.IN_PROGRESS
      ).length,

      waitingReview: assignments.filter(a =>
        a.status === ASSIGNMENT_STATUS.WAITING_REVIEW
      ).length,

      done: assignments.filter(a =>
        a.status === ASSIGNMENT_STATUS.DONE
      ).length,

      rejected: assignments.filter(a =>
        a.status === ASSIGNMENT_STATUS.REJECTED
      ).length,

      overdue: assignments.filter(a =>
        a.status === ASSIGNMENT_STATUS.OVERDUE
      ).length,
    };

  }, [assignments]);

  // ======================================================
  // WORKLOAD BY USER
  // ======================================================

  const workloadByUser = useMemo(() => {

    const map = {};

    assignments.forEach(a => {

      const user = a.assignedTo?.name || "Unassigned";

      if (!map[user]) {
        map[user] = 0;
      }

      map[user]++;
    });

    return map;

  }, [assignments]);

  // ======================================================
  // OVERDUE RATE
  // ======================================================

  const overdueRate = useMemo(() => {

    if (assignments.length === 0) return 0;

    const overdueCount = statusStats.overdue;

    return ((overdueCount / assignments.length) * 100).toFixed(1);

  }, [assignments, statusStats]);

  // ======================================================
  // RENDER CARD
  // ======================================================

  const renderStatCard = (label, value, className) => (
    <div className={`dashboard-card ${className}`}>
      <div className="dashboard-value">{value}</div>
      <div className="dashboard-label">{label}</div>
    </div>
  );

  // ======================================================
  // UI
  // ======================================================

  return (
    <div className="assignment-dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h2>Assignment Dashboard</h2>
        <p>Tổng quan hiệu suất và phân bổ công việc</p>
      </div>

      {/* STATUS STATS */}
      <div className="dashboard-grid">

        {renderStatCard("Đã giao", statusStats.assigned, "blue")}
        {renderStatCard("Đang làm", statusStats.inProgress, "yellow")}
        {renderStatCard("Chờ duyệt", statusStats.waitingReview, "orange")}
        {renderStatCard("Hoàn thành", statusStats.done, "green")}
        {renderStatCard("Từ chối", statusStats.rejected, "red")}
        {renderStatCard("Quá hạn", statusStats.overdue, "darkred")}

      </div>

      {/* OVERDUE RATE */}
      <div className="dashboard-section">

        <h3>Tỷ lệ quá hạn</h3>

        <div className="overdue-box">
          <div className="overdue-value">{overdueRate}%</div>
          <div className="overdue-desc">
            Tỷ lệ assignment vượt deadline
          </div>
        </div>

      </div>

      {/* WORKLOAD BY USER */}
      <div className="dashboard-section">

        <h3>Phân bổ công việc theo người</h3>

        <div className="workload-list">

          {Object.entries(workloadByUser).map(([user, count]) => (
            <div key={user} className="workload-item">

              <div className="workload-user">
                {user}
              </div>

              <div className="workload-count">
                {count} tasks
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}