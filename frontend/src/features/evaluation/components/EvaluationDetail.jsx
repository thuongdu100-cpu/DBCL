export default function EvaluationDetail({ data }) {
  if (!data) return null;

  return (
    <div className="detail">

      <h3>{data.criterion}</h3>

      <div className="box">
        <b>Điểm đánh giá:</b> {data.score}/100
      </div>

      <div className="box">
        <b>Trạng thái:</b> {data.status}
      </div>

      <div className="box">
        <b>Minh chứng:</b> {data.evidenceCount} file
      </div>

      <div className="actions">
        <button>Xem minh chứng</button>
        <button>Tạo kế hoạch cải tiến</button>
      </div>

    </div>
  );
}