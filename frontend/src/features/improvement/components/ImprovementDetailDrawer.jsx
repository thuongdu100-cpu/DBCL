
export default function ImprovementDetailDrawer({
  open,
  item,
  onClose,
}) {

  if (!open || !item) return null;

  return (

    <div className="im-drawer-overlay">

      <div
        className="im-drawer-backdrop"
        onClick={onClose}
      />

      <div className="im-drawer">

        {/* HEADER */}

        <div className="im-drawer-header">

          <div className="im-drawer-header-content">

            <span className="im-drawer-id">
              {item.id}
            </span>

            <h2>
              {item.criterion}
            </h2>

          </div>

          <button
            className="im-drawer-close"
            onClick={onClose}
          >
            ✕
          </button>

        </div>
         <div className="im-drawer-body">
            {/* STATUS */}

          <div className="im-detail-section">

            <label>Trạng thái</label>

            <div
              className={`im-badge ${item.status}`}
            >
              {item.status}
            </div>

          </div>

          {/* ISSUE */}

          <div className="im-detail-section">

            <label>Vấn đề phát hiện</label>

            <p>
              {item.issue}
            </p>

          </div>

          {/* OBJECTIVE */}

          <div className="im-detail-section">

            <label>Mục tiêu cải tiến</label>

            <p>
              {item.objective}
            </p>

          </div>

          {/* OWNER */}

          <div className="im-detail-grid">

            <div className="im-detail-card">

              <label>Người phụ trách</label>

              <p>{item.owner}</p>

            </div>

            <div className="im-detail-card">

              <label>Deadline</label>

              <p>{item.deadline}</p>

            </div>

          </div>

          {/* PROGRESS */}

          <div className="im-detail-section status-center">

            <label>Tiến độ</label>

            <div className="im-progress">

              <div
                className="im-progress-bar"
                style={{
                  width: `${item.progress}%`
                }}
              />

            </div>

            <span className="im-progress-text">
              {item.progress}%
            </span>

          </div>

          {/* ACTIONS */}

          <div className="im-drawer-actions">

            <button className="im-btn-secondary">
              Cập nhật
            </button>

            <button className="im-btn-primary">
              Lưu thay đổi
            </button>

          </div>
         </div>
        

      </div>

    </div>
  );
}