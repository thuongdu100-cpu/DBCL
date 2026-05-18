import { useAuth } from "../../../auth/AuthContext";
import { ROLE_LABELS } from "../../../auth/roles";

import ProfileInfo from "../components/ProfileInfo";
import ProfileActivity from "../components/ProfileActivity";
import ProfileSecurity from "../components/ProfileSecurity";

export default function ProfilePage() {

  const { user } = useAuth();

  if (!user) {
    return <div>Chưa đăng nhập</div>;
  }

  const roleLabel = ROLE_LABELS[user.role];

  return (
    <div className="profile-page">

      <div className="profile-header">
        <h2>Hồ sơ cá nhân</h2>
        <p>{roleLabel}</p>
      </div>

      <div className="profile-grid">

        <div className="profile-left">
          <ProfileInfo user={user} />
          <ProfileSecurity role={user.role} />
        </div>

        <div className="profile-right">
          <ProfileActivity user={user} />
        </div>

      </div>

    </div>
  );
}