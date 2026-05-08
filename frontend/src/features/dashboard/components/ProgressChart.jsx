const progressData = [
  {
    id: 1,
    name: "Tiêu chuẩn 1",
    progress: 85,
  },

  {
    id: 2,
    name: "Tiêu chuẩn 2",
    progress: 60,
  },

  {
    id: 3,
    name: "Tiêu chuẩn 3",
    progress: 45,
  },

  {
    id: 4,
    name: "Tiêu chuẩn 4",
    progress: 92,
  },

  {
    id: 5,
    name: "Tiêu chuẩn 5",
    progress: 30,
  },
];

export default function ProgressChart() {

  return (
    <div className="panel">

      <div className="panel-header">

        <div className="panel-title">
          Tiến độ theo tiêu chuẩn
        </div>

        <div className="badge">
          Progress
        </div>

      </div>

      <div className="progress-chart">

        {progressData.map((item) => (

          <div
            key={item.id}
            className="progress-item"
          >

            <div className="progress-top">

              <span>
                {item.name}
              </span>

              <span>
                {item.progress}%
              </span>

            </div>

            <div className="progress-bar-bg">

              <div
                className="progress-bar-fill"
                style={{
                  width: `${item.progress}%`
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}