import { ROLE_LABELS } from "../../../auth/roles";

export default function ProfileInfo({ user }) {

  if (!user) return null;

  return (
    <div className="profile-card">

      {/* HEADER */}
      <div className="profile-info-header">

        <div className="profile-avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <div className="profile-basic">

          <h3>{user.username}</h3>

          <span className={`profile-badge badge-${user.role}`}>
            {ROLE_LABELS[user.role] || user.role}
          </span>

        </div>

      </div>

      {/* BODY */}
      <div className="profile-info-body">

        <div className="profile-span-row">
          <span className="profile-span-label">Username</span>
          <span className="profile-span-value">
            {user.username}
          </span>
        </div>

        <div className="profile-span-row">
          <span className="profile-span-label">Vai trò</span>
          <span className="profile-badge badge-${user.role}">
            {ROLE_LABELS[user.role] || user.role}
          </span>
        </div>

      </div>

    </div>
  );
}