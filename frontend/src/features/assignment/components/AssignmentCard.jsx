import AssignmentStatusBadge from "./AssignmentStatusBadge";

// ======================================================
// ASSIGNMENT CARD (WORK ITEM VIEW)
// ======================================================

export default function AssignmentCard({
  assignment,
  onStart,
  onSubmit,
  onOpenDetail,
}) {

  const {
    id,
    title,
    description,
    assignedTo,
    priority,
    status,
    dueDate,
    progress,
  } = assignment;

  // ======================================================
  // PRIORITY CLASS
  // ======================================================

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "critical":
        return "priority-critical";
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      default:
        return "priority-low";
    }
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <div className={`assignment-card ${getPriorityClass(priority)}`}>

      {/* HEADER */}
      <div className="assignment-card-header">

        <div className="assignment-title">
          {title}
        </div>

        <AssignmentStatusBadge status={status} />

      </div>

      {/* DESCRIPTION */}
      <div className="assignment-desc">
        {description}
      </div>

      {/* META INFO */}
      <div className="assignment-meta">

        <div>
          👤 {assignedTo?.name || "Unassigned"}
        </div>

        <div>
          ⏰ Due: {new Date(dueDate).toLocaleDateString()}
        </div>

        <div>
          📊 Progress: {progress}%
        </div>

      </div>

      {/* ACTIONS */}
      <div className="assignment-actions">

        <button onClick={() => onOpenDetail(id)}>
          Chi tiết
        </button>

        {status === "assigned" && (
          <button onClick={() => onStart(id)}>
            Bắt đầu
          </button>
        )}

        {status === "in_progress" && (
          <button onClick={() => onSubmit(id)}>
            Gửi duyệt
          </button>
        )}

      </div>

    </div>
  );
}