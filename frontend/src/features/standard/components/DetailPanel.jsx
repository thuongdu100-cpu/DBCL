export default function DetailPanel({
  standard,
  criteria,
  indicator,
}) {
  return (
    <div className="col-detail">

      <div className="detail-title">
        Chi tiết đối tượng
      </div>

      {!standard && (
        <div className="detail-empty">
          Chọn một tiêu chuẩn để xem chi tiết
        </div>
      )}

      {standard && (
        <div className="detail-card">
          <div className="detail-label">Tiêu chuẩn</div>
          <div className="detail-value">{standard.name}</div>
          <div className="detail-desc">{standard.description}</div>
        </div>
      )}

      {criteria && (
        <div className="detail-card">
          <div className="detail-label">Tiêu chí</div>
          <div className="detail-value">{criteria.name}</div>
          <div className="detail-desc">{criteria.description}</div>
        </div>
      )}

      {indicator && (
        <div className="detail-card">
          <div className="detail-label">Chỉ báo</div>
          <div className="detail-value">{indicator.name}</div>
          <div className="detail-desc">{indicator.description}</div>
        </div>
      )}

      {indicator && (
        <div className="detail-actions">
          <button>Tạo đánh giá</button>
          <button>Xem minh chứng</button>
        </div>
      )}

    </div>
  );
}