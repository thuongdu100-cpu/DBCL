import { mockAssignments } from "../mock/mockAssignment";

// ======================================================
// ASSIGNMENT SERVICE LAYER (DATA ACCESS)
// ======================================================

let assignmentsDB = [...mockAssignments];

// ======================================================
// GET ALL
// ======================================================

export const getAssignments = () => {
  return Promise.resolve(assignmentsDB);
};

// ======================================================
// GET BY ID
// ======================================================

export const getAssignmentById = (id) => {
  const data = assignmentsDB.find(a => a.id === id);
  return Promise.resolve(data);
};

// ======================================================
// UPDATE ASSIGNMENT (GENERIC)
// ======================================================

export const updateAssignment = (id, payload) => {

  assignmentsDB = assignmentsDB.map(a => {

    if (a.id !== id) return a;

    return {
      ...a,
      ...payload,
    };
  });

  return Promise.resolve(
    assignmentsDB.find(a => a.id === id)
  );
};

// ======================================================
// ASSIGN USER
// ======================================================

export const assignUser = (id, user) => {

  return updateAssignment(id, {
    assignedTo: user,
    status: "assigned",
    assignedAt: new Date().toISOString(),
  });
};

// ======================================================
// START TASK
// ======================================================

export const startTask = (id, user) => {

  const task = assignmentsDB.find(a => a.id === id);

  if (!task || task.assignedTo?.id !== user.id) {
    return Promise.resolve(null);
  }

  return updateAssignment(id, {
    status: "in_progress",
    startedAt: new Date().toISOString(),
  });
};

// ======================================================
// SUBMIT TASK
// ======================================================

export const submitTask = (id, user) => {

  const task = assignmentsDB.find(a => a.id === id);

  if (!task || task.assignedTo?.id !== user.id) {
    return Promise.resolve(null);
  }

  return updateAssignment(id, {
    status: "waiting_review",
    submittedAt: new Date().toISOString(),
    progress: 100,
  });
};

// ======================================================
// REVIEW TASK
// ======================================================

export const approveTask = (id, user) => {

  return updateAssignment(id, {
    status: "done",
    reviewedAt: new Date().toISOString(),
  });
};

export const rejectTask = (id, user, reason = "") => {

  return updateAssignment(id, {
    status: "rejected",
    reviewedAt: new Date().toISOString(),
    rejectionReason: reason,
  });
};

// ======================================================
// FILTER HELPERS
// ======================================================

export const filterAssignments = (list, filters) => {

  return list.filter(a => {

    const matchStatus =
      !filters.status || a.status === filters.status;

    const matchPriority =
      !filters.priority || a.priority === filters.priority;

    const matchKeyword =
      !filters.keyword ||
      a.title.toLowerCase().includes(filters.keyword.toLowerCase());

    const matchAssignee =
      !filters.assignee ||
      a.assignedTo?.name === filters.assignee;

    return (
      matchStatus &&
      matchPriority &&
      matchKeyword &&
      matchAssignee
    );
  });
};