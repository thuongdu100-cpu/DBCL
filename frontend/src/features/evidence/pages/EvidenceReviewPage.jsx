import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";

import EvidenceStatusBadge from "../components/EvidenceStatusBadge";
import EvidenceTimeline from "../components/EvidenceTimeline";

export default function EvidenceReviewPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  /* ======================================================
     WORKFLOW
  ====================================================== */

  const {

    evidences,

  } = useEvidenceWorkflow();

  /* ======================================================
     FIND EVIDENCE
  ====================================================== */

  const evidence = useMemo(() => {

    return evidences.find(
      (item) => item.id === Number(id)
    );

  }, [evidences, id]);

  /* ======================================================
     EMPTY
  ====================================================== */

  if (!evidence) {

    return (

      <section className="evidence-page">

        <div className="evidence-empty">

          Không tìm thấy minh chứng

        </div>

      </section>
    );
  }

  /* ======================================================
     ACTIONS
  ====================================================== */

  const handleApprove = () => {

    console.log("APPROVE:", evidence.id);

    /*
      Future:
      - update status
      - workflow transition
      - audit log
      - notification
    */

    navigate("/evidence/queue");
  };

  const handleReject = () => {

    console.log("REJECT:", evidence.id);

    /*
      Future:
      - reject workflow
      - add reject reason
      - notify uploader
    */

    navigate("/evidence/queue");
  };

  /* ======================================================
     RENDER
  ====================================================== */

  return (

    <section className="evidence-page">

      {/* HEADER */}
      <div className="evidence-detail-header">

        <div>

          <h2>
            Kiểm duyệt minh chứng
          </h2>

          <p>
            {evidence.title}
          </p>

        </div>

        <EvidenceStatusBadge
          status={evidence.status}
        />

      </div>

      {/* DETAIL */}
      <div className="evidence-detail-grid">

        {/* INFO */}
        <div className="evidence-detail-card">

          <h3>
            Thông tin minh chứng
          </h3>

          <div className="evidence-detail-list">

            <div>
              <strong>Mã minh chứng:</strong>
              <span>{evidence.code}</span>
            </div>

            <div>
              <strong>Tiêu chuẩn:</strong>
              <span>{evidence.standard}</span>
            </div>

            <div>
              <strong>Tiêu chí:</strong>
              <span>{evidence.criterion}</span>
            </div>

            <div>
              <strong>Phòng ban:</strong>
              <span>{evidence.department}</span>
            </div>

            <div>
              <strong>Người tải lên:</strong>
              <span>{evidence.uploadedBy}</span>
            </div>

          </div>

        </div>

        {/* FILE */}
        <div className="evidence-detail-card">

          <h3>
            Thông tin tệp
          </h3>

          <div className="evidence-detail-list">

            <div>
              <strong>Loại tệp:</strong>
              <span>{evidence.fileType}</span>
            </div>

            <div>
              <strong>Kích thước:</strong>
              <span>{evidence.fileSize}</span>
            </div>

            <div>
              <strong>Ngày cập nhật:</strong>
              <span>{evidence.updatedAt}</span>
            </div>

          </div>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="evidence-detail-card">

        <h3>
          Mô tả minh chứng
        </h3>

        <p className="evidence-description">

          {evidence.description}

        </p>

      </div>

      {/* TIMELINE */}
      <div className="evidence-detail-card">

        <h3>
          Timeline xử lý
        </h3>

        <EvidenceTimeline
          timeline={evidence.timeline || []}
        />

      </div>

      {/* ACTIONS */}
      <div className="evidence-review-actions">

        <button
          className="evidence-btn reject"
          onClick={handleReject}
        >
          Từ chối
        </button>

        <button
          className="evidence-btn approve"
          onClick={handleApprove}
        >
          Phê duyệt
        </button>

      </div>

    </section>
  );
}