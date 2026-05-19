import { PERMISSIONS } from "../../../auth/permissions";

export const SIDEBAR_ITEMS = [

  // =========================
  // DASHBOARD
  // =========================
  {
    label: "Dashboard",
    path: "dashboard",
    permission: PERMISSIONS.VIEW_DASHBOARD,
  },

  // =========================
  // SYSTEM ADMIN
  // =========================
  {
    label: "Quản lý người dùng",
    path: "users",
    permission: PERMISSIONS.MANAGE_USERS,
  },

  {
    label: "Quản lý vai trò",
    path: "roles",
    permission: PERMISSIONS.MANAGE_ROLES,
  },

  // =========================
  // STANDARD
  // =========================
  {
    label: "Bộ tiêu chuẩn",
    path: " standard",
    permission: PERMISSIONS.MANAGE_STANDARD,
  },

  // =========================
  // ASSIGNMENT
  // =========================
  {
    label: "Công việc của tôi",
    path: "assignments",
    permission: PERMISSIONS.VIEW_MY_ASSIGNMENTS,
  },

  {
    label: "Bảng phân công",
    path: "assignment/board",
    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },



  {
    label: "Lịch sử công việc",
    path: "assignment/history",
    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },

  // =========================
  // EVIDENCE (OK)
  // =========================

  {
    label: "Kho minh chứng",
    path: "evidence/repository",
    permission: PERMISSIONS.VIEW_EVIDENCE,
  },

  {
    label: "Nộp minh chứng",
    path: "evidence/submit",
    permission: PERMISSIONS.UPLOAD_EVIDENCE,
  },

  {
    label: "Hàng chờ kiểm duyệt",
    path: "evidence/queue",
    permission: PERMISSIONS.REVIEW_EVIDENCE,
  },

  {
    label: "Lịch sử minh chứng",
    path: "evidence/history",
    permission: PERMISSIONS.VIEW_EVIDENCE,
  },

  // =========================
  // IMPROVEMENT
  // =========================
  {
    label: "Cải tiến",
    path: "improvement",
    permission: PERMISSIONS.MANAGE_IMPROVEMENT,
  },

  // =========================
  // REPORTS
  // =========================
  {
    label: "Báo cáo",
    path: "reports",
    permission: PERMISSIONS.VIEW_REPORT,
  },
];