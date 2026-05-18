import AssignmentStatusBadge from "./AssignmentStatusBadge";

// ======================================================
// ASSIGNMENT CARD (PURE UI COMPONENT)
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

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "critical":
        return "assignment-priority-critical";
      case "high":
        return "assignment-priority-high";
      case "medium":
        return "assignment-priority-medium";
      default:
        return "assignment-priority-low";
    }
  };

  return (
    <div className={`assignment-card ${getPriorityClass(priority)}`}>

      <div className="assignment-card-header">
        
        <AssignmentStatusBadge status={status} />
      </div>
      <div className="assignment-title">{title}</div>
      <div className="assignment-desc">{description}</div>

      <div className="assignment-meta">
        <div>👤 {assignedTo?.name || "Unassigned"}</div>
        <div>⏰ Due: {new Date(dueDate).toLocaleDateString()}</div>
        <div>📊 Progress: {progress}%</div>
      </div>

      <div className="assignment-actions">
        <button onClick={() => onOpenDetail(id)}>
          Chi tiết
        </button>

        {status === "in_progress" && (
          <button onClick={() => onSubmit(id)}>
            Gửi duyệt
          </button>
        )}
      </div>

    </div>
  );
}