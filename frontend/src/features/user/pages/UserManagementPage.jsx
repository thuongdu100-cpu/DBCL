import { useState } from "react";

import UserCreateModal from "../components/UserCreateModal";
import UserTable from "../components/UserTable";
import useUsers from "../hooks/useUsers";
import {mockUsers} from "../mock/users.mock";
import "../styles/user.css";

export default function UserManagementPage() {
  const {
    users,
    createUser,
    updateUser,
    deleteUser,
    toggleStatus,
  } = useUsers();

  const [search, setSearch] = useState("");
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const filtered = users.filter(u =>
    u.username?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase()) ||
    u.fullName?.toLowerCase().includes(search.toLowerCase())
  );

  /* =========================
     HANDLERS
  ========================= */

  const handleCreate = async (data) => {
    await createUser(data);
    setOpenCreate(false);
  };

  const handleEditOpen = (user) => {
    setEditingUser(user);
    setOpenEdit(true);
  };

  const handleUpdate = async (data) => {
    await updateUser(editingUser.id, data);
    setOpenEdit(false);
    setEditingUser(null);
  };

  return (
    <div className="user-page">

      {/* HEADER */}
      <div className="user-header">

        <div className="user-title-group">
          <div className="user-title">Quản lý người dùng</div>
          <div className="user-subtitle">
            Quản lý tài khoản và phân quyền hệ thống
          </div>
        </div>

        <div className="toolbar-actions">

          <input
            className="user-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm username, email..."
          />

          <button
            className="action-btn create"
            onClick={() => setOpenCreate(true)}
          >
            + Tạo User
          </button>

        </div>
      </div>

      {/* TABLE */}
      <UserTable
        users={filtered}
        onEdit={handleEditOpen}
        onDelete={deleteUser}
        onToggleStatus={toggleStatus}
      />

      {/* CREATE MODAL */}
      <UserCreateModal
        open={openCreate}
        onClose={() => setOpenCreate(false)}
        onCreate={handleCreate}
      />

      {/* EDIT MODAL (same UI as create) */}
      <UserCreateModal
        open={openEdit}
        initialData={editingUser}
        onClose={() => {
          setOpenEdit(false);
          setEditingUser(null);
        }}
        onCreate={handleUpdate}
      />

    </div>
  );
}