import { mockRoles } from "../data/mockRoles";

let roles = [...mockRoles];

export const roleService = {

  getAll: () => {
    return Promise.resolve(roles);
  },

  create: (role) => {
    roles.push({ ...role, id: Date.now() });
    return Promise.resolve(role);
  },

  update: (id, data) => {
    roles = roles.map(r =>
      r.id === id ? { ...r, ...data } : r
    );
    return Promise.resolve(data);
  },

  remove: (id) => {
    roles = roles.filter(r => r.id !== id);
    return Promise.resolve(id);
  },
};