import { useState } from "react";

import EvaluationTable from "../components/EvaluationTable";
import EvaluationDetail from "../components/EvaluationDetail";
import EvaluationFilter from "../components/EvaluationFilter";

import "../styles/evaluation.css";

export default function EvaluationPage() {
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({
    keyword: "",
    status: "all",
  });

  return (
    <div className="eval-layout">

      {/* LEFT */}
      <div className="eval-left">

        <div className="panel">
          <h2>Quản lý đánh giá tiêu chí</h2>
          <p>Đánh giá mức độ đạt chuẩn chất lượng</p>
        </div>

        <EvaluationFilter
          filters={filters}
          setFilters={setFilters}
        />

        <EvaluationTable
          onSelect={setSelected}
          filters={filters}
        />

      </div>

      {/* RIGHT */}
      <div className="eval-right">

        {selected ? (
          <EvaluationDetail data={selected} />
        ) : (
          <div className="empty-state">
            <h3>Chưa chọn tiêu chí</h3>
            <p>Chọn một tiêu chí để xem chi tiết đánh giá</p>
          </div>
        )}

      </div>

    </div>
  );
}