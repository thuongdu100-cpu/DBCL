const evaluationData = [
  {
    label: "Đạt",
    value: 18,
    className: "success",
  },

  {
    label: "Chưa đạt",
    value: 9,
    className: "danger",
  },

  {
    label: "Đang xử lý",
    value: 5,
    className: "warning",
  },
];

export default function EvaluationBarChart() {

  const maxValue = Math.max(
    ...evaluationData.map(item => item.value)
  );

  return (
    <div className="panel">

      <div className="panel-header">

        <div className="panel-title">
          Trạng thái đánh giá
        </div>

        <div className="badge">
          Live Mock
        </div>

      </div>

      <div className="bar-chart">

        {evaluationData.map((item) => (

          <div
            key={item.label}
            className="bar-item"
          >

            <div className="bar-value">
              {item.value}
            </div>

            <div className="bar-wrapper">

              <div
                className={`bar-fill ${item.className}`}
                style={{
                  height: `${(item.value / maxValue) * 180}px`,
                }}
              />

            </div>

            <div className="bar-label">
              {item.label}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}