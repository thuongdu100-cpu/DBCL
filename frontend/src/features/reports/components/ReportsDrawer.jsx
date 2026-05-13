export default function ReportsDrawer({ open, item, onClose }) {

  // guard layer (enterprise safe UI)
  if (!open || !item) return null;

  return (
    <div className="drawer-overlay">

      {/* BACKDROP */}
      <div
        className="drawer-backdrop"
        onClick={onClose}
      />

      {/* PANEL */}
      <aside className="drawer-panel">

        {/* HEADER */}
        <header className="drawer-header">

          <div className="drawer-title">
            <h3>{item?.title}</h3>
            <span className="drawer-id">{item?.id}</span>
          </div>

          <button
            className="drawer-close"
            onClick={onClose}
          >
            ✕
          </button>

        </header>

        {/* BODY */}
        <section className="drawer-body">

          <div className="drawer-meta">

            <p>
              <b>Type:</b> {item?.type}
            </p>

            <p>
              <b>Date:</b> {item?.createdAt}
            </p>

          </div>

          <div className="drawer-section">

            <h4>Description</h4>

            <p>
              {item?.description ||
                "No description available"}
            </p>

          </div>

        </section>

        {/* FOOTER ACTIONS */}
        <footer className="drawer-footer">

          <button className="btn-secondary">
            Export
          </button>

          <button className="btn-primary">
            Open Full
          </button>

        </footer>

      </aside>

    </div>
  );
}