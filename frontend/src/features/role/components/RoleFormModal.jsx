import { useState, useEffect } from "react";
import PermissionMatrix from "./PermissionMatrix";

export default function RoleFormModal({
  open,
  onClose,
  onSave,
  role
}) {

  const [form, setForm] = useState({
    code: "",
    name: "",
    permissions: [],
  });

  useEffect(() => {
    if (role) setForm(role);
  }, [role]);

  const togglePermission = (p) => {
    setForm(prev => ({
      ...prev,
      permissions: prev.permissions.includes(p)
        ? prev.permissions.filter(x => x !== p)
        : [...prev.permissions, p],
    }));
  };

  if (!open) return null;

  return (
    <div className="modal">

      <div className="modal-content">

        <h3>Role Form</h3>

        <input
          placeholder="Code"
          value={form.code}
          onChange={e =>
            setForm({ ...form, code: e.target.value })
          }
        />

        <input
          placeholder="Name"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <PermissionMatrix
          selected={form.permissions}
          onToggle={togglePermission}
        />

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => onSave(form)}>
            Save
          </button>
        </div>

      </div>

    </div>
  );
}