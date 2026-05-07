import { useState } from "react";

import ImprovementFilter from "../components/ImprovementFilter";
import ImprovementTable from "../components/ImprovementTable";

import "../styles/improvement.css";

export default function ImprovementPage() {
  const [filters, setFilters] = useState({
    keyword: "",
    status: "all",
  });

  return (
    <div className="improvement-page">

      <div className="panel">
        <h2>Kế hoạch cải tiến chất lượng</h2>
        <p>Tạo từ các tiêu chí đánh giá chưa đạt yêu cầu</p>
      </div>

      <ImprovementFilter
        filters={filters}
        setFilters={setFilters}
      />

      <ImprovementTable filters={filters} />

    </div>
  );
}