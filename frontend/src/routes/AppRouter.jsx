import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import ProtectedRoute from "../routes/ProtectedRoute";
import { PERMISSIONS } from "../auth/permissions";

import DBCLLayout from "../layouts/DBCLLayout";

import LoginPage from "../features/auth/LoginPage";

import StandardDashboard from "../features/dashboard/pages/StandardDashboard";
import StandardPage from "../features/standard/pages/StandardPage";

import EvaluationPage from "../features/evaluation/pages/EvaluationPage";
import AssignmentPage from "../features/assignment/pages/AssignmentPage";
import EvidencePage from "../features/evidence/pages/EvidencePage";
import ImprovementPage from "../features/improvement/pages/ImprovementPage";
import ReportsPage from "../features/reports/pages/ReportsPage";
import ProfilePage from "../features/profile/pages/ProfilePage";

export default function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>

        {/* ===================== */}
        {/* AUTH */}
        {/* ===================== */}
        <Route path="/login" element={<LoginPage />} />

        {/* ROOT */}
        <Route
          path="/"
          element={<Navigate to="/dbcl/dashboard" replace />}
        />

        {/* ===================== */}
        {/* DBCL LAYOUT (CHỈ CHECK LOGIN) */}
        {/* ===================== */}
        <Route
          path="/dbcl"
          element={
            <ProtectedRoute>
              <DBCLLayout />
            </ProtectedRoute>
          }
        >

          {/* DASHBOARD */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute permission={PERMISSIONS.VIEW_DASHBOARD}>
                <StandardDashboard />
              </ProtectedRoute>
            }
          />

          {/* STANDARD */}
          <Route
            path="standard"
            element={
              <ProtectedRoute permission={PERMISSIONS.MANAGE_STANDARD}>
                <StandardPage />
              </ProtectedRoute>
            }
          />

          {/* EVALUATION */}
          <Route
            path="evaluation"
            element={
              <ProtectedRoute permission={PERMISSIONS.MANAGE_EVALUATION}>
                <EvaluationPage />
              </ProtectedRoute>
            }
          />

          {/* ASSIGNMENT */}
          <Route
            path="assignment"
            element={
              <ProtectedRoute permission={PERMISSIONS.MANAGE_ASSIGNMENT}>
                <AssignmentPage />
              </ProtectedRoute>
            }
          />

          {/* EVIDENCE */}
          <Route
            path="evidence"
            element={
              <ProtectedRoute permission={PERMISSIONS.VIEW_EVIDENCE}>
                <EvidencePage />
              </ProtectedRoute>
            }
          />

          {/* IMPROVEMENT */}
          <Route
            path="improvement"
            element={
              <ProtectedRoute permission={PERMISSIONS.MANAGE_IMPROVEMENT}>
                <ImprovementPage />
              </ProtectedRoute>
            }
          />

          {/* REPORT */}
          <Route
            path="report"
            element={
              <ProtectedRoute permission={PERMISSIONS.VIEW_REPORT}>
                <ReportsPage />
              </ProtectedRoute>
            }
          />

          {/* PROFILE (chỉ cần login) */}
          <Route path="profile" element={<ProfilePage />} />

        </Route>

        {/* ===================== */}
        {/* 403 */}
        {/* ===================== */}
        <Route
          path="/403"
          element={<div style={{ padding: 20 }}>403 - Forbidden</div>}
        />

        {/* ===================== */}
        {/* FALLBACK */}
        {/* ===================== */}
        <Route
          path="*"
          element={<Navigate to="/dbcl/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}