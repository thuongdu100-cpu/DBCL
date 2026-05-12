import useRoles from "../hooks/useRoles";
import { useState } from "react";
import RoleTable from "../components/RoleTable";
import RoleFormModal from "../components/RoleFormModal";
import "../styles/role.css";

export default function RoleManagementPage() {

  const { roles } = useRoles();

  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <div className="role-page">

      <div className="role-header">
        <h2>Quản lý vai trò</h2>
      </div>

      <div className="role-table-wrapper">
        <RoleTable
          roles={roles || []}
          onEdit={(role) => {
            setSelectedRole(role);
            setOpen(true);
          }}
        />
      </div>

      {open && (
        <RoleFormModal
          open={open}
          role={selectedRole}
          onClose={() => {
            setOpen(false);
            setSelectedRole(null);
          }}
          onSave={() => {
            setOpen(false);
            setSelectedRole(null);
          }}
        />
      )}

    </div>
  );
}