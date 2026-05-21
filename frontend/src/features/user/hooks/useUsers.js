import { useEffect, useState } from "react";
import { userService } from "../services/user.service";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await userService.getAll();

      // 🔥 SAFE GUARD
      setUsers(Array.isArray(data) ? data : []);
    })();
  }, []);

  const createUser = async (data) => {
    const res = await userService.create(data);
    setUsers(res || []);
  };

  const updateUser = async (id, data) => {
    const res = await userService.update(id, data);
    setUsers(res || []);
  };

  const deleteUser = async (id) => {
    const res = await userService.remove(id);
    setUsers(res || []);
  };

  const toggleStatus = async (id) => {
    const res = await userService.toggleStatus(id);
    setUsers(res || []);
  };

  return {
    users,
    createUser,
    updateUser,
    deleteUser,
    toggleStatus,
  };
}