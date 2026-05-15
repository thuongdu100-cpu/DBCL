import { useMemo } from "react";
import { useParams } from "react-router-dom";

import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";

import EvidenceStatusBadge from "../components/EvidenceStatusBadge";
import EvidenceTimeline from "../components/EvidenceTimeline";

export default function EvidenceDetailPage() {

  const { id } = useParams();

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
     RENDER
  ====================================================== */

  return (

    <section className="evidence-page">

      {/* HEADER */}
      <div className="evidence-detail-header">

        <div>

          <h2>
            {evidence.title}
          </h2>

          <p>
            Mã minh chứng: {evidence.code}
          </p>

        </div>

        <EvidenceStatusBadge
          status={evidence.status}
        />

      </div>

      {/* INFO GRID */}
      <div className="evidence-detail-grid">

        {/* INFO */}
        <div className="evidence-detail-card">

          <h3>
            Thông tin minh chứng
          </h3>

          <div className="evidence-detail-list">

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

            <div>
              <strong>Reviewer:</strong>
              <span>{evidence.reviewer}</span>
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
              <strong>Ngày tạo:</strong>
              <span>{evidence.createdAt}</span>
            </div>

            <div>
              <strong>Cập nhật:</strong>
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
          Lịch sử xử lý
        </h3>

        <EvidenceTimeline
          timeline={evidence.timeline || []}
        />

      </div>

    </section>
  );
}