export default function EvidenceTable({ filters }) {
  const data = [
    {
      id: "EV001",
      evaluationId: "EVL002",
      criterion: "Giảng viên",
      title: "Báo cáo năng lực giảng viên",
      type: "pdf",
      status: "approved",
      uploadedBy: "Admin",
      uploadedAt: "2026-05-07",
    },
    {
      id: "EV002",
      evaluationId: "EVL003",
      criterion: "Cơ sở vật chất",
      title: "Hình ảnh phòng lab",
      type: "image",
      status: "submitted",
      uploadedBy: "Staff",
      uploadedAt: "2026-05-06",
    },
  ];

  const filtered = data.filter((item) => {
    return (
      (filters.status === "all" || item.status === filters.status) &&
      (
        item.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        item.criterion.toLowerCase().includes(filters.keyword.toLowerCase())
      )
    );
  });

  return (
    <div className="evidence-grid">

      {filtered.map((item) => (
        <div key={item.id} className="evidence-card">

          {/* ICON FILE TYPE */}
          <div className="file-icon">
            {item.type === "pdf" ? "📄" : "🖼️"}
          </div>

          {/* TITLE */}
          <div className="file-title">{item.title}</div>

          {/* META */}
          <div className="file-meta">
            {item.criterion}
          </div>

          <div className={`file-status ${item.status}`}>
            {item.status}
          </div>

        </div>
      ))}

    </div>
  );
}