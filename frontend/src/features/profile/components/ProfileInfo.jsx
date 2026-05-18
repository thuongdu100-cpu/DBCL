export default function ProfileInfo({ user }) {

  return (
    <div className="profile-card">

      <div className="profile-info-header">

        <div className="profile-avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>

        <div className="profile-basic">

          <h3>{user.username}</h3>

          <p>{user.role}</p>

        </div>

      </div>

      <div className="profile-info-body">

        <div className="profile-row">
          <span>Username</span>
          <span>{user.username}</span>
        </div>

        <div className="profile-row">
          <span>Role</span>
          <span>{user.role}</span>
        </div>

      </div>

    </div>
  );
}