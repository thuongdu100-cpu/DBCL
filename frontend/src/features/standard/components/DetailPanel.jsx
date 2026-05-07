export default function DetailPanel({
  standard,
  criteria,
  indicator,
}) {
  if (!standard) {
    return <div className="empty">Chọn tiêu chuẩn để xem chi tiết</div>;
  }

  return (
    <div>

      <h3>Detail</h3>

      {/* STANDARD */}
      <div className="box">
        <b>Standard:</b>
        <div>{standard.name}</div>
      </div>

      {/* CRITERIA */}
      {criteria && (
        <div className="box">
          <b>Criteria:</b>
          <div>{criteria.name}</div>
        </div>
      )}

      {/* INDICATOR */}
      {indicator && (
        <div className="box">
          <b>Indicator:</b>
          <div>{indicator.name}</div>
          <p>{indicator.description}</p>
        </div>
      )}

      {/* ACTIONS */}
      {indicator && (
        <div style={{ marginTop: 12 }}>
          <button>Create Evaluation</button>
          <button style={{ marginLeft: 8 }}>View Evidence</button>
        </div>
      )}

    </div>
  );
}