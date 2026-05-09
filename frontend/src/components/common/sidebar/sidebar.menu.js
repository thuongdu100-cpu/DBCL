import { PERMISSIONS } from "../../../auth/permissions";
export const SIDEBAR_ITEMS = [

  // DASHBOARD
  {
    label: "Dashboard",
    path: "/dbcl/dashboard",
    permission: PERMISSIONS.VIEW_DASHBOARD,
  },

  // AUTH
  {
    label: "Quản lý người dùng",
    path: "/dbcl/users",
    permission: PERMISSIONS.MANAGE_USERS,
  },
  {
    label: "Quản lý vai trò",
    path: "/dbcl/roles",
    permission: PERMISSIONS.MANAGE_ROLES,
  },

  // STANDARD
  {
    label: "Bộ tiêu chuẩn",
    path: "/dbcl/standards",
    permission: PERMISSIONS.MANAGE_STANDARD,
  },

  // ASSIGNMENT
  {
    label: "Phân công",
    path: "/dbcl/assignments",
    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },
  {
    label: "My Assignments",
    path: "/dbcl/my-assignments",
    permission: PERMISSIONS.VIEW_MY_ASSIGNMENTS,
  },

  // EVIDENCE
  {
    label: "Minh chứng",
    path: "/dbcl/evidence",
    permission: PERMISSIONS.VIEW_EVIDENCE,
  },
  {
    label: "Rà soát",
    path: "/dbcl/review",
    permission: PERMISSIONS.REVIEW_EVIDENCE,
  },

  // IMPROVEMENT
  {
    label: "Cải tiến",
    path: "/dbcl/improvement",
    permission: PERMISSIONS.MANAGE_IMPROVEMENT,
  },

  // REPORT
  {
    label: "Báo cáo",
    path: "/dbcl/reports",
    permission: PERMISSIONS.VIEW_REPORT,
  },
];