import { useState } from "react";

import AssignmentTable from "../components/AssignmentTable";
import AssignmentDetail from "../components/AssignmentDetail";
import AssignmentSidebar from "../components/AssignmentSidebar";

import "../styles/assignment.css";

export default function AssignmentPage() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  return (
    <div className="assign-layout">

      {/* SIDEBAR FILTER */}
      <AssignmentSidebar onFilter={setFilter} />

      {/* LEFT */}
      <div className="assign-left">
        <AssignmentTable
          onSelect={setSelected}
          filter={filter}
        />
      </div>

      {/* RIGHT */}
      <div className="assign-right">
        {selected ? (
          <AssignmentDetail data={selected} />
        ) : (
          <div className="empty">
            Chọn một đối tượng để gán phụ trách
          </div>
        )}
      </div>

    </div>
  );
}