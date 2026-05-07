export default function ImprovementTable({ filters }) {
  const data = [
    {
      id: "IM001",
      evaluationId: "EV002",
      criterion: "Tiêu chí giảng viên",
      issue: "Điểm thấp 60/100",
      objective: "≥ 80 điểm",
      owner: "QA Team",
      status: "in_progress",
      deadline: "2026-06-30",
    },
    {
      id: "IM002",
      evaluationId: "EV003",
      criterion: "Cơ sở vật chất",
      issue: "Thiếu phòng thực hành",
      objective: "Bổ sung 2 phòng lab",
      owner: "Admin",
      status: "not_started",
      deadline: "2026-07-15",
    },
  ];

  const filtered = data.filter((item) => {
    return (
      (filters.status === "all" || item.status === filters.status) &&
      (
        item.criterion.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        item.objective.toLowerCase().includes(filters.keyword.toLowerCase())
      )
    );
  });

  return (
    <div className="panel">

      <table className="improvement-table">

        <thead>
          <tr>
            <th>Tiêu chí</th>
            <th>Vấn đề</th>
            <th>Mục tiêu</th>
            <th>Phụ trách</th>
            <th>Trạng thái</th>
            <th>Deadline</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.criterion}</td>
              <td>{item.issue}</td>
              <td>{item.objective}</td>
              <td>{item.owner}</td>

              <td className={item.status}>
                {item.status}
              </td>

              <td>{item.deadline}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}