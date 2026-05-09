export default function AssignmentProgressBar({ value }) {
  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}