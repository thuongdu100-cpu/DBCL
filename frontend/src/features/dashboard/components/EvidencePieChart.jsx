import { useMemo } from "react";

import useEvidenceWorkflow
from "../../evidence/hooks/useEvidenceWorkflow";

import {
  getEvidenceStatusChart,
} from "../../evidence/utils/evidenceAnalytics";

export default function EvidencePieChart() {

  const {
    evidences,
  } = useEvidenceWorkflow();

  const chartData = useMemo(() => {

    return getEvidenceStatusChart(evidences);

  }, [evidences]);

  const total = chartData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const gradient = useMemo(() => {

    if (total === 0) {

      return "#e5e7eb";
    }

    const colors = {
      success: "#10b981",
      danger: "#ef4444",
      warning: "#f59e0b",
      pending: "#3b82f6",
    };

    let currentPercent = 0;

    const segments = chartData.map((item) => {

      const percent =
        (item.value / total) * 100;

      const start = currentPercent;

      currentPercent += percent;

      return `${colors[item.className]} ${start}% ${currentPercent}%`;

    });

    return `conic-gradient(${segments.join(",")})`;

  }, [chartData, total]);

  return (

    <div className="evidence-pie-card">

      <div className="evidence-pie-header">

        <div className="evidence-pie-title">
          Thống kê minh chứng
        </div>

        <div className="evidence-pie-badge">
          Analytics
        </div>

      </div>

      <div className="evidence-pie-wrapper">

        <div
          className="evidence-pie-chart"
          style={{
            background: gradient,
          }}
        />

        <div className="evidence-pie-legend">

          {chartData.map((item) => (

            <div
              key={item.label}
              className="evidence-legend-item"
            >

              <div className="evidence-legend-left">

                <div
                  className={`evidence-legend-color ${item.className}`}
                />

                <span>
                  {item.label}
                </span>

              </div>

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