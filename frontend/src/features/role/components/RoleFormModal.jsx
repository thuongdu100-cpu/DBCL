import { useState, useEffect } from "react";
import PermissionMatrix from "./PermissionMatrix";

const emptyRole = {
  code: "",
  name: "",
  permissions: [],
};

export default function RoleFormModal({
  open,
  onClose,
  onSave,
  role
}) {

  const [form, setForm] = useState(emptyRole);

  useEffect(() => {
    if (role) {
      setForm({
        ...role,
        permissions: [...(role.permissions || [])],
      });
    } else {
      setForm(emptyRole);
    }
  }, [role, open]);

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
    <div className="role-modal-overlay">

      <div className="role-modal">

        <h3>{role ? "Update Role" : "Create Role"}</h3>

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

        <div className="role-modal-actions">

          <button onClick={onClose}>
            Cancel
          </button>

          <button onClick={() => onSave(form)}>
            Save
          </button>

        </div>

      </div>

    </div>
  );
}