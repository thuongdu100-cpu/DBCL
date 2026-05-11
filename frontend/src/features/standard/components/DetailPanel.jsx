import { useNavigate } from "react-router-dom";

export default function DetailPanel({
  standard,
  criteria,
  indicator,
}) {

  const navigate = useNavigate();

  return (
    <div className="col-detail">

      {/* TITLE */}
      <div className="detail-title">
        Chi tiết bộ tiêu chuẩn
      </div>

      {/* STANDARD */}
      {standard && (
        <div className="detail-card">

          <div className="detail-label">Bộ tiêu chuẩn</div>

          <div className="detail-value">
            {standard.name}
          </div>

          <div className="detail-desc">
            {standard.description}
          </div>

        </div>
      )}

      {/* CRITERIA */}
      {criteria && (
        <div className="detail-card">

          <div className="detail-label">Tiêu chí</div>

          <div className="detail-value">
            {criteria.name}
          </div>

          <div className="detail-desc">
            {criteria.description}
          </div>

        </div>
      )}

      {/* INDICATOR */}
      {indicator && (
        <div className="detail-card">

          <div className="detail-label">Chỉ báo</div>

          <div className="detail-value">
            {indicator.name}
          </div>

          <div className="detail-desc">
            {indicator.description}
          </div>

        </div>
      )}

      {/* ACTIONS */}
      {indicator && (
        <div className="detail-actions">

          <button
            onClick={() =>
              navigate("/dbcl/evidence/submit")
            }
          >
            Minh chứng
          </button>

          <button
            onClick={() =>
              navigate("/dbcl/feedback")
            }
          >
            Feedback
          </button>

        </div>
      )}

    </div>
  );
}