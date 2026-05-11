import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TableBlock from "../components/TableBlock";
import StandardBreadcrumb from "../components/StandardBreadcrumb";
import { standardService } from "../services/standard.service";

export default function StandardPage() {

  const navigate = useNavigate();
  const [standards, setStandards] = useState([]);

  useEffect(() => {
    standardService.getAll().then(setStandards);
  }, []);

  const handleAdd = async (row) => {

    const newItem = {
      id: `STD-${Date.now()}`,
      name: row.name || "",
      description: row.description || "",
      year: row.year || new Date().getFullYear(),
      criteria: [],
    };

    await standardService.create(newItem);
    setStandards(await standardService.getAll());
  };

  const handleDelete = async (id) => {

  await standardService.remove(id);

  const updated = await standardService.getAll();
  setStandards(updated);
};

  const handleUpdate = async (id, payload) => {

    await standardService.update(id, payload);
    setStandards(await standardService.getAll());
  };

  return (
    <div className="standard-page">

      <div className="standard-left">

        <StandardBreadcrumb />

        <div className="page-header">
          <div className="page-subtitle">Quản lý tiêu chuẩn</div>
          <div className="page-title">Bộ tiêu chuẩn</div>
        </div>

        <TableBlock
          title="Bộ tiêu chuẩn"
          data={standards}
          columns={[
            { key: "name", label: "Tên" },
            { key: "description", label: "Mô tả" },
            { key: "year", label: "Năm" },
          ]}
          onRowClick={(item) =>
            navigate(`/dbcl/standard/${item.id}`)
          }
          onCreate={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

      </div>

    </div>
  );
}