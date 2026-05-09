import { useEffect, useState } from "react";
import { roleService } from "../services/role.service";

export default function useRoles() {

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    roleService.getAll().then(setRoles);
  }, []);

  const refresh = () => {
    roleService.getAll().then(setRoles);
  };

  return {
    roles,
    setRoles,
    refresh,
  };
}