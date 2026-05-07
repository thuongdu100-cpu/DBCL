import "../styles/dashboard.css";

export default function StandardDashboard() {
  return (
    <div className="dashboard">

      {/* KPI CARDS */}
      <div className="kpi-grid">

        <div className="kpi-card">
          <div className="kpi-title">Tổng tiêu chuẩn</div>
          <div className="kpi-value">5</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Tổng tiêu chí</div>
          <div className="kpi-value">32</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Chỉ báo</div>
          <div className="kpi-value">120</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-title">Hoàn thành</div>
          <div className="kpi-value">68%</div>
        </div>

      </div>

      {/* CHART AREA */}
      <div className="grid-2">

        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Trạng thái đánh giá</div>
            <div className="badge">Live mock</div>
          </div>

          <div className="chart-box">
            ✔ Đạt: 18 | ⚠ Chưa đạt: 9 | ⏳ Đang xử lý: 5
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Tiến độ theo tiêu chuẩn</div>
            <div className="badge">Progress</div>
          </div>

          <div className="chart-box">
            STD1: 80% | STD2: 60% | STD3: 75%
          </div>
        </div>

      </div>

      {/* TREE + EVIDENCE */}
      <div className="grid-2">

        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Cấu trúc hệ thống DBCL</div>
            <div className="badge">Tree</div>
          </div>

          <div className="tree-box">
            Standard → Criterion → Indicator → Evidence
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">Minh chứng</div>
            <div className="badge">Storage</div>
          </div>

          <ul className="list">
            <li>📁 Đã upload: 240 files</li>
            <li>⏳ Chờ duyệt: 18 files</li>
            <li>❌ Thiếu minh chứng: 7 tiêu chí</li>
            <li>🔄 Cập nhật hôm nay: 12</li>
          </ul>
        </div>

      </div>

    </div>
  );
}