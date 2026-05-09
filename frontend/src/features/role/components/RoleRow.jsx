export default function RoleRow({ role, onEdit }) {

  return (
    <tr>
      <td>{role.code}</td>
      <td>{role.name}</td>
      <td>{role.users.length}</td>
      <td>{role.status}</td>

      <td>
        <button onClick={() => onEdit(role)}>
          Edit
        </button>
      </td>
    </tr>
  );
}