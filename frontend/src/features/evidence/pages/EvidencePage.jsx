import { useState } from "react";

import EvidenceFilter from "../components/EvidenceFilter";
import EvidenceTable from "../components/EvidenceTable";

import "../styles/evidence.css";

export default function EvidencePage() {
  const [filters, setFilters] = useState({
    keyword: "",
    status: "all",
  });

  return (
    <div className="evidence-page">

      <div className="panel">
        <h2>Kho minh chứng chất lượng</h2>
        <p>Quản lý tài liệu phục vụ đánh giá tiêu chuẩn</p>
      </div>

      <EvidenceFilter
        filters={filters}
        setFilters={setFilters}
      />

      <EvidenceTable filters={filters} />

    </div>
  );
}