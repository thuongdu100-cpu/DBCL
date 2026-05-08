import { useState } from "react";
export function useCrud(initialData = []) {
  const [data, setData] = useState(initialData);

  // CREATE
  const create = async (item) => {
    setData((prev) => [...prev, item]);
  };

  // UPDATE
  const update = async (item) => {
    setData((prev) =>
      prev.map((i) => (i.id === item.id ? item : i))
    );
  };

  // DELETE
  const remove = async (id) => {
    setData((prev) => prev.filter((i) => i.id !== id));
  };

  return { data, create, update, remove };
}