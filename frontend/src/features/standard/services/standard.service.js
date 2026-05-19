
import { standards } from "../data/mockData";

// =========================
// SERVICE
// =========================

export const standardService = {

  // GET ALL
  async getAll() {

    return standards;
  },

  // GET BY ID
  async getById(id) {

    return standards.find(
      item => item.id === id
    );
  },

  // CREATE
  async create(newItem) {

    standards.push(newItem);

    return newItem;
  },

  // UPDATE
  async update(id, payload) {

    const index = standards.findIndex(
      item => item.id === id
    );

    if (index !== -1) {

      standards[index] = {
        ...standards[index],
        ...payload,
      };
    }

    return standards[index];
  },

  // DELETE
  async remove(id) {

    const index = standards.findIndex(
      item => item.id === id
    );

    if (index !== -1) {

      standards.splice(index, 1);
    }

    return true;
  },

};

