import { mockFeedback } from "../data/mockFeedback";

let data = [...mockFeedback];

export const feedbackService = {

  getAll: () => data,

  getByEvidence: (evidenceId) =>
    data.filter(f => f.evidenceId === evidenceId),

  create: ({ evidenceId, assignmentId, message }) => {

    const newItem = {
      id: Date.now(),
      evidenceId,
      assignmentId,
      message,
      status: "OPEN",
      createdAt: new Date().toISOString().split("T")[0],
    };

    data.push(newItem);
    return newItem;
  },

  close: (id) => {
    const item = data.find(f => f.id === id);
    if (item) item.status = "CLOSED";
  },
};