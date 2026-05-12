import { useState } from "react";
import UserHeader from "../components/UserHeader";
import UserToolbar from "../components/UserToolbar";
import UserTable from "../components/UserTable";
import UserFormModal from "../components/UserFormModal";
import useUsers from "../hooks/useUsers";
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
  const [openModal, setOpenModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleCreate = () => {
    setEditingUser(null);
    setOpenModal(true);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setOpenModal(true);
  };

  const handleSave = async (data) => {
    if (editingUser) {
      await updateUser(editingUser.id, data);
    } else {
      await createUser(data);
    }

    setOpenModal(false);
    setEditingUser(null);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingUser(null);
  };

  const filtered = users.filter(u =>
    u.username?.includes(search) ||
    u.email?.includes(search) ||
    u.fullName?.includes(search)
  );

  return (
    <div className="user-page">

      <UserHeader />

      <UserToolbar
        search={search}
        setSearch={setSearch}
        onCreate={handleCreate}
      />

      <UserTable
        users={filtered}
        onUpdate={updateUser}      // 🔥 đổi từ onEdit → onUpdate
        onDelete={deleteUser}
        onToggleStatus={toggleStatus}
      />

      {openModal && (
        <UserFormModal
          key={editingUser ? editingUser.id : "create"} 
          initialData={editingUser}
          onSubmit={handleSave}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
}