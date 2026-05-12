export default function RoleRow({ role, onEdit }) {

  const statusClass =
    role.status === "ACTIVE"
      ? "role-status-active"
      : "role-status-inactive";

  return (
    <tr className="role-row">

      <td>{role.code}</td>

      <td>{role.name}</td>

      <td>{role.users?.length ?? 0}</td>

      <td>
        <span className={statusClass}>
          {role.status}
        </span>
      </td>

      <td>
        <div className="role-actions">
          <button
            className="role-action-btn role-action-edit"
            onClick={() => onEdit(role)}
          >
            Chỉnh sửa
          </button>
        </div>
      </td>

    </tr>
  );
}