export default function EvidenceTimeline({

  timeline = [],

}) {

  return (

    <div className="evidence-timeline">

      {timeline.length === 0 ? (

        <div className="evidence-timeline-empty">

          Chưa có lịch sử xử lý

        </div>

      ) : (

        timeline.map((item, index) => (

          <div
            key={item.id || index}
            className="evidence-timeline-item"
          >

            {/* LEFT DOT */}
            <div className="evidence-timeline-left">

              <div
                className={`
                  evidence-timeline-dot
                  ${item.status}
                `}
              />

              {index !== timeline.length - 1 && (

                <div className="evidence-timeline-line" />

              )}

            </div>

            {/* CONTENT */}
            <div className="evidence-timeline-content">

              <div className="evidence-timeline-header">

                <strong>
                  {item.action}
                </strong>

                <span>
                  {item.date}
                </span>

              </div>

              <div className="evidence-timeline-meta">

                <span>
                  {item.actor}
                </span>

                <span>
                  {item.role}
                </span>

              </div>

            </div>

          </div>
        ))

      )}

    </div>
  );
}