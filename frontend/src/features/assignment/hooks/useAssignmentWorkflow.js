import { useState } from "react";
import {
  ASSIGNMENT_STATUS,
  mockAssignments,
} from "../data/mockAssignments";

// ======================================================
// WORKFLOW ENGINE HOOK
// ======================================================

export default function useAssignmentWorkflow() {

  const [assignments, setAssignments] = useState(mockAssignments);

  // ======================================================
  // GET ASSIGNMENT BY ID
  // ======================================================

  const getAssignmentById = (id) => {
    return assignments.find(a => a.id === id);
  };

  // ======================================================
  // ASSIGN / REASSIGN
  // ======================================================

  const assignTask = (id, user) => {

    setAssignments(prev =>
      prev.map(a => {
        if (a.id !== id) return a;

        return {
          ...a,
          assignedTo: user,
          status: ASSIGNMENT_STATUS.ASSIGNED,
          assignedAt: new Date().toISOString(),

          history: [
            ...a.history,
            {
              action: "assigned",
              by: user.name,
              timestamp: new Date().toISOString(),
            },
          ],
        };
      })
    );
  };

  const reassignTask = (id, newUser) => {
    assignTask(id, newUser);
  };

  // ======================================================
  // START TASK
  // ======================================================

  const startTask = (id, user) => {

    setAssignments(prev =>
      prev.map(a => {
        if (a.id !== id) return a;

        // RULE: chỉ assigned user mới được start
        if (a.assignedTo?.id !== user.id) return a;

        return {
          ...a,
          status: ASSIGNMENT_STATUS.IN_PROGRESS,
          startedAt: new Date().toISOString(),

          history: [
            ...a.history,
            {
              action: "started",
              by: user.name,
              timestamp: new Date().toISOString(),
            },
          ],
        };
      })
    );
  };

  // ======================================================
  // SUBMIT TASK
  // ======================================================

  const submitTask = (id, user) => {

    setAssignments(prev =>
      prev.map(a => {
        if (a.id !== id) return a;

        // RULE: only assignee can submit
        if (a.assignedTo?.id !== user.id) return a;

        return {
          ...a,
          status: ASSIGNMENT_STATUS.WAITING_REVIEW,
          submittedAt: new Date().toISOString(),
          progress: 100,

          history: [
            ...a.history,
            {
              action: "submitted",
              by: user.name,
              timestamp: new Date().toISOString(),
            },
          ],
        };
      })
    );
  };

  // ======================================================
  // REVIEW FLOW (APPROVE / REJECT)
  // ======================================================

  const approveTask = (id, user) => {

    setAssignments(prev =>
      prev.map(a => {
        if (a.id !== id) return a;

        return {
          ...a,
          status: ASSIGNMENT_STATUS.DONE,
          reviewedAt: new Date().toISOString(),

          history: [
            ...a.history,
            {
              action: "approved",
              by: user.name,
              timestamp: new Date().toISOString(),
            },
          ],
        };
      })
    );
  };

  const rejectTask = (id, user, reason = "") => {

    setAssignments(prev =>
      prev.map(a => {
        if (a.id !== id) return a;

        return {
          ...a,
          status: ASSIGNMENT_STATUS.REJECTED,
          reviewedAt: new Date().toISOString(),

          history: [
            ...a.history,
            {
              action: "rejected",
              by: user.name,
              reason,
              timestamp: new Date().toISOString(),
            },
          ],
        };
      })
    );
  };

  // ======================================================
  // OVERDUE CHECK (SIMPLE RULE ENGINE)
  // ======================================================

  const checkOverdue = () => {

    const now = new Date();

    setAssignments(prev =>
      prev.map(a => {

        if (
          a.status === ASSIGNMENT_STATUS.DONE ||
          a.status === ASSIGNMENT_STATUS.REJECTED
        ) {
          return a;
        }

        if (new Date(a.dueDate) < now) {

          return {
            ...a,
            status: ASSIGNMENT_STATUS.OVERDUE,
          };
        }

        return a;
      })
    );
  };

  // ======================================================
  // RETURN API
  // ======================================================

  return {
    assignments,

    getAssignmentById,

    assignTask,
    reassignTask,

    startTask,
    submitTask,

    approveTask,
    rejectTask,

    checkOverdue,
  };
}