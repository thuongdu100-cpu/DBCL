export default function ReportsTable({ filters }) {
  const data = [
    {
      id: "RP001",
      title: "Báo cáo đánh giá học kỳ I",
      type: "evaluation",
      createdAt: "2026-05-07",
    },
    {
      id: "RP002",
      title: "Báo cáo minh chứng tổng hợp",
      type: "evidence",
      createdAt: "2026-05-06",
    },
    {
      id: "RP003",
      title: "Báo cáo kế hoạch cải tiến",
      type: "improvement",
      createdAt: "2026-05-05",
    },
  ];

  const filtered = data.filter((item) => {
    return (
      (filters.type === "all" || item.type === filters.type) &&
      item.title.toLowerCase().includes(filters.keyword.toLowerCase())
    );
  });

  return (
    <div className="panel">

      <table className="reports-table">

        <thead>
          <tr>
            <th>Mã</th>
            <th>Tiêu đề</th>
            <th>Loại</th>
            <th>Ngày tạo</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>

              <td className={item.type}>
                {item.type}
              </td>

              <td>{item.createdAt}</td>

              <td>
                <button>Xem</button>
                <button>Export</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}