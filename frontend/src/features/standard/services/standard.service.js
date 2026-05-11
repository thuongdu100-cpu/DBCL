import { standards } from "../data/mockData";

const KEY = "dbcl_standards";

// =========================
// LOAD / SAVE CORE
// =========================

function loadData() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : standards;
}

function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

// =========================
// SERVICE
// =========================

export const standardService = {

  // GET ALL
  getAll() {
    return Promise.resolve(loadData());
  },

  // GET BY ID
  getById(id) {
    const data = loadData();
    return Promise.resolve(
      data.find(item => item.id === id)
    );
  },

  // CREATE
  create(newItem) {
    const data = loadData();
    const updated = [...data, newItem];

    saveData(updated);
    return Promise.resolve(newItem);
  },

  // UPDATE
  update(id, payload) {
    const data = loadData();

    const updated = data.map(item =>
      item.id === id
        ? { ...item, ...payload }
        : item
    );

    saveData(updated);
    return Promise.resolve(updated.find(i => i.id === id));
  },

  // DELETE
  remove(id) {
    const data = loadData();

    const updated = data.filter(
      item => item.id !== id
    );

    saveData(updated);
    return Promise.resolve(true);
  },

  // RESET (DEBUG)
  reset() {
    localStorage.removeItem(KEY);
    return Promise.resolve(standards);
  }

};