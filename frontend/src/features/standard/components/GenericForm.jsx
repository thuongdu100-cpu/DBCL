import { useState, useEffect } from "react";
import "../styles/standard.css";
export default function GenericForm({
  title,
  fields = [],
  initialValue,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(initialValue || {});
  }, [initialValue]);

  const handleChange = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit?.(form);
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <h3>{title}</h3>

        {fields.map((f) => (
          <div key={f.name}>
            <label>{f.label}</label>

            <input
              value={form?.[f.name] || ""}
              onChange={(e) =>
                handleChange(f.name, e.target.value)
              }
            />
          </div>
        ))}

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </div>

      </div>

    </div>
  );
}