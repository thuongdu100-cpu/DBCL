export default function EvidenceStats({ stats }) {

  const items = [
    {
      label: "Tổng minh chứng",
      value: stats.total,
      className: "",
    },
    {
      label: "Đã duyệt",
      value: stats.approved,
      className: "approved",
    },
    {
      label: "Đang kiểm duyệt",
      value: stats.reviewing,
      className: "reviewing",
    },
    {
      label: "Chờ xử lý",
      value: stats.pending,
      className: "pending",
    },
    {
      label: "Từ chối",
      value: stats.rejected,
      className: "rejected",
    },
  ];

  return (

    <div className="evidence-dashboard-grid">

      {items.map((item) => (

        <div
          key={item.label}
          className={`
            evidence-kpi-card
            ${item.className}
          `}
        >

          <h3>
            {item.label}
          </h3>

          <strong>
            {item.value}
          </strong>

        </div>
      ))}

    </div>
  );
}