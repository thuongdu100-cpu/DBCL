
import { standards, workflowData }
from "../../standard/data/mockData";

export default function ProgressChart() {

  const progressData = standards.map(
    (standard) => {

      const indicators =
        standard.criteria.flatMap(
          criteria => criteria.indicators
        );

      const relatedWorkflow =
        workflowData.filter(workflow =>

          indicators.some(
            indicator =>
              indicator.id === workflow.indicatorId
          )
        );

      const totalProgress =
        relatedWorkflow.reduce(
          (sum, item) =>
            sum + item.progress,
          0
        );

      const averageProgress =
        relatedWorkflow.length > 0

          ? Math.round(
              totalProgress /
              relatedWorkflow.length
            )

          : 0;

      return {

        id: standard.id,

        name: standard.name,

        progress: averageProgress,
      };
    }
  );

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
                  width: `${item.progress}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

