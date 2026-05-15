const STATUS_CONFIG = {

  pending: {
    label: "Chờ xử lý",
    className: "pending",
  },

  reviewing: {
    label: "Đang kiểm duyệt",
    className: "reviewing",
  },

  approved: {
    label: "Đã duyệt",
    className: "approved",
  },

  rejected: {
    label: "Từ chối",
    className: "rejected",
  },
};

export default function EvidenceStatusBadge({ status }) {

  const config =
    STATUS_CONFIG[status] || STATUS_CONFIG.pending;

  return (

    <span
      className={`
        evidence-status-badge
        ${config.className}
      `}
    >
      {config.label}
    </span>
  );
}