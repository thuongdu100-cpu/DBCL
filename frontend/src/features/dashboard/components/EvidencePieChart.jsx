const evidenceData = [
  {
    label: "Đã upload",
    value: 240,
    className: "blue",
  },

  {
    label: "Chờ duyệt",
    value: 18,
    className: "orange",
  },

  {
    label: "Thiếu minh chứng",
    value: 7,
    className: "red",
  },

  {
    label: "Cập nhật hôm nay",
    value: 12,
    className: "green",
  },
];

export default function EvidencePieChart() {

  return (
    <div className="panel">

      <div className="panel-header">

        <div className="panel-title">
          Tổng quan minh chứng
        </div>

        <div className="badge">
          Pie Chart
        </div>

      </div>

      <div className="pie-wrapper">

        <div
          className="pie-chart"
          style={{
            background:
              "conic-gradient(#2563eb 0% 75%, #f59e0b 75% 85%, #ef4444 85% 90%, #10b981 90% 100%)"
          }}
        />

        <div className="pie-legend">

          {evidenceData.map((item) => (

            <div
              key={item.label}
              className="legend-item"
            >

              <div
                className={`legend-color ${item.className}`}
              />

              <span>
                {item.label}
              </span>

              <strong>
                {item.value}
              </strong>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}