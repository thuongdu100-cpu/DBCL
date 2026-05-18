import { useAuth } from "../../../auth/AuthContext";
import hasPermission from "../../../auth/hasPermission";
import { PERMISSIONS } from "../../../auth/permissions";

export default function ProfileSecurity() {

  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="profile-card">

      <h3>Bảo mật</h3>

      <button className="profile-btn">
        Đổi mật khẩu
      </button>

      {hasPermission(user.role, PERMISSIONS.MANAGE_USERS) && (
        <button className="profile-btn danger">
          Reset toàn hệ thống
        </button>
      )}

      {hasPermission(user.role, PERMISSIONS.MANAGE_USERS) && (
        <button className="profile-btn" onClick={() => navigate("/users")}>
          Quản lý user
        </button>
      )}

      {!hasPermission(user.role, PERMISSIONS.MANAGE_USERS) && (
        <button className="profile-btn secondary">
          Đăng xuất thiết bị khác
        </button>
      )}

    </div>
  );
}