import ReportsStats from "../components/ReportsStats";
import ReportsAnalytics from "../components/ReportsAnalytics";
import ReportsExportBar from "../components/ReportsExportBar";
import ReportsActivity from "../components/ReportsActivity";
import ReportsTabs from "../components/ReportsTabs";
import { Outlet } from "react-router-dom";
import "../styles/reports.css";
export default function ReportsPage() {
  return (
    <div className="reports-layout">

      {/* HEADER */}
      <header className="reports-header">
        <div className="reports-title">
          <h2>Reports System</h2>
          <p>Analytics & workflow dashboard</p>
        </div>
      </header>

      {/* KPI */}
      <section className="reports-kpi">
        <ReportsStats />
      </section>

      
      {/* ANALYTICS */}
      <section className="reports-analytics-wrapper">
        <ReportsAnalytics />
      </section>
        
        <div className="reports-chrome">

          {/* LEFT SIDE */}
          <div className="reports-chrome-left">

            {/* TABBAR */}
            <div className="reports-body-tabs">
              <ReportsTabs />
            </div>

            {/* SUBPAGE */}
            <div className="reports-subpage-container">
              <Outlet />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <aside className="reports-export-panel">
            <ReportsExportBar />
          </aside>

        </div>


    </div>
  );
}