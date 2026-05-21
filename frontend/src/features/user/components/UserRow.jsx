import { useEffect, useState } from "react";

export default function UserRow({
  user,
  index,
  onEdit,
  onDelete,
  onToggleStatus,
}) {
  return (
    <tr className="user-row">

      <td>{index + 1}</td>

      <td>{user.username}</td>

      <td>{user.fullName}</td>

      <td>{user.email}</td>

      <td>{user.department}</td>

      <td>
        <span className="role-badge">
          {user.role}
        </span>
      </td>

      <td>
        <span className={
          user.status === "ACTIVE"
            ? "status-active"
            : "status-inactive"
        }>
          {user.status}
        </span>
      </td>

      {/* ACTIONS */}
      <td>
        <div className="table-actions">

          <button
            className="action-btn edit"
            onClick={() => onEdit(user)}
          >
            Edit
          </button>

          <button
            className="action-btn lock"
            onClick={() => onToggleStatus(user.id)}
          >
            {user.status === "ACTIVE" ? "Lock" : "Unlock"}
          </button>

          <button
            className="action-btn delete"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </button>

        </div>
      </td>

    </tr>
  );
}