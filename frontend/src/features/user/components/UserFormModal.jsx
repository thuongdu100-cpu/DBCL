import { useEffect, useState } from "react";

const empty = {
  username: "",
  fullName: "",
  email: "",
  department: "IT",
  role: "FACULTY",
  status: "ACTIVE",
};

export default function UserFormModal({
  initialData,
  onSubmit,
  onClose,
}) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(initialData ? { ...initialData } : empty);
  }, [initialData]);

  const handleChange = (k, v) => {
    setForm(prev => ({ ...prev, [k]: v }));
  };

  return (
    <div className="modal">
      <div className="modal-box">

        <h3>{initialData ? "Edit User" : "Create User"}</h3>

        <input value={form.username} onChange={e => handleChange("username", e.target.value)} />
        <input value={form.fullName} onChange={e => handleChange("fullName", e.target.value)} />
        <input value={form.email} onChange={e => handleChange("email", e.target.value)} />

        <select value={form.department} onChange={e => handleChange("department", e.target.value)}>
          <option value="IT">IT</option>
          <option value="QA">QA</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <select value={form.role} onChange={e => handleChange("role", e.target.value)}>
          <option value="ADMIN">ADMIN</option>
          <option value="QA">QA</option>
          <option value="MANAGER">MANAGER</option>
          <option value="FACULTY">FACULTY</option>
          <option value="LEADER">LEADER</option>
        </select>

        <select value={form.status} onChange={e => handleChange("status", e.target.value)}>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>

        <div className="modal-actions">

          <button className="action-btn save" onClick={() => onSubmit(form)}>
            Save
          </button>

          <button className="action-btn cancel" onClick={onClose}>
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}