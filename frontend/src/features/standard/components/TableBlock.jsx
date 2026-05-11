import { useState } from "react";

export default function TableBlock({
  title,
  data = [],
  columns = [],
  onRowClick,
  onCreate,
  onUpdate,
  onDelete,
}) {
  const [creating, setCreating] = useState(false);
  const [createForm, setCreateForm] = useState({});

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // CREATE
  const handleCreate = () => {
    onCreate?.(createForm);
    setCreateForm({});
    setCreating(false);
  };

  // UPDATE
  const handleUpdate = (item) => {
    onUpdate?.(item.id, editForm);
    setEditId(null);
    setEditForm({});
  };
  return (
    <div className="table-wrapper">

      <div className="section-header">
        <div className="section-title">{title}</div>
      </div>

      <div className="table-container">

        <table className="data-table">

          <thead>
            <tr>
              <th className="col-stt">STT</th>

              {columns.map(col => (
                <th key={col.key}>{col.label}</th>
              ))}

              <th className="col-action"></th>
            </tr>
          </thead>

          <tbody>

            {data.map((item, index) => {
              const isEditing = editId === item.id;

              return (
                <tr
                  key={item.id}
                  className="table-row"
                  onClick={() => {
                    if (!isEditing) onRowClick?.(item);
                  }}
                >
                  <td className="col-stt">{index + 1}</td>

                  {columns.map(col => (
                    <td key={col.key}>
                      {isEditing ? (
                        <input
                          className="table-input"
                          value={editForm[col.key] ?? ""}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              [col.key]: e.target.value,
                            })
                          }
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        item[col.key]
                      )}
                    </td>
                  ))}

                  <td onClick={(e) => e.stopPropagation()}>
                    <div className="table-actions">

                      {isEditing ? (
                        <>
                          <button onClick={() => handleUpdate(item)}>Lưu</button>
                          <button
                            className="secondary"
                            onClick={() => {
                              setEditId(null);
                              setEditForm({});
                            }}
                          >
                            Hủy
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
                            Sửa
                          </button>

                          <button
                            className="danger"
                            onClick={() => onDelete?.(item.id)}
                          >
                            Xóa
                          </button>
                        </>
                      )}

                    </div>
                  </td>

                </tr>
              );
            })}

            {/* CREATE ROW */}
            {creating ? (
              <tr className="create-row">

                <td>+</td>

                {columns.map(col => (
                  <td key={col.key}>
                    <input
                      className="table-input"
                      placeholder={col.label}
                      value={createForm[col.key] || ""}
                      onChange={(e) =>
                        setCreateForm({
                          ...createForm,
                          [col.key]: e.target.value,
                        })
                      }
                    />
                  </td>
                ))}

                <td>
                  <div className="table-actions">
                    <button onClick={handleCreate}>Lưu</button>
                    <button
                      className="secondary"
                      onClick={() => setCreating(false)}
                    >
                      Hủy
                    </button>
                  </div>
                </td>

              </tr>
            ) : (
              <tr className="add-row">
                <td colSpan={columns.length + 2}>
                  <button
                    className="add-button"
                    onClick={() => setCreating(true)}
                  >
                    + Thêm mới
                  </button>
                </td>
              </tr>
              
            )}
        


          </tbody>

        </table>

      </div>

    </div>
  );
}