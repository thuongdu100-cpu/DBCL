import { useParams } from "react-router-dom";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import AssignmentStatusBadge from "../components/AssignmentStatusBadge";
import "../styles/assignment.css";
// ======================================================
// ASSIGNMENT DETAIL PAGE
// ======================================================

export default function AssignmentDetailPage() {

  const { id } = useParams();

  const { getAssignmentById } = useAssignmentWorkflow();

  const assignment = getAssignmentById(id);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

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

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <div className="assignment-detail">

      {/* HEADER */}
      <div className="detail-header">

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

      {/* HISTORY TIMELINE */}
      <div className="detail-section">

        <h3>Lịch sử thực hiện</h3>

        <div className="timeline">

          {history?.map((h, index) => (
            <div key={index} className="timeline-item">

              <div className="timeline-dot" />

              <div className="timeline-content">

                <div className="timeline-action">
                  {h.action}
                </div>

                <div className="timeline-by">
                  by {h.by}
                </div>

                <div className="timeline-time">
                  {new Date(h.timestamp).toLocaleString()}
                </div>

                {h.reason && (
                  <div className="timeline-reason">
                    Reason: {h.reason}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* COMMENTS */}
      <div className="detail-section">

        <h3>Trao đổi</h3>

        <div className="comment-list">

          {comments?.map((c, index) => (
            <div key={index} className="comment-item">

              <div className="comment-user">
                {c.user}
              </div>

              <div className="comment-message">
                {c.message}
              </div>

              <div className="comment-time">
                {new Date(c.timestamp).toLocaleString()}
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}