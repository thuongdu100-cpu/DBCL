import { PERMISSIONS } from "../auth/permissions";
import { Navigate } from "react-router-dom";
// =========================
// DASHBOARD
// =========================

import StandardDashboard from "../features/dashboard/pages/StandardDashboard";

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

import MyAssignmentsPage from "../features/assignment/pages/MyAssignmentsPage";
import AssignmentDetailPage from "../features/assignment/pages/AssignmentDetailPage";
import AssignmentBoardPage from "../features/assignment/pages/AssignmentBoardPage";

// =========================
// EVIDENCE
// =========================

import SubmitEvidencePage from "../features/evidence/pages/SubmitEvidencePage";
import EvidenceReviewPage from "../features/evidence/pages/EvidenceReviewPage";
import EvidenceDetailPage from "../features/evidence/pages/EvidenceDetailPage";
import EvidenceHistoryPage from "../features/evidence/pages/EvidenceHistoryPage";

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
// OTHER
// =========================

import ImprovementPage from "../features/improvement/pages/ImprovementPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import ReportsEvaluationPage from "../features/reports/pages/ReportsEvaluationPage";
import ReportsEvidencePage from "../features/reports/pages/ReportsEvidencePage";
import ReportsImprovementPage from "../features/reports/pages/ReportsImprovementPage";
import ReportsActivityPage from "../features/reports/pages/ReportsActivityPage";

export const routes = [

  // =====================================================
  // DASHBOARD
  // =====================================================

  {
    path: "dashboard",
    label: "Dashboard",
    element: StandardDashboard,
    permission: PERMISSIONS.VIEW_DASHBOARD,
  },

  // =====================================================
  // ADMIN SYSTEM
  // =====================================================

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

  // =====================================================
  // STANDARD WORKFLOW
  // =====================================================

  {
  path: "standard",
  label: "Bộ tiêu chuẩn",
  element: StandardPage,
  permission: PERMISSIONS.MANAGE_STANDARD,
  sidebar: true,
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

  // =====================================================
  // ASSIGNMENT WORKFLOW
  // =====================================================

  {
    path: "assignments",

    label: "Phân công của tôi",

    element: MyAssignmentsPage,

    permission: PERMISSIONS.VIEW_MY_ASSIGNMENTS,
  },

  {
    path: "assignments/:id",

    label: "Chi tiết phân công",

    element: AssignmentDetailPage,

    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },

  {
    path: "assignment-board",

    label: "Bảng phân công",

    element: AssignmentBoardPage,

    permission: PERMISSIONS.MANAGE_ASSIGNMENT,
  },

  // =====================================================
  // EVIDENCE WORKFLOW
  // =====================================================

  {
    path: "evidence/submit",

    label: "Nộp minh chứng",

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

    label: "Chi tiết minh chứng",

    element: EvidenceDetailPage,

    permission: PERMISSIONS.VIEW_EVIDENCE,
  },

  {
    path: "evidence/history",

    label: "Lịch sử minh chứng",

    element: EvidenceHistoryPage,

    permission: PERMISSIONS.VIEW_EVIDENCE,
  },

  // =====================================================
  // FEEDBACK WORKFLOW
  // =====================================================

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

  // =====================================================
  // IMPROVEMENT
  // =====================================================

  {
    path: "improvement",

    label: "Kế hoạch cải tiến",

    element: ImprovementPage,

    permission: PERMISSIONS.MANAGE_IMPROVEMENT,
  },

  // =====================================================
  // REPORTS
  // =====================================================

  {
    path: "reports",

    label: "Báo cáo",

    element: ReportsPage,

    permission: PERMISSIONS.VIEW_REPORT,

    children: [

      /* DEFAULT */

      {
        index: true,

        element: () => (
          <Navigate
            to="evaluation"
            replace
          />
        ),
      },

      /* EVALUATION */

      {
        path: "evaluation",

        element: ReportsEvaluationPage,

        permission: PERMISSIONS.VIEW_REPORT,
      },

      /* EVIDENCE */

      {
        path: "evidence",

        element: ReportsEvidencePage,

        permission: PERMISSIONS.VIEW_REPORT,
      },

      /* IMPROVEMENT */

      {
        path: "improvement",

        element: ReportsImprovementPage,

        permission: PERMISSIONS.VIEW_REPORT,
      },
      
      { path: "activity", 
        element: ReportsActivityPage,
        permission: PERMISSIONS.VIEW_REPORT,
      }
    ],
  },
];