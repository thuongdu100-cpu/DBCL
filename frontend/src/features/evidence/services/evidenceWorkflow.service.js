import { mockEvidence } from "../data/mockEvidence";

let data = [...mockEvidence];

export const evidenceWorkflowService = {

  getAll: () => data,

  getById: (id) => data.find(e => e.id === id),

  submit: (payload) => {
    const newItem = {
      id: Date.now(),
      ...payload,
      status: "PENDING",
      history: [{ action: "CREATE", by: payload.createdBy }],
    };
    data.push(newItem);
    return newItem;
  },

  approve: (id, by) => {
    const item = data.find(e => e.id === id);
    if (item) {
      item.status = "APPROVED";
      item.history.push({ action: "APPROVE", by });
    }
  },

  reject: (id, by, reason) => {
    const item = data.find(e => e.id === id);
    if (item) {
      item.status = "REJECTED";
      item.history.push({ action: "REJECT", by, reason });
    }
  },

  resubmit: (id) => {
    const item = data.find(e => e.id === id);
    if (item) {
      item.status = "PENDING";
      item.history.push({ action: "RESUBMIT" });
    }
  }
};