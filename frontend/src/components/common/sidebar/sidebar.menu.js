import { PERMISSIONS } from "../../../auth/permissions";

export const SIDEBAR_ITEMS = [

  {
    label: "Dashboard",
    path: "dashboard",
    permission: PERMISSIONS.DASHBOARD_VIEW,
  },

  {
    label: "Quản lý người dùng",
    path: "users",
    permission: PERMISSIONS.USER_MANAGE,
  },

  {
    label: "Quản lý vai trò",
    path: "roles",
    permission: PERMISSIONS.ROLE_MANAGE,
  },

  {
    label: "Bộ tiêu chuẩn",
    path: "standard",
    permission: PERMISSIONS.STANDARD_MANAGE,
  },

  {
    label: "Công việc của tôi",
    path: "assignments",
    permission: PERMISSIONS.ASSIGNMENT_VIEW_MY,
  },

  {
    label: "Bảng phân công",
    path: "assignment/board",
    permission: PERMISSIONS.ASSIGNMENT_MANAGE,
  },

  {
    label: "Lịch sử công việc",
    path: "assignment/history",
    permission: PERMISSIONS.ASSIGNMENT_MANAGE,
  },

  {
    label: "Kho minh chứng",
    path: "evidence/repository",
    permission: PERMISSIONS.EVIDENCE_VIEW,
  },

  {
    label: "Nộp minh chứng",
    path: "evidence/submit",
    permission: PERMISSIONS.EVIDENCE_UPLOAD,
  },

  {
    label: "Hàng chờ kiểm duyệt",
    path: "evidence/queue",
    permission: PERMISSIONS.EVIDENCE_REVIEW,
  },

  {
    label: "Cải tiến",
    path: "improvement",
    permission: PERMISSIONS.IMPROVEMENT_MANAGE,
  },

  {
    label: "Báo cáo",
    path: "reports",
    permission: PERMISSIONS.REPORT_VIEW,
  },
];