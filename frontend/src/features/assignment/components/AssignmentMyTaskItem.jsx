import AssignmentStatusBadge from "./AssignmentStatusBadge";

export default function AssignmentMyTaskItem({
  assignment,
  onStart,
  onSubmit,
  onOpenDetail,
}) {

  const {
    id,
    title,
    description,
    status,
    dueDate,
    progress,
    priority,
  } = assignment;

  const getPriorityLabel = (value) => {

    switch (value) {

      case "critical":
        return "Khẩn cấp";

      case "high":
        return "Cao";

      case "medium":
        return "Trung bình";

      default:
        return "Thấp";
    }
  };

  const getPriorityClass = (value) => {

    switch (value) {

      case "critical":
        return "critical";

      case "high":
        return "high";

      case "medium":
        return "medium";

      default:
        return "low";
    }
  };

  return (
    <div className={`assignment-mytask ${getPriorityClass(priority)}`}>

      {/* LEFT */}
      <div className="assignment-mytask-left">

        {/* TOP */}
        <div className="assignment-mytask-top">

          <div className="assignment-mytask-title-group">

            <h3 className="assignment-mytask-title">
              {title}
            </h3>

            <AssignmentStatusBadge status={status} />

          </div>

          <div className={`assignment-mytask-priority ${getPriorityClass(priority)}`}>
            {getPriorityLabel(priority)}
          </div>

        </div>

        {/* DESCRIPTION */}
        <p className="assignment-mytask-desc">
          {description}
        </p>

        {/* META */}
        <div className="assignment-mytask-meta">

          <div className="assignment-mytask-meta-item">
            <span>📅</span>
            <span>
              Deadline: {new Date(dueDate).toLocaleDateString()}
            </span>
          </div>

          <div className="assignment-mytask-meta-item">
            <span>📊</span>
            <span>
              Tiến độ: {progress}%
            </span>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="assignment-mytask-right">

        {/* PROGRESS */}
        <div className="assignment-mytask-progress">

          <div className="assignment-mytask-progress-top">

            <span className="assignment-mytask-progress-text">
              Hoàn thành
            </span>

            <span className="assignment-mytask-progress-value">
              {progress}%
            </span>

          </div>

          <div className="assignment-mytask-progress-bar">

            <div
              className="assignment-mytask-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* ACTIONS */}
        <div className="assignment-mytask-actions">

          <button
            className="assignment-mytask-btn secondary"
            onClick={() => onOpenDetail(id)}
          >
            Chi tiết
          </button>

          {status === "assigned" && (
            <button
              className="assignment-mytask-btn primary"
              onClick={() => onStart(id)}
            >
              Bắt đầu
            </button>
          )}

          {status === "in_progress" && (
            <button
              className="assignment-mytask-btn success"
              onClick={() => onSubmit(id)}
            >
              Gửi duyệt
            </button>
          )}

        </div>

      </div>

    </div>
  );
}