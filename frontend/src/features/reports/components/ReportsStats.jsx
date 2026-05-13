export default function ReportsStats() {
  const stats = [
    { label: "Total", value: 128 },
    { label: "Eval", value: 52 },
    { label: "Evidence", value: 38 },
    { label: "Improve", value: 38 },
  ];

  return (
    <div className="reports-stats">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}