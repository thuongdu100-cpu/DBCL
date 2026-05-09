import { useState } from "react";
import useRoles from "../hooks/useRoles";
import RoleTable from "../components/RoleTable";
import RoleFormModal from "../components/RoleFormModal";

export default function RoleManagementPage() {

  const { roles } = useRoles();

  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="role-page">

      <h2>Role Management</h2>

      <button onClick={() => {
        setSelectedRole(null);
        setOpen(true);
      }}>
        + Create Role
      </button>

      <RoleTable
        roles={roles}
        onEdit={(role) => {
          setSelectedRole(role);
          setOpen(true);
        }}
      />

      <RoleFormModal
        open={open}
        role={selectedRole}
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      />

    </div>
  );
}