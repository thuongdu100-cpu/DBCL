import { PERMISSIONS } from "../auth/permissions";

import StandardDashboard from "../features/dashboard/pages/StandardDashboard";
import StandardPage from "../features/standard/pages/StandardPage";
import EvaluationPage from "../features/evaluation/pages/EvaluationPage";
import AssignmentPage from "../features/assignment/pages/MyAssignmentsPage";
import ImprovementPage from "../features/improvement/pages/ImprovementPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import UserManagementPage from "../features/user/pages/UserManagementPage";
import RoleManagementPage from "../features/role/pages/RoleManagementPage";
import SubmitEvidencePage from "../features/evidence/pages/SubmitEvidencePage";
import EvidenceReviewPage from "../features/evidence/pages/EvidenceReviewPage";
import EvidenceDetailPage from "../features/evidence/pages/EvidenceDetailPage";
import EvidenceHistoryPage from "../features/evidence/pages/EvidenceHistoryPage";
import MyAssignmentsPage from "../features/assignment/pages/MyAssignmentsPage";
import AssignmentDetailPage from "../features/assignment/pages/AssignmentDetailPage";
import AssignmentBoardPage from "../features/assignment/pages/AssignmentBoardPage";
import EvidenceFeedbackPage from "../features/feedback/pages/EvidenceFeedbackPage";
import FeedbackHistoryPage from "../features/feedback/pages/FeedbackHistoryPage";



export const routes = [

  // =========================
  // DASHBOARD
  // =========================
  {
    path: "dashboard",
    label: "Dashboard",
    element: StandardDashboard,
    permission: PERMISSIONS.VIEW_DASHBOARD,
  },

  // =========================
  // AUTH ADMIN SYSTEM
  // =========================
  {
    path: "users",
    label: "Quản lý người dùng",
    element: UserManagementPage,
    permission: PERMISSIONS.MANAGE_USERS,
  },

  {
    path: "roles",
    label: "Quản lý vai trò",
    element: RoleManagementPage,
    permission: PERMISSIONS.MANAGE_ROLES,
  },

  // =========================
  // STANDARD MANAGEMENT
  // =========================
  {
    path: "standard",
    label: "Bộ tiêu chuẩn",
    element: StandardPage,
    permission: PERMISSIONS.MANAGE_STANDARD,
  },

  // =========================
  // ASSIGNMENT (WORKFLOW CORE)
  // =========================
  {
  path: "assignments",
  label: "My Assignments",
  element: MyAssignmentsPage,
  permission: PERMISSIONS.VIEW_MY_ASSIGNMENTS,
},

{
  path: "assignments/:id",
  label: "Assignment Detail",
  element: AssignmentDetailPage,
  permission: PERMISSIONS.MANAGE_ASSIGNMENT,
},

{
  path: "assignment-board",
  label: "Assignment Board",
  element: AssignmentBoardPage,
  permission: PERMISSIONS.MANAGE_ASSIGNMENT,
},

  // =========================
  // EVIDENCE WORKFLOW (CORE DBCL)
  // =========================
  {
  path: "evidence/submit",
  label: "Submit minh chứng",
  element: SubmitEvidencePage,
  permission: PERMISSIONS.UPLOAD_EVIDENCE,
},

{
  path: "evidence/review",
  label: "Rà soát minh chứng",
  element: EvidenceReviewPage,
  permission: PERMISSIONS.REVIEW_EVIDENCE,
},

{
  path: "evidence/:id",
  label: "Minh chứng",
  element: EvidenceDetailPage,
  permission: PERMISSIONS.VIEW_EVIDENCE,
},

{
  path: "evidence/history",
  label: "Lịch sử minh chứng",
  element: EvidenceHistoryPage,
  permission: PERMISSIONS.VIEW_EVIDENCE,
},

  // =========================
  // IMPROVEMENT
  // =========================
  {
    path: "improvement",
    label: "Cải tiến",
    element: ImprovementPage,
    permission: PERMISSIONS.MANAGE_IMPROVEMENT,
  },

  // =========================
  // REPORTS & ANALYTICS
  // =========================
  {
    path: "reports",
    label: "Báo cáo",
    element: ReportsPage,
    permission: PERMISSIONS.VIEW_REPORT,
  },

  // =========================
  // FEEDBACK
  // =========================

  {
  path: "feedback",
  label: "Feedback",
  element: EvidenceFeedbackPage,
  permission: PERMISSIONS.REVIEW_EVIDENCE,
},

{
  path: "feedback/history",
  label: "Feedback History",
  element: FeedbackHistoryPage,
  permission: PERMISSIONS.REVIEW_EVIDENCE,
},

];