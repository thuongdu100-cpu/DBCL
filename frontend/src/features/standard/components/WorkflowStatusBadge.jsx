export default function WorkflowStatusBadge({ status }) {

  const normalized = status || "PENDING";

  return (
    <div className={`status-badge ${normalized}`}>
      {normalized}
    </div>
  );
}