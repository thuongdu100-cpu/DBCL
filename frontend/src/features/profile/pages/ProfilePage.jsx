// features/profile/pages/ProfilePage.jsx

export default function ProfilePage() {
  return (
    <div className="profile-layout">

      <div className="panel">
        <h2>User Profile</h2>
        <p>Quản lý thông tin cá nhân & bảo mật</p>
      </div>

      <div className="profile-grid">

        <div className="panel">
          <h3>Thông tin cá nhân</h3>
          <p>Name: Admin</p>
          <p>Email: admin@dbcl.com</p>
          <p>Role: QA Officer</p>
        </div>

        <div className="panel">
          <h3>Bảo mật</h3>
          <button>Đổi mật khẩu</button>
        </div>

        <div className="panel">
          <h3>Hoạt động gần đây</h3>
          <p>Đã duyệt 3 minh chứng</p>
        </div>

      </div>

    </div>
  );
}