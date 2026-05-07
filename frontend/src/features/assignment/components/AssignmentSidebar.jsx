import { useState } from "react";

export default function AssignmentSidebar({ onFilter }) {
  const [active, setActive] = useState("all");

  const filters = [
    { key: "all", label: "Tất cả đối tượng" },

    { key: "standard", label: "Tiêu chuẩn" },
    { key: "criteria", label: "Tiêu chí" },
    { key: "evaluation", label: "Đánh giá" },

    { key: "unassigned", label: "Chưa phân công" },
    { key: "assigned", label: "Đã phân công" },
    { key: "in_progress", label: "Đang xử lý" },
    { key: "completed", label: "Hoàn thành" },
  ];

  const handleClick = (key) => {
    setActive(key);
    onFilter?.(key);
  };

  return (
    <div className="assign-sidebar">

      <div className="sidebar-title">
        Phân công DBCL
      </div>

      {/* GROUP 1 - OBJECT TYPE */}
      <div className="sidebar-group">

        <div className="group-label">Đối tượng</div>

        {filters.slice(1, 4).map((item) => (
          <div
            key={item.key}
            className={`sidebar-item ${active === item.key ? "active" : ""}`}
            onClick={() => handleClick(item.key)}
          >
            {item.label}
          </div>
        ))}

      </div>

      {/* GROUP 2 - STATUS */}
      <div className="sidebar-group">

        <div className="group-label">Trạng thái</div>

        {filters.slice(4).map((item) => (
          <div
            key={item.key}
            className={`sidebar-item ${active === item.key ? "active" : ""}`}
            onClick={() => handleClick(item.key)}
          >
            {item.label}
          </div>
        ))}

      </div>

    </div>
  );
}