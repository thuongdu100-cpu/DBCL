import { useMemo, useState } from "react";
import {
  mockAssignments,
  ASSIGNMENT_STATUS,
} from "../../assignment/data/mockAssignments";

export default function AssignmentStatusChart() {
  const [selectedStatus, setSelectedStatus] = useState(null);

  const assignments = mockAssignments;

  // =========================
  // GROUP DATA
  // =========================
  const grouped = useMemo(() => {
    const getCount = (status) =>
      assignments.filter((a) => a.status === status).length;

    return {
      total: assignments.length,
      done: getCount(ASSIGNMENT_STATUS.DONE),
      inProgress: getCount(ASSIGNMENT_STATUS.IN_PROGRESS),
      waitingReview: getCount(ASSIGNMENT_STATUS.WAITING_REVIEW),
      overdue: getCount(ASSIGNMENT_STATUS.OVERDUE),
      rejected: getCount(ASSIGNMENT_STATUS.REJECTED),
    };
  }, [assignments]);

  // =========================
  // STACK DATA
  // =========================
  const stackData = useMemo(() => {
    const total = grouped.total;

    return [
      {
        key: ASSIGNMENT_STATUS.DONE,
        label: "Hoàn thành",
        value: grouped.done,
        color: "success",
      },
      {
        key: ASSIGNMENT_STATUS.IN_PROGRESS,
        label: "Đang làm",
        value: grouped.inProgress,
        color: "warning",
      },
      {
        key: ASSIGNMENT_STATUS.WAITING_REVIEW,
        label: "Chờ duyệt",
        value: grouped.waitingReview,
        color: "info",
      },
      {
        key: ASSIGNMENT_STATUS.OVERDUE,
        label: "Quá hạn",
        value: grouped.overdue,
        color: "danger",
      },
      {
        key: ASSIGNMENT_STATUS.REJECTED,
        label: "Từ chối",
        value: grouped.rejected,
        color: "danger",
      },
    ].map((item) => ({
      ...item,
      percent: total ? (item.value / total) * 100 : 0,
    }));
  }, [grouped]);

  // =========================
  // DRILLDOWN DATA
  // =========================
  const filteredAssignments = useMemo(() => {
    if (!selectedStatus) return [];
    return assignments.filter((a) => a.status === selectedStatus);
  }, [selectedStatus, assignments]);

  return (
    <div className="panel assignment-status-chart">

      {/* HEADER */}
      <div className="panel-header">
        <div className="panel-title">
          Trạng thái Assignment
        </div>

        <div className="badge">Live Data</div>
      </div>

      {/* BAR CHART */}
      <div className="assignment-status-bar">

        {stackData.map((item) => (
          <div
            key={item.key}
            className="assignment-status-item"
            onClick={() => setSelectedStatus(item.key)}
          >

            <div className="assignment-status-value">
              {item.value}
            </div>

            <div className="assignment-status-wrapper">

              <div
                className={`assignment-status-fill ${item.color}`}
                style={{ height: `${item.percent}%` }}
              />

            </div>

            <div className="assignment-status-label">
              {item.label}
            </div>

          </div>
        ))}

      </div>

      {/* DRILLDOWN LIST */}
      {selectedStatus && (
        <div className="assignment-drilldown">

          <div className="assignment-drilldown-title">
            Danh sách: {selectedStatus}
          </div>

          <div className="assignment-drilldown-list">

            {filteredAssignments.map((item) => (
              <div
                key={item.id}
                className="assignment-drilldown-item"
              >

                <div>
                  <strong>{item.title}</strong>

                  <div style={{ fontSize: 11, color: "#6b7280" }}>
                    {item.assignedTo?.name || "Unassigned"}
                  </div>
                </div>

                <div>{item.progress}%</div>

              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}