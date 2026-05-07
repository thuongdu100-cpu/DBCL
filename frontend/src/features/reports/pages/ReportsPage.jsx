import { useState } from "react";

import ReportsFilter from "../components/ReportsFilter";
import ReportsTable from "../components/ReportsTable";

import "../styles/reports.css";

export default function ReportsPage() {
  const [filters, setFilters] = useState({
    keyword: "",
    type: "all",
  });

  return (
    <div className="reports-page">

      <div className="panel">
        <h2>Báo cáo hệ thống ĐBCL</h2>
      </div>

      <ReportsFilter
        filters={filters}
        setFilters={setFilters}
      />

      <ReportsTable filters={filters} />

    </div>
  );
}