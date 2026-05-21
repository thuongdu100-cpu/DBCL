import { PERMISSIONS } from "../auth/permissions";
import { Navigate } from "react-router-dom";

// =========================
// DASHBOARD
// =========================
import StandardDashboard from "../features/dashboard/pages/Dashboard";

// =========================
// STANDARD
// =========================
import StandardPage from "../features/standard/pages/StandardPage";
import CriteriaPage from "../features/standard/pages/CriteriaPage";
import IndicatorPage from "../features/standard/pages/IndicatorPage";
import IndicatorWorkflowPage from "../features/standard/pages/IndicatorWorkflowPage";

// =========================
// ASSIGNMENT 
// =========================
import AssignmentMyPage from "../features/assignment/pages/AssignmentMyPage";
import AssignmentBoardPage from "../features/assignment/pages/AssignmentBoardPage";
import AssignmentDetailPage from "../features/assignment/components/AssignmentDetail";
import AssignmentHistoryPage from "../features/assignment/pages/AssignmentHistoryPage";

// =========================
// EVIDENCE 
// =========================
import EvidenceRepositoryPage from "../features/evidence/pages/EvidenceRepositoryPage";

// =========================
// FEEDBACK
// =========================
import EvidenceFeedbackPage from "../features/feedback/pages/EvidenceFeedbackPage";
import FeedbackHistoryPage from "../features/feedback/pages/FeedbackHistoryPage";

// =========================
// ADMIN
// =========================
import UserManagementPage from "../features/user/pages/UserManagementPage";
import RoleManagementPage from "../features/role/pages/RoleManagementPage";

// =========================
// IMPROVEMENT
// =========================
import ImprovementPage from "../features/improvement/pages/ImprovementPage";

// =========================
// REPORTS 
// =========================
import ReportsPage from "../features/reports/pages/ReportsPage";
import ReportsEvaluationPage from "../features/reports/pages/ReportsEvaluationPage";
import ReportsEvidencePage from "../features/reports/pages/ReportsEvidencePage";
import ReportsImprovementPage from "../features/reports/pages/ReportsImprovementPage";
import ReportsActivityPage from "../features/reports/pages/ReportsActivityPage";

// =========================
// PROFILE
// =========================
import ProfilePage from "../features/profile/pages/ProfilePage";

export const routes = [

  // =========================
  // ADMIN
  // =========================
  {
    path: "dashboard",
    label: "Dashboard",
    element: StandardDashboard,
    permission: PERMISSIONS.VIEW_DASHBOARD,
  },
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
  // STANDARD
  // =========================
  {
    path: "standard",
    label: "Bộ tiêu chuẩn",
    element: StandardPage,
    permission: PERMISSIONS.MANAGE_STANDARD,
  },
  {
    path: "standard/:standardId",
    element: CriteriaPage,
    permission: PERMISSIONS.MANAGE_STANDARD,
    sidebar: false,
  },
  {
    path: "standard/:standardId/:criteriaId",
    element: IndicatorPage,
    permission: PERMISSIONS.MANAGE_STANDARD,
    sidebar: false,
  },
  {
    path: "standard/:standardId/:criteriaId/:indicatorId",
    element: IndicatorWorkflowPage,
    permission: PERMISSIONS.MANAGE_STANDARD,
    sidebar: false,
  },

  // =========================
  // ASSIGNMENT (FIXED FLAT MODEL)
  // =========================
  {
    path: "assignments",
    label: "Công việc của tôi",
    element: AssignmentMyPage,
    permission: PERMISSIONS.VIEW_MY_ASSIGNMENTS,
  },
  {
    path: "assignment/board",
    label: "Bảng phân công",
    element: AssignmentBoardPage,
    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },
  {
    path: "assignment/history",
    label: "Lịch sử công việc",
    element: AssignmentHistoryPage,
    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },
  

  // =========================
  // EVIDENCE
  // =========================
  {
    path: "evidence/repository",
    label: "Kho minh chứng",
    element: EvidenceRepositoryPage,
    permission: PERMISSIONS.VIEW_EVIDENCE,
  },
  

  // =========================
  // FEEDBACK
  // =========================
  {
    path: "feedback",
    label: "Phản hồi minh chứng",
    element: EvidenceFeedbackPage,
    permission: PERMISSIONS.REVIEW_EVIDENCE,
  },
  {
    path: "feedback/history",
    label: "Lịch sử phản hồi",
    element: FeedbackHistoryPage,
    permission: PERMISSIONS.REVIEW_EVIDENCE,
  },

  // =========================
  // IMPROVEMENT
  // =========================
  {
    path: "improvement",
    label: "Kế hoạch cải tiến",
    element: ImprovementPage,
    permission: PERMISSIONS.MANAGE_IMPROVEMENT,
  },

  // =========================
  // REPORTS (NESTED OK)
  // =========================
  {
    path: "reports",
    label: "Báo cáo",
    element: ReportsPage,
    permission: PERMISSIONS.VIEW_REPORT,
    children: [
      {
        index: true,
        element: () => <Navigate to="evaluation" replace />,
      },
      {
        path: "evaluation",
        element: ReportsEvaluationPage,
        permission: PERMISSIONS.VIEW_REPORT,
      },
      {
        path: "evidence",
        element: ReportsEvidencePage,
        permission: PERMISSIONS.VIEW_REPORT,
      },
      {
        path: "improvement",
        element: ReportsImprovementPage,
        permission: PERMISSIONS.VIEW_REPORT,
      },
      {
        path: "activity",
        element: ReportsActivityPage,
        permission: PERMISSIONS.VIEW_REPORT,
      },
    ],
  },
  // =========================
  // PROFILE
  // =========================
  {
    path: "profile",
    label: "Hồ sơ cá nhân",
    element: ProfilePage,
    permission: PERMISSIONS.VIEW_PROFILE,
    sidebar: false,
  }
];