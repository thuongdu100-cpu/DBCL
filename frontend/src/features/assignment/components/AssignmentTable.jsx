import { useMemo, useState } from "react";

import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";

import AssignmentFilter from "./AssignmentFilter";

import {
  ASSIGNMENT_STATUS,
  ASSIGNMENT_PRIORITY,

  ASSIGNMENT_STATUS_LABEL,
  ASSIGNMENT_PRIORITY_LABEL,

} from "../data/mockAssignments";

import "../styles/assignment.css";

// ======================================================
// COMPONENT
// ======================================================

export default function AssignmentTable() {

  const { assignments } = useAssignmentWorkflow();

  const [filters, setFilters] = useState({
    keyword: "",
    status: "",
    priority: "",
    assignee: "",
  });

  // ======================================================
  // FILTER DATA
  // ======================================================

  const filtered = useMemo(() => {

    return assignments.filter((a) => {

      const matchKeyword =
        !filters.keyword ||
        a.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        a.description.toLowerCase().includes(filters.keyword.toLowerCase());

      const matchStatus =
        !filters.status ||
        a.status === filters.status;

      const matchPriority =
        !filters.priority ||
        a.priority === filters.priority;

      const matchAssignee =
        !filters.assignee ||
        a.assignedTo?.name
          ?.toLowerCase()
          .includes(filters.assignee.toLowerCase());

      return (
        matchKeyword &&
        matchStatus &&
        matchPriority &&
        matchAssignee
      );

    });

  }, [assignments, filters]);

  // ======================================================
  // ACTION MOCK
  // ======================================================

  const handleEdit = (id) => {
    console.log("Edit:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  const handleAssign = (id) => {
    console.log("Assign:", id);
  };

  // ======================================================
  // PRIORITY CLASS
  // ======================================================

  const getPriorityClass = (priority) => {

    switch (priority) {

      case ASSIGNMENT_PRIORITY.CRITICAL:
        return "assignment-priority-critical-text";

      case ASSIGNMENT_PRIORITY.HIGH:
        return "assignment-priority-high-text";

      case ASSIGNMENT_PRIORITY.MEDIUM:
        return "assignment-priority-medium-text";

      default:
        return "assignment-priority-low-text";
    }
  };

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
      <AssignmentFilter
        onFilterChange={setFilters}
      />

      {/* TABLE */}
      <table className="assignment-table-ui">

        <thead>
          <tr>

            <th>Mã</th>

            <th>Công việc</th>

            <th>Người thực hiện</th>

            <th>Người duyệt</th>

            <th>Trạng thái</th>

            <th>Ưu tiên</th>

            <th>Tiến độ</th>

            <th>Deadline</th>

            <th>Thao tác</th>

          </tr>
        </thead>

        <tbody>

          {filtered.map((a) => (

            <tr key={a.id}>

              <td>{a.id}</td>

              <td className="assignment-table-title-cell">

                <div className="assignment-table-title">
                  {a.title}
                </div>

                <div className="assignment-table-desc">
                  {a.description}
                </div>

              </td>

              <td>
                {a.assignedTo?.name || "Chưa phân công"}
              </td>

              <td>
                {a.reviewer?.name || "Chưa có"}
              </td>

              <td>

                <span
                  className={`assignment-status-badge status-${a.status.replace("_", "-")}`}
                >
                  {ASSIGNMENT_STATUS_LABEL[a.status]}
                </span>

              </td>

              <td className={getPriorityClass(a.priority)}>
                {ASSIGNMENT_PRIORITY_LABEL[a.priority]}
              </td>

              <td>

                <div className="assignment-progress-wrapper">

                  <div className="assignment-progress-bar">

                    <div
                      className="assignment-progress-fill"
                      style={{
                        width: `${a.progress}%`,
                      }}
                    />

                  </div>

                  <span>{a.progress}%</span>

                </div>

              </td>

              <td>
                {new Date(a.dueDate).toLocaleDateString()}
              </td>

              <td>

                <div className="assignment-table-actions">

                  <button
                    className="table-action-btn view"
                  >
                    Xem
                  </button>

                  <button
                    className="table-action-btn edit"
                    onClick={() => handleEdit(a.id)}
                  >
                    Sửa
                  </button>

                  <button
                    className="table-action-btn assign"
                    onClick={() => handleAssign(a.id)}
                  >
                    Gán
                  </button>

                  <button
                    className="table-action-btn delete"
                    onClick={() => handleDelete(a.id)}
                  >
                    Xóa
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}