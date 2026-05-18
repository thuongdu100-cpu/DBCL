  import AssignmentDetail from "./AssignmentDetail";

  export default function AssignmentDetailModal({
    assignment,
    onClose,
  }) {
    if (!assignment) return null;

    return (
      <div className="detail-modal">

        {/* MODAL BOX */}
        <div className="detail-modal-wrapper">
          <button
            className="detail-close"
            onClick={onClose}
          >
            ×
          </button>

          {/* CONTENT */}
          <div className="detail-modal-content">
            <AssignmentDetail assignment={assignment} />
          </div>

        </div>

      </div>
    );
  }