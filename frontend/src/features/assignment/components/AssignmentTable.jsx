export default function AssignmentTable({ onSelect, filter }) {
  const data = [
    {
      id: 1,
      name: "Standard A - Chương trình đào tạo",
      type: "standard",
      assignee: null,
      status: "unassigned",
    },
    {
      id: 2,
      name: "Criteria A1 - Mục tiêu đào tạo",
      type: "criteria",
      assignee: "Reviewer A",
      status: "assigned",
    },
    {
      id: 3,
      name: "Evaluation Report 2025",
      type: "evaluation",
      assignee: "QA Officer",
      status: "in_progress",
    },
  ];

  const filtered = data.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  return (
    <div className="assign-table">

      {filtered.map((item) => (
        <div
          key={item.id}
          className="assign-row"
          onClick={() => onSelect(item)}
        >
          <div>
            <b>{item.name}</b>
            <div className="meta">{item.type}</div>
          </div>

          <div className={`badge ${item.status}`}>
            {item.status}
          </div>
        </div>
      ))}

    </div>
  );
}