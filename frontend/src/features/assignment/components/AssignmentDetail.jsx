import AssignmentStatusBadge from "./AssignmentStatusBadge";


export default function AssignmentDetail({ assignment }) {
  if (!assignment) return null;

  const {
    title,
    description,
    status,
    priority,
    assignedTo,
    createdBy,
    reviewer,
    createdAt,
    dueDate,
    progress,
    history,
    comments,
  } = assignment;

  return (
    <div className="assignment-detail">

      {/* HEADER */}
      <div className="assignment-detail-header">
        <div>
          <h2>{title}</h2>

          <div className="detail-meta">
            <AssignmentStatusBadge status={status} />
            <span>Priority: {priority}</span>
            <span>Progress: {progress}%</span>
          </div>
        </div>
      </div>

      {/* INFO GRID */}
      <div className="detail-grid">

        <div>
          <h4>Mô tả</h4>
          <p>{description}</p>
        </div>

        <div>
          <h4>Người thực hiện</h4>
          <p>{assignedTo?.name}</p>
        </div>

        <div>
          <h4>Người tạo</h4>
          <p>{createdBy?.name}</p>
        </div>

        <div>
          <h4>Người duyệt</h4>
          <p>{reviewer?.name}</p>
        </div>

        <div>
          <h4>Ngày tạo</h4>
          <p>{new Date(createdAt).toLocaleString()}</p>
        </div>

        <div>
          <h4>Deadline</h4>
          <p>{new Date(dueDate).toLocaleString()}</p>
        </div>

      </div>

      {/* HISTORY */}
      <div className="detail-section">
        <h3>Lịch sử thực hiện</h3>

        {history?.map((h, i) => (
          <div key={i} className="history-item">
            <div>{h.action}</div>
            <div>{h.by}</div>
            <div>{new Date(h.timestamp).toLocaleString()}</div>
          </div>
        ))}
      </div>

      {/* COMMENTS */}
      <div className="detail-section">
        <h3>Trao đổi</h3>

        {comments?.map((c, i) => (
          <div key={i}>
            <b>{c.user}</b>: {c.message}
          </div>
        ))}
      </div>

    </div>
  );
}