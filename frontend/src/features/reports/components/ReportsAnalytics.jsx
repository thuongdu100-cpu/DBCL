import { useMemo, useState } from "react";
import { mockChartData } from "../data/mockChartData";

export default function ReportsAnalytics({ data }) {
  const chartData = useMemo(() => {
    return Array.isArray(data) && data.length > 0
      ? data
      : mockChartData;
  }, [data]);

  const DAYS = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật"
  ];

  const dataSet = useMemo(() => {
    const map = new Map(chartData.map(d => [d.name, d.value]));

    return DAYS.map(day => ({
      name: day,
      value: map.get(day) ?? 0
    }));
  }, [chartData]);

  const [hover, setHover] = useState(null);

  // ===== SIZE DASHBOARD =====
  const width = 800;
  const height = 320;
  const padding = 30;

  const max = Math.max(...dataSet.map(d => d.value), 0);

  const ticks = 5;
  const tickValues = Array.from({ length: ticks + 1 }, (_, i) =>
    Math.round((max / ticks) * i)
  );

  const getX = (i) =>
    padding + (i * (width - padding * 2)) / (DAYS.length - 1);

  const getY = (v) =>
    height - padding - (v / max || 0) * (height - padding * 2);

  const path = dataSet
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.value)}`)
    .join(" ");

  return (
    <section className="reports-analytics">

      <div className="analytics-header">
        <h4>Biểu đồ xu hướng</h4>
        <span className="analytics-subtitle">
          Biểu đồ thể hiện xu hướng báo cáo theo tuần
        </span>
      </div>

      <div className="chart-container">

        <svg
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            className="chart-svg"
        >

          {/* GRID Y + LABEL */}
          {tickValues.map((v, i) => (
            <g key={i}>
              <line
                x1="0"
                x2={width}
                y1={getY(v)}
                y2={getY(v)}
                className="grid-line"
              />

              <text
                x="0"
                y={getY(v) - 2}
                fontSize="10"
                fill="#6b7280"
              >
                {v}
              </text>
            </g>
          ))}

          {/* GRID X */}
          {dataSet.map((_, i) => (
            <line
              key={i}
              x1={getX(i)}
              x2={getX(i)}
              y1="0"
              y2={height}
              className="grid-line-vertical"
            />
          ))}

          {/* AXIS */}
          <line
            x1="0"
            y1={height - padding}
            x2={width}
            y2={height - padding}
            className="axis-line"
          />

          {/* LINE */}
          <path d={path} className="chart-line" />

          {/* POINTS */}
          {dataSet.map((d, i) => (
            <g
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <circle
                cx={getX(i)}
                cy={getY(d.value)}
                r="5"
                className="chart-point"
              />

              {/* hover line */}
              {hover === i && (
                <line
                  x1={getX(i)}
                  x2={getX(i)}
                  y1="0"
                  y2={height}
                  className="hover-line"
                />
              )}

              {/* tooltip */}
              {hover === i && (
                <g>
                  <rect
                    x={getX(i) - 22}
                    y={getY(d.value) - 40}
                    width="44"
                    height="22"
                    rx="4"
                    className="tooltip-box"
                  />
                  <text
                    x={getX(i)}
                    y={getY(d.value) - 25}
                    textAnchor="middle"
                    className="tooltip-text"
                  >
                    {d.value}
                  </text>
                </g>
              )}
            </g>
          ))}

          {/* LABEL X */}
          {dataSet.map((d, i) => (
            <text
              key={i}
              x={getX(i)}
              y={height - 8}
              textAnchor="middle"
              fontSize="11"
              fill="#6b7280"
            >
              {d.name}
            </text>
          ))}

        </svg>

      </div>
    </section>
  );
}