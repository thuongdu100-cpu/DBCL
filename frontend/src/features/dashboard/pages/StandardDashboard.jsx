import "../styles/dashboard.css";

import ProgressChart from "../components/ProgressChart";
import EvidencePieChart from "../components/EvidencePieChart";
import EvaluationBarChart from "../components/EvaluationBarChart";

export default function StandardDashboard() {

  return (
    <div className="dashboard">

      {/* KPI */}
      <div className="kpi-grid">

        <div className="kpi-card">

          <div className="kpi-title">
            Tổng tiêu chuẩn
          </div>

          <div className="kpi-value">
            5
          </div>

        </div>

        <div className="kpi-card">

          <div className="kpi-title">
            Tổng tiêu chí
          </div>

          <div className="kpi-value">
            32
          </div>

        </div>

        <div className="kpi-card">

          <div className="kpi-title">
            Tổng chỉ báo
          </div>

          <div className="kpi-value">
            120
          </div>

        </div>

        <div className="kpi-card">

          <div className="kpi-title">
            Tỷ lệ hoàn thành
          </div>

          <div className="kpi-value success">
            68%
          </div>

        </div>

      </div>

      {/* ROW 1 */}
      <div className="dashboard-grid">

        <EvaluationBarChart />

        <ProgressChart />

      </div>

      {/* ROW 2 */}
      <div className="dashboard-grid">

        {/* TREE */}
        <div className="panel">

          <div className="panel-header">

            <div className="panel-title">
              Cấu trúc hệ thống ĐBCL
            </div>

            <div className="badge">
              Tree
            </div>

          </div>

          <div className="tree-container">

            <div className="tree-node">
              📘 Tiêu chuẩn
            </div>

            <div className="tree-arrow">
              ↓
            </div>

            <div className="tree-node">
              📑 Tiêu chí
            </div>

            <div className="tree-arrow">
              ↓
            </div>

            <div className="tree-node">
              📊 Chỉ báo
            </div>

            <div className="tree-arrow">
              ↓
            </div>

            <div className="tree-node">
              📁 Minh chứng
            </div>

          </div>

        </div>

        <EvidencePieChart />

      </div>

    </div>
  );
}