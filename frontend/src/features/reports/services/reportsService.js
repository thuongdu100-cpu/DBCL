import { mockReports } from "../data/mockReports";

export const reportsService = {
  getAllReports: async () => {
    return Promise.resolve(mockReports);
  },
};