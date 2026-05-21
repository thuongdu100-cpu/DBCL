import { mockUsers } from "../mock/users.mock";

const KEY = "dbcl_users";

/* =========================
   SAFE LOAD (FIX FULL)
========================= */
function load() {
  const raw = localStorage.getItem(KEY);

  // 🔥 CHƯA CÓ DATA → seed mock
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(mockUsers));
    return mockUsers;
  }

  try {
    const parsed = JSON.parse(raw);

    // 🔥 NOT ARRAY → reset
    if (!Array.isArray(parsed)) {
      localStorage.setItem(KEY, JSON.stringify(mockUsers));
      return mockUsers;
    }

    // 🔥 EMPTY ARRAY → seed lại mock
    if (parsed.length === 0) {
      localStorage.setItem(KEY, JSON.stringify(mockUsers));
      return mockUsers;
    }

    return parsed;
  } catch (e) {
    console.error("LOCALSTORAGE PARSE ERROR:", e);

    localStorage.setItem(KEY, JSON.stringify(mockUsers));
    return mockUsers;
  }
}

/* =========================
   SAVE
========================= */
function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

/* =========================
   SERVICE
========================= */
export const userService = {

  async getAll() {
    return load();
  },

  async create(payload) {
    const data = load();

    const newUser = {
      id: Date.now(),
      ...payload,
    };

    const updated = [newUser, ...data];
    save(updated);

    return updated;
  },

  async update(id, payload) {
    const data = load();

    const updated = data.map(u =>
      u.id === id ? { ...u, ...payload } : u
    );

    save(updated);
    return updated;
  },

  async remove(id) {
    const data = load();

    const updated = data.filter(u => u.id !== id);

    save(updated);
    return updated;
  },

  async toggleStatus(id) {
    const data = load();

    const updated = data.map(u =>
      u.id === id
        ? {
            ...u,
            status: u.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
          }
        : u
    );

    save(updated);
    return updated;
  },
};