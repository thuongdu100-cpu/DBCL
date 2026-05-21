import { PERMISSIONS } from "../auth/permissions";

export const PERMISSION_GROUPS = [
  {
    name: "Dashboard",
    permissions: [PERMISSIONS.VIEW_DASHBOARD],
  },
  {
    name: "User & Role",
    permissions: [
      PERMISSIONS.MANAGE_USERS,
      PERMISSIONS.MANAGE_ROLES,
      PERMISSIONS.ASSIGN_ROLE_TO_USER,
      PERMISSIONS.VIEW_ROLE_DETAIL,
      PERMISSIONS.UPDATE_ROLE_PERMISSIONS,
    ],
  },
  {
    name: "Standard",
    permissions: [
      PERMISSIONS.MANAGE_STANDARD,
      PERMISSIONS.VIEW_STANDARD_DETAIL,
      PERMISSIONS.UPDATE_STANDARD,
      PERMISSIONS.IMPORT_EVIDENCE_CATEGORY,
    ],
  },
  {
    name: "Assignment",
    permissions: [
      PERMISSIONS.MANAGE_ASSIGNMENT,
      PERMISSIONS.VIEW_MY_ASSIGNMENTS,
      PERMISSIONS.TAKE_ASSIGNMENT,
      PERMISSIONS.UPDATE_ASSIGNMENT_STATUS,
    ],
  },
  {
    name: "Evidence",
    permissions: [
      PERMISSIONS.VIEW_EVIDENCE,
      PERMISSIONS.UPLOAD_EVIDENCE,
      PERMISSIONS.REVIEW_EVIDENCE,
      PERMISSIONS.APPROVE_EVIDENCE,
      PERMISSIONS.REJECT_EVIDENCE,
    ],
  },
  {
    name: "Report",
    permissions: [
      PERMISSIONS.VIEW_REPORT,
      PERMISSIONS.VIEW_STATISTICS,
      PERMISSIONS.EXPORT_REPORT,
    ],
  },
];