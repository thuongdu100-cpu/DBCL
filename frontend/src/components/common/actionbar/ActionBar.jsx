export default function ActionBar({
  title,
  subtitle,
  onEdit,
  onDelete,
  show,
}) {
  if (!show) return null;

  return (
    <div className="action-bar">

      <div className="action-info">
        <div className="action-title">{title}</div>
        {subtitle && (
          <div className="action-subtitle">{subtitle}</div>
        )}
      </div>

      <div className="action-buttons">
        <button onClick={onEdit}>✏ Sửa</button>
        <button className="danger" onClick={onDelete}>
          🗑 Xóa
        </button>
      </div>

    </div>
  );
}