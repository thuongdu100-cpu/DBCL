import { useState } from "react";
import "../styles/user.css";

const mockUsers = [
  {
    id: 1,
    username: "admin",
    fullName: "Quản trị viên",
    email: "admin@dbcl.edu.vn",
    department: "Hệ thống",
    role: "ADMIN",
    status: "ACTIVE",
  },
  {
    id: 2,
    username: "qa01",
    fullName: "Nguyễn Văn QA",
    email: "qa@dbcl.edu.vn",
    department: "Phòng ĐBCL",
    role: "QA",
    status: "ACTIVE",
  },
  {
    id: 3,
    username: "faculty01",
    fullName: "Trần Văn Khoa",
    email: "faculty@dbcl.edu.vn",
    department: "Khoa CNTT",
    role: "FACULTY",
    status: "INACTIVE",
  },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(mockUsers);

  const [search, setSearch] = useState("");

  const [creating, setCreating] = useState(false);

  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    department: "",
    role: "FACULTY",
  });

  // ================= CREATE =================

  const handleCreate = () => {
    if (!form.username || !form.fullName) return;

    const newUser = {
      id: Date.now(),
      ...form,
      status: "ACTIVE",
    };

    setUsers([newUser, ...users]);

    setForm({
      username: "",
      fullName: "",
      email: "",
      department: "",
      role: "FACULTY",
    });

    setCreating(false);
  };

  // ================= DELETE =================

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // ================= TOGGLE STATUS =================

  const handleToggleStatus = (id) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? {
              ...u,
              status:
                u.status === "ACTIVE"
                  ? "INACTIVE"
                  : "ACTIVE",
            }
          : u
      )
    );
  };

  // ================= FILTER =================

  const filteredUsers = users.filter((u) => {
    const keyword = search.toLowerCase();

    return (
      u.username.toLowerCase().includes(keyword) ||
      u.fullName.toLowerCase().includes(keyword) ||
      u.email.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="user-page">

      {/* ================= HEADER ================= */}

      <div className="user-header">

        <div>
          <h2>Quản lý User</h2>
          <p>Quản lý tài khoản hệ thống DBCL</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setCreating(!creating)}
        >
          + Tạo User
        </button>

      </div>

      {/* ================= SEARCH ================= */}

      <div className="user-toolbar">

        <input
          placeholder="Tìm username, email, họ tên..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* ================= CREATE FORM ================= */}

      {creating && (
        <div className="user-create-panel">

          <div className="form-grid">

            <input
              placeholder="Username"
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            />

            <input
              placeholder="Họ và tên"
              value={form.fullName}
              onChange={(e) =>
                setForm({
                  ...form,
                  fullName: e.target.value,
                })
              }
            />

            <input
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <input
              placeholder="Đơn vị"
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value,
                })
              }
            />

            <select
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value,
                })
              }
            >
              <option value="ADMIN">ADMIN</option>
              <option value="QA">QA</option>
              <option value="MANAGER">MANAGER</option>
              <option value="FACULTY">FACULTY</option>
              <option value="LEADER">LEADER</option>
            </select>

          </div>

          <div className="create-actions">
            <button
              className="primary-btn"
              onClick={handleCreate}
            >
              Tạo User
            </button>

            <button
              className="secondary-btn"
              onClick={() => setCreating(false)}
            >
              Hủy
            </button>
          </div>

        </div>
      )}

      {/* ================= TABLE ================= */}

      <div className="user-table-wrapper">

        <table className="user-table">

          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Đơn vị</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.map((user, index) => (
              <tr key={user.id}>

                <td>{index + 1}</td>

                <td>{user.username}</td>

                <td>{user.fullName}</td>

                <td>{user.email}</td>

                <td>{user.department}</td>

                <td>
                  <span className="role-badge">
                    {user.role}
                  </span>
                </td>

                <td>
                  <span
                    className={
                      user.status === "ACTIVE"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {user.status}
                  </span>
                </td>

                <td>

                  <div className="table-actions">

                    <button
                      className="edit-btn"
                    >
                      Sửa
                    </button>

                    <button
                      className="lock-btn"
                      onClick={() =>
                        handleToggleStatus(user.id)
                      }
                    >
                      {user.status === "ACTIVE"
                        ? "Khóa"
                        : "Mở"}
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(user.id)
                      }
                    >
                      Xóa
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}