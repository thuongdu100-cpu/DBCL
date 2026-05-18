import { useMemo, useState } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import AssignmentCard from "../components/AssignmentCard";
import AssignmentTable from "../components/AssignmentTable";
import AssignmentDetailModal from "../components/AssignmentDetailModal";
import { ASSIGNMENT_STATUS, mockAssignments } from "../data/mockAssignments";
import "../styles/assignment.css";

export default function AssignmentBoardPage() {

  const { startTask, submitTask } = useAssignmentWorkflow();

  const [selectedId, setSelectedId] = useState(null);

  const assignments = mockAssignments;

  const grouped = useMemo(() => ({
    assigned: assignments.filter(a => a.status === ASSIGNMENT_STATUS.ASSIGNED),
    inProgress: assignments.filter(a => a.status === ASSIGNMENT_STATUS.IN_PROGRESS),
    waitingReview: assignments.filter(a => a.status === ASSIGNMENT_STATUS.WAITING_REVIEW),
    done: assignments.filter(a => a.status === ASSIGNMENT_STATUS.DONE),
    rejected: assignments.filter(a => a.status === ASSIGNMENT_STATUS.REJECTED),
    overdue: assignments.filter(a => a.status === ASSIGNMENT_STATUS.OVERDUE),
  }), [assignments]);

  const selected = useMemo(() =>
    assignments.find(a => a.id === selectedId),
    [selectedId, assignments]
  );

  const renderColumn = (title, items) => (
    <div className="board-column">

      <div className="board-column-title">
        {title} ({items.length})
      </div>

      <div className="board-column-body">

        {items.map(item => (
          <AssignmentCard
            key={item.id}
            assignment={item}
            onStart={startTask}
            onSubmit={submitTask}
            onOpenDetail={(id) => setSelectedId(id)}
          />
        ))}

      </div>

    </div>
  );

  return (
    <div className="assignment-board">

      <div className="board-header">
        <h2>Bảng phân công</h2>
        <p>Quản lý công việc</p>
      </div>

      <div className="board-grid">
        {renderColumn("Đã giao", grouped.assigned)}
        {renderColumn("Đang làm", grouped.inProgress)}
        {renderColumn("Chờ duyệt", grouped.waitingReview)}
        {renderColumn("Hoàn thành", grouped.done)}
        {renderColumn("Từ chối", grouped.rejected)}
        {renderColumn("Quá hạn", grouped.overdue)}
      </div>

      <div className="assignment-table-section">
        <AssignmentTable data={assignments} />
      </div>

      <AssignmentDetailModal
        assignment={selected}
        onClose={() => setSelectedId(null)}
      />

    </div>
  );
}