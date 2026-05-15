import {
  ASSIGNMENT_STATUS,
} from "../data/mockAssignments";

// ======================================================
// STATUS CONFIG (UI MAPPING ONLY)
// ======================================================

const STATUS_CONFIG = {
  [ASSIGNMENT_STATUS.CREATED]: {
    label: "Khởi tạo",
    className: "status-created",
  },

  [ASSIGNMENT_STATUS.ASSIGNED]: {
    label: "Đã giao",
    className: "status-assigned",
  },

  [ASSIGNMENT_STATUS.IN_PROGRESS]: {
    label: "Đang thực hiện",
    className: "status-progress",
  },

  [ASSIGNMENT_STATUS.WAITING_REVIEW]: {
    label: "Chờ duyệt",
    className: "status-review",
  },

  [ASSIGNMENT_STATUS.DONE]: {
    label: "Hoàn thành",
    className: "status-done",
  },

  [ASSIGNMENT_STATUS.REJECTED]: {
    label: "Bị từ chối",
    className: "status-rejected",
  },

  [ASSIGNMENT_STATUS.OVERDUE]: {
    label: "Quá hạn",
    className: "status-overdue",
  },
};

// ======================================================
// COMPONENT
// ======================================================

export default function AssignmentStatusBadge({ status }) {

  const config = STATUS_CONFIG[status] || {
    label: "Unknown",
    className: "status-unknown",
  };

  return (
    <span className={`assignment-status-badge ${config.className}`}>
      {config.label}
    </span>
  );
}