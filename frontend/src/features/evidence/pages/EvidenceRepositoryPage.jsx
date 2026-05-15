import { useNavigate } from "react-router-dom";

import useEvidenceWorkflow from "../hooks/useEvidenceWorkflow";

import EvidenceFilter from "../components/EvidenceFilter";
import EvidenceRepositoryTable from "../components/EvidenceRepositoryTable";
import "../styles/evidence.css";
export default function EvidenceRepositoryPage() {

  const navigate = useNavigate();

  /* ======================================================
     WORKFLOW
  ====================================================== */

  const {

    filteredEvidences,

    search,
    setSearch,

    statusFilter,
    setStatusFilter,

  } = useEvidenceWorkflow();

  /* ======================================================
     VIEW DETAIL
  ====================================================== */

  const handleViewDetail = (item) => {

    navigate(`/evidence/${item.id}`);
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

    </section>
  );
}