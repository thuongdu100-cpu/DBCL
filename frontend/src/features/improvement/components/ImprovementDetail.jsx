export default function ImprovementDetail({ item }) {
  if (!item) {
    return (
      <div className="panel">
        <p>Chọn một kế hoạch cải tiến để xem chi tiết</p>
      </div>
    );
  }

  return (
    <div className="panel improvement-detail">

      <h2>Kế hoạch cải tiến chi tiết</h2>

      {/* LINK VỚI EVALUATION */}
      <div className="detail-row">
        <b>Mã kế hoạch:</b> {item.id}
      </div>

      <div className="detail-row">
        <b>Tiêu chí liên quan:</b> {item.criterion}
      </div>

      <div className="detail-row">
        <b>ID đánh giá:</b> {item.evaluationId}
      </div>

      {/* PROBLEM */}
      <div className="detail-section">
        <h4>Vấn đề phát hiện</h4>
        <p>{item.issue}</p>
      </div>

      {/* OBJECTIVE */}
      <div className="detail-section">
        <h4>Mục tiêu cải tiến</h4>
        <p>{item.objective}</p>
      </div>

      {/* ACTIONS */}
      <div className="detail-section">
        <h4>Hành động thực hiện</h4>
        <p>{item.actions}</p>
      </div>

      {/* RESPONSIBILITY */}
      <div className="detail-row">
        <b>Người phụ trách:</b> {item.owner}
      </div>

      <div className="detail-row">
        <b>Trạng thái:</b>{" "}
        <span className={item.status}>
          {item.status}
        </span>
      </div>

      <div className="detail-row">
        <b>Deadline:</b> {item.deadline}
      </div>

    </div>
  );
}