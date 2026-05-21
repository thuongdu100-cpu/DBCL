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
  role,
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
    <div className="modal-overlay">
      <div className="modal-box role-modal-box">

        <h3 className="modal-title">
          {role ? "Cập nhật vai trò" : "Tạo vai trò"}
        </h3>

        <input
          placeholder="Role code"
          value={form.code}
          onChange={e =>
            setForm({ ...form, code: e.target.value })
          }
        />

        <input
          placeholder="Tên vai trò"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* PERMISSION MATRIX */}
        <PermissionMatrix
          selected={form.permissions}
          onToggle={togglePermission}
        />

        <div className="modal-actions">

          <button className="action-btn cancel" onClick={onClose}>
            Hủy
          </button>

          <button
            className="action-btn create"
            onClick={() => onSave(form)}
          >
            Lưu
          </button>

        </div>

      </div>
    </div>
  );
}