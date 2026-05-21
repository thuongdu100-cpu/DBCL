import UserRow from "./UserRow";

export default function UserTable({
  users,
  onEdit,
  onDelete,
  onToggleStatus,
}) {
  return (
    <div className="user-table-wrapper">

      <table className="user-table">

        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Đơn vị</th>
            <th>Vai trò</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <UserRow
              key={user.id}
              user={user}
              index={index}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </tbody>

      </table>

    </div>
  );
}