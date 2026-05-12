import { useEffect, useState } from "react"; // 🔥 phải có useState
import { userService } from "../services/user.service";
export default function useUsers() {

  const [users, setUsers] = useState([]);

  const load = async () => {
    const data = await userService.getAll();
    setUsers(data);
  };

  useEffect(() => {
    load();
  }, []);

  const createUser = async (data) => {
    const newData = await userService.create(data);
    setUsers(newData); // 🔥 không gọi load()
  };

  const updateUser = async (id, data) => {
    const newData = await userService.update(id, data);
    setUsers(newData);
  };

  const deleteUser = async (id) => {
    const newData = await userService.remove(id);
    setUsers(newData);
  };

  const toggleStatus = async (id) => {
    const newData = await userService.toggleStatus(id);
    setUsers(newData);
  };

  return {
    users,
    createUser,
    updateUser,
    deleteUser,
    toggleStatus,
  };
}