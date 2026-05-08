import { PERMISSIONS } from "../../../auth/permissions";

export const sidebarMenu = [

  {
    label: "Dashboard",
    path: "/dbcl/dashboard",
    permission: PERMISSIONS.VIEW_DASHBOARD,
  },

  {
    label: "Quản lý tiêu chuẩn",
    path: "/dbcl/standard",
    permission: PERMISSIONS.MANAGE_STANDARD,
  },

  {
    label: "Quản lý đánh giá",
    path: "/dbcl/evaluation",
    permission: PERMISSIONS.MANAGE_EVALUATION,
  },

  {
    label: "Gán phụ trách",
    path: "/dbcl/assignment",
    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },

  {
    label: "Hộp minh chứng",
    path: "/dbcl/evidence",
    permission: PERMISSIONS.VIEW_EVIDENCE,
  },

  {
    label: "Kế hoạch cải tiến",
    path: "/dbcl/improvement",
    permission: PERMISSIONS.MANAGE_IMPROVEMENT,
  },

  {
    label: "Báo cáo",
    path: "/dbcl/report",
    permission: PERMISSIONS.VIEW_REPORT,
  },
];