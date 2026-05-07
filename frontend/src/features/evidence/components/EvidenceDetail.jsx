export default function EvidenceDetail({ item }) {
  if (!item) {
    return (
      <div className="panel">
        Chọn một minh chứng để xem chi tiết
      </div>
    );
  }

  return (
    <div className="panel evidence-detail">

      <h2>{item.title}</h2>

      <p><b>Tiêu chí:</b> {item.criterion}</p>
      <p><b>ID đánh giá:</b> {item.evaluationId}</p>
      <p><b>Loại file:</b> {item.type}</p>
      <p><b>Người upload:</b> {item.uploadedBy}</p>
      <p><b>Ngày upload:</b> {item.uploadedAt}</p>

      <div className={`file-status ${item.status}`}>
        {item.status}
      </div>

    </div>
  );
}