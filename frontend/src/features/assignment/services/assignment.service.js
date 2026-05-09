import { mockAssignments } from "../data/mockAssignments";

let data = [...mockAssignments];

export const assignmentService = {

  getAll: () => data,

  getByRole: (role) => {
    return data.filter(a => a.assignedTo === role);
  },

  create: (item) => {
    const newItem = {
      id: Date.now(),
      status: "PENDING",
      progress: 0,
      ...item,
    };
    data.push(newItem);
    return newItem;
  },

  updateProgress: (id, progress) => {
    const item = data.find(a => a.id === id);
    if (item) {
      item.progress = progress;
      item.status = progress === 100 ? "COMPLETED" : "IN_PROGRESS";
    }
  },
};