import { useEffect, useState } from "react";

export default function UserRow({
  user,
  index,
  onUpdate,
  onDelete,
  onToggleStatus,
}) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleChange = (k, v) => {
    setForm(prev => ({ ...prev, [k]: v }));
  };

  const save = () => {
    onUpdate(user.id, form);
    setEditing(false);
  };

  return (
    <tr className={`user-row ${editing ? "is-editing" : ""}`}>

      <td>{index + 1}</td>

      {/* USERNAME */}
      <td>
        {editing ? (
          <input
            value={form.username || ""}
            onChange={(e) => handleChange("username", e.target.value)}
          />
        ) : user.username}
      </td>

      {/* FULLNAME */}
      <td>
        {editing ? (
          <input
            value={form.fullName || ""}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
        ) : user.fullName}
      </td>

      {/* EMAIL */}
      <td>
        {editing ? (
          <input
            value={form.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        ) : user.email}
      </td>

      {/* DEPARTMENT - FIX DROPDOWN */}
      <td>
        {editing ? (
          <select
            value={form.department || "IT"}
            onChange={(e) => handleChange("department", e.target.value)}
          >
            <option value="IT">IT</option>
            <option value="QA">QA</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        ) : user.department}
      </td>

      {/* ROLE - FIX DROPDOWN */}
      <td>
        {editing ? (
          <select
            value={form.role || "FACULTY"}
            onChange={(e) => handleChange("role", e.target.value)}
          >
            <option value="ADMIN">ADMIN</option>
            <option value="QA">QA</option>
            <option value="MANAGER">MANAGER</option>
            <option value="FACULTY">FACULTY</option>
            <option value="LEADER">LEADER</option>
          </select>
        ) : user.role}
      </td>

      {/* STATUS - FIX DROPDOWN */}
      <td>
        {editing ? (
          <select
            value={form.status || "ACTIVE"}
            onChange={(e) => handleChange("status", e.target.value)}
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        ) : user.status}
      </td>

      {/* ACTIONS */}
      <td>
        <div className="table-actions">

          {editing ? (
            <>
              <button className="action-btn save" onClick={save}>
                Save
              </button>

              <button
                className="action-btn cancel"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="action-btn edit"
                onClick={() => setEditing(true)}
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
            </>
          )}

        </div>
      </td>

    </tr>
  );
}