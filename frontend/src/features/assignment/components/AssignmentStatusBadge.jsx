export default function AssignmentStatusBadge({ status }) {

  const map = {
    PENDING: "gray",
    IN_PROGRESS: "#3b82f6",
    COMPLETED: "#10b981",
  };

  return (
    <span style={{
      color: map[status],
      fontWeight: 600,
      fontSize: 12,
    }}>
      {status}
    </span>
  );
}