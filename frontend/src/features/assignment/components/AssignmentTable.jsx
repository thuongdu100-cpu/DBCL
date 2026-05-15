import { useMemo, useState } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import "../styles/assignment.css";
// ======================================================
// ASSIGNMENT TABLE VIEW
// ======================================================

export default function AssignmentTable() {

  const { assignments } = useAssignmentWorkflow();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // ======================================================
  // FILTER DATA
  // ======================================================

  const filtered = useMemo(() => {

    return assignments.filter(a => {

      const matchSearch =
        !search ||
        a.title.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        !status || a.status === status;

      return matchSearch && matchStatus;

    });

  }, [assignments, search, status]);

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <div className="assignment-table">

      {/* HEADER */}
      <div className="assignment-table-header">

        <h2>Danh sách công việc</h2>

      </div>

      {/* FILTER */}
      <div className="assignment-table-filter">

        <input
          placeholder="Tìm công việc..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Tất cả trạng thái</option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="REVIEW">REVIEW</option>
          <option value="DONE">DONE</option>
        </select>

      </div>

      {/* TABLE */}
      <table className="assignment-table-ui">

        <thead>
          <tr>
            <th>Công việc</th>
            <th>Trạng thái</th>
            <th>Độ ưu tiên</th>
            <th>Người phụ trách</th>
          </tr>
        </thead>

        <tbody>

          {filtered.map(a => (

            <tr key={a.id}>

              <td>{a.title}</td>

              <td>
                <span className="status-badge">
                  {a.status}
                </span>
              </td>

              <td className={
                a.priority === "HIGH"
                  ? "priority-high"
                  : a.priority === "MEDIUM"
                    ? "priority-medium"
                    : "priority-low"
              }>
                {a.priority}
              </td>

              <td>{a.assignee || "Unassigned"}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}