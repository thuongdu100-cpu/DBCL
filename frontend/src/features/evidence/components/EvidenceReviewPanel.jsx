export default function EvidenceReviewPanel({

  evidence,
  onApprove,
  onReject,

}) {

  if (!evidence) return null;

  return (

    <div className="evidence-detail-card">

      <h3>
        Review minh chứng
      </h3>

      <div className="evidence-detail-list">

        <div>
          <span>Mã minh chứng</span>
          <strong>{evidence.code}</strong>
        </div>

        <div>
          <span>Tiêu đề</span>
          <strong>{evidence.title}</strong>
        </div>

        <div>
          <span>Trạng thái</span>
          <strong>{evidence.status}</strong>
        </div>

      </div>

      <div className="evidence-form-group">

        <label>
          Reviewer comment
        </label>

        <textarea
          placeholder="Nhập nhận xét..."
          rows="4"
        />

      </div>

      <div className="evidence-review-actions">

        <button
          className="evidence-btn reject"
          onClick={() => onReject?.(evidence.id)}
        >
          Từ chối
        </button>

        <button
          className="evidence-btn approve"
          onClick={() => onApprove?.(evidence.id)}
        >
          Phê duyệt
        </button>

      </div>

    </div>
  );
}