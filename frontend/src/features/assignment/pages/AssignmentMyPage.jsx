import { useMemo, useState } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import AssignmentMyTaskItem from "../components/AssignmentMyTaskItem";
import AssignmentDetailModal from "../components/AssignmentDetailModal";
import { ASSIGNMENT_STATUS } from "../data/mockAssignments";
import "../styles/assignment.css";

export default function AssignmentMyPage() {

  const { assignments, startTask, submitTask } = useAssignmentWorkflow();

  const [selectedId, setSelectedId] = useState(null);

  const currentUser = { id: "U10" };

  const myTasks = useMemo(() =>
    assignments.filter(a => a.assignedTo?.id === currentUser.id),
    [assignments]
  );

  const todoTasks = useMemo(() =>
    myTasks.filter(a => a.status === ASSIGNMENT_STATUS.ASSIGNED),
    [myTasks]
  );

  const selected = useMemo(() =>
    assignments.find(a => a.id === selectedId),
    [selectedId, assignments]
  );

  return (
  <div className="assignment-mywork">

    {/* HEADER */}
    <div className="assignment-mywork-header">

      <div>
        <h2>Công việc của tôi</h2>
        <p>Theo dõi và xử lý các nhiệm vụ được giao</p>
      </div>

      <div className="assignment-mywork-summary">

        <div className="assignment-mywork-summary-card">
          <span>{myTasks.length}</span>
          <small>Tổng công việc</small>
        </div>

        <div className="assignment-mywork-summary-card active">
          <span>{todoTasks.length}</span>
          <small>Cần xử lý</small>
        </div>

      </div>

    </div>

    {/* CONTENT */}
    <div className="assignment-mywork-body">

      {todoTasks.length > 0 ? (

        <div className="assignment-mywork-list">

          {todoTasks.map((item) => (
            <AssignmentMyTaskItem
              key={item.id}
              assignment={item}
              onStart={startTask}
              onSubmit={submitTask}
              onOpenDetail={(id) => setSelectedId(id)}
            />
          ))}

        </div>

      ) : (

        <div className="assignment-mywork-empty">

          <div className="assignment-mywork-empty-icon">
            📋
          </div>

          <h3>Không có công việc cần xử lý</h3>

          <p>
            Hiện tại bạn chưa có nhiệm vụ nào ở trạng thái cần thực hiện.
          </p>

        </div>

      )}

    </div>

    <AssignmentDetailModal
      assignment={selected}
      onClose={() => setSelectedId(null)}
    />

  </div>
);
}