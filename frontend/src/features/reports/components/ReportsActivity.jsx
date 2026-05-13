import { Clock3, Download, FileText, User } from "lucide-react";
import { mockActivities } from "../data/mockActivities";

/* ICON */
function getIcon(type) {
  switch (type) {
    case "export":
      return <Download size={18} />;
    case "generate":
      return <FileText size={18} />;
    case "review":
      return <User size={18} />;
    default:
      return <User size={18} />;
  }
}

/* COMPONENT */
export default function ReportsActivity() {

  const activities = Array.isArray(mockActivities)
    ? mockActivities
    : [];

  return (
    <aside className="reports-activity">

      {/* HEADER */}
      <div className="reports-activity-header">

        <div>
          <h3>Hoạt động hệ thống</h3>
          <p>Theo dõi realtime thao tác</p>
        </div>

        <div className="reports-live">
          <span className="reports-live-dot" />
          LIVE
        </div>

      </div>

      {/* LIST */}
      <div className="reports-activity-list">

        {activities.length === 0 ? (
          <div className="reports-empty">Không có hoạt động nào</div>
        ) : (
          activities.map((item) => (
            <div key={item.id} className="reports-activity-item">

              <div className={`reports-activity-icon ${item.type}`}>
                {getIcon(item.type)}
              </div>

              <div className="reports-activity-content">
                <p>
                  <b>{item.user}</b> {item.action}
                </p>

                <span className="reports-activity-target">
                  {item.target}
                </span>
              </div>

              <div className="reports-activity-time">
                <Clock3 size={14} />
                <span>{item.time}</span>
              </div>

            </div>
          ))
        )}

      </div>

    </aside>
  );
}