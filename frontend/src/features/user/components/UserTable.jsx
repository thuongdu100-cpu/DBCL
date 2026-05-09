export default function UserTable({
  users = [],
  onEdit,
  onDelete,
}) {
  return (
    <div className="user-table">

      {/* TABLE HEADER */}
      <div className="user-table-header">
        <div>#</div>
        <div>Tài khoản</div>
        <div>Email</div>
        <div>Vai trò</div>
        <div>Trạng thái</div>
        <div>Thao tác</div>
      </div>

      {/* EMPTY */}
      {users.length === 0 && (
        <div className="user-empty">
          Không có dữ liệu user
        </div>
      )}

      {/* ROWS */}
      {users.map((user, index) => (
        <div className="user-row" key={user.id}>

          {/* INDEX */}
          <div>{index + 1}</div>

          {/* USER INFO */}
          <div className="user-info">
            <div className="user-name">
              {user.fullName}
            </div>

            <div className="user-email">
              @{user.username}
            </div>
          </div>

          {/* EMAIL */}
          <div>{user.email}</div>

          {/* ROLE */}
          <div>
            <span className="user-role">
              {user.roleLabel}
            </span>
          </div>

          {/* STATUS */}
          <div
            className={`user-status ${
              user.active
                ? "active"
                : "inactive"
            }`}
          >
            {user.active
              ? "● Hoạt động"
              : "● Đã khóa"}
          </div>

          {/* ACTIONS */}
          <div className="user-actions">

            <button
              className="user-edit-btn"
              onClick={() => onEdit?.(user)}
            >
              Sửa
            </button>

            <button
              className="user-delete-btn"
              onClick={() => onDelete?.(user)}
            >
              Xóa
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}