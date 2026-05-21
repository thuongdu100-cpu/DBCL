import { useState } from "react";

import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";

import EvidenceFilter from "../components/EvidenceFilter";
import EvidenceRepositoryTable from "../components/EvidenceRepositoryTable";
import EvidenceStats from "../components/EvidenceStats";
import EvidenceDetailPanel from "../components/EvidenceDetailPanel";
import EvidenceReviewPanel from "../components/EvidenceReviewPanel";
import EvidenceQueueSection from "../components/EvidenceQueueSection";
import EvidenceSubmitForm from "../components/EvidenceSubmitForm";
import { useAuth } from "../../../auth/AuthContext";
import { ROLES } from "../../../auth/roles";
import "../styles/evidence.css";

export default function EvidenceRepositoryPage() {
  
  /* ======================================================
     MODAL
  ====================================================== */

  const [openSubmitModal, setOpenSubmitModal] =
    useState(false);
  const { user } = useAuth();

  const canReview =
  user &&
  [
    ROLES.ADMIN,
    ROLES.QA,
    ROLES.MANAGER,
  ].includes(user.role);
  /* ======================================================
     WORKFLOW
  ====================================================== */

  const {

    evidences,

    filteredEvidences,

    selectedEvidence,

    search,
    setSearch,

    statusFilter,
    setStatusFilter,

    approveEvidence,
    rejectEvidence,

    selectEvidence,

    stats,

  } = useEvidenceWorkflow();

  /* ======================================================
     VIEW DETAIL
  ====================================================== */

  const handleViewDetail = (item) => {

    selectEvidence(item.id);

  };

  /* ======================================================
     SUBMIT
  ====================================================== */

  const handleSubmitEvidence = (data) => {

    console.log("SUBMIT:", data);

    setOpenSubmitModal(false);

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
            Kho minh chứng
          </h2>

          <p>
            Quản lý toàn bộ minh chứng phục vụ kiểm định chất lượng
          </p>

        </div>

        <button
          className="evidence-btn primary"
          onClick={() => setOpenSubmitModal(true)}
        >
          Thêm minh chứng
        </button>

      </div>

      {/* KPI */}
      <EvidenceStats
        stats={stats}
      />

      {/* TOP SECTION */}
      <div className="evidence-top-layout">

        <EvidenceQueueSection
          evidences={evidences}
        />

      </div>

      {/* FILTER */}
      <EvidenceFilter
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/* TABLE */}
      <EvidenceRepositoryTable
        data={filteredEvidences}
        onView={handleViewDetail}
      />

      {/* DETAIL MODAL */}
      {selectedEvidence && (

        <div
          className="evidence-modal-overlay"
          onClick={() => selectEvidence(null)}
        >

          <div
            className="evidence-modal large"
            onClick={(e) => e.stopPropagation()}
          >

            {/* HEADER */}
            <div className="evidence-modal-header">

              <h3>
                Chi tiết minh chứng
              </h3>

              <button
                className="evidence-modal-close"
                onClick={() => selectEvidence(null)}
              >
                ×
              </button>

            </div>

            {/* CONTENT */}
            <div className="evidence-detail-layout">

              <EvidenceDetailPanel
                evidence={selectedEvidence}
              />

              {canReview && (
                <EvidenceReviewPanel
                  evidence={selectedEvidence}
                  onApprove={approveEvidence}
                  onReject={rejectEvidence}
                />
              )}
            </div>

          </div>

        </div>

      )}

      {/* SUBMIT MODAL */}
      {openSubmitModal && (

        <EvidenceSubmitForm
          onSubmit={handleSubmitEvidence}
          onClose={() => setOpenSubmitModal(false)}
        />

      )}

    </section>
  );
}