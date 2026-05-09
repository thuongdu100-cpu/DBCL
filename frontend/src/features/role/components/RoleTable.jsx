import RoleRow from "./RoleRow";

export default function RoleTable({ roles, onEdit }) {
  return (
    <table className="role-table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Users</th>
          <th>Status</th>
          <th>Actions</th>
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