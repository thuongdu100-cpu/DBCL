import { useEffect, useState } from "react";

const emptyUser = {
  username: "",
  fullName: "",
  email: "",
  department: "IT",
  role: "FACULTY",
  status: "ACTIVE",
};

export default function UserCreateModal({
  open,
  onClose,
  onCreate,
  initialData,
}) {
  const [form, setForm] = useState(emptyUser);

  useEffect(() => {
    setForm(initialData ? initialData : emptyUser);
  }, [initialData, open]);

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!form.username || !form.email) return;

    onCreate?.(form);
    setForm(emptyUser);
    onClose?.();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h3>Tạo User</h3>

        <input placeholder="Username"
          value={form.username}
          onChange={(e) => handleChange("username", e.target.value)}
        />

        <input placeholder="Họ tên"
          value={form.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <input placeholder="Email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <select value={form.department}
          onChange={(e) => handleChange("department", e.target.value)}
        >
          <option value="IT">IT</option>
          <option value="QA">QA</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <select value={form.role}
          onChange={(e) => handleChange("role", e.target.value)}
        >
          <option value="ADMIN">ADMIN</option>
          <option value="QA">QA</option>
          <option value="MANAGER">MANAGER</option>
          <option value="FACULTY">FACULTY</option>
          <option value="LEADER">LEADER</option>
        </select>

        <div className="modal-actions">
          <button className="action-btn cancel" onClick={onClose}>
            Hủy
          </button>

          <button className="action-btn create" onClick={handleSubmit}>
            Tạo user
          </button>
        </div>

      </div>
    </div>
  );
}