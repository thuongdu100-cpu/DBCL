import { useMemo } from "react";
import useAssignmentWorkflow from "../hooks/useAssignmentWorkflow";
import AssignmentCard from "../components/AssignmentCard";
import { ASSIGNMENT_STATUS } from "../data/mockAssignments";
import AssignmentTable from "../components/AssignmentTable";
import "../styles/assignment.css";
// ======================================================
// PERSONAL WORK INBOX
// ======================================================

export default function AssignmentMyPage() {

  const {
    assignments,
    startTask,
    submitTask,
  } = useAssignmentWorkflow();

  // giả lập user hiện tại (sau này lấy từ auth)
  const currentUser = {
    id: "U10",
    role: "faculty",
    name: "Nguyễn Văn A",
  };

  // ======================================================
  // FILTER MY TASKS
  // ======================================================

  const myTasks = useMemo(() => {

    return assignments.filter(a =>
      a.assignedTo?.id === currentUser.id
    );

  }, [assignments]);

  // ======================================================
  // GROUP BY STATUS (PERSONAL VIEW)
  // ======================================================

  const grouped = useMemo(() => {

    return {
      todo: myTasks.filter(a =>
        a.status === ASSIGNMENT_STATUS.ASSIGNED
      ),

      doing: myTasks.filter(a =>
        a.status === ASSIGNMENT_STATUS.IN_PROGRESS
      ),

      review: myTasks.filter(a =>
        a.status === ASSIGNMENT_STATUS.WAITING_REVIEW
      ),

      done: myTasks.filter(a =>
        a.status === ASSIGNMENT_STATUS.DONE
      ),

      rejected: myTasks.filter(a =>
        a.status === ASSIGNMENT_STATUS.REJECTED
      ),

      overdue: myTasks.filter(a =>
        a.status === ASSIGNMENT_STATUS.OVERDUE
      ),
    };

  }, [myTasks]);

  // ======================================================
  // RENDER COLUMN
  // ======================================================

  const renderColumn = (title, items) => (
    <div className="mywork-column">

      <div className="mywork-title">
        {title} ({items.length})
      </div>

      <div className="mywork-body">

        {items.map(item => (
          <AssignmentCard
            key={item.id}
            assignment={item}

            onStart={startTask}
            onSubmit={submitTask}

            onOpenDetail={(id) => {
              console.log("open detail:", id);
            }}
          />
        ))}

      </div>

    </div>
  );

  // ======================================================
  // UI
  // ======================================================

  return (
    <div className="assignment-mywork">

      <div className="mywork-header">
        <h2>Công việc của tôi</h2>
        <p>Danh sách toàn bộ nhiệm vụ được giao</p>
      </div>

      <div className="mywork-grid">

        {renderColumn("Cần làm", grouped.todo)}

        {renderColumn("Đang làm", grouped.doing)}

        {renderColumn("Chờ duyệt", grouped.review)}

        {renderColumn("Hoàn thành", grouped.done)}

        {renderColumn("Từ chối", grouped.rejected)}

        {renderColumn("Quá hạn", grouped.overdue)}

      </div>
    {/* TABLE VIEW */}
    <div className="assignment-table-section">
     
      <AssignmentTable />
    </div>
    </div>
  );
}