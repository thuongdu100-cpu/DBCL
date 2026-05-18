import { useMemo } from "react";
import { useAuth } from "../../../auth/AuthContext";

export default function ProfileActivity() {

  const { user } = useAuth();

  // fake activity log (mock)
  const activities = [
    {
      id: 1,
      user: "admin",
      action: "manage_users",
      entity: "USER001",
      timestamp: "2026-05-18T10:00:00Z",
    },
    {
      id: 2,
      user: "qa",
      action: "upload_evidence",
      entity: "ASG002",
      timestamp: "2026-05-18T11:00:00Z",
    },
    {
      id: 3,
      user: "faculty",
      action: "submit_evidence",
      entity: "ASG001",
      timestamp: "2026-05-18T12:00:00Z",
    },
  ];

  const filteredActivities = useMemo(() => {

    if (!user) return [];

    const role = user.role;

    // ADMIN thấy tất cả
    if (role === "admin") return activities;

    // các role khác chỉ thấy activity của chính role đó
    return activities.filter(
      (a) => a.user === role
    );

  }, [user]);

  return (
    <div className="profile-card">

      <h3>Hoạt động gần đây</h3>

      <div className="activity-list">

        {filteredActivities.map((act) => (
          <div key={act.id} className="activity-item">

            <div className="dot" />

            <div>

              <p>
                <b>{act.user}</b> → {act.action}
              </p>

              <small>
                {act.entity} •{" "}
                {new Date(act.timestamp).toLocaleString()}
              </small>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}