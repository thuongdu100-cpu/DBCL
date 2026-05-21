import EvidenceStatusBadge from "./EvidenceStatusBadge";
import EvidenceTimeline from "./EvidenceTimeline";

export default function EvidenceDetailPanel({

  evidence,

}) {

  if (!evidence) {

    return (

      <div className="evidence-empty">
        Chọn minh chứng để xem chi tiết
      </div>
    );
  }

  return (

    <div className="evidence-detail-card">

      <div className="evidence-detail-header">

        <div>

          <h3>
            {evidence.title}
          </h3>

          <p>
            {evidence.code}
          </p>

        </div>

        <EvidenceStatusBadge
          status={evidence.status}
        />

      </div>

      <div className="evidence-detail-grid">

        <div className="evidence-detail-list">

          <div>
            <span>Tiêu chuẩn</span>
            <strong>{evidence.standard}</strong>
          </div>

          <div>
            <span>Tiêu chí</span>
            <strong>{evidence.criterion}</strong>
          </div>

          <div>
            <span>Phòng ban</span>
            <strong>{evidence.department}</strong>
          </div>

          <div>
            <span>Người tải lên</span>
            <strong>{evidence.uploadedBy}</strong>
          </div>

          <div>
            <span>Reviewer</span>
            <strong>{evidence.reviewer}</strong>
          </div>

        </div>

        <div className="evidence-detail-list">

          <div>
            <span>Loại file</span>
            <strong>{evidence.fileType}</strong>
          </div>

          <div>
            <span>Kích thước</span>
            <strong>{evidence.fileSize}</strong>
          </div>

          <div>
            <span>Ngày tạo</span>
            <strong>{evidence.createdAt}</strong>
          </div>

          <div>
            <span>Cập nhật</span>
            <strong>{evidence.updatedAt}</strong>
          </div>

        </div>

      </div>

      <div>

        <h3>
          Mô tả
        </h3>

        <p className="evidence-description">
          {evidence.description}
        </p>

      </div>

      <div>

        <h3>
          Timeline
        </h3>

        <EvidenceTimeline
          timeline={evidence.timeline}
        />

      </div>

    </div>
  );
}