import { PERMISSIONS } from "../auth/permissions";

export const mockRoles = [
  {
    id: 1,
    code: "admin",
    name: "Quản trị hệ thống",
    description: "Toàn quyền hệ thống",
    users: ["admin", "qa"],
    status: "ACTIVE",
    permissions: Object.values(PERMISSIONS), // 🔥 FULL quyền
  },

  {
    id: 2,
    code: "qa",
    name: "Phòng KT & ĐBCL",
    description: "Quản lý tiêu chuẩn và đánh giá",
    users: ["qa"],
    status: "ACTIVE",
    permissions: [
      PERMISSIONS.VIEW_DASHBOARD,
      PERMISSIONS.MANAGE_STANDARD,
      PERMISSIONS.VIEW_EVIDENCE,
      PERMISSIONS.UPLOAD_EVIDENCE,
      PERMISSIONS.REVIEW_EVIDENCE,
      PERMISSIONS.MANAGE_IMPROVEMENT,
      PERMISSIONS.VIEW_REPORT,
    ],
  },

  {
    id: 3,
    code: "manager",
    name: "Trưởng phòng",
    description: "Rà soát & phê duyệt",
    users: ["manager"],
    status: "ACTIVE",
    permissions: [
      PERMISSIONS.VIEW_DASHBOARD,
      PERMISSIONS.REVIEW_EVIDENCE,
      PERMISSIONS.MANAGE_IMPROVEMENT,
      PERMISSIONS.VIEW_REPORT,
    ],
  },

  {
    id: 4,
    code: "faculty",
    name: "Đơn vị / Khoa",
    description: "Upload minh chứng",
    users: ["faculty"],
    status: "ACTIVE",
    permissions: [
      PERMISSIONS.VIEW_DASHBOARD,
      PERMISSIONS.VIEW_EVIDENCE,
      PERMISSIONS.UPLOAD_EVIDENCE,
    ],
  },

  {
    id: 5,
    code: "leader",
    name: "Lãnh đạo",
    description: "Xem báo cáo",
    users: ["leader"],
    status: "ACTIVE",
    permissions: [
      PERMISSIONS.VIEW_DASHBOARD,
      PERMISSIONS.VIEW_REPORT,
    ],
  },
];