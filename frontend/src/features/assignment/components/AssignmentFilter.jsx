import { useState } from "react";
import {
  ASSIGNMENT_STATUS,
  ASSIGNMENT_PRIORITY,
} from "../data/mockAssignments";

// ======================================================
// FILTER COMPONENT (PURE UI STATE)
// ======================================================

export default function AssignmentFilter({ onFilterChange }) {

  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    keyword: "",
    assignee: "",
  });

  // ======================================================
  // HANDLE CHANGE
  // ======================================================

  const updateFilter = (key, value) => {

    const newFilters = {
      ...filters,
      [key]: value,
    };

    setFilters(newFilters);

    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  // ======================================================
  // RESET FILTER
  // ======================================================

  const resetFilter = () => {

    const reset = {
      status: "",
      priority: "",
      keyword: "",
      assignee: "",
    };

    setFilters(reset);

    if (onFilterChange) {
      onFilterChange(reset);
    }
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <div className="assignment-filter">

      {/* KEYWORD SEARCH */}
      <input
        type="text"
        placeholder="Tìm kiếm assignment..."
        value={filters.keyword}
        onChange={(e) => updateFilter("keyword", e.target.value)}
      />

      {/* STATUS FILTER */}
      <select
        value={filters.status}
        onChange={(e) => updateFilter("status", e.target.value)}
      >
        <option value="">Tất cả trạng thái</option>

        {Object.values(ASSIGNMENT_STATUS).map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* PRIORITY FILTER */}
      <select
        value={filters.priority}
        onChange={(e) => updateFilter("priority", e.target.value)}
      >
        <option value="">Tất cả mức ưu tiên</option>

        {Object.values(ASSIGNMENT_PRIORITY).map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>


    </div>
  );
}