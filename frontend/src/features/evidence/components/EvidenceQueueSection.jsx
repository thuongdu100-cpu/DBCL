import EvidenceStatusBadge from "./EvidenceStatusBadge";

export default function EvidenceQueueSection({

  evidences = [],

}) {

  const queue = evidences.filter(

    (item) =>
      item.status === "pending" ||
      item.status === "reviewing"

  );

  return (

    <div className="evidence-dashboard-card">

      <h3>
        Hàng chờ xử lý
      </h3>

      <div className="evidence-dashboard-list">

        {queue.length === 0 ? (

          <div className="evidence-empty">
            Không có minh chứng chờ xử lý
          </div>

        ) : (

          queue.map((item) => (

            <div
              key={item.id}
              className="evidence-dashboard-item"
            >

              <div>

                <strong>
                  {item.code}
                </strong>

                <p>
                  {item.title}
                </p>

              </div>

              <EvidenceStatusBadge
                status={item.status}
              />

            </div>
          ))

        )}

      </div>

    </div>
  );
}