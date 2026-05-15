import { useState } from "react";

export default function EvidenceForm({

  initialValues = {},
  onSubmit,

}) {

  const [formData, setFormData] = useState({

    title: initialValues.title || "",
    description: initialValues.description || "",

    standard: initialValues.standard || "",
    criterion: initialValues.criterion || "",

    department: initialValues.department || "",

    file: null,
  });

  /* ======================================================
     HANDLE CHANGE
  ====================================================== */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ======================================================
     HANDLE FILE
  ====================================================== */

  const handleFileChange = (e) => {

    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  /* ======================================================
     SUBMIT
  ====================================================== */

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit?.(formData);
  };

  /* ======================================================
     RENDER
  ====================================================== */

  return (

    <form
      className="evidence-form"
      onSubmit={handleSubmit}
    >

      {/* TITLE */}
      <div className="evidence-form-group">

        <label>
          Tiêu đề minh chứng
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Nhập tiêu đề minh chứng"
        />

      </div>

      {/* STANDARD */}
      <div className="evidence-form-row">

        <div className="evidence-form-group">

          <label>
            Tiêu chuẩn
          </label>

          <input
            type="text"
            name="standard"
            value={formData.standard}
            onChange={handleChange}
            placeholder="Ví dụ: Tiêu chuẩn 1"
          />

        </div>

        <div className="evidence-form-group">

          <label>
            Tiêu chí
          </label>

          <input
            type="text"
            name="criterion"
            value={formData.criterion}
            onChange={handleChange}
            placeholder="Ví dụ: 1.2"
          />

        </div>

      </div>

      {/* DEPARTMENT */}
      <div className="evidence-form-group">

        <label>
          Phòng ban / Khoa
        </label>

        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Nhập đơn vị phụ trách"
        />

      </div>

      {/* DESCRIPTION */}
      <div className="evidence-form-group">

        <label>
          Mô tả minh chứng
        </label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Nhập mô tả..."
          rows="5"
        />

      </div>

      {/* FILE */}
      <div className="evidence-form-group">

        <label>
          Tệp minh chứng
        </label>

        <input
          type="file"
          onChange={handleFileChange}
        />

      </div>

      {/* ACTION */}
      <div className="evidence-form-actions">

        <button
          type="submit"
          className="evidence-submit-btn"
        >
          Lưu minh chứng
        </button>

      </div>

    </form>
  );
}