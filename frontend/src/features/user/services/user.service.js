import { mockUsers } from "../mock/users.mock";

const KEY = "dbcl_users";

// =========================
// STORAGE HELPERS
// =========================

function load() {
  const data = localStorage.getItem(KEY);

  if (!data) {
    localStorage.setItem(KEY, JSON.stringify(mockUsers));
    return mockUsers;
  }

  return JSON.parse(data);
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

// =========================
// SERVICE LAYER
// =========================

export const userService = {

  async getAll() {
    return load(); // ✅ OK
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


