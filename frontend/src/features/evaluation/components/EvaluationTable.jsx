export default function EvaluationTable({ onSelect, filters }) {
  const data = [
    {
      id: "EVL001",
      criterion: "Đội ngũ giảng viên",
      score: 78,
      status: "partial",
      evidenceCount: 3,
    },
    {
      id: "EVL002",
      criterion: "Cơ sở vật chất",
      score: 90,
      status: "achieved",
      evidenceCount: 5,
    },
    {
      id: "EVL003",
      criterion: "Chương trình đào tạo",
      score: 60,
      status: "not_achieved",
      evidenceCount: 1,
    },
  ];

  const filtered = data.filter((item) => {
    return (
      (filters.status === "all" || item.status === filters.status) &&
      item.criterion.toLowerCase().includes(filters.keyword.toLowerCase())
    );
  });

  return (
    <div className="table">

      {filtered.map((item) => (
        <div
          key={item.id}
          className="row"
          onClick={() => onSelect(item)}
        >

          <div>
            <b>{item.criterion}</b>
            <div className="meta">
              {item.evidenceCount} minh chứng
            </div>
          </div>

          <div className="score">
            {item.score}/100
          </div>

          <div className={`status ${item.status}`}>
            {item.status}
          </div>

        </div>
      ))}

    </div>
  );
}