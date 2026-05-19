
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TableBlock from "../components/TableBlock";
import StandardBreadcrumb from "../components/StandardBreadcrumb";
import DetailPanel from "../components/DetailPanel";

import { standardService } from "../services/standard.service";

export default function StandardPage() {

  const navigate = useNavigate();

  const [standards, setStandards] = useState([]);

  const [selectedStandard, setSelectedStandard] =
    useState(null);

  useEffect(() => {

    standardService
      .getAll()
      .then((data) => {

        setStandards(data);

        if (data.length > 0) {
          setSelectedStandard(data[0]);
        }
      });

  }, []);

  const refresh = async () => {

    const data =
      await standardService.getAll();

    setStandards(data);

    if (selectedStandard) {

      const found = data.find(
        s => s.id === selectedStandard.id
      );

      setSelectedStandard(found || null);
    }
  };

  const handleAdd = async (row) => {

    const newItem = {

      id: `STD-${Date.now()}`,

      name: row.name || "",

      description: row.description || "",

      year:
        row.year ||
        new Date().getFullYear(),

      criteria: [],
    };

    await standardService.create(newItem);

    refresh();
  };

  const handleDelete = async (id) => {

    await standardService.remove(id);

    refresh();
  };

  const handleUpdate = async (
    id,
    payload
  ) => {

    await standardService.update(
      id,
      payload
    );

    refresh();
  };

  return (

    <div className="standard-page">

      <div className="standard-left">

        <StandardBreadcrumb />

        <div className="page-header">

          <div className="page-subtitle">
            Quản lý tiêu chuẩn
          </div>

          <div className="page-title">
            Bộ tiêu chuẩn
          </div>

        </div>

        <TableBlock
          title="Bộ tiêu chuẩn"
          data={standards}
          columns={[
            {
              key: "name",
              label: "Tên",
            },

            {
              key: "description",
              label: "Mô tả",
            },

            {
              key: "year",
              label: "Năm",
            },
          ]}
          onRowClick={(item) => {

            setSelectedStandard(item);

            navigate(
              `/standard/${item.id}`
            );
          }}
          onCreate={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />

      </div>

      <DetailPanel
        standard={selectedStandard}
      />

    </div>
  );
}

