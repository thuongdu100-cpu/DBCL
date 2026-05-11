export default function SummaryCard({
  title,
  value = 0,
}) {
  return (
    <div className="workflow-card">

      <div className="workflow-card-title">
        {title}
      </div>

      <div className="workflow-card-value">
        {value}
      </div>

    </div>
  );
}