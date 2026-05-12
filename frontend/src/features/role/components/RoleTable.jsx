import RoleRow from "./RoleRow";

export default function RoleTable({ roles = [], onEdit }) {

  return (
    <table className="role-table">

      <thead>
        <tr>
          <th>Code</th>
          <th>Tên</th>
          <th>Số lượng người dùng</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {roles.map(role => (
          <RoleRow
            key={role.id}
            role={role}
            onEdit={onEdit}
          />
        ))}
      </tbody>

    </table>
  );
}