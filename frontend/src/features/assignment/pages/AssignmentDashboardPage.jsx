import { useMemo } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import { ASSIGNMENT_STATUS } from "../data/mockAssignments";
import "../styles/assignment.css";

export default function AssignmentDashboardPage() {

  const { assignments } = useAssignmentWorkflow();

  const stats = useMemo(() => ({
    assigned: assignments.filter(a => a.status === ASSIGNMENT_STATUS.ASSIGNED).length,
    inProgress: assignments.filter(a => a.status === ASSIGNMENT_STATUS.IN_PROGRESS).length,
    waitingReview: assignments.filter(a => a.status === ASSIGNMENT_STATUS.WAITING_REVIEW).length,
    done: assignments.filter(a => a.status === ASSIGNMENT_STATUS.DONE).length,
    rejected: assignments.filter(a => a.status === ASSIGNMENT_STATUS.REJECTED).length,
    overdue: assignments.filter(a => a.status === ASSIGNMENT_STATUS.OVERDUE).length,
  }), [assignments]);

  const workloadByUser = useMemo(() => {
    const map = {};
    assignments.forEach(a => {
      const name = a.assignedTo?.name || "Unassigned";
      map[name] = (map[name] || 0) + 1;
    });
    return Object.entries(map);
  }, [assignments]);

  const overdueRate = useMemo(() => {
    if (!assignments.length) return 0;
    return ((stats.overdue / assignments.length) * 100).toFixed(1);
  }, [assignments, stats]);

  return (
    <div className="assignment-dashboard">

      {/* HEADER */}
      <div className="assignment-dashboard-header">
        <h2>Assignment Dashboard</h2>
        <p>Tổng quan hiệu suất và phân bổ công việc</p>
      </div>

      {/* KPI GRID */}
      <div className="assignment-dashboard-grid">

        <div className="assignment-dashboard-card">
          <div className="assignment-dashboard-value">{stats.done}</div>
          <div className="assignment-dashboard-label">Hoàn thành</div>
        </div>

        <div className="assignment-dashboard-card">
          <div className="assignment-dashboard-value">{stats.inProgress}</div>
          <div className="assignment-dashboard-label">Đang làm</div>
        </div>

        <div className="assignment-dashboard-card">
          <div className="assignment-dashboard-value">{stats.waitingReview}</div>
          <div className="assignment-dashboard-label">Chờ duyệt</div>
        </div>

        <div className="assignment-dashboard-card">
          <div className="assignment-dashboard-value">{stats.overdue}</div>
          <div className="assignment-dashboard-label">Quá hạn</div>
        </div>

        <div className="assignment-dashboard-card">
          <div className="assignment-dashboard-value">{stats.assigned}</div>
          <div className="assignment-dashboard-label">Đã giao</div>
        </div>

        <div className="assignment-dashboard-card">
          <div className="assignment-dashboard-value">{stats.rejected}</div>
          <div className="assignment-dashboard-label">Từ chối</div>
        </div>

      </div>

      {/* OVERDUE CARD */}
      <div className="assignment-dashboard-card">
        <div className="assignment-dashboard-value">{overdueRate}%</div>
        <div className="assignment-dashboard-label">Tỷ lệ quá hạn</div>
      </div>

      {/* WORKLOAD SECTION */}
      <div className="assignment-dashboard-card">

        <div className="assignment-dashboard-label">Phân bổ công việc</div>

        <div className="assignment-dashboard-workload">

          {workloadByUser.map(([user, count]) => (
            <div className="assignment-dashboard-workload-row" key={user}>
              <span className="assignment-dashboard-workload-user">{user}</span>
              <span className="assignment-dashboard-workload-count">{count}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}