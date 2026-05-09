export default function EvidenceStatusBadge({ status }) {

  const colorMap = {
    PENDING: "orange",
    APPROVED: "green",
    REJECTED: "red",
  };

  return (
    <span style={{ color: colorMap[status] }}>
      {status}
    </span>
  );
}