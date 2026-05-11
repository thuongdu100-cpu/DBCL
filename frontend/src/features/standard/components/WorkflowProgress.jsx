export default function WorkflowProgress({
  progress = 0,
}) {
  return (
    <div className="workflow-progress">

      <div className="progress-header">

        <span className="progress-label">
          Tiến độ workflow
        </span>

        <span className="progress-value">
          {progress}%
        </span>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}