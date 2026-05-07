import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DBCLLayout from "../layouts/DBCLLayout";

import StandardDashboard from "../features/standard/pages/StandardDashboard";
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

        {/* ROOT REDIRECT */}
        <Route path="/" element={<Navigate to="/dbcl/dashboard" />} />

        {/* DBCL SYSTEM LAYOUT */}
        <Route path="/dbcl" element={<DBCLLayout />}>

          {/* dashboard */}
          <Route path="dashboard" element={<StandardDashboard />} />

          {/* modules */}
          <Route path="standard" element={<StandardPage />} />
          <Route path="evaluation" element={<EvaluationPage />} />
          <Route path="assignment" element={<AssignmentPage />} />
          <Route path="evidence" element={<EvidencePage />} />
          <Route path="improvement" element={<ImprovementPage />} />
          <Route path="report" element={<ReportsPage />} />

          {/* PROFILE (FIXED) */}
          <Route path="profile" element={<ProfilePage />} />

          {/* default fallback */}
          <Route index element={<StandardDashboard />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}