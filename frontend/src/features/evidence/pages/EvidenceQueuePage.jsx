import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";

import EvidenceRepositoryTable from "../components/EvidenceRepositoryTable";

export default function EvidenceQueuePage() {

  const navigate = useNavigate();

  /* ======================================================
     WORKFLOW
  ====================================================== */

  const {

    evidences,

  } = useEvidenceWorkflow();

  /* ======================================================
     QUEUE
  ====================================================== */

  const queueData = useMemo(() => {

    return evidences.filter((item) => {

      return (
        item.status === "pending" ||
        item.status === "reviewing"
      );
    });

  }, [evidences]);

  /* ======================================================
     REVIEW
  ====================================================== */

  const handleReview = (item) => {

    navigate(`/evidence/review/${item.id}`);
  };

  /* ======================================================
     RENDER
  ====================================================== */

  return (

    <section className="evidence-page">

      {/* HEADER */}
      <div className="evidence-page-header">

        <div>

          <h2>
            Hàng chờ kiểm duyệt
          </h2>

          <p>
            Danh sách minh chứng đang chờ xử lý và kiểm duyệt
          </p>

        </div>

      </div>

      {/* EMPTY */}
      {queueData.length === 0 ? (

        <div className="evidence-empty">

          Không có minh chứng chờ xử lý

        </div>

      ) : (

        <EvidenceRepositoryTable

          data={queueData}

          onView={handleReview}

        />

      )}

    </section>
  );
}