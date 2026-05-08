import { useState } from "react";

export default function TableBlock({
  title,
  data = [],
  onSelect,
  onCreate,
  onUpdate,
  onDelete,
  renderMeta,

  // 👉 FIELD CONTROL (IMPORTANT)
  showFields = {
    name: true,
    description: true,
    year: false,
  },
}) {
  const [creating, setCreating] = useState(false);
  const [createForm, setCreateForm] = useState({
    name: "",
    description: "",
    year: "",
  });

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // ================= CREATE =================
  const handleCreate = () => {
    if (!createForm.name) return;

    onCreate?.({
      id: Date.now().toString(),
      ...createForm,
    });

    setCreateForm({ name: "", description: "", year: "" });
    setCreating(false);
  };

  // ================= UPDATE =================
  const handleUpdate = (item) => {
    onUpdate?.({
      ...item,
      ...editForm,
    });

    setEditId(null);
    setEditForm({});
  };

  return (
    <div className="table-wrapper">

      {/* ================= TITLE ================= */}
      <h3 className="section-title">{title}</h3>

      {/* ================= LIST ================= */}
      {data.map((item, index) => (
        <div key={item.id} className="item">

          {/* CLICK ZONE */}
          <div
            className="item-click-zone"
            onClick={() => {
              if (editId !== item.id) onSelect?.(item);
            }}
          >

            {/* INDEX */}
            <div className="item-index">
              {index + 1}
            </div>

            {/* MAIN */}
            <div className="item-main">

              {editId === item.id ? (
                <>
                  {showFields.name && (
                    <input
                      className="table-input"
                      value={editForm.name ?? item.name}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          name: e.target.value,
                        })
                      }
                    />
                  )}

                  {showFields.description && (
                    <input
                      className="table-input"
                      value={editForm.description ?? item.description}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          description: e.target.value,
                        })
                      }
                    />
                  )}

                  {showFields.year && (
                    <input
                      className="table-input"
                      value={editForm.year ?? item.year}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          year: e.target.value,
                        })
                      }
                    />
                  )}
                </>
              ) : (
                <>
                  <div className="item-title">
                    {item.name}
                  </div>

                  <div className="item-desc">
                    {item.description}
                  </div>
                </>
              )}

            </div>

            {/* META */}
            <div className="item-meta">
              {renderMeta?.(item)}
            </div>

          </div>

          {/* ================= ACTIONS ================= */}
          <div className="item-actions">

            {editId === item.id ? (
              <>
                <button onClick={() => handleUpdate(item)}>
                  Save
                </button>

                <button onClick={() => setEditId(null)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setEditId(item.id);
                    setEditForm(item);
                  }}
                >
                  Edit
                </button>

                <button
                  className="danger"
                  onClick={() => onDelete?.(item.id)}
                >
                  Delete
                </button>
              </>
            )}

          </div>

        </div>
      ))}

      {/* ================= CREATE ROW ================= */}
      {creating ? (
        <div className="item create-row">

          <div className="item-click-zone">

            <div className="item-index">+</div>

            <div className="item-main">

              {showFields.name && (
                <input
                  className="table-input"
                  placeholder="Name"
                  value={createForm.name}
                  onChange={(e) =>
                    setCreateForm({
                      ...createForm,
                      name: e.target.value,
                    })
                  }
                />
              )}

              {showFields.description && (
                <input
                  className="table-input"
                  placeholder="Description"
                  value={createForm.description}
                  onChange={(e) =>
                    setCreateForm({
                      ...createForm,
                      description: e.target.value,
                    })
                  }
                />
              )}

              {showFields.year && (
                <input
                  className="table-input"
                  placeholder="Year"
                  value={createForm.year}
                  onChange={(e) =>
                    setCreateForm({
                      ...createForm,
                      year: e.target.value,
                    })
                  }
                />
              )}

            </div>

          </div>

          <div className="item-actions">
            <button onClick={handleCreate}>✔</button>
            <button onClick={() => setCreating(false)}>✖</button>
          </div>

        </div>
      ) : (
        <button
          className="add-button"
          onClick={() => setCreating(true)}
        >
          + Thêm mới
        </button>
      )}

    </div>
  );
}